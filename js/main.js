// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
// menu end

// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.pageYOffset >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
const links = document.querySelectorAll(".links");
const sections = document.querySelectorAll(".anchor");
function changeLinkState() {
  let index = sections.length;
  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));
  links[index]?.classList.add("active");
}
links.forEach((e) => {
  onLinkClick(e);
});
function onLinkClick(linkItem) {
  linkItem.addEventListener("click", function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  });
}
function onLinkClick(linkItem) {
  linkItem.addEventListener("click", function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  });
}
window.onscroll = function () {
  changeLinkState();
  scrollFunc();
};
// scroll end

// slider start
$(function () {
  $(".sponsors__inner-slider").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 0,
    slidesToShow: 8,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  });
});
// slider end

// modal start
const playBtn = document.getElementById("playBtn");
const modal = document.getElementById("modal");
const modalClose = modal.querySelector("button");

playBtn.onclick = () => {
  modal.classList.add("active");
  body.classList.add("active");
};
modalClose.onclick = () => {
  modal.classList.remove("active");
  body.classList.remove("active");
};
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.classList.remove("active");
    body.classList.remove("active");
  }
});
// modal end

// faq start
let faqBtns = document.querySelectorAll(".faqBtn");
let faqEvents = document.querySelectorAll(".faqEvent");

faqBtns.forEach((faqBtn) => {
  faqBtn.onclick = () => {
    let parentNode = faqBtn.parentElement;
    let faqEvent = parentNode.querySelector(".faqEvent");
    if (faqBtn.classList.contains("active")) {
      faqBtn.classList.remove("active");
      faqEvent.classList.remove("active");
    } else {
      faqBtn.classList.add("active");
      faqEvent.classList.add("active");
    }
  };
});

// faq end


// tab start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// tab end
