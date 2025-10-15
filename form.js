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
document.getElementById('joinWaitlistBtn')?.addEventListener('click', () => {
    const target = document.getElementById('waitlist');
    if (target) smoothScrollTo(target);
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

// Branch Card Modal System
const modalData = {
    'academy-card': {
        title: 'WRK Academy',
        icon: '🎓',
        description: 'Master the skills that matter with comprehensive courses and workshops designed by industry leaders. Our academy offers cutting-edge curriculum in entrepreneurship, digital marketing, leadership, and innovation.',
        features: [
            'Expert-led masterclasses and workshops',
            'Interactive online courses with certifications',
            'Live Q&A sessions with industry leaders',
            'Exclusive learning materials and resources',
            'Peer-to-peer learning communities',
            'Career advancement opportunities'
        ],
        tiers: [
            { name: 'Starter', price: 'Free Access' },
            { name: 'Pro', price: '$99/month' },
            { name: 'Elite', price: '$299/month' },
            { name: 'Core', price: '$599/month' },
            { name: 'Prime', price: '$999/month' },
            { name: 'Black', price: 'Invitation Only' }
        ]
    },
    'creator-card': {
        title: 'Creators Circle',
        icon: '🎨',
        description: 'Connect with like-minded creators in an exclusive community designed for collaboration and growth. Share ideas, work on projects together, and build meaningful professional relationships.',
        features: [
            'Private creator community access',
            'Collaboration matching system',
            'Project showcase opportunities',
            'Creative challenges and competitions',
            'Skill-sharing workshops',
            'Brand partnership opportunities'
        ],
        tiers: [
            { name: 'Starter', price: 'Free Access' },
            { name: 'Pro', price: '$149/month' },
            { name: 'Elite', price: '$399/month' },
            { name: 'Core', price: '$799/month' },
            { name: 'Prime', price: '$1299/month' },
            { name: 'Black', price: 'Invitation Only' }
        ]
    },
    'founder-card': {
        title: 'Founders',
        icon: '🚀',
        description: 'Elite community for serious entrepreneurs. Access mentorship, funding opportunities, and strategic partnerships that can transform your business trajectory.',
        features: [
            'Mentor matching with successful founders',
            'Investor introduction programs',
            'Strategic partnership facilitation',
            'Exclusive founder-only events',
            'Due diligence support',
            'Exit strategy guidance'
        ],
        tiers: [
            { name: 'Pro', price: '$499/month' },
            { name: 'Elite', price: '$999/month' },
            { name: 'Core', price: '$1999/month' },
            { name: 'Prime', price: '$3999/month' },
            { name: 'Black', price: 'Invitation Only' }
        ]
    },
    'pulse-card': {
        title: 'The Pulse',
        icon: '📰',
        description: 'Stay ahead with our curated newsletter featuring industry insights, trends, and exclusive member updates. Get the information that matters delivered directly to your inbox.',
        features: [
            'Weekly industry trend analysis',
            'Exclusive member spotlights',
            'Early access to WRK events',
            'Investment and opportunity alerts',
            'Expert commentary and insights',
            'Personalized content recommendations'
        ],
        tiers: [
            { name: 'Free', price: 'Basic Newsletter' },
            { name: 'Pro', price: '$49/month' },
            { name: 'Premium', price: '$149/month' }
        ]
    },
    'sponsor-card': {
        title: 'Sponsors & Partners',
        icon: '🤝',
        description: 'Partner with brands and innovators building the next generation. Premium sponsorship opportunities with co-marketing benefits and direct access to our community.',
        features: [
            'Brand exposure to premium audience',
            'Co-marketing campaign opportunities',
            'Event sponsorship packages',
            'Community partnership programs',
            'Custom activation opportunities',
            'ROI tracking and analytics'
        ],
        tiers: [
            { name: 'Bronze', price: '$25,000' },
            { name: 'Silver', price: '$50,000' },
            { name: 'Gold', price: '$100,000' },
            { name: 'Platinum', price: '$250,000' },
            { name: 'Diamond', price: 'Custom' }
        ]
    }
};

// Create and append modal to body
function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'branch-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title"></h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="modal-icon"></div>
                <div class="modal-description"></div>
                <div class="modal-features">
                    <h4>What's Included:</h4>
                    <ul></ul>
                </div>
                <div class="modal-tiers">
                    <h4>Available Tiers:</h4>
                    <div class="tier-grid"></div>
                </div>
                <div class="modal-cta">
                    <a href="#waitlist" class="modal-btn">Join Waitlist</a>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

// Initialize modal system
document.addEventListener('DOMContentLoaded', () => {
    const modal = createModal();
    const modalOverlay = document.getElementById('branch-modal');
    const modalContent = modalOverlay.querySelector('.modal-content');
    const closeBtn = modalOverlay.querySelector('.modal-close');

    // Add click listeners to branch cards
    document.querySelectorAll('.branch-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            
            const cardClass = [...card.classList].find(cls => cls.endsWith('-card'));
            const data = modalData[cardClass];
            
            if (data) {
                // Populate modal content
                modalOverlay.querySelector('.modal-title').textContent = data.title;
                modalOverlay.querySelector('.modal-icon').textContent = data.icon;
                modalOverlay.querySelector('.modal-description').textContent = data.description;
                
                // Populate features
                const featuresList = modalOverlay.querySelector('.modal-features ul');
                featuresList.innerHTML = '';
                data.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });
                
                // Populate tiers
                const tierGrid = modalOverlay.querySelector('.tier-grid');
                tierGrid.innerHTML = '';
                data.tiers.forEach(tier => {
                    const tierDiv = document.createElement('div');
                    tierDiv.className = 'tier-item';
                    tierDiv.innerHTML = `
                        <div class="tier-name">${tier.name}</div>
                        <div class="tier-price">${tier.price}</div>
                    `;
                    tierGrid.appendChild(tierDiv);
                });
                
                // Show modal
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal functionality
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Smooth scroll to waitlist when clicking modal CTA
    modalOverlay.querySelector('.modal-btn').addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
        const target = document.getElementById('waitlist');
        if (target) smoothScrollTo(target);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const newsletterBtn = document.querySelector('.newsletter-btn');
    const newsletterInput = document.querySelector('.newsletter-input');
    
    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = newsletterInput.value.trim();
            
            // Basic email validation
            if (!email || !email.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Show loading state
            const originalText = this.textContent;
            this.textContent = 'Subscribing...';
            this.disabled = true;
            
            // Create form data with just email
            const formData = new FormData();
            formData.append('email', email);
            
            // Convert to URL encoded format
            const urlEncodedData = new URLSearchParams();
            urlEncodedData.append('email', email);
            
            // Submit to backend
            fetch('https://wrkacademy-backend-production.up.railway.app/application', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlEncodedData.toString()
            })
            .then(response => response.json())
            .then(result => {
                console.log('Newsletter subscription successful:', result);
                
                // Store newsletter subscription data
                const subscriptionData = {
                    email: email,
                    type: 'newsletter',
                    subscribedAt: new Date().toLocaleString(),
                    status: result.status || 'subscribed'
                };
                
                localStorage.setItem('wrkNewsletterSubscription', JSON.stringify(subscriptionData));
                
                // Redirect to confirmation page
                window.location.href = 'pages/confirmation.html';
            })
            .catch(error => {
                console.error('Newsletter subscription error:', error);
                
                // Still store basic data and redirect
                const subscriptionData = {
                    email: email,
                    type: 'newsletter',
                    subscribedAt: new Date().toLocaleString(),
                    status: 'subscribed'
                };
                
                localStorage.setItem('wrkNewsletterSubscription', JSON.stringify(subscriptionData));
                
                // Redirect to confirmation page
                window.location.href = '/confirmation';
            })
            .finally(() => {
                // Restore button state (though user will be redirected)
                this.textContent = originalText;
                this.disabled = false;
            });
        });
        
        // Also handle Enter key press in email input
        newsletterInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                newsletterBtn.click();
            }
        });
    }
});
