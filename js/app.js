import {aboutHtml} from "./about.js";
import {homeHtml} from "./home.js";
import {addRiderHtml, addRiderSetUp} from "./addRider.js";

export const changePage = (page) => {
  const content = document.getElementById("app");

  switch (page) {
    case "about":
      content.innerHTML = aboutHtml()
      break;
    case "home":
      content.innerHTML = homeHtml()
      break;
    case 'addRider':
      content.innerHTML = addRiderHtml()
      addRiderSetUp();
      break;
    default:
      content.innerHTML = "something wrong"
      break;

  }

}

changePage('home');

window.changePage = changePage;
