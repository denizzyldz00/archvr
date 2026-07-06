# ArchVR

Mimari modelleri Quest 3'te self-servis VR gezintisine çeviren monorepo:
`shared` (.archvr.glb formatı) + `vr-web` (WebXR gezinti, GitHub Pages) +
`desktop` (Electron hazırlayıcı: import → karar → Blender bake → paket).

**Projeye tam hâkimiyet için önce `desktop/PROJE-DURUMU.md` dosyasını oku** —
amaç, mimari, veri akışı, kritik kararlar/tuzaklar, test komutları ve
kalan işler orada. Değişiklik yaptıkça o dosyayı güncel tut.

**İKİ GİT REPOSU VAR — push'tan önce hangi klasörde olduğuna bak:**
kök = PUBLIC `archvr` (shared+vr-web+docs; her main push siteyi yayınlar);
`desktop/` = ayrı ÖZEL repo `archvr-desktop` (uygulama + lisans araçları +
PROJE-DURUMU). Desktop/lisans/iş-planı içeriği public repoya ASLA girmez.

## Kurallar

- Arayüz ve kod yorumları Türkçe; değişken/fonksiyon adları İngilizce.
- Kullanıcı Three.js/WebXR/Electron'da yeni: kritik kavramları kısaca açıkla.
- Unity/Unreal yok; sunucu/bulut/DB yok; teleport ana hareket değil;
  büyük veri IndexedDB'de; gerçek zamanlı ışık yok (baked lighting).
- Magic number bırakma ([SerializeField] muadili: adlandırılmış sabitler).

## Hızlı komutlar

```bash
npm run test:shared                          # format testleri
npm run dev:vr                               # VR sitesi dev (--host)
npm run dev --workspace @archvr/desktop      # desktop dev
node desktop/tools/smoke.mjs [model]         # desktop duman testi
npm run dist --workspace @archvr/desktop     # NSIS installer
```
