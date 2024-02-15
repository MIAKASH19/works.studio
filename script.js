const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

let backbtn = document.querySelector(".backbutton button")
let downbtn = document.querySelector(".btn-scroll-down")

backbtn.addEventListener("click", function () {
  scroll.scrollTo(0)
})
downbtn.addEventListener("click", function () {
  scroll.scrollTo("bottom")
})

const LoaderAnimation = () => {
  let tl = gsap.timeline();

  tl.to(".yellow-div1", {
    top: "-100%",
    duration: 0.4,
    delay: 0.5,
    ease: "expo.out",
  });
  tl.to(".loader h1", {
    display: "block",
  });
  tl.from(
    ".yellow-div2",
    {
      top: "100%",
      delay: 0.2,
      duration: 0.3,
    },
    "anim"
  );
  tl.to(
    ".loader h1",
    {
      color: "black",
      delay: 0.2,
    },
    "anim"
  );
  tl.to(
    ".loader",
    {
      display: "none",
    },
    "anim2"
  );
  tl.to(
    ".header",
    {
      top: 0,
      delay: -0.2,
      duration: 1,
    },
    "anim2"
  );
};
LoaderAnimation();

function page2Animation(){
  let elems = document.querySelectorAll(".elem")
  let page2 = document.querySelector(".page2")

elems.forEach(function(ele){
  ele.addEventListener("mouseenter", function(){
    let attr = ele.getAttribute("data-img")
    console.log(attr);
    page2.style.backgroundImage = `url(${attr})`
  })
  ele.addEventListener("mouseleave", function(){
    page2.style.backgroundImage = `url()`
  })
})
}
page2Animation()