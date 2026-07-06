# Export Checklist — SketchUp ve Revit

Modeli ArchVR Hazırlayıcı'ya vermeden önce bu listeyi uygulayın.
Doğru export, sonraki tüm adımları sorunsuz yapar.

## Ortak Kurallar (hangi programdan çıkarsanız çıkın)

- [ ] **Birim = METRE.** En sık hata budur. ArchVR birimi tahmin etmeye
      çalışır ama emin olmanın yolu export'ta metre seçmektir.
- [ ] **Format: FBX** (birinci tercih) veya OBJ / glTF.
      Render çıktısı (JPG/PNG) DEĞİL, 3D dosya gönderin.
- [ ] **Dokular gömülü** (Embed/Copy Textures) veya doku klasörü dosyanın yanında.
- [ ] **Gereksiz katmanları kapatın:** çevre binalar, ağaç kütüphaneleri,
      insan/araç figürleri, aydınlatma armatürlerinin iç detayları.
      Her kapattığınız katman gözlükte akıcılık demektir.
- [ ] **Mobilya poligon sınırı:** tek bir koltuk/bitki 50.000 üçgeni
      geçmemeli. "High-poly" kütüphane mobilyaları yerine basit olanları seçin.
- [ ] **Kopya ağır nesnelerden kaçının:** 200.000 üçgenlik ağacı 30 kez
      kopyalamak sahneyi 6 milyon üçgen yapar.
- [ ] Model **zemin kotu 0'da** ve bina ayakta (yan yatmamış) olsun.

## SketchUp'tan FBX Export

1. Menü: **File → Export → 3D Model…**
2. Dosya türü: **FBX File (*.fbx)**
3. **Options…** düğmesine basın: *(ekran görüntüsü yeri: Options penceresi)*
   - **Units: Meters** ← EN ÖNEMLİ AYAR
   - **Export Texture Maps: ✓ işaretli**
   - **Triangulate All Faces: ✓ işaretli** (varsa)
   - Export Two-Sided Faces: işaretsiz bırakın
4. Export öncesi temizlik:
   - **Window → Model Info → Statistics → Purge Unused** (kullanılmayanları at)
   - Gizli geometri ve kapalı katmanlar export'a girmez; girmesini
     istemediklerinizi **Tags/Layers** panelinden kapatın.

> SketchUp Free (web) FBX veremez; **glTF/GLB** export eklentisi kullanın
> veya masaüstü sürümde açın.

## Revit'ten FBX Export

Revit'in doğrudan FBX'i ışıklandırma verisi içerir ama malzemeleri
sadeleştirir; şu yol en sorunsuzudur:

1. **Görünümü hazırlayın:** 3D görünüm açın (Default 3D View).
   - **Visibility/Graphics (VG)** ile gereksiz kategorileri kapatın:
     Levels, Grids, Reference Planes, MEP boruları (gezintide görünmeyecekse).
   - **Section Box** ile yalnızca gezdirilecek bölümü sınırlayabilirsiniz.
2. Menü: **File → Export → FBX** *(ekran görüntüsü yeri: Export FBX penceresi)*
   - "Use LOD (Level of Detail)" varsa açık bırakın.
3. Revit içeride **feet** kullanır; FBX'e bunu yazar. ArchVR bunu otomatik
   çevirir, ama içe aktarma özetinde **bina boyutlarını mutlaka doğrulayın**
   (kapı ~2 m).
4. Dokular Revit FBX'inde gömülü gelmez; malzeme görselleri önemliyse:
   - Ya doku klasörünü (`C:\Program Files (x86)\Common Files\Autodesk Shared\Materials\Textures\...` altından kullanılanları) FBX'in yanına kopyalayın,
   - Ya da modeli önce **Twinmotion/3ds Max köprüsüyle** glTF'e çevirin.

> **Pratik alternatif:** Revit modelini SketchUp'a aktarıp oradan FBX almak,
> küçük projelerde daha temiz malzeme sonucu verir.

## Hızlı Son Kontrol

Export ettiğiniz dosyayı ArchVR Hazırlayıcı'ya atın ve özet ekranında:

- [ ] Boyutlar gerçekçi mi? (villa ~10-25 m genişlik, kat yüksekliği ~3 m)
- [ ] Üçgen sayısı 2 milyonun altında mı? (üstüyse karar ekranında iş artar)
- [ ] Doku uyarısı var mı?

Üçü de temizse 2. adıma geçebilirsiniz. Kolay gelsin! 🏗️
