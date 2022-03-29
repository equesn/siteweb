




  container = document.getElementById("main");

  const text = new Blotter.Text("projets", {
    family: "Space Grotesk",
    size: 120,
    fill: "black"

  });

  let material = new Blotter.LiquidDistortMaterial();

  material.uniforms.uSpeed.value = 0.3;
  material.uniforms.uVolatility.value = 0.1;
  material.uniforms.uSeed.value = 0.1;

  let blotter = new Blotter(material, {
    texts: text
  });

  let scope = blotter.forText(text);

  scope.appendTo(container);






  (function () {
    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');
    const animateit = function (e) {
      const span = this.querySelector('span');
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 25,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;
      span.style.transform = `translate(${xMove}px, ${yMove}px)`;
      if (e.type === 'mouseleave') span.style.transform = '';
    };
    const editCursor = e => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);
  })();




  const allcontainer = gsap.utils.toArray(".container-item");
  const venueImageWrap = document.querySelector(".container-img-wrap");
  const venueImage = document.querySelector(".container-img");
  

  function initcontainer() {
    allcontainer.forEach((link) => {
      link.addEventListener("mouseenter", venueHover);
      link.addEventListener("mouseleave", venueHover);
      link.addEventListener("mousemove", moveVenueImage);
    });
  }

  function moveVenueImage(e) {
    let xpos = e.clientX;
    let ypos = e.clientY;
    const tl = gsap.timeline();
    tl.to(venueImageWrap, {
      x: xpos,
      y: ypos,
    });
  }

  function venueHover(e) {
    if (e.type === "mouseenter") {
      const targetImage = e.target.dataset.img;

      const tl = gsap.timeline();
      tl.set(venueImage, {
        backgroundImage: `url(${targetImage})`,
      }).to(venueImageWrap, {
        duration: 0.5,
        autoAlpha: 1,
      });
    } else if (e.type === "mouseleave") {
      const tl = gsap.timeline();
      tl.to(venueImageWrap, {
        duration: 0.5,
        autoAlpha: 0,
      });
    }
  }

  function init() {
    initcontainer();
  }

  window.addEventListener("load", function () {
    init();
  });

  tl = new TimelineMax();

  tl.from(".navbar > div", 1.6, {
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut,
    delay: 0.6,
  });


  tl.staggerFrom(
    ".header > div",
    1,
    {
      opacity: 0,
      y: 60,
      ease: Power2.easeOut,
      delay: -1.4,
    },
    0.2
  );

