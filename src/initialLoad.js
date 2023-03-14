import { homePopulator } from "./home";
import { menuPopulator } from "./menu";
import { contactPopulator } from "./contact";
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
        const menu = document.querySelector(".menu");
        if(description){
            description.remove();
        }
        if(contactInfo){
            contactInfo.remove();
        }
        if(menu){
            menu.remove();
        }

        homePopulator(page, nav)});

    contactButton.addEventListener("click", () => {
        const description = document.querySelector(".description");
        const contactInfo = document.querySelector(".contact-info");
        const menu = document.querySelector(".menu");
        if(contactInfo){
            contactInfo.remove();
        }
        if(description){
            description.remove();
        }
        if(menu){
            menu.remove();
        }
        contactPopulator(page, nav)});

    menuButton.addEventListener("click", ()=>{
        const description = document.querySelector(".description");
        const contactInfo = document.querySelector(".contact-info");
        const menu = document.querySelector(".menu");
        if(contactInfo){
            contactInfo.remove();
        }
        if(description){
            description.remove();
        }
        if(menu){
            menu.remove();
        }
        menuPopulator(page, nav);
    });

    homePopulator(page, nav); 
}

