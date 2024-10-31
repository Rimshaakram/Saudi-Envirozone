
    document.addEventListener('DOMContentLoaded', function () {
            // open
            const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
                for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener('click', function () {
            for (var j = 0; j < menu.length; j++) {
                menu[j].classList.toggle('hidden');
            }
        });
                }
            }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
                for (var i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function () {
            for (var j = 0; j < menu.length; j++) {
                menu[j].classList.toggle('hidden');
            }
        });
                }
            }

    if (backdrop.length) {
                for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener('click', function () {
            for (var j = 0; j < menu.length; j++) {
                menu[j].classList.toggle('hidden');
            }
        });
                }
            }
        });

    function showContent(event, sectionId, element) {
        // Prevent page from reloading
        event.preventDefault();

    // Hide all content sections
    const sections = document.querySelectorAll('.tab-content');
            sections.forEach(section => section.classList.add('hidden'));

    // Show the selected content section
    document.getElementById(sectionId).classList.remove('hidden');

    // Remove 'active' class from all tabs
    const tabs = document.querySelectorAll('.tab-link');
            tabs.forEach(tab => tab.classList.remove('active'));

    // Add 'active' class to the clicked tab
    element.classList.add('active');

    resetSlides(sectionId);
        }

    function nextSlide(tabId) {
            const slides = document.querySelectorAll(`#${tabId} .slide`);
            let currentIndex = Array.from(slides).findIndex(slide => !slide.classList.contains('hidden'));

    slides[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.remove('hidden');
        }

    function prevSlide(tabId) {
            const slides = document.querySelectorAll(`#${tabId} .slide`);
            let currentIndex = Array.from(slides).findIndex(slide => !slide.classList.contains('hidden'));

    slides[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.remove('hidden');
        }

    function resetSlides(tabId) {
            const slides = document.querySelectorAll(`#${tabId} .slide`);
            slides.forEach((slide, index) => {
                if (index === 0) {
        slide.classList.remove('hidden');
                } else {
        slide.classList.add('hidden');
                }
            });
        }




    const counters = [
    {id: 'counter1', target: 100, prefix: '+' },
    {id: 'counter2', target: 806, prefix: '+' },
    {id: 'counter3', target: 13, prefix: '+' },
    {id: 'counter4', target: 109, prefix: '+' },
    ];

        // Function to start counter animations
        counters.forEach(counter => {
            const element = document.getElementById(counter.id);
    let currentValue = 0;
    const increment = Math.ceil(counter.target / 50); // Adjust increment speed

            const updateCounter = () => {
                if (currentValue < counter.target) {
        currentValue += increment;
    element.textContent = currentValue + counter.prefix;
    setTimeout(updateCounter, 30); // Adjust update speed
                } else {
        element.textContent = counter.target + counter.prefix; // Set final target value
                }
            };

    // Start animation on page load
    updateCounter();

        });
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,  // Adjust to show more slides at a time
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000, // Autoplay delay in ms
    disableOnInteraction: false,
            },
    pagination: {
        el: '.swiper-pagination',
    clickable: true,
            },
    navigation: {
        nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
            },
    breakpoints: {

        640: {slidesPerView: 2 },
    1024: {slidesPerView: 3 },
    1280: {slidesPerView: 4 },
            }
        });
