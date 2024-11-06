import {aboutHtml} from "./about.js";
import {homeHtml} from "./home.js";

export const changePage = (page) => {
  const content = document.getElementById("app");

  let html = ""
  switch (page) {
    case "about":
      html = aboutHtml()
      break;
    case "home":
      html = homeHtml()
      break;
    default:
      html = "something wrong"
      break;

  }

  content.innerHTML = html;
}

changePage('home');

window.changePage = changePage;
