
    const videos = [
            document.getElementById('podcast-video-1'),
            document.getElementById('podcast-video-2'),
            document.getElementById('podcast-video-3'),
            document.getElementById('podcast-video-4'),
            document.getElementById('podcast-video-5'),
            document.getElementById('podcast-video-6'),
           
        ];

        let currentVideoIndex = 0;

        videos[currentVideoIndex].addEventListener('ended', playNextVideo);

        function playNextVideo() {
            videos[currentVideoIndex].style.display = 'none';
            currentVideoIndex++;
            if (currentVideoIndex < videos.length) {
                videos[currentVideoIndex].style.display = 'block';
                videos[currentVideoIndex].play();
                videos[currentVideoIndex].addEventListener('ended', playNextVideo);
            }
        }


        $('.testimonal-container').owlCarousel({
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                400:{
                    items:2
                }
            }
        })

//  TECH 

const slides = document.querySelector('.slides-tech');
const slide = document.querySelectorAll('.slide-tech');
let currentIndex = 0;

document.getElementById('next-tech').addEventListener('click', () => {
    if (currentIndex < slide.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

document.getElementById('prev-tech').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slide.length - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// RARE COLLECTION DISPLAY 
let rarecollection = document.getElementById("rareCollection");
let  trending=document.getElementById("btn1");
let all = document.getElementById("btn2");
let tech = document.getElementById("btn3");
let career = document.getElementById("btn4");
let  cxo = document.getElementById("btn5");
let product= document.getElementById("btn6");
let gsoc=document.getElementById("btn7");
let panel = document.getElementById("btn8");

let trendpage=document.getElementById("sectionTrending");
let allpage=document.getElementById("sectionAll");
let techpage=document.getElementById("sectionTech");
let careerpage=document.getElementById("sectionCareer");
let cxopage=document.getElementById("sectionCXO");
let productpage=document.getElementById("sectionProduct");
let gsocpage=document.getElementById("sectionGSOC");
let panelpage=document.getElementById("sectionPanel");

// PAGE 
trending.addEventListener("click",() =>{
    trendpage.style.display="block";
    allpage.style.display="none";
    techpage.style.display="none";
    careerpage.style.display="none";
    cxopage.style.display="none";
    productpage.style.display="none";
    gsocpage.style.display="none";
    panelpage.style.display="none";
  
});
all.addEventListener("click",() =>{
    trendpage.style.display="none";
    allpage.style.display="block";
    techpage.style.display="none";
    careerpage.style.display="none";
    cxopage.style.display="none";
    productpage.style.display="none";
    gsocpage.style.display="none";
    panelpage.style.display="none";
});
tech.addEventListener("click",() =>{
    trendpage.style.display="none";
    allpage.style.display="none";
    techpage.style.display="block";
    careerpage.style.display="none";
    cxopage.style.display="none";
    productpage.style.display="none";
    gsocpage.style.display="none";
    panelpage.style.display="none";
    
});
career.addEventListener("click",() =>{
    trendpage.style.display="none";
    allpage.style.display="none";
    techpage.style.display="none";
    careerpage.style.display="block";
    cxopage.style.display="none";
    productpage.style.display="none";
    gsocpage.style.display="none";
    panelpage.style.display="none";
});
cxo.addEventListener("click",() =>{
    trendpage.style.display="none";
    allpage.style.display="none";
    techpage.style.display="none";
    careerpage.style.display="none";
    cxopage.style.display="block";
    productpage.style.display="none";
    gsocpage.style.display="none";
    panelpage.style.display="none";
});
product.addEventListener("click",() =>{
    trendpage.style.display="none";
    allpage.style.display="none";
    techpage.style.display="none";
    careerpage.style.display="none";
    cxopage.style.display="none";
    productpage.style.display="block";
    gsocpage.style.display="none";
    panelpage.style.display="none";
});
gsoc.addEventListener("click",() =>{
    trendpage.style.display="none";
    allpage.style.display="none";
    techpage.style.display="none";
    careerpage.style.display="none";
    cxopage.style.display="none";
    productpage.style.display="none";
    gsocpage.style.display="block";
    panelpage.style.display="none";
});
panel.addEventListener("click",() =>{
    trendpage.style.display="none";
    allpage.style.display="none";
    techpage.style.display="none";
    careerpage.style.display="none";
    cxopage.style.display="none";
    productpage.style.display="none";
    gsocpage.style.display="none";
    panelpage.style.display="block";
});

//BUTTON 
trending.addEventListener("click",()=>{
    trending.style.backgroundColor="white";
    trending.style.color="black";
  
    all.style.backgroundColor="transparent";
   all.style.color="white";
  
   tech.style.backgroundColor="transparent";
   tech.style.color="white";
  
    career.style.backgroundColor="transparent";
    career.style.color="white";
   
    cxo.style.backgroundColor="transparent";
    cxo.style.color="white";

    product.style.backgroundColor="transparent";
    product.style.color="white";

   gsoc.style.backgroundColor="transparent";
   gsoc.style.color="white";

   panel.style.backgroundColor="transparent";
    panel.style.color="white";
});
all.addEventListener("click",()=>{
    trending.style.backgroundColor="transparent";
    trending.style.color="white";
  
    all.style.backgroundColor="white";
    all.style.color="black";
   
    tech.style.backgroundColor="transparent";
    tech.style.color="white";
   
     career.style.backgroundColor="transparent";
     career.style.color="white";
    
     cxo.style.backgroundColor="transparent";
     cxo.style.color="white";
 
     product.style.backgroundColor="transparent";
     product.style.color="white";
 
    gsoc.style.backgroundColor="transparent";
    gsoc.style.color="white";
 
    panel.style.backgroundColor="transparent";
     panel.style.color="white";
});

tech.addEventListener("click",()=>{
        trending.style.backgroundColor="transparent";
        trending.style.color="white";
      
        all.style.backgroundColor="transparent";
        all.style.color="white";
       
        tech.style.backgroundColor="white";
        tech.style.color="black";
       
         career.style.backgroundColor="transparent";
         career.style.color="white";
        
         cxo.style.backgroundColor="transparent";
         cxo.style.color="white";
     
         product.style.backgroundColor="transparent";
         product.style.color="white";
     
        gsoc.style.backgroundColor="transparent";
        gsoc.style.color="white";
     
        panel.style.backgroundColor="transparent";
         panel.style.color="white";
});
career.addEventListener("click",()=>{
        trending.style.backgroundColor="transparent";
        trending.style.color="white";
      
        all.style.backgroundColor="transparent";
        all.style.color="white";
       
        tech.style.backgroundColor="transparent";
        tech.style.color="white";
       
         career.style.backgroundColor="white";
         career.style.color="black";
        
         cxo.style.backgroundColor="transparent";
         cxo.style.color="white";
     
         product.style.backgroundColor="transparent";
         product.style.color="white";
     
        gsoc.style.backgroundColor="transparent";
        gsoc.style.color="white";
     
        panel.style.backgroundColor="transparent";
         panel.style.color="white";
});
cxo.addEventListener("click",()=>{
        trending.style.backgroundColor="transparent";
        trending.style.color="white";
      
        all.style.backgroundColor="transparent";
        all.style.color="white";
       
        tech.style.backgroundColor="transparent";
        tech.style.color="white";
       
       
         career.style.backgroundColor="transparent";
         career.style.color="white";
        
         cxo.style.backgroundColor="white";
         cxo.style.color="black";
     
         product.style.backgroundColor="transparent";
         product.style.color="white";
     
        gsoc.style.backgroundColor="transparent";
        gsoc.style.color="white";
     
        panel.style.backgroundColor="transparent";
         panel.style.color="white";
});
product.addEventListener("click",()=>{
        trending.style.backgroundColor="transparent";
        trending.style.color="white";
      
        all.style.backgroundColor="transparent";
        all.style.color="white";
       
        tech.style.backgroundColor="transparent";
        tech.style.color="white";
       
       
         career.style.backgroundColor="transparent";
         career.style.color="white";
        
         cxo.style.backgroundColor="transparent";
         cxo.style.color="white";
     
         product.style.backgroundColor="white";
         product.style.color="black";
     
        gsoc.style.backgroundColor="transparent";
        gsoc.style.color="white";
     
        panel.style.backgroundColor="transparent";
         panel.style.color="white";
    });
gsoc.addEventListener("click",()=>{
        trending.style.backgroundColor="transparent";
        trending.style.color="white";
      
        all.style.backgroundColor="transparent";
        all.style.color="white";
       
        tech.style.backgroundColor="transparent";
        tech.style.color="white";
       
         career.style.backgroundColor="transparent";
         career.style.color="white";
        
         cxo.style.backgroundColor="transparent";
         cxo.style.color="white";
     
         product.style.backgroundColor="transparent";
         product.style.color="white";
     
        gsoc.style.backgroundColor="white";
        gsoc.style.color="black";
     
        panel.style.backgroundColor="transparent";
         panel.style.color="white";
});
panel.addEventListener("click",()=>{
        trending.style.backgroundColor="transparent";
        trending.style.color="white";
      
        all.style.backgroundColor="transparent";
        all.style.color="white";
       
        tech.style.backgroundColor="transparent";
        tech.style.color="white";
       
         career.style.backgroundColor="transparent";
         career.style.color="white";
        
         cxo.style.backgroundColor="transparent";
         cxo.style.color="white";
     
         product.style.backgroundColor="transparent";
         product.style.color="white";
     
        gsoc.style.backgroundColor="transparent";
        gsoc.style.color="white";
     
        panel.style.backgroundColor="white";
         panel.style.color="black";
});


//ALL 

let currentttSlide = 0;
const slidesss = document.querySelectorAll('.slide-al');

function showSlide(index) {
    if (index >= slidesss.length) currentttSlide = 0;
    if (index < 0) currentttSlide = slidesss.length - 1;
    document.querySelector('.slides-al').style.transform = `translateX(-${currentttSlide * 100}%)`;
}

function nextSlide() {
    currentttSlide++;
    showSlide(currentttSlide);
}

function prevSlide() {
    currentttSlide--;
    showSlide(currentttSlide);
}

let popup=document.getElementsByClassName("popup");
popup.addEventListener("click",()=>{
    rarecollection.style.opacity=0.75;
})