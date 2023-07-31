import createRestaurantHP from "./restaurant";
import createMenu from "./menu";
import createContact from "./contact";

function tabs() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("tabs");

    const home = document.createElement("div");
    home.textContent = "HOME"
    pageContent.appendChild(home);

    const menu = document.createElement("div");
    menu.textContent = "MENU"
    pageContent.appendChild(menu);

    const contact = document.createElement("div");
    contact.textContent = "CONTACT"
    pageContent.appendChild(contact);

    content.appendChild(pageContent);

    home.addEventListener ("click", () => {
        clearContent();
        createRestaurantHP();
    });
    menu.addEventListener ("click", () => {
        clearContent();
        createMenu();
    });
    contact.addEventListener ("click", () => {
        clearContent();
        createContact();
    });
}

function clearContent() {
    let content = document.querySelector("#content");
    let pageContent = document.querySelector(".page-content")
    content.removeChild(pageContent)
}

export default tabs;

