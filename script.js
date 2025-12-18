const slidesData = [
  {
    city: "Rostov-on-Don<br>LCD admiral",
    area: "81 m²",
    time: "3.5 months",
    cost: "Upon request",
  },
  {
    city: "Sochi<br>Thieves",
    area: "105 m²",
    time: "4 months",
    cost: "Upon request",
  },
  {
    city: "Rostov-on-Don<br>Patriotic",
    area: "93 m²",
    time: "3 months",
    cost: "Upon request",
  },
];

let currentSlide = 0;
const totalSlides = slidesData.length;

const navItems = document.querySelectorAll(".nav-item");
const dots = document.querySelectorAll(".competed__circle");
const images = document.querySelectorAll(".slide-img");
const cityValue = document.querySelector(".city-value");
const areaValue = document.querySelector(".area-value");
const timeValue = document.querySelector(".time-value");
const costValue = document.querySelector(".cost-value");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

function updateSlide(index) {
  images.forEach((img) => img.classList.remove("active"));
  images[index].classList.add("active");

  navItems.forEach((item) => item.classList.remove("active"));
  navItems[index].classList.add("active");

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");

  cityValue.innerHTML = slidesData[index].city;
  areaValue.textContent = slidesData[index].area;
  timeValue.textContent = slidesData[index].time;
  costValue.textContent = slidesData[index].cost;

  currentSlide = index;
}

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    updateSlide(parseInt(item.dataset.slide));
  });
});

// Клик по точкам (competed__circle)
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    updateSlide(parseInt(dot.dataset.slide));
  });
});

// Клик по стрелкам
arrowLeft.addEventListener("click", () => {
  let newIndex = currentSlide - 1;
  if (newIndex < 0) newIndex = totalSlides - 1;
  updateSlide(newIndex);
});

arrowRight.addEventListener("click", () => {
  let newIndex = currentSlide + 1;
  if (newIndex >= totalSlides) newIndex = 0;
  updateSlide(newIndex);
});

// slider для мобильного
const mobileArrowLeft = document.querySelector(".mobile-arrow-left");
const mobileArrowRight = document.querySelector(".mobile-arrow-right");

// Клик по мобильным стрелкам
if (mobileArrowLeft) {
  mobileArrowLeft.addEventListener("click", () => {
    let newIndex = currentSlide - 1;
    if (newIndex < 0) newIndex = totalSlides - 1;
    updateSlide(newIndex);
  });
}

if (mobileArrowRight) {
  mobileArrowRight.addEventListener("click", () => {
    let newIndex = currentSlide + 1;
    if (newIndex >= totalSlides) newIndex = 0;
    updateSlide(newIndex);
  });
}
