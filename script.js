// parallax effect start

let cloud = document.querySelectorAll(".content__image") 

window.addEventListener("scroll", (e) => {  

    cloud.forEach(clouds => { 

        let speed = clouds.getAttribute("data-speed")

        clouds.style.transform = `translateX(${window.scrollY * speed}px)` 
        clouds.style.transform = `rotate(${window.scrollY * speed}px)` 
    });
}) 
let parallaxBox = document.querySelector(".cards__div2")
let parallaxBall = document.querySelectorAll(".cards__image")

parallaxBox.addEventListener("mousemove", (a) => {
    // console.log(e);
    parallaxBall.forEach(balls => {
        let speed = balls.getAttribute("data-speed")
        const X = (window.innerWidth - a.pageX * speed) / 75
        const Y = (window.innerWidth - a.pageY * speed) / 75

        balls.style.transform = `translate(${X}px, ${Y}px)`
    });

})

let parallaxBox1 = document.querySelector(".cards__div3")
let parallaxBall1 = document.querySelectorAll(".cards__image1")

parallaxBox1.addEventListener("mousemove", (b) => { 
    parallaxBall1.forEach(balls1 => {
        let speed = balls1.getAttribute("data-speed1")
        const X1 = (window.innerWidth - b.pageX * speed) / 75
        const Y1 = (window.innerWidth - b.pageY * speed) / 75

        balls1.style.transform = `translate(${X1}px, ${Y1}px)`
    });

})

let parallaxBox2= document.querySelector(".cards__div4")
let parallaxBall2 = document.querySelectorAll(".cards__image2")

parallaxBox2.addEventListener("mousemove", (c) => { 
    parallaxBall2.forEach(balls2 => {
        let speed = balls2.getAttribute("data-speed2")
        const X2 = (window.innerWidth - c.pageX * speed) / 75
        const Y2 = (window.innerWidth - c.pageY * speed) / 75

        balls2.style.transform = `translate(${X2}px, ${Y2}px)`
    });

})

let parallaxBox3= document.querySelector(".cards__div5")
let parallaxBall3 = document.querySelectorAll(".cards__image4")

parallaxBox3.addEventListener("mousemove", (d) => { 
    parallaxBall3.forEach(balls3 => {
        let speed = balls3.getAttribute("data-speed3")
        const X3 = (window.innerWidth - d.pageX * speed) / 75
        const Y3 = (window.innerWidth - d.pageY * speed) / 75

        balls3.style.transform = `translate(${X3}px, ${Y3}px)`
    });

})

let parallaxBox4= document.querySelector(".cards__div6")
let parallaxBall4 = document.querySelectorAll(".cards__image5")

parallaxBox4.addEventListener("mousemove", (f) => { 
    parallaxBall4.forEach(balls4 => {
        let speed = balls4.getAttribute("data-speed4")
        const X4 = (window.innerWidth - f.pageX * speed) / 75
        const Y4 = (window.innerWidth - f.pageY * speed) / 75

        balls4.style.transform = `translate(${X4}px, ${Y4}px)`
    });

})


let parallaxBox5= document.querySelector(".cards__div7")
let parallaxBall5 = document.querySelectorAll(".cards__image7")

parallaxBox5.addEventListener("mousemove", (q) => {
    // console.log(e);
    parallaxBall5.forEach(balls5 => {
        let speed = balls5.getAttribute("data-speed5")
        const X5 = (window.innerWidth - q.pageX * speed) / 75
        const Y5 = (window.innerWidth - q.pageY * speed) / 75

        balls5.style.transform = `translate(${X5}px, ${Y5}px)`
    });

})

 let sectionLink = document.querySelector(".section4__link1")

 sectionLink.addEventListener("click",function () {
    setTimeout(() => {
        alert("Wait...")
        if (true) {
            document.location.reload(true)
        }
    }, 100);
     
 })

 let section4__link2 = document.querySelector(".section4__link2")

 section4__link2.addEventListener("click",function () {
    setTimeout(() => {
        alert("Wait...")
        if (true) {
            document.location.reload(true)
        }
    }, 100);
     
 })