
export function contact(page, nav){
    const contact = document.createElement("div");
    contact.className = "contact-info";
    const phoneHeading = document.createElement("h2");
    phoneHeading.textContent = "Phone";
    const phone = document.createElement("p");
    phone.textContent = "+91-964-466-5727";
    const addressHeading = document.createElement("h2");
    addressHeading.textContent = "Address"
    const address = document.createElement("p");
    address.textContent = "MP Nagar zone 1, Bhopal, India";
    contact.append(phoneHeading, phone, addressHeading, address);
    page.insertBefore(contact, nav);
}