// window.addEventListener("load", () => {
//     const path = document.querySelector("svg path");
  
//     path.addEventListener("animationend", () => {
//       const texts = document.querySelectorAll("#tagline .word");
  
//       gsap.to(texts[0], {
//         opacity: 1,
//         scale: 1,
//         y: 0,
//         duration: 1,
//         delay: 0.3
//       });
  
//       gsap.to(texts[1], {
//         opacity: 1,
//         scale: 1,
//         y: 0,
//         duration: 1,
//         delay: 1.5
//       });
  
//       gsap.to(texts[2], {
//         opacity: 1,
//         scale: 1,
//         y: 0,
//         duration: 1,
//         delay: 2.7,
//         onComplete: () => {
//           // Hide loader, show main
//           gsap.to("#loader-container", {
//             y: "-100%",
//             duration: 1,
//             ease: "power2.inOut"
//           });
  
//           gsap.to("#main-content", {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//             delay: 0.5
//           });
//         }
//       });
//     });
//   });





window.addEventListener("load", () => {
  document.body.style.overflow = "hidden"; // 🔒 prevent scroll

  const path = document.querySelector("svg path");

  // Optional: If SVG animation is triggered by CSS, make sure its duration matches (2s in this example)

  path.addEventListener("animationend", () => {
    const texts = document.querySelectorAll("#tagline .word");

    // First word appears at ~0.3s after path ends
    gsap.to(texts[0], {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      delay: 0.3
    });

    // Second word after ~1s
    gsap.to(texts[1], {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      delay: 1.2
    });

    // Third word after ~1.9s
    gsap.to(texts[2], {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      delay: 2.1,
      onComplete: () => {
        // ⬇ Smoothly slide out loader
        gsap.to("#loader-container", {
          y: "-100%",
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            // ✅ Remove loader, allow scroll
            document.getElementById("loader-container").style.display = "none";
            document.body.style.overflow = "auto";
            window.scrollTo(0, 0);
          }
        });

        // ⬇ Show main content
        gsap.to("#main-content", {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3
        });
      }
    });
  });
});

  const hobbies = [
    {
      iconClass: 'fas fa-chess',
      text: 'Chess Enthusiast',
      subtitle: 'Learning new tactics whenever I can.'
    },
    {
      iconClass: 'fas fa-book-open',
      text: 'Writing Novels',
      subtitle: 'Working on my novel since 2020.'
    },
    {
      iconClass: 'fas fa-language',
      text: 'Learning French',
      subtitle: 'Bonjour, bienvenue sur mon site Web..'
    },
    {
      iconClass: 'fas fa-code',
      text: 'Coding Geek',
      subtitle: 'Building creative solutions with code.'
    }
  ];
  
  const iconEl = document.getElementById('hobby-icon');
  const textEl = document.getElementById('hobby-text');
  const subtitleEl = document.getElementById('hobby-subtitle');
  
  let currentIndex = 0;
  
  function rotateHobby() {
    // Animate current hobby up and fade out
    const timeline = gsap.timeline();
  
    timeline.to('.hobby-rotator', {
      duration: 0.6,
      y: -30,
      opacity: 0,
      ease: 'power1.in'
    });
  
    timeline.to('.hobby-subtitle', {
      duration: 0.6,
      y: -30,
      opacity: 0,
      ease: 'power1.in',
      onComplete: () => {
        // Update hobby content
        currentIndex = (currentIndex + 1) % hobbies.length;
        const hobby = hobbies[currentIndex];
  
        iconEl.className = hobby.iconClass;
        textEl.textContent = hobby.text;
        subtitleEl.textContent = hobby.subtitle;
  
        // Reset position and opacity below before animating back in
        gsap.set(['.hobby-rotator', '.hobby-subtitle'], { y: 30, opacity: 0 });
      }
    });
  
    // Animate new hobby back in from below
    timeline.to(['.hobby-rotator', '.hobby-subtitle'], {
      duration: 0.6,
      y: 0,
      opacity: 1,
      ease: 'power1.out',
      stagger: 0.2
    });
  
    return timeline;
  }
  
  // Start the rotation and repeat every 4 seconds
  rotateHobby();
  setInterval(rotateHobby, 2500);
  


