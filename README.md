# BEUShareBox 📦

BEUShareBox, kullanıcıların ürünlerini paylaşabildiği, diğer kullanıcıların paylaşımlarını beğenebildiği ve yorum yapabildiği modern bir mini sosyal medya platformudur. Bu proje, saf (vanilla) web teknolojileri kullanılarak geliştirilmiş bir sınıf projesidir.

## 🚀 Özellikler

- **Ürün Paylaşımı:** Başlık, açıklama, fiyat, kategori ve görsel URL'si ile yeni ürünler ekleyin.
- **Görsel Desteği:** Ürünlerinize özel görseller ekleyin veya otomatik rastgele görsellerin keyfini çıkarın.
- **Beğeni Sistemi:** Beğendiğiniz ürünlere kalp bırakın ve toplam beğeni sayısını takip edin.
- **Yorum Sistemi:** Her ürünün altında diğer kullanıcılarla etkileşime geçin.
- **Akıllı Filtreleme:** Ürünleri kategorilerine göre anında filtreleyin.
- **Hızlı Arama:** Başlık veya açıklama üzerinden ürünler arasında arama yapın.
- **Veri Kalıcılığı:** `localStorage` sayesinde tarayıcıyı kapatsanız bile verileriniz kaybolmaz.
- **Dinamik İstatistikler:** Toplam ürün ve beğeni sayılarını anlık olarak görün.
- **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlarla tam uyumlu modern arayüz.

## 🛠️ Kullanılan Teknolojiler

- **HTML5:** Semantik ve erişilebilir yapı.
- **CSS3:** Modern grid/flexbox düzeni, CSS değişkenleri ve gelişmiş animasyonlar.
- **Vanilla JavaScript:** Framework kullanmadan modüler ve temiz kod yapısı.
- **Vite:** Hızlı geliştirme ve derleme süreci için.

## 📦 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için şu adımları izleyin:

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

3. Tarayıcınızda `http://localhost:3000` adresine gidin.

## 📝 Teknik Detaylar

- Veriler tarayıcı hafızasında (`localStorage`) JSON formatında saklanır.
- Ürün görselleri için varsayılan olarak `picsum.photos` servisi kullanılır.
- Arama ve filtreleme işlemleri JavaScript `Array.filter()` metodu ile performanslı bir şekilde yapılır.
- Arayüz, modern tasarım trendlerine uygun olarak yumuşak gölgeler ve geçiş efektleri ile süslenmiştir.

---
*Bu proje bir eğitim çalışmasıdır.*
