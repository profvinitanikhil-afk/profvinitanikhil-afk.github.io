/* ==========================================================================
   JavaScript Functionality for Course Website
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Navigation Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Navigation Active State on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Quiz Answer Toggle Functionality
    const toggleButtons = document.querySelectorAll('.toggle-ans-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answerDiv = button.nextElementSibling;
            if (answerDiv.style.display === 'block') {
                answerDiv.style.display = 'none';
                button.textContent = 'Show Answer';
            } else {
                answerDiv.style.display = 'block';
                button.textContent = 'Hide Answer';
            }
        });
    });

    // 4. Quiz Unit Filter System
    const filterBtns = document.querySelectorAll('.filter-btn');
    const quizCards = document.querySelectorAll('.quiz-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterUnit = btn.getAttribute('data-unit');

            quizCards.forEach(card => {
                if (filterUnit === 'all' || card.getAttribute('data-unit') === filterUnit) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

});