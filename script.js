let menu = document.querySelector( '#menu-bars');
let navbar = document.querySelector( '.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector( '.theme-toggler');
let toggleBtn = document.querySelector( '.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
  btn.onclick = () => {
    // Get the computed style of the button
    let computedStyle = window.getComputedStyle(btn);
    let color = computedStyle.backgroundColor; // Access the background color
    document.querySelector(':root').style.setProperty('--main-color', color);
  }
});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  }
});

var swiper = new Swiper(".review-slider", {
    slidesPereView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0:{
        slidesPerView: 1,
      },
      700:{
        slidesPerView: 2,
      },
      1050:{
        slidesPerView: 3,
      },
    },
    autoplay:{
      delay:3000,
      disableOnInteraction:false,
  }
});

function whatsapp(){
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;


  var whatsappurl = "https://wa.me/918209115710?text="
  + "Name of customer : " + name +"%0a"
  + "Mobile no. : " + number +"%0a"
  + "Email ID : " + email +"%0a"
  + "Subject : " + subject +"%0a"
  + "Message : " + message;

  window.open(whatsappurl,"_blank").focus();


}

function whatsapp1(){
  var whatsappur = "https://api.whatsapp.com/send/?phone=918209115710&text&type=phone_number&app_absent=0";
  window.open(whatsappur,"_blank").focus();

}

function insta() {
  var insta ="https://www.instagram.com/iandu_events/";
  window.open(insta,"_blank").focus();
}

function fb() {
  var insta ="https://www.facebook.com/p/IU-Events-100063944407737/?_rdr";
  window.open(insta,"_blank").focus();
}
