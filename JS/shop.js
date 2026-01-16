// Modal and Ticket Purchase Logic
const modal = document.getElementById('ticketModal');
const ticketQuantityInput = document.getElementById('ticketQuantity');
const totalPriceDisplay = document.getElementById('totalPriceDisplay');
const modalTicketTitle = document.getElementById('modalTicketTitle');
const performanceDetails = document.getElementById('performanceDetails');
const selectedPerformanceInput = document.getElementById('selectedPerformance');

// Performance Details with Unique Identifiers
const performanceInfo = {
  'pajama-05-03': {
    img: 'IMG/Setlist/pajama.jpeg',
    title: 'Pajama Drive',
    date: '5 Maret 2026 - 19:00',
    price: 200000,
    venue: 'JKT48 Theater'
  },
  'ramune-06-03': {
    img: 'IMG/Setlist/ramune.jpeg',
    title: 'Cara Meminum Ramune',
    date: '6 Maret 2026 - 19:00',
    price: 200000,
    venue: 'JKT48 Theater'
  },
  'percin-09-03': {
    img: 'IMG/Setlist/percin.jpeg',
    title: 'Pertaruhan Cinta',
    date: '9 Maret 2026 - 19:00',
    price: 200000,
    venue: 'JKT48 Theater'
  },
  'twt-13-03': {
    img: 'IMG/Setlist/twt.jpeg',
    title: 'Sambil Memegang Erat Tanganku',
    date: '13 Maret 2026 - 19:00',
    price: 200000,
    venue: 'JKT48 Theater'
  },
};

// Open Modal for Ticket Purchase
function openTicketModal(performanceKey) {
  const performance = performanceInfo[performanceKey];
  
  modal.style.display = 'block';
  modalTicketTitle.textContent = `Purchase ${performance.title} Ticket`;
  
  // Set performance details
  performanceDetails.innerHTML = `
    <div class="ticket-image" style="background-image: url('${performance.img}')"></div>
    <br>
    <p><strong>${performance.title}</strong></p>
    <br>
    <p>Date &nbsp&nbsp&nbsp&nbsp : ${performance.date}</p>
    <p>Venue &nbsp&nbsp: ${performance.venue}</p>
  `;
  
  // Set hidden input and update price
  selectedPerformanceInput.value = performanceKey;
  
  // Reset form
  ticketQuantityInput.value = 1;
  updateTotalPrice(performance.price);

  // Disable body scroll
  document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
  modal.style.display = 'none';

  // Enable body scroll
  document.body.style.overflow = '';
}

// Change Ticket Quantity
function changeQuantity(change) {
  let currentQuantity = parseInt(ticketQuantityInput.value);
  let newQuantity = currentQuantity + change;
  
  if (newQuantity >= 1 && newQuantity <= 10) {
    ticketQuantityInput.value = newQuantity;
    const performanceKey = selectedPerformanceInput.value;
    updateTotalPrice(performanceInfo[performanceKey].price);
  }
}

// Update Total Price
function updateTotalPrice(price) {
  const quantity = parseInt(ticketQuantityInput.value);
  const totalPrice = price * quantity;
  totalPriceDisplay.textContent = `Total: Rp ${totalPrice.toLocaleString()}`;
}

// Form Submission
document.getElementById('ticketPurchaseForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Basic form validation
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const performanceKey = selectedPerformanceInput.value;
  const quantity = ticketQuantityInput.value;
  
  if (!name || !email || !performanceKey) {
    alert('Please fill in all required fields');
    return;
  }
  
  // Get performance details
  const performance = performanceInfo[performanceKey];
  
  // Here you would typically send data to a backend for processing
  Swal.fire({
    title: "Pembayaran Berhasil",
    html: `<h3 align="center">Thank you, ${name}!</h3>
            <br>
            <p align="left">Ticket(s) &nbsp&nbsp&nbsp&nbsp&nbsp : <strong>${performance.title}</strong>
            <br>
            Date &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : ${performance.date}
            <br>
            Venue &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp : ${performance.venue}</p>`,
    icon: "success",
  });
  
  // Close modal
  closeModal();
});

// Allow closing modal by clicking outside
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// Attach event listeners to "Buy Ticket" buttons
document.querySelectorAll('.ticket-buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const performanceKey = btn.closest('.ticket-card').getAttribute('data-performance');
    openTicketModal(performanceKey);
  });
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