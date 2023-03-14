export function menuPopulator(page, nav){
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu";
    const heading = document.createElement("h2");
    heading.textContent = "Menu";
    const item1 = document.createElement("p");
    item1.textContent = "Egg's Benedict";
    const item2 = document.createElement("p");
    item2.textContent = "French Toast";
    const item3 = document.createElement("p");
    item3.textContent = "Scrambled Eggs";
    const item4 = document.createElement("p");
    item4.textContent = "Egg Curry";
    menuContainer.append(heading, item1, item2, item3, item4);
    page.insertBefore(menuContainer, nav);
}