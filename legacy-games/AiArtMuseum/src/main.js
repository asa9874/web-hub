import './styles/style.css'
import $ from 'jquery'

$('.headerimg').attr('src',"./src/assets/1 (1).png")



const mainContent = $('.maincontent');
const imagePrefix = "jpeg-optimizer_ai"; // 이미지 파일의 접두사
const imageExtension = ".png"; // 이미지 파일의 확장자
const totalImages = 31; // 이미지 파일의 총 개수

for (let i = 1; i <= totalImages; i++) {
  const imageName = `${imagePrefix} (${i})${imageExtension}`;
  let imageTitle='이미지'
  const cardHTML = `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card mb-4">
              <img data-src="./signage/${imageName}" class="card-img-top lazy" alt="Image ${i}">
              <div class="card-body">
                  <h5 class="card-title">${imageTitle}</h5>
              </div>
          </div>
      </div>
  `;
  mainContent.append(cardHTML);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.maincontent').forEach(container => {
    container.addEventListener('click', function(event) {
      if (event.target && event.target.tagName === 'IMG') {
        const src = event.target.getAttribute('src');
        const modalImage = document.getElementById('modalImage');
        console.log('./original/'+src.substr(25))
        modalImage.src ='./original/'+src.substr(25);
        
        const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
        imageModal.show();
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const lazyImages = document.querySelectorAll('img.lazy');
  if ('IntersectionObserver' in window) {
      const lazyImageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const lazyImage = entry.target;
                  lazyImage.src = lazyImage.dataset.src;
                  lazyImage.onload = () => {
                      lazyImage.classList.add('lazy-loaded');
                  };
                  lazyImageObserver.unobserve(lazyImage);
              }
          });
      });

      lazyImages.forEach(lazyImage => {
          lazyImageObserver.observe(lazyImage);
      });
  } else {
      const lazyLoad = () => {
          lazyImages.forEach(lazyImage => {
              if (lazyImage.getBoundingClientRect().top < window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) {
                  lazyImage.src = lazyImage.dataset.src;
                  lazyImage.onload = () => {
                      lazyImage.classList.add('lazy-loaded');
                  };
              }
          });
      };

      window.addEventListener('scroll', lazyLoad);
      lazyLoad();
  }
});