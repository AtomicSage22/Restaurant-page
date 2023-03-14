export function homePopulator(page, nav){
    const description = document.createElement("p");
    description.className = "description";
    description.textContent = "Welcome to Kultured Appetite, where culinary excellence meets exceptional service! Our team of highly skilled chefs is dedicated to creating an unforgettable dining experience for each and every one of our guests.";
    page.insertBefore(description, nav);
}