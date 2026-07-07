# ArchVR Kullanım Kılavuzu (Mimarlar İçin)

Bu kılavuz, 3D mimari modelinizi müşterinizin Meta Quest 3 gözlüğünde
**yürüyerek gezilebilir** hale getirmenin tüm adımlarını anlatır.
Teknik bilgi gerekmez; baştan sona yaklaşık 15-30 dakika sürer.

## Gerekenler

| Ne | Nereden |
|---|---|
| ArchVR Hazırlayıcı (Windows) | Size iletilen kurulum linki (.exe) |
| Blender (ücretsiz, ışık pişirme için) | https://www.blender.org/download/ |
| Meta Quest 3 veya 3S gözlük | — |
| 3D modeliniz (FBX/OBJ/glTF) | SketchUp / Revit / 3ds Max export'u |

> Modeli export etmeden önce **export-checklist.md** belgesindeki kurallara
> mutlaka göz atın (birim = metre en kritik olanıdır).

## Adım 1 — Modeli Açın

1. ArchVR Hazırlayıcı'yı başlatın.
2. Model dosyanızı pencereye **sürükleyip bırakın** (veya "Dosya Seç").
3. Uygulama otomatik olarak:
   - birimi tespit edip metreye çevirir,
   - bozuk geometrileri onarır,
   - istatistikleri çıkarır (üçgen sayısı, doku boyutu).
4. **Özet ekranını kontrol edin:** bina boyutları mantıklı mı?
   Bir iç kapı ~2 m olmalı. Değilse modeli doğru birimle yeniden export edin.
5. Sarı uyarı kutuları varsa okuyun — çoğu, export ayarıyla çözülür.

## Adım 2 — Karar Ekranı (sadeleştirme)

Quest gözlüğü bir bilgisayar kadar güçlü değildir; sahnenin
**500.000 üçgenin altına** inmesi gerekir. Üstteki gösterge 🔴 ise:

- **Sağdaki liste** en ağır nesneden hafife sıralıdır; kırmızı sayılar ağır demektir.
- Her nesne için üç seçenek:
  - **Basitleştir**: kaydırıcıyı çekin (%0-90). Soldaki önizlemede sonucu
    anında görürsünüz. Mobilya/bitki gibi detay nesnelerinde %50-70 fark edilmez.
  - **Çıkar**: gezintide gerekmeyen nesneyi tamamen kaldırır (arka bahçedeki
    araba, çevre binalar vb.).
  - **Dokunma**: olduğu gibi kalır.
- **💡 Otomatik Öner** düğmesi ağır nesnelere uygun oranlar önerir;
  siz onaylamadan hiçbir şey değişmez.
- Gösterge 🟢 olunca devam edebilirsiniz.

**📍 Başlangıç Noktası Seç**'e basıp önizlemede zemine tıklayın —
müşteriniz VR'da tam o noktada, o yöne bakarak "doğar". Genellikle giriş
kapısının içi iyi bir seçimdir.

## Adım 3 — Pişir ve Paketle

**"Pişirme" nedir?** Güneş ve iç mekân ışıkları önceden hesaplanıp dokulara
işlenir. Böylece gözlükte ışık hesabı yapılmaz; görüntü hem gerçekçi hem akıcı olur.

1. **🔥 Pişir ve Paketle**'ye basın.
2. Kalite seçin: ilk denemede **Hızlı önizleme**, müşteri sunumunda **Normal**.
3. İşlem modele göre birkaç dakika sürer; ilerleme çubuğundan izleyin.
   İptal edebilirsiniz.
4. Bitince dosya kaydedilir: **ProjeAdı.archvr.glb** (varsayılan: Masaüstü).

> Blender kurulu değilse uygulama sizi indirme sayfasına yönlendirir.
> Kurulumdan sonra bu ekrana dönüp tekrar deneyin.

## Adım 4 — Gözlüğe Aktarın

### Yöntem A — USB kablo
1. Quest'i USB-C ile bilgisayara bağlayın.
2. Gözlüğün içinde çıkan **"Veri erişimine izin ver"** sorusuna **İzin ver** deyin.
3. Bilgisayarda **Bu Bilgisayar → Quest 3 → Download** klasörüne
   `.archvr.glb` dosyasını sürükleyin.
4. Kabloyu çıkarın.

### Yöntem B — Wi-Fi (kablosuz)
1. PC ve gözlük **aynı Wi-Fi ağında** olmalı (internet gerekmez).
2. Uygulamadaki **📡 Wi-Fi Paylaşımını Başlat**'a basın.
3. Gözlük tarayıcısında ekrandaki adresi açın, **İndir**'e basın.
4. Windows Güvenlik Duvarı ilk seferde izin isterse **İzin ver** deyin.

## Adım 5 — Müşteriyle Gezinti

1. Gözlükte **tarayıcıyı** (Browser) açın ve ArchVR Gezinti sitesine gidin
   (size iletilen adres; ilk açılıştan sonra çevrimdışı da çalışır).
2. **📦 Paket Dosyası Ekle** → Download klasöründen dosyayı seçin.
   Paket gözlüğe kaydedilir; sonraki açılışlarda listede hazırdır.
3. **🥽 VR'a Gir**'e basın ve gözlüğü müşteriye verin.

### Müşteriye söyleyecekleriniz
- **"Normal yürüyün."** Gerçek adımlar birebir mekâna yansır (oda sınırında
  Quest'in kendi uyarı ızgarası belirir).
- Alan bittiğinde: **sol kolçak (joystick)** ile yavaşça kayarak ilerleyin —
  kenarlar hafif kararır, bu normaldir (mide bulantısını önler).
- **Sağ joystick** sağa/sola döndürür — çubuğu ne kadar yatırırsanız o kadar
  hızlı döner (dönerken de kenarlar hafif kararır, normaldir).

## Sık Sorunlar

| Belirti | Çözüm |
|---|---|
| "Birim tespit edilemedi" uyarısı | Export'ta **Units: Meters** seçin (bkz. checklist) |
| Dokular gri/eksik | Export'ta **Embed/Copy Textures** açın veya doku klasörünü modelin yanına koyun |
| Model kapkaranlık çıktı | Modelde hiç pencere yoksa normaldir; dolgu ışıkları otomatik eklenir. Yeniden pişirin, sürmezse bize ulaşın |
| Gözlükte takılma/kasma | Karar ekranında üçgeni daha da düşürün (300K'yı deneyin) |
| Quest tarayıcısında "VR'a Gir" pasif | Sayfayı gözlüğün KENDİ tarayıcısında açtığınızdan emin olun (telefonda değil) |
