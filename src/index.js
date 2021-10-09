import About from "../views/About.js";
import Projects from "../views/Projects.js";
import Home from "../views/Home.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().bottom;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) *
      (percentageScroll / 100)
  );
};

const handleScrollAnimation = () => {
  if (document.body.contains(document.querySelector(".projects-container"))) {
    const projectItem = document.getElementsByClassName("image-title");
    for (let i = 0; i < projectItem.length; i++) {
      if (elementInView(projectItem[i], 100)) {
        projectItem[i].classList.add("scrolled");
      }
    }
  }
};

const handleTopScroll = () => {
  const topBar = document.querySelector(".top-bar");
  if (window.scrollY !== 0) {
    topBar.classList.add("scrolled");
  } else {
    topBar.classList.remove("scrolled");
  }
};

const handleTemplateAnimation = () => {
  // false why
  const first = document.getElementById("first");
  const last = document.getElementById("last");

  first.classList.add("loaded");
  setTimeout(function () {
    last.classList.add("loaded");
  }, 1000);
};

const router = async () => {
  const routes = [
    { path: "#/", view: Home },
    { path: "#/about", view: About },
    { path: "#/proj", view: Projects },
  ];

  const possibleMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.hash === route.path,
    };
  });
  // { path: "#/about", view: ()=>About },
  // const vieww = new (match.route.view())();

  let match = possibleMatches.find((possibleMatch) => possibleMatch.isMatch);
  if (!match) {
    console.log("You suck at searching");
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
  const vieww = new match.route.view();

  document.querySelector("#app").innerHTML = await vieww.getHTML();
  handleTemplateAnimation();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link")) {
      e.preventDefault();
      navigateTo(e.target.hash);
    }
  });
  router();
});
document.addEventListener("scroll", () => {
  handleTopScroll();
  handleScrollAnimation();
});

document.addEventListener("mouseover", (e) => {
  if (e.target.className === "go") {
    e.target.classList.add("extra");
  }
});
