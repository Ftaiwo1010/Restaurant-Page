import "../styles/contact.css";

export function contact() {
 const content = document.querySelector("#content");

 const contactContainer = document.createElement('div');
 contactContainer.classList.add('contact-container');
 content.appendChild(contactContainer);

 const contactTextContainer = document.createElement("div");
 contactTextContainer.classList.add("contact-text-container");
 contactContainer.appendChild(contactTextContainer);

 const h1 = document.createElement("h1");
 h1.textContent = "Contact";
 contactTextContainer.appendChild(h1); 

 const p = document.createElement("p");
 p.textContent = "We'd love to hear from you! Whether you have a question about our menu, want to make a reservation, or just want to say hello, feel free to reach out.";
 contactTextContainer.appendChild(p); 

 const contactInfoContainer = document.createElement("div");
 contactInfoContainer.classList.add("contact-info-container");
 contactContainer.appendChild(contactInfoContainer);

 const locationContainer = document.createElement("div");
 locationContainer.classList.add("location-container");
 contactInfoContainer.appendChild(locationContainer); 

 const locationText1 = document.createElement("h3");
 locationText1.textContent = "Location";
 locationContainer.appendChild(locationText1);

 const locationText2 = document.createElement("p");
 locationText2.textContent = "132 Parkville, Luckylaine, Alaska"; 
 locationContainer.appendChild(locationText2);

 const locationText3 = document.createElement("p");
 locationText3.textContent = "Open Hours: 10:00 AM - 10:00 PM (Mon-Sun)";
 locationContainer.appendChild(locationText3);
 

 const chefContainer = document.createElement("div");
 chefContainer.classList.add("chef-container");
 contactInfoContainer.appendChild(chefContainer); 

 const chefName = document.createElement("h3");
 chefName.textContent = "Luke Derek";
 chefContainer.appendChild(chefName);

 const chefTitle = document.createElement("p");
 chefTitle.textContent = "Chef";
 chefContainer.appendChild(chefTitle);

 const chefNumber = document.createElement("p");
 chefNumber.textContent = "222-333-5556";
 chefContainer.appendChild(chefNumber);

 const chefMail = document.createElement("p");
 chefMail.textContent = "cheflukederek@gmail.com";
 chefContainer.appendChild(chefMail);


 const managerContainer = document.createElement("div");
 managerContainer.classList.add("manager-container");
 contactInfoContainer.appendChild(managerContainer); 

 const managerName = document.createElement("h3");
 managerName.textContent = "Matt Chalton";
 managerContainer.appendChild(managerName);

 const managerTitle = document.createElement("p");
 managerTitle.textContent = "Manager";
 managerContainer.appendChild(managerTitle);

 const managerNumber = document.createElement("p");
 managerNumber.textContent = "337-533-5556";
 managerContainer.appendChild(managerNumber);

 const managerMail = document.createElement("p");
 managerMail.textContent = "managermatt@gmail.com";
 managerContainer.appendChild(managerMail);

 const waiterContainer = document.createElement("div");
 waiterContainer.classList.add("manager-container");
 contactInfoContainer.appendChild(waiterContainer); 

 const waiterName = document.createElement("h3");
 waiterName.textContent = "Cash Collins";
 waiterContainer.appendChild(waiterName);

 const waiterTitle = document.createElement("p");
 waiterTitle.textContent = "Waiter";
 waiterContainer.appendChild(waiterTitle);

 const waiterNumber = document.createElement("p");
 waiterNumber.textContent = "777-593-5656";
 waiterContainer.appendChild(waiterNumber);

 const waiterMail = document.createElement("p");
 waiterMail.textContent = "waitercollins@gmail.com";
 waiterContainer.appendChild(waiterMail);
}