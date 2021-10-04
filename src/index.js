console.log("JS is loaded!!!!!");

import About from "../views/About.js";
import Projects from "../views/Projects.js";
import Home from "../views/Home.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
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
  console.log("T", match.route.view);
  const vieww = new match.route.view();

  document.querySelector("#app").innerHTML = await vieww.getHTML();

  console.log(match.route);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    console.log(e.target.hash);
    if (e.target.matches("[data-link")) {
      e.preventDefault();
      navigateTo(e.target.hash);
      console.log(e.target.hash);
    }
  });
  router();
});
document.addEventListener("scroll", () => {
  const topBar = document.querySelector(".top-bar");
  if (window.scrollY !== 0) {
    topBar.classList.add("scrolled");
  } else {
    topBar.classList.remove("scrolled");
  }
});

document.addEventListener("mouseover", (e) => {
  if (e.target.className === "go") {
    e.target.classList.add("extra");
  }
});