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

    // Hero Slider - FIXED WITH PIXEL ROUNDING AND IMMEDIATE RESET
    const sliderContainer = document.querySelector('.hero-slider-container');
    const slider = document.querySelector('.hero-slider');
    const originalSlides = Array.from(document.querySelectorAll('.hero-slide'));
    const dotsContainer = document.querySelector('.slider-dots');

    if (!slider || originalSlides.length === 0) return;

    const totalSlides = originalSlides.length;
    let currentIndex = 0;
    let autoSlideInterval;
    let isDragging = false;
    let startPos = 0;
    let isTransitioning = false;

    // Clone slides for infinite loop
    originalSlides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
    });

    for (let i = originalSlides.length - 1; i >= 0; i--) {
        const clone = originalSlides[i].cloneNode(true);
        slider.insertBefore(clone, slider.firstChild);
    }

    const allSlides = Array.from(document.querySelectorAll('.hero-slide'));
    currentIndex = totalSlides;

    // Calculate dimensions
    function getSlideWidth() {
        return allSlides[0].offsetWidth;
    }

    function getOffset() {
        const containerWidth = sliderContainer.offsetWidth;
        const slideWidth = getSlideWidth();
        return (containerWidth - slideWidth) / 2;
    }

    // Create dots
    originalSlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Update center class
    function updateCenterSlide() {
        allSlides.forEach((slide, index) => {
            slide.classList.toggle('center', index === currentIndex);
        });
    }

    // Update dots
    function updateDots() {
        const realIndex = currentIndex % totalSlides;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === realIndex);
        });
    }

    // Set position instantly with rounding
    function setPositionByIndex(index) {
        const slideWidth = getSlideWidth();
        const offset = getOffset();
        const translateValue = Math.round(-(index * slideWidth) + offset);
        slider.style.transition = 'none';
        slider.style.transform = `translateX(${translateValue}px)`;
        currentIndex = index;
        updateCenterSlide();
        updateDots();
    }

    // Move slider with rounding
    function moveSlider(smooth = true) {
        const slideWidth = getSlideWidth();
        const offset = getOffset();
        const translateValue = Math.round(-(currentIndex * slideWidth) + offset);
        slider.style.transition = smooth ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
        slider.style.transform = `translateX(${translateValue}px)`;
        updateCenterSlide();
        updateDots();
    }

    // Handle transition end with immediate reset
    slider.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'transform') return;
        isTransitioning = false;

        let needsReset = false;
        let newIndex = currentIndex;

        if (currentIndex >= totalSlides * 2) {
            newIndex = totalSlides;
            needsReset = true;
        } else if (currentIndex < totalSlides) {
            newIndex = totalSlides * 2 - 1;
            needsReset = true;
        }

        if (needsReset) {
            requestAnimationFrame(() => {
                setPositionByIndex(newIndex);
                void slider.offsetWidth; // Force reflow for immediate apply
            });
        }
    });

    // Go to specific slide
    function goToSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex = totalSlides + index;
        moveSlider(true);
        resetAutoSlide();
    }

    // Next slide
    function nextSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex++;
        moveSlider(true);
    }

    // Previous slide
    function prevSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex--;
        moveSlider(true);
    }

    // Auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    // Drag functionality
    let dragStartPos = 0;
    let dragStartTranslate = 0;

    function handleDragStart(e) {
        if (isTransitioning) return;
        isDragging = true;
        startPos = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        dragStartPos = startPos;
        const slideWidth = getSlideWidth();
        const offset = getOffset();
        dragStartTranslate = Math.round(-(currentIndex * slideWidth) + offset);
        slider.style.cursor = 'grabbing';
        slider.style.transition = 'none';
        stopAutoSlide();
    }

    function handleDragMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        const currentPosition = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        const diff = currentPosition - dragStartPos;
        const newTranslate = Math.round(dragStartTranslate + diff);
        slider.style.transform = `translateX(${newTranslate}px)`;
    }

    function handleDragEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        slider.style.cursor = 'grab';
        const endPos = e.type.includes('mouse') ? e.pageX : (e.changedTouches ? e.changedTouches[0].clientX : dragStartPos);
        const diff = endPos - dragStartPos;
        if (Math.abs(diff) > 100) {  // Threshold drag untuk hindari snap kecil
            if (diff > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        } else {
            moveSlider(true);
            setTimeout(() => {
                isTransitioning = false;
            }, 600);  // Match transition duration
        }
        startAutoSlide();
    }

    // Event listeners (sama)
    slider.addEventListener('mousedown', handleDragStart);
    slider.addEventListener('touchstart', handleDragStart, { passive: false });
    slider.addEventListener('mousemove', handleDragMove);
    slider.addEventListener('touchmove', handleDragMove, { passive: false });
    slider.addEventListener('mouseup', handleDragEnd);
    slider.addEventListener('touchend', handleDragEnd);
    slider.addEventListener('mouseleave', () => {
        if (isDragging) handleDragEnd({ pageX: dragStartPos });
    });

    slider.addEventListener('contextmenu', e => e.preventDefault());
    slider.addEventListener('dragstart', e => e.preventDefault());
    allSlides.forEach(slide => {
        slide.addEventListener('click', (e) => {
            if (Math.abs(e.pageX - dragStartPos) > 5) {
                e.preventDefault();
            }
        });
    });

    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', () => {
        if (!isDragging) startAutoSlide();
    });

    // Window resize with better debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            setPositionByIndex(currentIndex);  // Instant reset on resize
        }, 150);
    });

    // Initialize
    requestAnimationFrame(() => {
        setPositionByIndex(currentIndex);
        setTimeout(startAutoSlide, 100);
    });
});