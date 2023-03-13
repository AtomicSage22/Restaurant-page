const container = document.querySelector("#content");
export function initialLoad(){
    const heading = document.createElement("h1");
    const description = document.createElement("p");
    heading.textContent = "Kultered Appetite";
    description.textContent = "Welcome to Kultured Appetite, where culinary excellence meets exceptional service! Our team of highly skilled chefs is dedicated to creating an unforgettable dining experience for each and every one of our guests.";
    container.append(heading, description);
}

