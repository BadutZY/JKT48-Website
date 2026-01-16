// Sample news data (in a real application, this would come from a database)
const newsData = [
    {
      id: 1,
      title: "Pengumuman Mengenai #KuSangatSuka Exclusive Showcase",
      date: "26 Januari 2025",
      image: "IMG/NEWS/news1.jpg",
      content: `<p>Terima kasih atas dukungannya untuk JKT48.</p>
              <p>Pada tanggal 15 Desember 2024, kita telah bersama-sama merayakan ulang tahun JKT48 ke-13 dalam acara JKT48 13th Anniversary Concert bertajuk "WONDERLAND." Pada acara tersebut, terdapat dua pertunjukan, yaitu 13th Anniversary Concert dan juga Sousenkyo Announcement (Pengumuman Hasil Akhir Pemilihan Member Single ke-26 JKT48).</p>
              <p>Sebelumnya, JKT48 juga telah mengumumkan Benefit Tiket CAT 1 WONDERLAND, yaitu "Early 26th Single MV Screening dan first performance event 30 menit sebelum perilisan resmi MV". Sehubungan dengan itu, JKT48 akan mengadakan #KuSangatSuka Exclusive Showcase khusus bagi pemegang tiket CAT 1 JKT48 Wonderland 13th Anniversary Concert.</p>
              <p>Berikut detail acaranya: <br>
              Hari/Tangga &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : Minggu, 2 Februari 2025 <br>
              Waktu &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : 17.15 - 18.00 WIB <br>
              Tempat &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : JKT48 Theater (FX Sudirman Lantai 4)<br>
              Open Gate &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : 16.45 WIB
              </p>
              <p>Mohon untuk memperhatikan PERATURAN berikut:
               <ul style="margin-left: 20px; margin-bottom: 20px; list-style-type: disc;">
                  <p>1. Membawa Tanda Pengenal Diri (KTP).<br>
                  2. Membawa bukti pembelian tiket CAT 1 WONDERLAND JKT48 13th Anniversary Concert (baik fisik maupun digital).</p>
                </ul>
              </p>
              <p>Sampai berjumpa di #KuSangatSuka Exclusive Showcase WONDERLAND | JKT48 13th Anniversary Concert & Sousenkyo Announcement! Semoga momen penuh suka ria, haru, dan tawa dapat kita rasakan bersama di acara tersebut.</p>
              <p>Mohon dukungannya selalu untuk JKT48.</p>
              <p>JKT48 Operational Team.</p>`
    },
    {
      id: 2,
      title: "Pengumuman Mengenai Pertunjukan Perdana “Te wo Tsunaginagara” oleh JKT48",
      date: "28 Januari 2025",
      image: "IMG/Setlist/twt.jpeg",
      content: `<p>Terima kasih atas dukungannya untuk JKT48.</p>
                <p>"Te wo Tsunaginagara" (Sambil Menggandeng Erat Tanganku) merupakan setlist pertama dari team T JKT48. Kini, JKT48 akan membawakan kembali setlist tersebut. Setelah melalui persiapan dan latihan yang panjang, akhirnya shonichi (pertunjukan perdana) akan dilaksanakan.</p>
                <p><strong>Berikut adalah detail pertunjukannya:</strong></p>
                <p>Pertunjukan perdana "Te wo Tsunaginagara (Sambil Menggandeng Erat Tanganku) "
                <ul style="margin-left: 20px; margin-bottom: 20px; list-style-type: disc;">
                  <p>- Tanggal &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : 1 Februari 2025
                  <br>
                  - Jam pertunjukan &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : 14.00 WIB</p>
                  <br>
                  <p>- Tanggal &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : 1 Februari 2025
                  <br>
                  - Jam pertunjukan &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : 19.00 WIB</p>
                  <br>
                  <p>- Tanggal &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : 2 Februari 2025
                  <br>
                   - Jam pertunjukan &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : 13.00 WIB</p>
                </ul>
                </p>
                <p>Informasi Tiket:</p>
                <ul style="margin-left: 20px; margin-bottom: 20px; list-style-type: disc;">
                  <li>Menonton langsung di JKT48 Theater (khusus anggota OFC) Harga tiket: 200.000 JKT48 Point.</li>
                  <li>Live Streaming via IDN App Harga tiket: 20 IDN Gold. Tautan pembelian tiket akan diumumkan menyusul.</li>
                  <li>Live Streaming via YouTube (khusus anggota Membership JKT48 SHOW) Bisa disaksikan di channel JKT48 TV.</li>
              </ul>
                <p>Pendaftaran undian tiket pertunjukan offline akan mulai dijual pada hari Selasa tanggal 28 Januari 2025 Pukul 19.00 WIB melalui website jkt48.com</p>
                <p>Mari kita sambut penampilan perdana mereka di setlist Te Wo Tsunaginagara (Sambil Menggandeng Erat Tanganku) dengan dukungan dan semangat yang hangat! Kami tunggu kehadirannya!</p>
                <p>Mohon dukungannya selalu untuk JKT48.</p>
                <br>
                <p>JKT48 Operation Team.</p>`
    },
    {
      id: 3,
      title: "Informasi Peraturan dan Timetable JKT48 26th Single Personal Meet and Greet Festival",
      date: "March 10, 2025",
      image: "IMG/NEWS/news3png.png",
      content: `<p>JKT48 akan kembali mengadakan JKT48 26th Single Personal Meet & Greet Festival pada tanggal 8 Februari 2025 di ICE Indonesia, BSD City, Tangerang.</p>
                  <p><strong>PERATURAN UMUM</strong>
                      <ul style="margin-left: 20px; margin-bottom: 20px; list-style-type: disc;">
                      <li>Area event hanya diperuntukkan bagi pengunjung yang memiliki tiket Personal Meet & Greet dan/atau 2-Shot. Bila tidak memiliki tiket, maka tidak diperkenankan masuk area event.</li>
                      <li>Harap menggunakan pakaian yang pantas dan sopan.</li>
                      <li>Tidak diperkenankan membawa hewan peliharaan.</li>
                  </ul>
                  </p>
                  <p><strong>PERATURAN PERSONAL MEET & GREET</strong>
                      <ul style="margin-left: 20px; margin-bottom: 20px; list-style-type: disc;">
                      <li>Satu tiket Personal Meet & Greet didapatkan sebagai bonus pembelian satu JKT48 26th Single Photocard seharga Rp 50.000 melalui website resmi JKT48.</li>
                      <li><strong>Setiap pembelian JKT48 26th Single Photocard yang dilakukan sebelum 30 November 2024 pukul 23.59 WIB akan mendapatkan kode voting berisi 2 suara, dapat digunakan untuk Pemilihan Member Single ke-26 JKT48  yang sedang berlangsung.</strong></li>
                      <li>Satu tiket Personal Meet & Greet hanya dapat digunakan untuk melangsungkan Personal Meet & Greet bersama member yang sudah dipilih saat pembelian JKT48 26th Single Photocard.</li>
                  </ul>
                  </p>
                  <p><strong>PERATURAN 2-SHOT</strong>
                      <ul style="margin-left: 20px; margin-bottom: 20px; list-style-type: disc;">
                      <li>Tiket 2-Shot hanya bisa didapatkan melalui website resmi JKT48.</li>
                      <li>Tiket dapat dibeli dengan harga Rp180.000 per lembar.</li>
                      <li><strong>Setiap pembelian tiket 2-Shot yang dilakukan sebelum 30 November 2024 pukul 23.59 WIB akan mendapatkan akan mendapatkan kode voting berisi 4 suara, yang dapat digunakan untuk Pemilihan Member Single ke-26 sedang berlangsung.</strong></li>
                  </ul>
                  </p>
                <p>Dimohon untuk selalu mengikuti peraturan yang berlaku demi kenyamanan semua pihak yang berpartisipasi. Pengumuman mengenai Stage Activity dan Mini Live akan diumumkan lebih lanjut.</p>
                <br>
                <p>Kami tunggu kedatangan kalian di JKT48 26th Single Personal Meet and Greet Festival!</p>
                <br>
                <p>Mohon dukungannya untuk JKT48.</p>
                <br>
                <br>
                <p>JKT48 Operation Team.</p>`
    },
    {
      id: 4,
      title: "Pengumuman Mengenai 11th Anniversary Generasi 3 JKT48 Party!",
      date: "14 Maret 2025",
      image: "IMG/NEWS/news4.jpg",
      content: `<p>Terima kasih atas dukungannya untuk JKT48.</p>
                <p>Feni dan Gracia dari Generasi 3 JKT48 telah hadir, menghibur dan memberi warna bagi banyak fans JKT48 sejak 15 Maret 2014. Oleh karena itu, untuk merayakan ulang tahun Generasi 3 JKT48 yang ke-11, melalui sebuah Special Live-Streaming Event. Melalui event ini, kita akan mengetahui momen tak terlupakan dari para member Generasi 3 yang masih bertahan ini, dan juga harapan serta mimpi mereka yang masih ingin dicapai di JKT48.</p>
                <p>Berikut adalah detailnya:</p>
                <p><strong>"11 Y3ARS" JKT48 3RD GENERATION ANNIVERSARY PARTY</strong>
                <ul style="margin-left: 20px; margin-bottom: 20px; list-style-type: disc;">
                  <p>- Hari/Tanggal &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : Minggu, 16 Maret 2025
                  <br>
                  - Waktu &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : 15.00 WIB
                  <br>
                  - Platform &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : JKT48 Official Youtube Channel (free live-streaming)</p>
                </ul>
                </p>
                <p>Perayaan 11 tahun ini tentunya juga merupakan ungkapan syukur atas dukungan yang telah kalian berikan untuk Generasi 3 JKT48. Mari bersama merayakan momen tak terlupakan ini.</p>
                <p>Sampai jumpa di event <strong>"11 Y3ARS" JKT48 3RD GENERATION ANNIVERSARY PARTY</strong></p>
                <p>Mohon dukungannya untuk JKT48.</p>
                <br>
                <p>JKT48 Operation Team.</p>`
    }
  ];
  
  // Get modal elements
  const modal = document.getElementById('newsModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalDate = document.getElementById('modalDate');
  const modalImage = document.getElementById('modalImage');
  const modalContent = document.getElementById('modalContent');
  
  // Get all read more buttons
  const readMoreButtons = document.querySelectorAll('.read-more');
  
  // Get all recent news links
  const recentNewsLinks = document.querySelectorAll('.news-categories .category-list a');
  
  // Function to open modal with specific news data
  function openModal(newsId) {
    // Find the news item with the matching ID
    const news = newsData.find(item => item.id === newsId);
    
    if (news) {
      // Update modal content
      modalTitle.textContent = news.title;
      modalDate.textContent = news.date;
      modalImage.style.backgroundImage = `url('${news.image}')`;
      modalContent.innerHTML = news.content;
      
      // Add active class to show modal with animation
      modal.classList.add('active');
      document.body.classList.add('modal-open');
    }
  }
  
  // Add click event listeners to read more buttons
  readMoreButtons.forEach((button, index) => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      openModal(index + 1); // Add 1 since our data IDs start from 1
    });
  });
  
  // Add click event listeners to recent news links
  recentNewsLinks.forEach((link, index) => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      openModal(index + 1); // Add 1 since our data IDs start from 1
    });
  });
  
  // Close modal when clicking the close button
  modalClose.addEventListener('click', closeModal);
  
  // Close modal when clicking outside the modal content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal when pressing ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  
  // Function to close modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Existing slider code
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000);
});