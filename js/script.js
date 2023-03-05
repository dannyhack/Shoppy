// mobile side-bar starts here

function slideMenu() {
    var deptarget = document.querySelector('.department-menu .container .left .topp');
    var deptPlace = document.querySelector('.mobDepartment');
    deptPlace.innerHTML = deptarget.innerHTML;

    var deptarget = document.querySelector('.department-menu .container .left .menuu');
    var deptPlace = document.querySelector('.mobDepartment2');
    deptPlace.innerHTML = deptarget.innerHTML;


    var header = document.querySelector('header .container .right-side');
    var headerPlace = document.querySelector('.top-navbar');
    headerPlace.innerHTML = header.innerHTML;


    var nav = document.querySelector('.mobii-top');
    var navPlace = document.querySelector('.mini-nav');
    navPlace.innerHTML = nav.innerHTML;
}
slideMenu()

// mobile side-bar ends here

// hide submenu
var submenu1 = document.querySelector('.mobDepartment2 .min');
var down1 = document.getElementById('down1');
var down2 = document.getElementById('down2');
var down3 = document.getElementById('down3');
var down4 = document.getElementById('down4');
var down5 = document.getElementById('down5');
var down6 = document.getElementById('down6');
var sub2 = document.querySelector('.mobDepartment2 .min2');
var sub3 = document.querySelector('.mobDepartment2 .min3');
var sub4 = document.querySelector('.mobDepartment2 .min4');
var sub5 = document.querySelector('.mobDepartment2 .min5');
var sub6 = document.querySelector('.mobDepartment2 .min6');





// hide & Mini-list
down1.addEventListener('click', ()=> {
    if(submenu1.style.display == 'none'){
        submenu1.style.display = 'block'
    }else{
        submenu1.style.display = 'none';
    }
})
down2.addEventListener('click', ()=> {
    if(sub2.style.display == 'none'){
        sub2.style.display = 'block';
    }else{
        sub2.style.display = 'none';
    }
})
down3.addEventListener('click', ()=> {
    if(sub3.style.display == 'none'){
        sub3.style.display = 'block';
    }else{
        sub3.style.display = 'none';
    }
})
down4.addEventListener('click', ()=> {
    if(sub4.style.display == 'none'){
        sub4.style.display = 'block';
    }else{
        sub4.style.display = 'none';
    }
})
down5.addEventListener('click', ()=> {
    if(sub5.style.display == 'none'){
        sub5.style.display = 'block';
    }else{
        sub5.style.display = 'none';
    }
})
down6.addEventListener('click', ()=> {
    if(sub6.style.display == 'none'){
        sub6.style.display = 'block';
    }else{
        sub6.style.display = 'none';
    }
})




// women sub-menu hide 

var womensub = document.querySelector('.mini-nav .mobile-headertop .women-dropdown .mega .wrapper');
var wom_img = document.getElementById('down-image');

wom_img.addEventListener('click', ()=>{
    if(womensub.style.display == 'none'){
        womensub.style.display = 'block'
    }else{
        womensub.style.display = 'none';
    }
})


// slide menu
var showmenu = document.querySelector('.mobile-more i');
var closemenu = document.querySelector('.t-close');
var addclass = document.querySelector('.site');
showmenu.addEventListener('click', function() {
    addclass.classList.toggle('show')
})
closemenu.addEventListener('click', function() {
    addclass.classList.remove('show');
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableoninteraction: false,
    },
  });
  

  
// ==================================//
        // ===favourite-hover===//
// ==================================//

let hov1 = document.getElementById('hovt1');
let im = document.getElementById('im1');

im.addEventListener('mousemove', () =>{
    hov1.style.right = '15px';
    hov1.style.opacity = '.9';
})
im.addEventListener('mouseleave', () =>{
    hov1.style.right = '-30px';
})
 

let hovt = document.getElementsByClassName('hovt');
let imageHold = document.getElementsByClassName('hold-image');

imageHold[0].addEventListener('mousemove', () =>{
    hovt[0].style.right = '1px'; 
})
imageHold[0].addEventListener('mouseleave', () =>{
    hovt[0].style.right = '-30px'; 
})

imageHold[1].addEventListener('mousemove', () =>{
    hovt[1].style.right = '1px'; 
})
imageHold[1].addEventListener('mouseleave', () =>{
    hovt[1].style.right = '-30px'; 
})

imageHold[2].addEventListener('mousemove', () =>{
    hovt[2].style.right = '1px'; 
})
imageHold[2].addEventListener('mouseleave', () =>{
    hovt[2].style.right = '-30px'; 
})

imageHold[3].addEventListener('mousemove', () =>{
    hovt[3].style.right = '1px'; 
})
imageHold[3].addEventListener('mouseleave', () =>{
    hovt[3].style.right = '-30px'; 
})

imageHold[4].addEventListener('mousemove', () =>{
    hovt[4].style.right = '1px'; 
})
imageHold[4].addEventListener('mouseleave', () =>{
    hovt[4].style.right = '-30px'; 
})

imageHold[5].addEventListener('mousemove', () =>{
    hovt[5].style.right = '1px'; 
})
imageHold[5].addEventListener('mouseleave', () =>{
    hovt[5].style.right = '-30px'; 
})

imageHold[6].addEventListener('mousemove', () =>{
    hovt[6].style.right = '1px'; 
})
imageHold[6].addEventListener('mouseleave', () =>{
    hovt[6].style.right = '-30px'; 
})



var searchIcon = document.getElementById('srch');
var searchpop = document.getElementById('search');
var closeSearch = document.getElementById('t-close');

searchIcon.addEventListener('click', () =>{
        searchpop.style.display = 'block';
})
closeSearch.addEventListener('click', () =>{
    searchpop.style.display = 'none';
})



const openLay = document.getElementById('open');
var closeOverlay = document.getElementById('mini-t-close');
var over = document.getElementById('overlay');

openLay.addEventListener('click', () =>{
    over.style.display = 'block';
})
closeOverlay.addEventListener('click', () =>{
    over.style.display = 'none';
})




function myFunction(smallImg){
    var fullImg = document.getElementById('imageBox');
    fullImg.src = smallImg.src
}


// var hd = document.getElementById('hd');
// var closing = document.getElementById('hide');
// var listing = document.getElementById('list');

// hd.addEventListener('click', () =>{
//     listing.style.display = 'flex';
    
// })




