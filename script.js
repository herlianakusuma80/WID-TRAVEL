const fades = document.querySelectorAll('.fade');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
    }, { threshold: 0.2 });
    fades.forEach(el => obs.observe(el));

    function scrollToContact() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }

    function openWA() {
      window.open('https://wa.me/6285725255200', '_blank');
    }

    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial');
    let index = 0;
    let startX = 0;
    let isDragging = false;
    let autoSlide;

    function updateSlide() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function startAutoSlide() {
      autoSlide = setInterval(() => {
        index = (index + 1) % slides.length;
        updateSlide();
      }, 4000);
    }

    function stopAutoSlide() {
      clearInterval(autoSlide);
    }

    startAutoSlide();

    track.addEventListener('touchstart', e => {
      stopAutoSlide();
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    track.addEventListener('touchmove', e => {
      if (!isDragging) return;
      const diff = startX - e.touches[0].clientX;

      if (diff > 60) {
        index = Math.min(index + 1, slides.length - 1);
        updateSlide();
        isDragging = false;
        startAutoSlide();
      }

      if (diff < -60) {
        index = Math.max(index - 1, 0);
        updateSlide();
        isDragging = false;
        startAutoSlide();
      }
    });

    track.addEventListener('touchend', () => {
      isDragging = false;
      startAutoSlide();
    });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
