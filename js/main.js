// handle navbar scroll

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    let navLinks = document.querySelectorAll(
      ".nav-bar .container .nav-links a"
    );
    navLinks.forEach((link) => (link.style.color = "#1940ae"));
    let navBtns = document.querySelectorAll(
      ".nav-bar .container .nav-btns a i"
    );
    navBtns.forEach((link) => (link.style.color = "#1940ae"));
    document.getElementById("logo-img").src = "../imgs/logo blue.png";
    let navNum = (document.querySelector(".nav-number").style.color =
      "#1940ae");

    document.querySelector(".nav-bar").style.background = "rgb(241,244,244)";
    document.querySelector(".nav-bar").style.border = "none";
    const barMark = (document.querySelector(`.bar-mark`).style.color = "#1940ae");
    const xMark = (document.querySelector(`.x-mark`).style.color = "#1940ae");
  } else {
    document.querySelector(".nav-bar").style.background = "";
    document.querySelector(".nav-bar").style.borderBottom =
      "1px solid rgba(255, 255, 255, 0.65)";
    let navLinks = document.querySelectorAll(
      ".nav-bar .container .nav-links a"
    );
    navLinks.forEach((link) => (link.style.color = "#fff"));
    let navBtns = document.querySelectorAll(
      ".nav-bar .container .nav-btns a i"
    );
    navBtns.forEach((link) => (link.style.color = "#fff"));
    document.getElementById("logo-img").src = "../imgs/logo white.png";
    let navNum = (document.querySelector(".nav-number").style.color = "#fff");
    const barMark = (document.querySelector(`.bar-mark`).style.color = "#fff");
    const xMark = (document.querySelector(`.x-mark`).style.color = "#fff");
  }
});

// handle toggle navbar

const barMark = document.querySelector(`.bar-mark`);
const xMark = document.querySelector(`.x-mark`);
const toggleLayer = document.querySelector(`.nav-toggle-layer`);

barMark.addEventListener("click", () => {
  // window.scrollTo({ top: 0, behavior: "smooth" });
  toggleLayer.style.width = "45vw";
  toggleLayer.style.opacity = ".8";
  barMark.style.display = "none";
  xMark.style.display = "flex";
});
xMark.addEventListener("click", () => {
  toggleLayer.style.width = "0vw";
  toggleLayer.style.opacity = "0";
  barMark.style.display = "flex";
  xMark.style.display = "none";
});

// handle home video

const landingVideo = document.querySelector(".intro video"),
  videoSource = document.createElement("source"),
  videoPath =
    "https://topaddress.ae/wp-content/themes/topaddress-theme/intro-bg/";

let videoFileName = "dubai-video.mp4";

if (window.innerWidth < 800) {
  videoFileName = "dubai-video-800x640.mp4";
}

if (window.innerWidth < 481) {
  videoFileName = "dubai-video-480x1080.mp4";
}

videoSource.type = "video/mp4";
videoSource.src = videoPath + videoFileName;
// videoSource.src = "../imgs/dubai-video.mp4";
videoSource.caption = "";

landingVideo.appendChild(videoSource);

// handle home lists

const homeChilds = document.querySelectorAll(".home-inputs .child");
const homeChildList = document.querySelectorAll(
  ".home-inputs .child .child-list"
);

homeChilds.forEach((child, index) => {
  child.addEventListener("click", (event) => {
    homeChildList.forEach((list) => {
      list.style.opacity = "0";
      list.style.maxHeight = "0";
    });
    child.classList.toggle("open");
    if (child.classList.contains("open")) {
      homeChildList[index].style.opacity = "1";
      homeChildList[index].style.maxHeight = "30vh";
    } else {
      homeChildList[index].style.opacity = "0";
      homeChildList[index].style.maxHeight = "0";
    }

    event.stopPropagation();
  });
});

// document.addEventListener("click", () => {
//   homeChildList.forEach((list) => {
//     list.style.opacity = "0";
//     list.style.maxHeight = "0";
//   });
// });

// ------------ home carousel -----------------
// let homeSlider = document.querySelector(".home-slider .list");
// let items = document.querySelectorAll(".home-slider .list .item");
// let next = document.getElementById("next");
// let prev = document.getElementById("prev");
// let dots = document.querySelectorAll(".home-slider .dots li");

// let lengthItems = items.length - 1;
// let active = 0;
// next.onclick = function () {
//   active = active + 1 <= lengthItems ? active + 1 : 0;
//   reloadSlider();
// };
// prev.onclick = function () {
//   active = active - 1 >= 0 ? active - 1 : lengthItems;
//   reloadSlider();
// };
// // let refreshInterval = setInterval(() => {
// //   next.click();
// // }, 3000);
// function reloadSlider() {
//   homeSlider.style.left = -items[active].offsetLeft + "px";
//   //
//   let last_active_dot = document.querySelector(".home-slider .dots li.active");
//   last_active_dot.classList.remove("active");
//   dots[active].classList.add("active");

//   clearInterval(refreshInterval);
//   refreshInterval = setInterval(() => {
//     next.click();
//   }, 3000);
// }

// dots.forEach((li, key) => {
//   li.addEventListener("click", () => {
//     active = key;
//     reloadSlider();
//   });
// });
// window.onresize = function (event) {
//   reloadSlider();
// };

// // end home carousel
// start selection carousel

const initSelectionSlider = () => {
  const imageList = document.querySelector(".sel-slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".sel-btns");
  const sliderScrollbar = document.querySelector(
    ".sel-carousel .slider-scrollbar"
  );
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  const scrollAmount = imageList.clientWidth * 0.3; // scroll speed here

  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "sel-prev-slide" ? -1 : 1;
      let newPosition = imageList.scrollLeft + scrollAmount * direction;

      if (newPosition < 0) {
        newPosition = maxScrollLeft;
      } else if (newPosition > maxScrollLeft) {
        newPosition = 0;
      }

      imageList.scroll({
        left: newPosition,
        behavior: "smooth",
      });
    });
  });

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    // handleSlideButtons();
  });
};

window.addEventListener("resize", initSelectionSlider);
window.addEventListener("load", initSelectionSlider);

// Function to click the button

function clickSelButton() {
  document.getElementById("sel-next-slide").click();
}
setInterval(clickSelButton, 5000);

// end selection carousel
// start offers carousel

const initOffersSlider = () => {
  const imageList = document.querySelector(
    ".offers-slider-wrapper .image-list"
  );
  const slideButtons = document.querySelectorAll(".offers-btns");
  const sliderScrollbar = document.querySelector(
    ".offers-carousel .slider-scrollbar"
  );
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  const scrollAmount = imageList.clientWidth * 0.3; // scroll speed here

  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "offers-prev-slide" ? -1 : 1;
      let newPosition = imageList.scrollLeft + scrollAmount * direction;

      if (newPosition < 0) {
        newPosition = maxScrollLeft;
      } else if (newPosition > maxScrollLeft) {
        newPosition = 0;
      }

      imageList.scroll({
        left: newPosition,
        behavior: "smooth",
      });
    });
  });

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    // handleSlideButtons();
  });
};

window.addEventListener("resize", initOffersSlider);
window.addEventListener("load", initOffersSlider);

// Function to click the button

function clickOffersButton() {
  document.getElementById("offers-next-slide").click();
}

setInterval(clickOffersButton, 5000);

// end offers carousel
// start explore carousel

const initExploreSlider = () => {
  const imageList = document.querySelector(
    ".explore-slider-wrapper .image-list"
  );
  const slideButtons = document.querySelectorAll(".explore-btns");
  const sliderScrollbar = document.querySelector(
    ".explore-carousel .slider-scrollbar"
  );
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  const scrollAmount = imageList.clientWidth * 0.3; // scroll speed here

  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "explore-prev-slide" ? -1 : 1;
      let newPosition = imageList.scrollLeft + scrollAmount * direction;

      if (newPosition < 0) {
        newPosition = maxScrollLeft;
      } else if (newPosition > maxScrollLeft) {
        newPosition = 0;
      }

      imageList.scroll({
        left: newPosition,
        behavior: "smooth",
      });
    });
  });

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    // handleSlideButtons();
  });
};

window.addEventListener("resize", initExploreSlider);
window.addEventListener("load", initExploreSlider);

// end offers carousel
