import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Effect 1: Floating Elements (Rise Up)
gsap.utils.toArray('.float-up').forEach(element => {
  gsap.fromTo(element, 
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
        markers: false
      }
    }
  );
});

// Effect 2: Parallax Backgrounds
gsap.utils.toArray('.parallax-bg').forEach(bg => {
    // Note: Applying to the background element inside or the section itself
    // For this simple implementation, if the section has a bg image, we might need a wrapper.
    // In our HTML, .parallax-bg is the section. We'll animate the background-position or a child.
    // Let's assume .hero-fullscreen has .video-bg child to parallax.
    const bgChild = bg.querySelector('.video-bg');
    if (bgChild) {
        gsap.to(bgChild, {
            yPercent: 30, // move down slower
            ease: 'none',
            scrollTrigger: {
            trigger: bg,
            start: 'top top',
            end: 'bottom top',
            scrub: true
            }
        });
    }
});

// Effect 3: Staggered Text Animations
const textLines = gsap.utils.toArray('.text-reveal');
textLines.forEach(line => {
    // Split text or just animate the block
    gsap.from(line, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: line,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Effect 4: 3D Card Tilt
const cards = document.querySelectorAll('.tilt-card');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (inverted for typical 3D feel)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((centerX - x) / centerX) * -10;
    
    gsap.to(card, {
      duration: 0.5,
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      ease: 'power2.out'
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      ease: 'power2.out'
    });
  });
});

// Effect 5: Scale on Scroll
gsap.utils.toArray('.scale-reveal').forEach(element => {
  gsap.fromTo(element,
    {
      scale: 0.8,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1
      }
    }
  );
});

// Stats Counter
gsap.utils.toArray('.stat-item').forEach(stat => {
    const numberEl = stat.querySelector('.number');
    const target = parseInt(stat.getAttribute('data-count'));
    
    ScrollTrigger.create({
        trigger: stat,
        start: 'top 80%',
        once: true,
        onEnter: () => {
            gsap.to(numberEl, {
                innerHTML: target,
                duration: 2,
                snap: { innerHTML: 1 },
                ease: "power1.out"
            });
        }
    });
});

// Fetch and display prompt
async function loadPrompt() {
    try {
        const response = await fetch('/tasks.md');
        if (response.ok) {
            const text = await response.text();
            document.querySelector('.prompt-content').textContent = text;
        } else {
            // If fetching tasks.md fails (in production it might move), try alternative or partial
            document.querySelector('.prompt-content').textContent = "Could not load prompt.";
        }
    } catch (e) {
        console.error("Error loading prompt:", e);
        document.querySelector('.prompt-content').textContent = "Error loading prompt.";
    }
}
loadPrompt();
