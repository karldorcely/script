 document.addEventListener('DOMContentLoaded', () => {
            const overlay = document.getElementById('intro-overlay');
            const heroSection = document.getElementById('hero');
            
            // Ensure overlay is visible initially
            if (overlay) {
                console.log('Starting cinematic intro...');
                
                // Start intro sequence (faster timing)
                setTimeout(() => {
                    overlay.classList.add('signature-blur');
                    console.log('Phase 1: Signature blur');
                }, 800);
                
                setTimeout(() => {
                    overlay.classList.add('clones-appear');
                    console.log('Phase 2: Clones appear');
                }, 1600);
                
                setTimeout(() => {
                    overlay.classList.add('form-wrk');
                    console.log('Phase 3: Form WRK letters');
                }, 2400);
                
                setTimeout(() => {
                    overlay.classList.add('fade-out');
                    heroSection.classList.add('reveal');
                    console.log('Phase 4: Fade out to hero');
                }, 3500);
                
                setTimeout(() => {
                    overlay.style.display = 'none';
                    console.log('Cinematic complete');
                }, 4500);
            } else {
                console.error('Intro overlay not found!');
            }
        });

        // Enhanced smooth scrolling with smooth easing
        function smoothScrollTo(target, duration = 1000) {
            const targetPosition = target.offsetTop - 50;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;

            // Smooth easing function (easeInOutCubic)
            function easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                const easeProgress = easeInOutCubic(progress);
                
                window.scrollTo(0, startPosition + (distance * easeProgress));
                
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);
        }

        // Smooth scroll to form with bounce
        document.getElementById('joinWaitlistBtn').addEventListener('click', () => {
            const target = document.getElementById('waitlist');
            smoothScrollTo(target);
        });

        // Add smooth scrolling to all internal links
        document.addEventListener('DOMContentLoaded', () => {
            // Create intersection observer for scroll animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe all sections for scroll animations (except hero which should be visible immediately)
            document.querySelectorAll('.content-section:not(#hero)').forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
                observer.observe(section);
            });
        });

        // Floating elements animation
        const floatingElements = document.querySelectorAll('.float-element');
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.5}s`;
        });