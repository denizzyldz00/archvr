/**
 * Giriş noktası: proje listesi (IndexedDB), dosya alma, VR'a giriş akışı.
 *
 * Akış: mimarın gönderdiği .archvr.glb dosyası gözlüğün Download klasöründedir
 * (veya Wi-Fi ile indirilmiştir). Kullanıcı "Dosya Seç" ile bir kez ekler;
 * paket IndexedDB'ye kaydedilir ve bundan sonra çevrimdışı da listede kalır.
 */
import { App } from "./app.js";
import {
  addProject,
  deleteProject,
  getProjectData,
  listProjects,
  type ProjectSummary,
} from "./storage.js";

/** Yerleşik örnek paket (ilk deneme için) */
const SAMPLE_PACKAGE_URL = "./models/ornek-daire.archvr.glb";
/** XR oturum ayarları: local-floor ZORUNLU (roomscale şart) */
const SESSION_INIT: XRSessionInit = {
  requiredFeatures: ["local-floor"],
};

const overlayEl = document.getElementById("overlay") as HTMLDivElement;
const listEl = document.getElementById("project-list") as HTMLUListElement;
const statusEl = document.getElementById("status") as HTMLParagraphElement;
const enterVrButton = document.getElementById("enter-vr") as HTMLButtonElement;
const filePicker = document.getElementById("file-picker") as HTMLInputElement;
const loadedNameEl = document.getElementById("loaded-name") as HTMLSpanElement;

let app: App | null = null;
let vrSupported = false;

function setStatus(message: string): void {
  statusEl.textContent = message;
}

function formatSize(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/** Uygulamayı tembel kur (ilk paket yüklenirken) */
function getApp(): App {
  if (app === null) {
    const container = document.getElementById("app");
    if (container === null) throw new Error("#app bulunamadı");
    app = new App(container);
    app.start();
  }
  return app;
}

/** Paketi sahneye yükle ve VR butonunu hazırla */
async function openPackage(buffer: ArrayBuffer, fallbackName: string): Promise<void> {
  setStatus("Model yükleniyor…");
  try {
    const metadata = await getApp().loadPackageFromBuffer(buffer);
    loadedNameEl.textContent = metadata?.projectName ?? fallbackName;
    enterVrButton.disabled = !vrSupported;
    setStatus(
      vrSupported
        ? "Hazır. Gözlükte 'VR'a Gir'e basın veya masaüstünde sahneye tıklayıp WASD ile gezin."
        : "Model hazır (bu cihazda VR yok — masaüstü önizleme: sahneye tıklayın, WASD + fare)."
    );
  } catch (error) {
    setStatus(error instanceof Error ? error.message : "Paket açılamadı.");
  }
}

/** Proje listesini IndexedDB'den çiz */
async function renderList(): Promise<void> {
  const projects = await listProjects();
  listEl.innerHTML = "";

  // Yerleşik örnek satırı
  const sampleRow = document.createElement("li");
  sampleRow.innerHTML = `<span class="p-name">🏠 Örnek Daire (yerleşik)</span>`;
  const sampleOpen = document.createElement("button");
  sampleOpen.textContent = "Aç";
  sampleOpen.addEventListener("click", async () => {
    setStatus("Örnek indiriliyor…");
    const response = await fetch(SAMPLE_PACKAGE_URL);
    await openPackage(await response.arrayBuffer(), "Örnek Daire");
  });
  sampleRow.appendChild(sampleOpen);
  listEl.appendChild(sampleRow);

  for (const project of projects) {
    listEl.appendChild(projectRow(project));
  }
}

function projectRow(project: ProjectSummary): HTMLLIElement {
  const row = document.createElement("li");
  const name = document.createElement("span");
  name.className = "p-name";
  name.textContent = `${project.name} · ${formatSize(project.sizeBytes)}`;
  row.appendChild(name);

  const openButton = document.createElement("button");
  openButton.textContent = "Aç";
  openButton.addEventListener("click", async () => {
    const data = await getProjectData(project.id);
    if (data === null) {
      setStatus("Proje verisi bulunamadı; silinip yeniden eklenmesi gerekiyor.");
      return;
    }
    await openPackage(data, project.name);
  });
  row.appendChild(openButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Sil";
  deleteButton.className = "danger";
  deleteButton.addEventListener("click", async () => {
    await deleteProject(project.id);
    await renderList();
  });
  row.appendChild(deleteButton);
  return row;
}

/** Seçilen dosyayı depoya ekle ve aç */
async function importFile(file: File): Promise<void> {
  if (!file.name.toLowerCase().endsWith(".glb")) {
    setStatus("Lütfen .archvr.glb uzantılı paket dosyası seçin.");
    return;
  }
  setStatus("Paket ekleniyor…");
  const buffer = await file.arrayBuffer();
  const name = file.name.replace(/\.archvr\.glb$|\.glb$/i, "");
  await addProject(name, buffer);
  await renderList();
  await openPackage(buffer, name);
}

async function main(): Promise<void> {
  // PWA: service worker kaydı (uygulama kabuğu çevrimdışı çalışsın)
  if ("serviceWorker" in navigator && !location.hostname.startsWith("localhost")) {
    void navigator.serviceWorker.register("./sw.js");
  }

  await renderList();

  filePicker.addEventListener("change", () => {
    const file = filePicker.files?.[0];
    if (file !== undefined) void importFile(file);
    filePicker.value = "";
  });

  // WebXR destek kontrolü
  if (navigator.xr !== undefined) {
    vrSupported = await navigator.xr.isSessionSupported("immersive-vr");
  }
  if (!vrSupported) {
    enterVrButton.textContent = "VR gözlük bulunamadı";
  }
  setStatus("Bir proje seçin veya paket dosyası ekleyin.");

  enterVrButton.addEventListener("click", async () => {
    const application = getApp();
    if (application.renderer.xr.isPresenting) return;
    try {
      const session = await navigator.xr!.requestSession("immersive-vr", SESSION_INIT);
      await application.renderer.xr.setSession(session);
      overlayEl.classList.add("hidden");
      session.addEventListener("end", () => {
        overlayEl.classList.remove("hidden");
        setStatus("VR oturumu kapandı. Tekrar girebilirsiniz.");
      });
    } catch {
      setStatus("VR oturumu başlatılamadı. Gözlüğün takılı olduğundan emin olun.");
    }
  });
}

void main();
