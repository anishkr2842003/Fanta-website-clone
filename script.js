var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true
}})

tl.to("#fanta",{
    width: "30%",
    top: "95%",
    left:"10.5%"
}, 'orange')

tl.to("#orange_cut",{
    top:"156%",
    left:"22%"
}, 'orange')

tl.to("#orange",{
    width: "15%",
    top: "172%",
    right: "3%"
}, 'orange')

tl.to("#leaf1",{
    zIndex: "9",
    rotate: "360deg",
    top: "105%",
    left: "13%"
}, 'orange')

tl.to("#leaf2",{
    zIndex: "9",
    rotate: "360deg",
    top: "110%",
    right: "13%"
}, 'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true
}})



tl2.from("#pineapple_cut",{
    opacity: 0,
    left: "-100%",
    top: "110%"
}, 'pineapple_cut')

tl2.from(".pineapple",{
    opacity: 0,
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'pineapple_cut')

tl2.from("#strawberry_cut",{
    opacity: 0,
    right: "-100%",
    top: "110%"
}, 'pineapple_cut')

tl2.from(".strawberry",{
    opacity: 0,
    rotate: "90deg",
    right: "-100%",
    top: "110%"
}, 'pineapple_cut')

tl2.to("#fanta",{
    width: "420px",
    top: "209%",
    left: "38%"
}, 'pineapple_cut')

tl2.to("#orange_cut",{
    width: "420px",
    top: "211.5%",
    left: "38%"
}, 'pineapple_cut')

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });

  Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });