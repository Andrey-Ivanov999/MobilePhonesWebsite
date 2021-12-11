const swiper = new Swiper('.sliderPhones', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:3,
    spaceBetween:40,
    // slidesPerGroup:3,
    speed:1300,

    breakpoints:{
      1:{
        // spaceBetween:10,
        slidesPerView:1,
        loop:true
      },
      // 768:{
      //   // spaceBetween:10,
      //   slidesPerView:1,
      //   loop:true
      // },
      1080:{
        spaceBetween:10,
        slidesPerView:2,
        loop:true
      },
      1700:{
        // spaceBetween:30,
        slidesPerView:3,
        loop:true
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


  const swiper1 = new Swiper('.sliderRewievs', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:1,
    speed:1800,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay:{
      delay:4000,
      disableOnInteraction:false
    }
  });
  
//____Tabs function___//
  const tabsBtn = document.querySelectorAll(".content-list-element");
  const tabsItems = document.querySelectorAll(".content-showBlock");

  tabsBtn.forEach(function(item){
    item.addEventListener('click',function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId)
if(! currentBtn.classList.contains('active')){
      tabsBtn.forEach(function (item) {
        item.classList.remove('active')
      });
      currentBtn.classList.add('active');
      tabsItems.forEach(function (item) {
        item.classList.remove('active')
      });
      currentTab.classList.add('active');
    }
      
    });
  });

  