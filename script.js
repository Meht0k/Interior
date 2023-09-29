


function openNav(x) {
    let list = document.getElementById("nav-list");
    if (x) {
        x.classList.toggle("fa-close");
        list.style.width = "15rem";
        console.log("block")
    }
    else {
        list.style.width = "0rem";
        x.classList.toggle("fa-bars");
        console.log("none")
    }
}


// const locoScroll = new locomotiveScroll({
//     el:document.querySelector(".smooth-scroll"),
//     smooth:true

// })





function myValidation() {
    var x = document.myForm.Email.value;
    var at = x.indexOf('@');
    var dot = x.indexOf('.');
    var error2 = document.getElementById("Email");


    if (x == "" || x == null) {
        document.getElementById("error1").style.display = "block"
        error2.style.border = "2px solid red"
        setTimeout(() => {
            document.getElementById("error1").style.display = "none"
            error2.style.border = "1px solid grey"
        }, 3000);
        return false;
    }


    else if (at < 1 || dot < at || dot + 3 >= x.length) {
        error2.style.border = "1px solid red"
        // console.log("Enter valid Email")
        document.getElementById("error1").style.display = "block"
        document.getElementById("error1").innerText = "Enter a valid Email."
        setTimeout(() => {
            document.getElementById("error1").style.display = "none"
            error2.style.border = "2px solid grey"
            error2.value = ""
        }, 3000);
        return false;
    }


    else {
        document.myForm.submit();
        error2.value = ""
    }
    return false
}

function loco() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".smooth-scroll", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
    });
  
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
  
  }
  loco()
  
  
  
