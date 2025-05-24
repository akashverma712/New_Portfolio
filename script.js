window.addEventListener("load", () => {
  document.body.style.overflow = "hidden";

  const path = document.querySelector("svg path");

  path.addEventListener("animationend", () => {
    const texts = document.querySelectorAll("#tagline .word");

    
    gsap.to(texts[0], {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      delay: 0.1
    });

   
    gsap.to(texts[1], {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      delay: 0.6
    });

    
    gsap.to(texts[2], {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      delay: 1.1,
      onComplete: () => {
       
        gsap.to("#loader-container", {
          y: "-100%",
          duration: 0.7,
          ease: "power2.inOut",
          onComplete: () => {
            document.getElementById("loader-container").style.display = "none";
            document.body.style.overflow = "auto";
            window.scrollTo(0, 0);
          }
        });

      
        gsap.to("#main-content", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1
        });
      }
    });
  });
});


  const hobbies = [
    {
      iconClass: 'fas fa-chess',
      text: 'Chess Enthusiast',
      subtitle: 'Learning new tactics and openings whenever I can.'
    },
    {
      iconClass: 'fas fa-book-open',
      text: 'Writing Novels',
      subtitle: 'Working on my novel cum passion since 2020.'
    },
    {
      iconClass: 'fas fa-language',
      text: 'Learning French',
      subtitle: 'Bonjour, bienvenue sur mon merveilleux site Web'
    },
    {
      iconClass: 'fas fa-code',
      text: 'Coding Geek',
      subtitle: 'Building creative and innovative solutions with code.'
    }
  ];
  
  const iconEl = document.getElementById('hobby-icon');
  const textEl = document.getElementById('hobby-text');
  const subtitleEl = document.getElementById('hobby-subtitle');
  
  let currentIndex = 0;
  
  function rotateHobby() {
   
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
       
        currentIndex = (currentIndex + 1) % hobbies.length;
        const hobby = hobbies[currentIndex];
  
        iconEl.className = hobby.iconClass;
        textEl.textContent = hobby.text;
        subtitleEl.textContent = hobby.subtitle;
  
       
        gsap.set(['.hobby-rotator', '.hobby-subtitle'], { y: 30, opacity: 0 });
      }
    });
  
   
    timeline.to(['.hobby-rotator', '.hobby-subtitle'], {
      duration: 0.6,
      y: 0,
      opacity: 1,
      ease: 'power1.out',
      stagger: 0.2
    });
  
    return timeline;
  }
  
  
  rotateHobby();
  setInterval(rotateHobby, 2500);
  
  window.addEventListener("load", () => {
    setTimeout(() => {
      const tl = gsap.timeline();
  
    
      tl.from(".tagline1", {
    
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
  
     
      .from(".name ", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
  

      .from(".location", {
      
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
  
  
      .from(".btn", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4")
  
     
      .from(".resume-button", {
        
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.3")
  
   
      .from(".social-icons a", {
        
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.5");
      
    }, 3900);
  });
  

