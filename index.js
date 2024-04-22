function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

function canvas_code(){
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
    });

    function files(index) {
    var data = `
    https://zelt.app/assets/img/home/hero/sequence/1.webp
    https://zelt.app/assets/img/home/hero/sequence/2.webp
    https://zelt.app/assets/img/home/hero/sequence/3.webp
    https://zelt.app/assets/img/home/hero/sequence/4.webp
    https://zelt.app/assets/img/home/hero/sequence/5.webp
    https://zelt.app/assets/img/home/hero/sequence/6.webp
    https://zelt.app/assets/img/home/hero/sequence/7.webp
    https://zelt.app/assets/img/home/hero/sequence/8.webp
    https://zelt.app/assets/img/home/hero/sequence/9.webp
    https://zelt.app/assets/img/home/hero/sequence/10.webp
    https://zelt.app/assets/img/home/hero/sequence/11.webp
    https://zelt.app/assets/img/home/hero/sequence/12.webp
    https://zelt.app/assets/img/home/hero/sequence/13.webp
    https://zelt.app/assets/img/home/hero/sequence/14.webp
    https://zelt.app/assets/img/home/hero/sequence/15.webp
    https://zelt.app/assets/img/home/hero/sequence/16.webp
    https://zelt.app/assets/img/home/hero/sequence/17.webp
    https://zelt.app/assets/img/home/hero/sequence/18.webp
    https://zelt.app/assets/img/home/hero/sequence/19.webp
    https://zelt.app/assets/img/home/hero/sequence/20.webp
    https://zelt.app/assets/img/home/hero/sequence/21.webp
    https://zelt.app/assets/img/home/hero/sequence/22.webp
    https://zelt.app/assets/img/home/hero/sequence/23.webp
    https://zelt.app/assets/img/home/hero/sequence/24.webp
    https://zelt.app/assets/img/home/hero/sequence/25.webp
    https://zelt.app/assets/img/home/hero/sequence/26.webp
    https://zelt.app/assets/img/home/hero/sequence/27.webp
    https://zelt.app/assets/img/home/hero/sequence/28.webp
    https://zelt.app/assets/img/home/hero/sequence/29.webp
    https://zelt.app/assets/img/home/hero/sequence/30.webp
    https://zelt.app/assets/img/home/hero/sequence/31.webp
    https://zelt.app/assets/img/home/hero/sequence/32.webp
    https://zelt.app/assets/img/home/hero/sequence/33.webp
    https://zelt.app/assets/img/home/hero/sequence/34.webp
    https://zelt.app/assets/img/home/hero/sequence/35.webp
    https://zelt.app/assets/img/home/hero/sequence/36.webp
    https://zelt.app/assets/img/home/hero/sequence/37.webp
    https://zelt.app/assets/img/home/hero/sequence/38.webp
    https://zelt.app/assets/img/home/hero/sequence/39.webp
    https://zelt.app/assets/img/home/hero/sequence/40.webp
    https://zelt.app/assets/img/home/hero/sequence/41.webp
    https://zelt.app/assets/img/home/hero/sequence/42.webp
    https://zelt.app/assets/img/home/hero/sequence/43.webp
    https://zelt.app/assets/img/home/hero/sequence/44.webp
    https://zelt.app/assets/img/home/hero/sequence/45.webp
    https://zelt.app/assets/img/home/hero/sequence/46.webp
    https://zelt.app/assets/img/home/hero/sequence/47.webp
    https://zelt.app/assets/img/home/hero/sequence/48.webp
    https://zelt.app/assets/img/home/hero/sequence/49.webp
    https://zelt.app/assets/img/home/hero/sequence/50.webp
    https://zelt.app/assets/img/home/hero/sequence/51.webp
    https://zelt.app/assets/img/home/hero/sequence/52.webp
    https://zelt.app/assets/img/home/hero/sequence/53.webp
    https://zelt.app/assets/img/home/hero/sequence/54.webp
    https://zelt.app/assets/img/home/hero/sequence/55.webp
    https://zelt.app/assets/img/home/hero/sequence/56.webp
    https://zelt.app/assets/img/home/hero/sequence/57.webp
    https://zelt.app/assets/img/home/hero/sequence/58.webp
    https://zelt.app/assets/img/home/hero/sequence/59.webp
    https://zelt.app/assets/img/home/hero/sequence/60.webp
    https://zelt.app/assets/img/home/hero/sequence/61.webp
    https://zelt.app/assets/img/home/hero/sequence/62.webp
    https://zelt.app/assets/img/home/hero/sequence/63.webp
    https://zelt.app/assets/img/home/hero/sequence/64.webp
    https://zelt.app/assets/img/home/hero/sequence/65.webp
    https://zelt.app/assets/img/home/hero/sequence/66.webp
    https://zelt.app/assets/img/home/hero/sequence/67.webp
    https://zelt.app/assets/img/home/hero/sequence/68.webp
    https://zelt.app/assets/img/home/hero/sequence/69.webp
    https://zelt.app/assets/img/home/hero/sequence/70.webp
    https://zelt.app/assets/img/home/hero/sequence/71.webp
    https://zelt.app/assets/img/home/hero/sequence/72.webp
    https://zelt.app/assets/img/home/hero/sequence/73.webp
    https://zelt.app/assets/img/home/hero/sequence/74.webp
    https://zelt.app/assets/img/home/hero/sequence/75.webp
    https://zelt.app/assets/img/home/hero/sequence/76.webp
    https://zelt.app/assets/img/home/hero/sequence/77.webp
    https://zelt.app/assets/img/home/hero/sequence/78.webp
    https://zelt.app/assets/img/home/hero/sequence/79.webp
    https://zelt.app/assets/img/home/hero/sequence/80.webp
    https://zelt.app/assets/img/home/hero/sequence/81.webp
    https://zelt.app/assets/img/home/hero/sequence/82.webp
    https://zelt.app/assets/img/home/hero/sequence/83.webp
    https://zelt.app/assets/img/home/hero/sequence/84.webp
    https://zelt.app/assets/img/home/hero/sequence/85.webp
    https://zelt.app/assets/img/home/hero/sequence/86.webp
    https://zelt.app/assets/img/home/hero/sequence/87.webp
    https://zelt.app/assets/img/home/hero/sequence/88.webp
    https://zelt.app/assets/img/home/hero/sequence/89.webp
    https://zelt.app/assets/img/home/hero/sequence/90.webp
    https://zelt.app/assets/img/home/hero/sequence/91.webp
    https://zelt.app/assets/img/home/hero/sequence/92.webp
    https://zelt.app/assets/img/home/hero/sequence/93.webp
    https://zelt.app/assets/img/home/hero/sequence/94.webp
    https://zelt.app/assets/img/home/hero/sequence/95.webp
    https://zelt.app/assets/img/home/hero/sequence/96.webp
    https://zelt.app/assets/img/home/hero/sequence/97.webp
    https://zelt.app/assets/img/home/hero/sequence/98.webp
    https://zelt.app/assets/img/home/hero/sequence/99.webp
    https://zelt.app/assets/img/home/hero/sequence/100.webp
    https://zelt.app/assets/img/home/hero/sequence/101.webp
    https://zelt.app/assets/img/home/hero/sequence/102.webp
    https://zelt.app/assets/img/home/hero/sequence/103.webp
    https://zelt.app/assets/img/home/hero/sequence/104.webp
    https://zelt.app/assets/img/home/hero/sequence/105.webp
    https://zelt.app/assets/img/home/hero/sequence/106.webp
    https://zelt.app/assets/img/home/hero/sequence/107.webp
    https://zelt.app/assets/img/home/hero/sequence/108.webp
    https://zelt.app/assets/img/home/hero/sequence/109.webp
    https://zelt.app/assets/img/home/hero/sequence/110.webp
    https://zelt.app/assets/img/home/hero/sequence/111.webp
    https://zelt.app/assets/img/home/hero/sequence/112.webp
    https://zelt.app/assets/img/home/hero/sequence/113.webp
    https://zelt.app/assets/img/home/hero/sequence/114.webp
    https://zelt.app/assets/img/home/hero/sequence/115.webp
    https://zelt.app/assets/img/home/hero/sequence/116.webp
    https://zelt.app/assets/img/home/hero/sequence/117.webp
    https://zelt.app/assets/img/home/hero/sequence/118.webp
    `;
    return data.split("\n")[index];
    }

    const frameCount = 118;

    const images = [];
    const imageSeq = {
    frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
    }

    gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `#page>canvas`,
        //   set start end according to preference
        start: `top top`,
        end: `300% top`,
        scroller: `#main`,
    },
    onUpdate: render,
    });

    images[1].onload = render;

    function render() {
    scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
    }
    ScrollTrigger.create({

    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `300% top`,
    });
}

loco(); 
canvas_code();

let tl=gsap.timeline();

tl.from("#page h1",{
    opacity:0,
    scale:0.7,
    top: "60%",
    duration:0.9,
    stagger:0.3,
})
tl.from("#page h4",{
    opacity:0,
    scale:0.7,
    top: "80%",
    duration:0.9,
    stagger:0.3,
}, "-=0.8")
tl.from("canvas",{
    opacity:0,
    scale:0.7,
    top: "80%",
    duration:0.9,
    stagger:0.3,
}, "-=1")

gsap.from("#page5 #heading",{
    left:"-100%",
    scale:0.9,
    opacity:0,
    scrollTrigger:{
        trigger:"#page5 #heading",
        scroller:"#main",
        start:"top 100%",
        end:"top 50%",
        scrub:1,
        /* markers:true, */
    }
})

gsap.from("#page5 #center_div",{
    right:"-100%",
    scale:0.9,
    opacity:0,
    scrollTrigger:{
        trigger:"#page5 #center_div",
        scroller:"#main",
        start:"top 90%",
        end:"top 30%",
        scrub:1,
        /* markers:true, */
    }
})

gsap.from("#page6>h1",{
    scale:0.9,
    opacity:0,
    bottom:"-100px",
    duration:0.1,
    scrollTrigger:{
        trigger:"#page6>h1",
        scroller:"#main",
        start:"top 100%",
        end:"top 80%",
        scrub:1,
        /* markers:true, */
    }
})

gsap.from("#f3_list .list_item",{
    right:"-100%",
    scale:0.9,
    opacity:0,
    duration:0.5,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#f3_list .list_item",
        scroller:"#main",
        start:"top 90%",
        end:"top 0%",
        /* markers:true, */
    }
})

gsap.from("#f1",{
    scale:0.9,
    opacity:0,
    duration:0.3,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#f1",
        scroller:"#main",
        start:"top 100%",
        end:"top 50%",
        scrub:1,
        /* markers:true, */
    }
})

gsap.from("#f2",{
    scale:0.9,
    opacity:0,
    duration:0.3,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#f2",
        scroller:"#main",
        start:"top 100%",
        end:"top 50%",
        scrub:1,
        /* markers:true, */
    }
})

gsap.from("#f4",{
    scale:0.9,
    opacity:0,
    duration:0.3,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#f4",
        scroller:"#main",
        start:"top 100%",
        end:"top 50%",
        scrub:1,
        /* markers:true, */
    }
})

if(window.innerWidth>780)
{
    gsap.to("#f3_list",{
        top:"-45%",
        scrollTrigger:{
            trigger:"#f3_list",
            scroller:"#main",
            start:"top 20%",
            end:"top 0%",
            scrub:0.5,
            /* markers:true, */
        }
    })
}




var product_overview_button=document.querySelector("#right_page5 button");
var product_overview_i=document.querySelector("#right_page5 button i");
var nav_book_demo=document.querySelector(".nav button");
var product_dropdown=document.querySelector("#product_dropdown");
var nav_product=document.querySelector("#nav_product");
var product_section=document.querySelector("#product_section");
var product_dropdown_i=document.querySelector("#product_dropdown i");
var check_open=false;
const elementHeight = document.querySelector('#page6').clientHeight;

console.log(elementHeight)

function mouseenter_gsap(){
    gsap.to(product_overview_button,{
        backgroundColor:"rgba(0, 0, 0, 0.716)",
        duration:0.2
    });
    gsap.to(product_overview_i,{
        paddingLeft:"2px",
        duration:0.1
    });
}

function mouseleave_gsap(){
    gsap.to(product_overview_button,{
        backgroundColor:"black",
        duration:0.2
    });
    gsap.to(product_overview_i,{
        paddingLeft:"0px",
        duration:0.1
    });
}

function mouseenter_bookDemo_gsap(){
    gsap.to(nav_book_demo,{
        backgroundColor:"#FFD687",
        duration:0.2
    });
}

function mouseleave_bookDemo_gsap(){
    gsap.to(nav_book_demo,{
        backgroundColor:"rgb(241, 202, 122)",
        duration:0.2
    });
}

function mouseenter_product_dropdown_gsap(){
    gsap.to(nav_product,{
        display:"flex",
        opacity:1,
        scale:1,
        duration:0.2    
    });
    gsap.to(product_dropdown_i,{
        rotate:180,
        duration:0.3    
    });
}

function mouseleave_product_dropdown_gsap(){
    gsap.to(nav_product,{
        opacity:0,
        scale:0.9,
        display:"none",
        duration:0.2    
    });
    gsap.to(product_dropdown_i,{
        rotate:0,
        duration:0.3    
    });
}

function mouseenter_product_dropdown_gsap_toggle(){
    if(check_open==false)
    {
        gsap.to(nav_product,{
            display:"grid",
            opacity:1,
            scale:1,
            duration:0.2    
        });
        gsap.to(product_dropdown_i,{
            rotate:180,
            duration:0.3    
        });
        gsap.to(product_section,{
            width:"max-content",
            height:"max-content"
        });
        check_open=true;
    }
    else
    {
        gsap.to(nav_product,{
            opacity:0,
            scale:0.9,
            display:"none",
            duration:0.2    
        });
        gsap.to(product_dropdown_i,{
            rotate:0,
            duration:0.3    
        });
        check_open=false;
    }
}

product_overview_button.addEventListener("mouseenter",mouseenter_gsap)
product_overview_button.addEventListener("mouseleave",mouseleave_gsap)

nav_book_demo.addEventListener("mouseenter",mouseenter_bookDemo_gsap)
nav_book_demo.addEventListener("mouseleave",mouseleave_bookDemo_gsap)


product_dropdown.addEventListener("mouseenter",mouseenter_product_dropdown_gsap)
product_section.addEventListener("mouseleave",mouseleave_product_dropdown_gsap)



