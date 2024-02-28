const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target;
    let targetEl = document.querySelector(`#${currentId}`);
    
    const openData = function () {
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    };

    triggerOpen[i].addEventListener('click', function () {
        targetEl.classList.add('active');
        overlay.classList.add('active');
    });

    targetEl.querySelector('[close-button]').addEventListener('click', openData);
    overlay.addEventListener('click', openData);
}
//mobile-menu
const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click', function(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
    if(this.closest('.has-child').classList != 'active'){
        this.closest('.has-child').classList.toggle('active');
    }
}))





//tabbed
const triggers = document.querySelectorAll('.tabbed-trigger');
const contents = document.querySelectorAll('.tabbed > div');

triggers.forEach((trigger) => {
    trigger.addEventListener('click', function () {
        const dataTarget = this.dataset.id;
        const targetContent = document.querySelector(`#${dataTarget}`);

        // Remove 'active' class from all triggers and contents
        triggers.forEach((t) => t.classList.remove('active'));
        contents.forEach((c) => c.classList.remove('active'));

        // Add 'active' class to the clicked trigger and its corresponding content
        trigger.classList.add('active');
        targetContent.classList.add('active');
    });
});



  //carousel
  const carousel = new Swiper('.carouselbox', {
  
   
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
  
    // If we need pagination
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        481:{
            slidesPerView: 2,
            slidesPerGroup: 1,
            centeredSlides: false,
        },
       640:{
            slidesPerView: 3,
            slidesPerGroup: 3,
            centeredSlides: false,
        },
        992:{
            slidesPerView: 4,
            slidesPerGroup: 4,
            centeredSlides: false,
        }
    }
  
    
  });

  //product
  const thumbImage = new Swiper('.thumbnail-image',{
    //loop: true,
    direction: 'vertical',
    spaceBetween: 15,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
  });
 
//   Anlik saat
function mettreAJourHeure() {
    var maintenant = new Date();
    var heures = maintenant.getHours().toString().padStart(2, '0');
    var minutes = maintenant.getMinutes().toString().padStart(2, '0');
    var nouvelleHeure = heures + ':' + minutes;


    document.getElementById('time').innerText = nouvelleHeure;
}


setInterval(mettreAJourHeure, 1000);

mettreAJourHeure();
