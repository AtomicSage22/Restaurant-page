import { home } from "./home";
import { contact } from "./contact";
const container = document.querySelector("#content");


export function initialLoad(){
    const heading = document.createElement("h1");
    const page = document.createElement("div");
    page.className = "page";
    const nav = document.createElement("nav");
    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    heading.textContent = "Kultered Appetite";
    nav.append(homeButton, menuButton, contactButton);
    page.append(nav);
    container.append(heading, page);
    homeButton.addEventListener("click", () => {
        const description = document.querySelector(".description");
        const contactInfo = document.querySelector(".contact-info");
        if(description){
            description.remove();
        }
        if(contactInfo){
            contactInfo.remove();
        }

        home(page, nav)});
    contactButton.addEventListener("click", () => {
        const description = document.querySelector(".description");
        const contactInfo = document.querySelector(".contact-info");
        if(contactInfo){
            contactInfo.remove();
        }
        if(description){
            description.remove();
        }


        contact(page, nav)});
    home(page, nav); 
}

