var tl = gsap.timeline()
var box = document.querySelectorAll(".box")

function NavAnim() {
    tl.from("._8pSp-", {
        // x: -300,
        y: -50,
        opacity: 0,
        duration: 1.3,
        ease: Power4,
        delay: .3,
        stagger: -.1,
    },'a')
    
    tl.from(".A-tags", {
        scaleY: 0,
        duration: 1.2,
        delay: .2,
        ease: "power4",
        stagger: .15
    },'a')
    
    tl.from(".Order-now", {
        scale: 0,
        duration: 2.5,
        delay: 1.2,
        opacity: 0,
        ease: "power4"
    },'a')

    document.querySelector(".Order-now")
    .addEventListener("mouseenter", function() {
        gsap.to(".Order-now-text1", {
            y: -18,
            duration: .3,
            ease: "none",
            stagger: .1
        })
    
        gsap.to(".Order-now-text2", {
            marginTop: "0px",
            duration:.3,
            ease: "none",
            stagger: .1
        })
    })
    document.querySelector(".Order-now")
    .addEventListener("mouseleave", function() {
        gsap.to(".Order-now-text1", {
            y: 0,
            duration: .3,
            ease: "none",
            stagger: .1,
        })
    
        gsap.to(".Order-now-text2", {
            marginTop: "25px",
            duration:.3,
            ease: "none",
            stagger: .1
        })
    })
    gsap.to(".nav", {
        y: -20,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".nav",
            scroller: "body",
            start: "top -2%",
            end: "top 10%",
            scrub: 1.2,
            ease: "power4"
        }
    })
    tl.to(".Order-Now-Masker", {
        width: "110px",
        duration: 2.5,
        delay: -1.1,
        ease: "power3"
    },'b')
    tl.to(".Order-btn", {
        scale: 1,
        duration: 2.5,
        delay: -.7,
        ease: "power4"
    },'b')
}

function HeroSectionAnim() {

    tl.from(".hero-text", {
        y: 20,
        opacity: 0,
        duration: 2.5,
        delay: .8,
        ease: "power4"
    }, 'a')
    
    tl.to(".quote-box", {
        top: "75%",
        duration: 1,
        ease: "power4"
    },'b')
    
    tl.from(".quote", {
        y: 22,
        opacity: 0,
        duration: 1.2,
        ease: "power4",
        delay: .3
    },'b')
    if(window.innerWidth > 380) {
        tl.to(".fresh-text-anim", {
            width: "100px",
            duration: 2.5,
            ease: "power4",
            delay: -.8
        },'b')
    } else {
        tl.to(".fresh-text-anim", {
            width: "180px",
            duration: 2.5,
            ease: "power4",
            delay: -.8
        },'b')
    }
    
    tl.from(".PNG", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        delay: -.8,
        ease: "power4"
    },'b')
    
    tl.to(".Burger", {
        opacity: 1,
        delay: .2,
    })
    
    tl.to(".food-items",{
        opacity: 1,
        duration: 2,
        yoyo: true,
        stagger: 3,
        repeat: -1
    })
}

function RightScrollPinAnim() {
    var imgDiv = document.querySelectorAll(".img-div")

    tl.to(".chains", {
        transform: "translateX(-27%)",
        duration: 2,
        scrollTrigger: {
            trigger: ".right-scroll",
            scroller: "body",
            scrub: 1.1,
            // markers: true,
            start: "top 0%",
            end: "top -100%",
            pin: true
        }
    })
    box.forEach(function(e) {
        e.addEventListener("mouseenter", function() {
            gsap.to(e, {
                scale: 1.05
            })
        })
        e.addEventListener("mouseleave", function() {
            gsap.to(e, {
                scale: 1
            })
        })
    })
    
    imgDiv.forEach(function(elem) {
        console.log(elem.childNodes)
        elem.addEventListener("mouseenter", function() {
            gsap.to(elem.childNodes[1], {
                scale: 1,
                opacity: 1
            })
        })
        elem.addEventListener("mouseleave", function() {
            gsap.to(elem.childNodes[1], {
                opacity: 0,
                scale: 0,
            })
        })
        elem.addEventListener("mousemove", function(dets) {
            gsap.to(elem.childNodes[1], {
                x: dets.x - elem.getBoundingClientRect().x-180,
                y: dets.y - elem.getBoundingClientRect().y-100
            })
        })
    })
}

function FooterPageAnim() {
    gsap.from(".SVG", {
        y: 20,
        opacity: 0,
        duration: 2,
        delay: .8,
        ease: "power4",
        scrollTrigger: {
            trigger: ".footer",
            scroller: "body",
            start: "top 65%",
            end: "bottom 85%"
        }
    },'c')

    gsap.from(".SVG2", {
        y: 20,
        opacity: 0,
        duration: 2,
        delay: 1,
        ease: "power4",
        scrollTrigger: {
            trigger: ".footer",
            scroller: "body",
            start: "top 65%",
            end: "bottom 85%"
        },
        stagger: .3
    },'c')

    gsap.to(".footer-text", {
        y: 0,
        duration: 1.5,
        ease: "power4",
        delay: 1,
        scrollTrigger: {
            trigger: ".footer",
            scroller: "body",
            start: "top 65%",
            end: "bottom 85%"
        },
        stagger: .1
    })



    gsap.from(".Down-img", {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        ease: "power5",
        scrollTrigger: {
            trigger: ".footer",
            scroller: "body", 
            start: "top 50%",
            end: "bottom 90%"
        }
    })
}

function DownloadAppBtnAnim() {
    var clutter = ""
    document.querySelector(".download-text")
    .textContent.split("")
    .forEach(function(e) {
        if(e === "") clutter += `<span>&nbsp;</span>`
        clutter += `<span>${e}</span>`
    })
    document.querySelector(".download-text").innerHTML = clutter
    gsap.set(".download-text span", {opacity: 0, y: 10})
    gsap.to(".download-text span", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 50%%",
            end: "bottom 90%",
        },
        opacity: 1,
        stagger: .03,
        duration: 1.5,
        ease: "power4"
    }, 'c')
}

function DisableContextMenu() {
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}


NavAnim()
HeroSectionAnim()
RightScrollPinAnim()
FooterPageAnim()
DownloadAppBtnAnim()
// DisableContextMenu()
loco()



