TURBO.AZ DATA SCRAPER - PLAYWRIGHT
=========================================

Bu layihə turbo.az saytındaki nəqliyyat vasitələri elanlarından avtomatik 
olaraq məlumat toplayır.

📌 TOPLANAN MƏLUMATLAR:
------------------------
- Marka və model
- Qiymət
- Buraxılış ili
- Mühərrikin həcmi
- Yürüş məsafəsi
- Şəhər
- Elanın paylaşılma tarixi


📌 XÜSUSİYYƏTLƏR:
------------------
- Bütün səhifələri avtomatik gəzir (pagination)
- Hər səhifədə 24 elanı skrap edir. Lakin elan sayı 24-dən az olduğu halda break etmir. (bu filterlənmiş axtarışda daha yararlıq olacaq)
- Məlumatları "scrapped data.txt" faylına yazır (faylı öncədən yaratmağınıza ehtiyac yoxdur).
- Skrap prosesi zamanı konsolda scrap prosesi icra olunan cari səhifə nömrələrini göstərir.
- Test dayandırıldıqda əvvəlki səhifənin məlumatları itmir. 

Sonuncu xüsusiyyəti daha effektiv istifadə etmək üçün həmin komdandanı for loop içinə ata bilərsiz. Cihazımın performansına uyğun olaraq mən belə istifadə edirəm.


📁 FAYL STRUKTURU:
-------------------
root/
  ├── tests/
  │     └── main.spec.ts        # Əsas skrap test faylı
  ├── helper/
  │     └── helper.ts            # Köməkçi funksiyalar (növbəti update mərhələsində istifadə edilə bilər)
  ├── scrapped data.txt          # Toplanmış məlumatların saxlandığı fayl
  ├── playwright.config.ts       # Playwright konfiqurasiyası (default saxlamağınız məsləhətdir)
  ├── tsconfig.json              # TypeScript konfiqurasiyası (datanın fayla yazılması üçün bu konfiqurasiya mütləqdir)
  └── README.txt                 # Bu fayl

📌 İstifadə:
---------------
Quraşdırılma videosunu YouTube platformasında paylaşacam. Paylaşdıqda bu sətrin yerində link olacaq.

1. Playwright quraşdırma və sənədin açılması
	1.1. Visual Studio Code (mən bu IDE istifadə edirəm) IDE-də yüklədiyiniz qovluğu açın (bu repoda verilən fayllardan ibarət qovluq)
	1.2. VS Code erminal pəncərəsində "npm init playwright@latest" yazın
	1.3. Bütün seçimləri "Enter" düyməsini sıxaraq təsdiqləyin

2. Digər lazımi konfiqurasiyalar
	2.1. tsconfig.json faylında tanınmayan modullar varsa yükləyin

3. Scrap prosesini başladın
	3.1. terminal pəncərəsində "npx playwright test --ui" yazıb, "Enter" sıxın
	3.2. Açılan Test UI pəncərəsində testi (cari qovluq üçün adı "main.spec.ts" işə salın
4. Maintance
	4.1. Console pəncərəsində prosesləri izləyin və lazım olduqda dayandırın

VACİB QEYD: Sizə limitli bir səhifə lazımdırsa, məsələn, ilk 10 səhifə, bu zaman "while (true)" loop əvəzinə for istifadə edə bilərsiz. Əks halda özünüz nəzarətdə saxlamalı olacaqsız.


📌 QEYDLƏR:
------------
- Konsolda 404 və ya 429 kimi status xətaları görsənə bilər. 
  Bu, server tərəfli müvəqqəti cavablardır və skrap prosesinə təsir etmir.
  Narahat olmağa ehtiyac yoxdur. Əgər proseslər console pəncərəsində əks 
  edilirsə deməli problemsiz çalışır.

- Skrap davam etdikcə konsolda "visible: 1", "visible: 2", ... kimi mesajlar 
  görünəcək. Bu, hansı səhifənin skrap edildiyini göstərir.

- Əgər səhifədə kifayət qədər elan yoxdursa, 
  "All data has been added to array from page X." mesajı çıxacaq və proses dayanacaq.

📄 ÇIXIŞ FAYLI:
----------------
Bütün məlumatlar "scrapped data.txt" faylına hər elan üçün bir sətir olmaqla yazılır.
Format sadə mətn formatındadır və istənilən mətn redaktoru ilə açıla bilər.

📌 TƏLƏBLƏR:
-------------
- Node.js (v16 və ya üstü)
- Playwright
- TypeScript

📃 VACİB QEYD:
--------------
Bu layihə yalnız təhsil və təcrübə məqsədi daşıyır. İstifadə etməzdən əvvəl 
saytın istifadə şərtlərini oxumağınız tövsiyə olunur.