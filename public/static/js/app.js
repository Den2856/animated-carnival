
function lazyLoad() {
  const images = document.querySelectorAll('img.lazy');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.onload = () => { img.classList.add('loaded'); };
        observer.unobserve(img);
      }
    });
  }, {
    threshold: 0.5
  });

  images.forEach(image => {
    observer.observe(image);
  });
}

document.addEventListener('DOMContentLoaded', lazyLoad);


document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const header = document.querySelector(".header");
  const container = document.querySelector(".top");

  burgerMenu.addEventListener("click", () => {
    header.classList.toggle("show-menu");

    if (header.classList.contains("show-menu")) {
      container.style.borderRadius = "30px 30px 0 0";
    } else {
      container.style.borderRadius = "52px";
    }
  });
});


const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('mouseenter', function() {
  dropdownContent.style.display = 'block';
  dropdownContent.style.opacity = '1';
});

window.addEventListener('click', function(){
  dropdownContent.style.display = 'none';
  dropdownContent.style.opacity = '0';
});

document.getElementById("fileInput").addEventListener("change", function(event) {
  const fileList = document.getElementById("fileList");
  fileList.innerHTML = ""; 

  const files = event.target.files;
  if (files.length > 0) {
    for (const file of files) {
      const fileName = document.createElement("span");
      fileName.textContent = `📄 ${file.name}`;
      fileList.appendChild(fileName);
    }
  } else {
    fileList.textContent = "Файлы не выбраны.";
  }
});