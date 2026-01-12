// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade In Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all feature cards and system cards
document.querySelectorAll('.feature-card, .system-card, .command-card, .config-card, .tech-card, .roadmap-item').forEach(element => {
    observer.observe(element);
});

// Highlight Navigation Item on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Copy to Clipboard for Code Blocks
document.querySelectorAll('pre').forEach(pre => {
    const codeButton = document.createElement('button');
    codeButton.className = 'copy-button';
    codeButton.textContent = 'Copy';
    codeButton.style.cssText = `
        position: absolute;
        top: 5px;
        right: 5px;
        background: var(--primary-color);
        color: var(--dark-bg);
        border: none;
        padding: 0.3rem 0.6rem;
        border-radius: 0.2rem;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 600;
        opacity: 0;
        transition: opacity 0.3s;
    `;
    
    pre.parentElement.style.position = 'relative';
    pre.parentElement.appendChild(codeButton);
    
    pre.parentElement.addEventListener('mouseenter', () => {
        codeButton.style.opacity = '1';
    });
    
    pre.parentElement.addEventListener('mouseleave', () => {
        codeButton.style.opacity = '0';
    });
    
    codeButton.addEventListener('click', () => {
        const code = pre.innerText;
        navigator.clipboard.writeText(code).then(() => {
            codeButton.textContent = 'Copied!';
            setTimeout(() => {
                codeButton.textContent = 'Copy';
            }, 2000);
        });
    });
});

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
    }
`;
document.head.appendChild(style);

// Season Icon Animation (for logo)
const heroLogo = document.querySelector('.hero-logo');
if (heroLogo) {
    heroLogo.style.animation = 'float 3s ease-in-out infinite';
}

// Mobile Menu Toggle (for future mobile menu implementation)
const navMenu = document.querySelector('.nav-menu');
let isScrolled = false;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        if (!isScrolled) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
            isScrolled = true;
        }
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        isScrolled = false;
    }
});

// Parallax Effect for Hero Section
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        if (scrollPosition < 800) {
            heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });
}

// Temperature Display Update
function updateTemperatureDisplay() {
    const temps = [
        { season: 'Spring', value: '14°C', range: '5-23°C' },
        { season: 'Summer', value: '32°C', range: '25-40°C' },
        { season: 'Autumn', value: '15°C', range: '5-25°C' },
        { season: 'Winter', value: '-2°C', range: '-10-5°C' }
    ];
    
    // This could be expanded with real-time updates
    console.log('Temperature data ready:', temps);
}

document.addEventListener('DOMContentLoaded', updateTemperatureDisplay);

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Count Up Animation for Stats (if added)
function animateCountUp(element, start, end, duration = 2000) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Lazy Load Images (if images are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console Easter Egg
console.log('%c🌍 BetterSeason Plugin', 'font-size: 20px; color: #2ecc71; font-weight: bold;');
console.log('%cAdvanced Realistic Seasons Plugin for Minecraft', 'font-size: 14px; color: #3498db;');
console.log('%cAuthor: epic_boat | Version: 1.0.0', 'font-size: 12px; color: #95a5a6;');
console.log('Check out the plugin at: https://github.com/epic_boat/BetterSeason');

// Performance Monitoring
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    });
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === '/') {
        e.preventDefault();
        document.querySelector('.nav-menu').focus();
    }
});

// Print Styles
const printStyle = document.createElement('style');
printStyle.textContent = `
    @media print {
        .navbar, .footer, .btn {
            display: none;
        }
        body {
            background-color: white;
            color: black;
        }
        section {
            page-break-inside: avoid;
        }
    }
`;
document.head.appendChild(printStyle);
