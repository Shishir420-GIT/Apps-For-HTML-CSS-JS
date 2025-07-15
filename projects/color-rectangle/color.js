var center = document.querySelector("#center")

center.addEventListener("mousemove", function(details){
    var rectloaction = center.getBoundingClientRect();
    console.log(center.getBoundingClientRect())
    var insiderec = Math.abs(details.clientX - rectloaction.left);
    var mid = rectloaction.width/ 2
    //console.log(" Mid is : " + mid)
    if(insiderec > 0 && insiderec < mid ){
        console.log("Red");
        var redcolor = gsap.utils.mapRange(0, mid, 255, 0, insiderec)
        gsap.to(center, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4,
        })
    }
    else if(insiderec > mid && insiderec < 2*(mid)){
        console.log("Blue")
        var bluecolor = gsap.utils.mapRange(mid, 2*(mid),0, 255, insiderec)
        gsap.to(center, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,
        })
    }
    //console.log(gsap.utils.mapRange(0, mid, 255, 0, insiderec)) 
})

center.addEventListener("mouseleave", function(details){
    gsap.to(center, {
        backgroundColor: "Green",
        ease: Power4,
    })
})

window.addEventListener("mousemove", function(details){
    //console.log(details.clientX)
    var rect = document.querySelector('#rectangle')
    var val = 100 + rect.getBoundingClientRect().width/2
    console.log(val)
    var xval = gsap.utils.mapRange(0, window.innerWidth, val, window.innerWidth - val, details.clientX)
    gsap.to('#rectangle',{
        left : xval,
        ease: Power3,
    })
})