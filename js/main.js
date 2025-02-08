document.addEventListener('DOMContentLoaded', function() {
  // 初始化 Swiper
  const swiper = new Swiper('.swiper-container', {
      // 循环模式
      loop: true,
      
      // 自动播放
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
      
      // 渐变效果
      effect: 'fade',
      fadeEffect: {
          crossFade: true
      },
      
      // 分页器
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      
      // 导航按钮
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      
      // 键盘控制
      keyboard: {
          enabled: true,
          onlyInViewport: false,
      },
  });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.main-nav');
  if (window.scrollY > 100) {
      nav.style.background = 'rgba(255, 255, 255, 0.95)';
      nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
      nav.style.background = 'rgba(255, 255, 255, 0.9)';
      nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  }
});