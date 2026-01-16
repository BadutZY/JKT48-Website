document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.schedule-filter button');
    const scheduleRows = document.querySelectorAll('.schedule-table tbody tr');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
  
        const filterType = this.getAttribute('data-filter');
  
        scheduleRows.forEach(row => {
          if (filterType === 'all') {
            row.style.display = '';
          } else {
            const rowType = row.getAttribute('data-type');
            row.style.display = (filterType === rowType) ? '' : 'none';
          }
        });
      });
    });
  
    // Expanded team members with multiple configurations for repeated events
    const teamMembers = {
      'Cara Meminum Ramune': [
        [
          { name: 'Alya', image: 'IMG/MEMBER/LOVE/fiony_alveria.jpg' },
          { name: 'Anin', image: 'IMG/MEMBER/LOVE/anindya_ramadhani.jpg' },
          { name: 'Elin', image: 'IMG/MEMBER/LOVE/celline_thefani.jpg' },
          { name: 'Chelsea', image: 'IMG/MEMBER/DREAM/chelsea_davina.jpg' },
          { name: 'Oniel', image: 'IMG/MEMBER/PASSION/cornelia_vanisa.jpg' },
          { name: 'Danella', image: 'IMG/MEMBER/PASSION/dena_natalia.jpg' },
          { name: 'Fritzy', image: 'IMG/MEMBER/LOVE/fritzy_rosmerian.jpg' },
          { name: 'Ella', image: 'IMG/MEMBER/DREAM/gabriela_abigail.jpg' },
          { name: 'Eli', image: 'IMG/MEMBER/DREAM/helisma_putri.jpg' },
          { name: 'Indah', image: 'IMG/MEMBER/LOVE/indah_cahya.jpg' },
          { name: 'Lulu', image: 'IMG/MEMBER/PASSION/lulu_salsabila.jpg' },
          { name: 'Nayla', image: 'IMG/MEMBER/LOVE/nayla_suji.jpg' },
          { name: 'Nachia', image: 'IMG/MEMBER/DREAM/nina_tutachia.jpg' },
          { name: 'Olien', image: 'IMG/MEMBER/DREAM/oline_manuel.jpg' },
          { name: 'Nala', image: 'IMG/MEMBER/DREAM/shabilqis_naila.jpg' },
          { name: 'Kimmy', image: 'IMG/MEMBER/PASSION/victoria_kimberly.jpg' }
        ]
      ],

      'Pertaruhan Cinta': [
        [
          { name: 'Lia', image: 'IMG/MEMBER/LOVE/aurellia.jpg' },
          { name: 'Lana', image: 'IMG/MEMBER/LOVE/aurhel_alana.jpg' },
          { name: 'Elin', image: 'IMG/MEMBER/LOVE/celline_thefani.jpg' },
          { name: 'Cythia', image: 'IMG/MEMBER/LOVE/cynthia_yaputera.jpg' },
          { name: 'Fiony', image: 'IMG/MEMBER/LOVE/fiony_alveria.jpg' },
          { name: 'Fritzy', image: 'IMG/MEMBER/LOVE/fritzy_rosmerian.jpg' },
          { name: 'Gracie', image: 'IMG/MEMBER/LOVE/grace_octaviani.jpg' },
          { name: 'Indah', image: 'IMG/MEMBER/LOVE/indah_cahya.jpg' },
          { name: 'Jessi', image: 'IMG/MEMBER/PASSION/jessica_chandra.jpg' },
          { name: 'Kathrina', image: 'IMG/MEMBER/PASSION/kathrina_irene.jpg' },
          { name: 'Marsha', image: 'IMG/MEMBER/PASSION/lulu_salsabila.jpg' },
          { name: 'Muthe', image: 'IMG/MEMBER/PASSION/mutiara_azzahra.jpg' }
        ]
      ],

      'Sambil Memegang Erat Tanganku': [
        [
          { name: 'Aralie', image: 'IMG/MEMBER/PASSION/abigail_rachel.jpg' },
          { name: 'Delyn', image: 'IMG/MEMBER/DREAM/adeline_wijaya.jpg' },
          { name: 'Lana', image: 'IMG/MEMBER/LOVE/aurhel_alana.jpg' },
          { name: 'Cathy', image: 'IMG/MEMBER/LOVE/cathleen_nixie.jpg' },
          { name: 'Chelsea', image: 'IMG/MEMBER/DREAM/chelsea_davina.jpg' },
          { name: 'Oniel', image: 'IMG/MEMBER/PASSION/cornelia_vanisa.jpg' },
          { name: 'Danella', image: 'IMG/MEMBER/PASSION/dena_natalia.jpg' },
          { name: 'Fritzy', image: 'IMG/MEMBER/LOVE/fritzy_rosmerian.jpg' },
          { name: 'Lyn', image: 'IMG/MEMBER/DREAM/jesslyn_elly.jpg' },
          { name: 'Levi', image: 'IMG/MEMBER/PASSION/michelle_levia.jpg' },
          { name: 'Raisha', image: 'IMG/MEMBER/PASSION/raisha_syifa.jpg' },
          { name: 'Ribka', image: 'IMG/MEMBER/PASSION/ribka_budiman.jpg' }
        ]
      ]
    };
  
    // Team images mapping (placeholder)
    const teamImages = {
      'Pajama Drive': 'IMG/Setlist/pajama.jpeg',
      'Cara Meminum Ramune': 'IMG/Setlist/ramune.jpeg',
      'Pertaruhan Cinta': 'IMG/Setlist/percin.jpeg',
      'Sambil Memegang Erat Tanganku': 'IMG/Setlist/twt.jpeg'
    };
  
    // Event listener for theater rows
    const theaterRows = document.querySelectorAll('tr[data-type="theater"]');
    const modal = document.getElementById('theater-modal');
    const modalClose = document.querySelector('.modal-close');
  
    // Modal elements
    const modalTitle = document.getElementById('modal-event-title');
    const modalImage = document.getElementById('modal-event-image');
    const modalDate = document.getElementById('modal-event-date');
    const modalTime = document.getElementById('modal-event-time');
    const modalVenue = document.getElementById('modal-event-venue');
    const modalTeam = document.getElementById('modal-event-team');
    const modalTicketLink = document.getElementById('modal-ticket-link');
    const modalMemberList = document.getElementById('modal-member-list');
  
    // Event listener for theater rows
    theaterRows.forEach((row, index) => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', function() {
        const eventTitle = this.querySelector('td:nth-child(2)').textContent;
        const eventDate = this.querySelector('td:nth-child(1)').textContent;
        const eventTime = this.querySelector('td:nth-child(3)').textContent;
        const eventVenue = this.querySelector('td:nth-child(4)').textContent;
        const eventTeam = eventTitle.split(' - ')[1] || eventTitle;
  
        // Populate modal
        modalTitle.textContent = eventTitle;
        modalDate.textContent = eventDate;
        modalTime.textContent = eventTime;
        modalVenue.textContent = eventVenue;
        modalTeam.textContent = eventTeam;
        
        // Set team image
        modalImage.src = teamImages[eventTeam] || '/api/placeholder/400/300';
        
        // Set ticket link
        modalTicketLink.href = 'shop.html';
  
        // Populate member list with configuration based on event occurrence
        const eventMembers = teamMembers[eventTitle] || teamMembers[eventTeam];
        const membersToShow = eventMembers ? 
          eventMembers[index % eventMembers.length] : 
          [];
  
        modalMemberList.innerHTML = membersToShow.map(member => `
          <div class="member-card">
          <a href="member.html">
            <img src="${member.image}" alt="${member.name}">
            </a>
            <p>${member.name}</p>
          </div>
        `).join('');
  
        // Show modal and prevent body scroll
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
      });
    });
  
    // Close modal when clicking 'x'
    modalClose.onclick = function() {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  
    // Close modal when clicking outside
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    }
  });

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