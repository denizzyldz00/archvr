/**
 * Proje deposu — IndexedDB.
 *
 * Kısa kavram: localStorage yalnızca birkaç MB metin saklar; model dosyaları
 * onlarca MB ikili veridir. IndexedDB tarayıcının büyük ikili veri için
 * tasarlanmış kalıcı deposudur — paket bir kez eklenince gözlükte internet/
 * kablo olmadan tekrar tekrar açılabilir. 'idb' kütüphanesi IndexedDB'nin
 * hantal API'sini küçük bir Promise sarmalayıcıyla kullanılır kılar.
 */
import { openDB, type DBSchema, type IDBPDatabase } from "idb";

const DB_NAME = "archvr";
const DB_VERSION = 1;
const STORE = "projects";

export interface StoredProject {
  /** Benzersiz kimlik (ekleme zamanı damgası) */
  id: string;
  name: string;
  sizeBytes: number;
  addedAt: string;
  /** .archvr.glb dosyasının tamamı */
  data: ArrayBuffer;
}

/** Liste görünümü için verisiz özet */
export interface ProjectSummary {
  id: string;
  name: string;
  sizeBytes: number;
  addedAt: string;
}

interface ArchvrDb extends DBSchema {
  projects: { key: string; value: StoredProject };
}

let dbPromise: Promise<IDBPDatabase<ArchvrDb>> | null = null;

function db(): Promise<IDBPDatabase<ArchvrDb>> {
  dbPromise ??= openDB<ArchvrDb>(DB_NAME, DB_VERSION, {
    upgrade(database) {
      database.createObjectStore(STORE, { keyPath: "id" });
    },
  });
  return dbPromise;
}

/** Paketi depoya ekle; kaydedilen özet döner */
export async function addProject(name: string, data: ArrayBuffer): Promise<ProjectSummary> {
  const project: StoredProject = {
    id: String(Date.now()),
    name,
    sizeBytes: data.byteLength,
    addedAt: new Date().toISOString(),
    data,
  };
  await (await db()).put(STORE, project);
  const { data: _omit, ...summary } = project;
  return summary;
}

/** Tüm projelerin özet listesi (yeniden eskiye) */
export async function listProjects(): Promise<ProjectSummary[]> {
  const all = await (await db()).getAll(STORE);
  return all
    .map(({ data: _omit, ...summary }) => summary)
    .sort((a, b) => b.id.localeCompare(a.id));
}

/** Tek projenin verisini getir */
export async function getProjectData(id: string): Promise<ArrayBuffer | null> {
  const project = await (await db()).get(STORE, id);
  return project?.data ?? null;
}

export async function deleteProject(id: string): Promise<void> {
  await (await db()).delete(STORE, id);
}
