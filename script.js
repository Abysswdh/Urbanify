// LOADING
document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const content = document.getElementById("content");
  document.body.style.overflowY = "hidden";
  window.addEventListener("load", function () {
    document.body.style.overflowY = "auto";
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      content.style.display = "block";
    }, 100);
  });
  document.body.style.overflowY = "hidden";
  // end of LOADING

  const links = document.querySelectorAll(".nav-link");
  const underline = document.getElementById("underline");
  let activeLink = document.querySelector(".nav-link.active");
  const header = document.querySelector(".navigation");
  const logoImage = document.querySelector(".logo-nav");
  const navlinks = document.querySelectorAll(".nav-middle a");

  function moveUnderline(link) {
    const { offsetLeft: left, offsetWidth: width } = link;
    underline.style.left = `${left}px`;
    underline.style.width = `${width}px`;
  }

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => moveUnderline(link));
    link.addEventListener("mouseleave", () => moveUnderline(activeLink));
  });

  if (activeLink) moveUnderline(activeLink);

  window.addEventListener("resize", () => {
    if (activeLink) moveUnderline(activeLink);
  });
});

// Helper to determine base path for assets and links
function getBasePath() {
  const path = window.location.pathname;
  // Check if we are in a subdirectory (assuming _Page structure)
  if (path.includes("/_Page/") || path.includes("\\_Page\\")) {
    return "../../";
  }
  return "";
}

document.addEventListener("scroll", () => {
  const header = document.querySelector(".navigation");
  const underline = document.querySelector(".underline");
  const logoImage = document.querySelector(".logo-nav");
  const navlinks = document.querySelectorAll(".nav-middle a");
  const basePath = getBasePath();

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    underline.classList.add("scrolled");
    logoImage.src = basePath + "Assets/1.png";

    navlinks.forEach((link) => {
      link.style.color = "#503d42";
    });
  } else {
    header.classList.remove("scrolled");
    underline.classList.remove("scrolled");
    logoImage.src = basePath + "Assets/3.png";

    navlinks.forEach((link) => {
      link.style.color = "";
    });
  }
});

// dropdown
document.addEventListener("DOMContentLoaded", function () {
  const educationLink = document.getElementById("education-link");
  const dropdown = document.getElementById("education-dropdown");

  let timeoutId;

  educationLink.addEventListener("mouseenter", function () {
    timeoutId = setTimeout(() => {
      dropdown.classList.add("active");
    }, 400);
  });

  educationLink.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(() => {
      dropdown.classList.remove("active");
    }, 0);
  });

  dropdown.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId);
  });

  dropdown.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(() => {
      dropdown.classList.remove("active");
    }, 300);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.querySelector(".dropbtn-phone");
  const dropdownContent = document.querySelector(".dropdown-phone-content");

  function toggleDropdown(event) {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
  }

  dropbtn.addEventListener("pointerdown", toggleDropdown);

  window.addEventListener("pointerdown", function (event) {
    if (
      !event.target.closest(".dropbtn-phone") &&
      dropdownContent.classList.contains("show") &&
      !event.target.closest(".dropdown-phone-content")
    ) {
      dropdownContent.classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const basePath = getBasePath();
  document
    .querySelector(".link-environment")
    .addEventListener("click", function () {
      window.location.href = basePath + "_Page/SmartEnvironment/environment.html";
    });
  document.querySelector(".link-urban").addEventListener("click", function () {
    window.location.href = basePath + "_Page/urbangreenspace/urbangreenspace.html";
  });
  document.querySelector(".link-iot").addEventListener("click", function () {
    window.location.href = basePath + "_Page/iot/iot.html";
  });
  document
    .querySelector(".link-citizen")
    .addEventListener("click", function () {
      window.location.href =
        basePath + "_Page/citizenengagement/citizenengagement.html";
    });
  document
    .querySelector(".link-smartcity")
    .addEventListener("click", function () {
      window.location.href = basePath + "_Page/smartcity/smart.html";
    });
  document
    .querySelector(".image-smartcity")
    .addEventListener("click", function () {
      window.location.href = basePath + "_Page/smartcity/smart.html";
    });
});
// end of dropdown

//slides
document.addEventListener("DOMContentLoaded", function () {
  const slidesContainers = document.querySelectorAll(".slides-container");

  slidesContainers.forEach((container) => {
    let currentSlide = 0;
    const slides = container.querySelector(".slides");
    const totalSlides = slides.children.length;

    function changeSlide(direction) {
      currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
      updateSlidePosition();
    }

    function updateSlidePosition() {
      const slideWidth = slides.children[0].getBoundingClientRect().width;
      slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    updateSlidePosition();

    setInterval(() => changeSlide(1), 3000);
  });
});
// end of slides

const copy = document
  .querySelector(".sectiontwo-gallery-img-img")
  .cloneNode(true);
document.querySelector(".sectiontwo-gallery-img-slide").appendChild(copy);
