
/**Creating a new timeline with ScrollTrigger */
var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"38% 50%",      // in start and end we have two value so first one is for the triggered element. like in this example we have
    end:"100% 50%",      // triggered '#main' section, so the first value as 38% will be the 38% of '#main' from top, and second is for
    scrub:2,            //  the screen, to mark the start point, then start pass through screen start, the animation willl trigger.
    pin:true
}});
tl
.to(".about",{
    top: "-5%",
},'a')               // 'a' has given to do to play the timeline at the same time.
.to("#card1",{
    top: "35%",
},'a')
.to("#card2",{
    top: "130%"    // on place of card one, which is 130% from top
},'a')
.to("#card2",{
    top: "42%"
},'b')
.to("#card1",{
    width: "65%",
    height: "65vh"
},'b')
.to("#card3",{
    top: "130%"
}, 'b')
.to("#card3",{
    top: "50%"
}, 'c')
.to("#card2",{
    width: "70%",
    height: "70vh"
},'c')