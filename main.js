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
  const bgChild = bg.querySelector('.video-bg');
  if (bgChild) {
    gsap.to(bgChild, {
      yPercent: 30,
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

// Background Music Control
let bgMusic = null;
let isMuted = false;

function initBackgroundMusic() {
  // Create audio element
  bgMusic = new Audio('/assets/music/deep_bg_music.mp3');
  bgMusic.loop = true;
  bgMusic.volume = 0.3; // Set to 30% volume for background ambience

  // Try to play (may be blocked by browser autoplay policy)
  const playPromise = bgMusic.play();

  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log('Autoplay prevented. Music will start on first user interaction.');
      // Add one-time click listener to start music
      document.addEventListener('click', () => {
        if (bgMusic && !isMuted) {
          bgMusic.play().catch(e => console.log('Could not play audio:', e));
        }
      }, { once: true });
    });
  }
}

// Mute/Unmute toggle function
window.toggleMusic = function () {
  const musicBtn = document.getElementById('music-toggle');

  if (!bgMusic) {
    initBackgroundMusic();
  }

  if (isMuted) {
    // Unmute
    bgMusic.play();
    isMuted = false;
    if (musicBtn) {
      musicBtn.innerHTML = '🔊';
      musicBtn.setAttribute('aria-label', 'Mute music');
    }
  } else {
    // Mute
    bgMusic.pause();
    isMuted = true;
    if (musicBtn) {
      musicBtn.innerHTML = '🔇';
      musicBtn.setAttribute('aria-label', 'Unmute music');
    }
  }
}

// Timeline Horizontal Scroll Enhancement
const timelineContainer = document.querySelector('.timeline-container');
const timelineWrapper = document.querySelector('.timeline-wrapper');

if (timelineContainer) {


  // Add touch/drag scrolling for better mobile experience
  let isDown = false;
  let startX;
  let scrollLeft;

  timelineContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    timelineContainer.classList.add('dragging');
    startX = e.pageX - timelineContainer.offsetLeft;
    scrollLeft = timelineContainer.scrollLeft;
  });

  timelineContainer.addEventListener('mouseleave', () => {
    isDown = false;
    timelineContainer.classList.remove('dragging');
  });

  timelineContainer.addEventListener('mouseup', () => {
    isDown = false;
    timelineContainer.classList.remove('dragging');
  });

  timelineContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - timelineContainer.offsetLeft;
    const walk = (x - startX) * 2;
    timelineContainer.scrollLeft = scrollLeft - walk;
  });

  // Auto-scroll to Current Year
  const currentYear = new Date().getFullYear();
  // Find event with current year or closest future year if exact match not found
  let targetEvent = document.querySelector(`.timeline-event[data-year="${currentYear}"]`);

  // Fallback to the last event if current year is beyond timeline
  if (!targetEvent) {
    const events = document.querySelectorAll('.timeline-event');
    if (events.length > 0) targetEvent = events[events.length - 1];
  }

  if (targetEvent) {
    // Scroll to center the event
    // We need to wait a brief moment for layout to stabilize
    setTimeout(() => {
      const containerWidth = timelineContainer.clientWidth;
      const eventLeft = targetEvent.offsetLeft;
      const eventWidth = targetEvent.offsetWidth;

      // Calculate scroll position to center the element
      const scrollPos = eventLeft - (containerWidth / 2) + (eventWidth / 2);

      timelineContainer.scrollTo({
        left: scrollPos,
        behavior: 'smooth'
      });
    }, 500); // 500ms delay to ensure styles/layout are applied
  }
}

// Timeline Events Animation on Scroll into View
gsap.utils.toArray('.timeline-event').forEach((event, i) => {
  gsap.fromTo(event,
    {
      opacity: 0,
      y: 30
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: i * 0.05, // Stagger effect based on index
      scrollTrigger: {
        trigger: '#timeline',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    }
  );
});

// Initialize music on page load
document.addEventListener('DOMContentLoaded', () => {
  initBackgroundMusic();
});
