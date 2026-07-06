# ArchVR

Mimarların 3D modellerini (FBX/OBJ/glTF) müşterilerine **Meta Quest 3**'te,
fiziksel yürüyerek gezilebilen VR deneyimine dönüştüren self-servis sistem.
Sunucu yok, bulut yok — her şey mimarın bilgisayarında ve gözlükte yerel çalışır.

## Depo Yapısı (monorepo)

```
archvr/
├── desktop/     → ArchVR Hazırlayıcı: Electron + React + Three.js (Windows .exe)
│                  Model içe aktarma, sadeleştirme kararları, Blender headless ile
│                  lightmap bake ve .archvr.glb paketleme.
├── vr-web/      → ArchVR Gezinti: Three.js + WebXR statik sitesi (GitHub Pages)
│                  Quest tarayıcısında roomscale yürüme + joystick yardımcı hareket.
├── shared/      → Ortak kod: .archvr.glb paket formatı tanımı ve GLB yardımcıları.
└── docs/        → Mimar için Türkçe kullanım kılavuzu + export checklist (adım 6).
```

## .archvr.glb Paket Formatı (v1.0)

`.archvr.glb`, **standart bir GLB** (binary glTF 2.0) dosyasıdır; glTF JSON'unun
kök `extras.archvr` alanında sürümlü metadata taşır:

```jsonc
{
  "extras": {
    "archvr": {
      "formatVersion": "1.0",          // major.minor — major artışı = kırıcı değişiklik
      "projectName": "Örnek Villa",
      "createdAt": "2026-07-03T14:00:00Z",
      "generator": "ArchVR Desktop 0.1.0",
      "spawn": {                        // VR başlangıç noktası
        "position": [1.5, 0, -2],      // metre, glTF koordinatları (+Y yukarı)
        "yawDegrees": 90                // başlangıç bakış yönü
      },
      "stats": { "triangleCount": 350000, "objectCount": 42 }  // opsiyonel
    }
  }
}
```

Metadata `extras` içinde olduğu için dosya her glTF görüntüleyicide (Blender,
three.js editor vb.) sorunsuz açılır. Okuma/yazma API'si: `@archvr/shared`
içindeki `readArchvrMetadata` / `writeArchvrMetadata`.

## Geliştirme

Gereksinim: Node.js ≥ 20.

```bash
npm install          # tüm workspace bağımlılıkları
npm run build:shared # shared paketini derle (vr-web bundan import eder, önce bu!)
npm run test:shared  # format testlerini çalıştır
npm run dev:vr       # vr-web geliştirme sunucusu (http://localhost:5173, --host ile ağa açık)
npm run build:vr     # vr-web tip denetimi + üretim derlemesi
```

Örnek daireyi yeniden üretmek için: `npm run generate:sample --workspace @archvr/vr-web`

### Quest 3'te test (USB, internetsiz)

1. Quest'te geliştirici modu açık olmalı (Meta Horizon telefon uygulaması → Gözlük → Geliştirici Modu).
2. Gözlüğü USB ile bağla, gözlükte "USB hata ayıklamaya izin ver" de.
3. PC'de: `adb reverse tcp:5173 tcp:5173` ve `npm run dev:vr`
4. Quest tarayıcısında `http://localhost:5173` aç → "VR'a Gir".
   (`localhost` güvenli sayıldığı için WebXR'ın HTTPS şartına takılmaz.)

### Gerekli araçlar (geliştirme makinesi)

- Node.js ≥ 20
- Blender 5.x — `C:\Program Files\Blender Foundation\Blender 5.1\blender.exe` (adım 4'te lightmap bake için)
- Android platform-tools (adb) — Quest'e USB test için

## Yol Haritası

1. ✅ Monorepo iskeleti + shared paket formatı
2. ✅ vr-web: örnek glb ile yürüme deneyimi (roomscale + joystick + çarpışma)
3. ✅ desktop Ekran 1-2 (import + karar ekranı)
4. ✅ desktop Ekran 3 (Blender bake + paketleme)
5. ✅ vr-web giriş ekranı + IndexedDB proje listesi + PWA
6. ✅ Ekran 4 + Wi-Fi gönderme + docs + dağıtım (.exe, GitHub Pages workflow)

## Dağıtım

### desktop (.exe)

```bash
npm run dist --workspace @archvr/desktop
```

Çıktı: `desktop/build-output/ArchVR Hazirlayici Setup 0.1.0.exe` (NSIS, tek tık kurulum).
Google Drive linkiyle dağıtılır; otomatik güncelleme yok, sürüm arayüzde görünür.

### vr-web (GitHub Pages)

`.github/workflows/deploy-pages.yml` her `main` push'unda siteyi Pages'e yayınlar.
İlk kurulum (bir kere):

1. GitHub'da `archvr` adında repo aç (Pages için public).
2. `git remote add origin https://github.com/<kullanici>/archvr.git`
3. `git push -u origin main`
4. GitHub'da repo → **Settings → Pages → Source: GitHub Actions** seç.
5. Site adresi: `https://<kullanici>.github.io/archvr/` — Quest tarayıcısında bu adresi aç.

### Desktop testleri

```bash
npm run smoke --workspace @archvr/desktop                       # pencere + boru hattı duman testi
node desktop/tools/smoke.mjs <model-dosyası>                    # içe aktarma hattını dosyayla test et
```
