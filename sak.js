function homepageAnimation() {
  gsap.set(".slidesm", { scale: 8 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 1
    }
  });

  tl.to(".vdodiv", { '--clip': "0%", ease: "power2.inOut" }, 'a')
    .to(".slidesm", { scale: 1, ease: "power2.inOut" }, 'a')
    .to(".lft", { xPercent: -10, stagger: 0.03, ease: "power4.inOut" }, 'b')
    .to(".rgt", { xPercent: 10, stagger: 0.03, ease: "power4.inOut" }, 'b');

  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
    xPercent: -100 * (document.querySelectorAll(".slide").length - 1),
    ease: "power4.inOut"
  });
}

function realAnimation() {
  document.querySelectorAll(".listelem").forEach(function(el){
    el.addEventListener('mousemove', function(Dets){
      gsap.to(this.querySelector(".picture"), {
        opacity: 1, 
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, Dets.clientX),
        ease: "power4.inOut", 
        duration: .1
      });
    });

    el.addEventListener('mouseleave', function(){
      gsap.to(this.querySelector(".picture"), {
        opacity: 0, 
        ease: "power4.inOut", 
        duration: .5
      });
    });
  });
}

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function capAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 10%",
      end: "bottom top",
      scrub: 1
    },
    y: 0,
    ease: "power4.inOut"
  });
}

document.querySelectorAll(".section").forEach(function(e){
  ScrollTrigger.create({
    trigger: e,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: function(){
      document.body.setAttribute("theme", e.dataset.color);
    },
    onEnterBack: function(){
      document.body.setAttribute("theme", e.dataset.color);
    }
  });
});

function btno() {
  const btn = document.querySelector(".btnoo");
  const overlay = btn.querySelector("div.absolute");
  const text = btn.querySelector("span");

  btn.addEventListener("mouseenter", () => {
    // Overlay slide with skew
    gsap.to(overlay, {
      scaleX: 1,
      transformOrigin: "left center",
      skewX: 10,
      duration: 0.5,
      ease: "power3.out"
    });

    // Text move + color + scale + rotation + bounce
    gsap.to(text, {
      x: 100,
      color: "#000000",
      scale: 1.2,
      rotation: 2,
      duration: 0.5,
      ease: "back.out(2)"
    });
  });

  btn.addEventListener("mouseleave", () => {
    // Overlay shrink back smoothly
    gsap.to(overlay, {
      scaleX: 0,
      transformOrigin: "right center",
      skewX: 0,
      duration: 0.6,
      ease: "power3.inOut"
    });

    // Text back to original position smoothly
    gsap.to(text, {
      x: 0,
      color: "#0a0909ff",
      scale: 1,
      rotation: 0,
      duration: 0.6,
      ease: "power3.inOut"
    });
  });
}

btno(); 
capAnimation();
homepageAnimation();
realAnimation();
