import "../styles/menu.css";
import pancake from "../assets/pancake.jpg";
import frenchToast from "../assets/french-toast.jpg";
import bv from "../assets/bv.jpg";
import blt from "../assets/blt.jpg";


export function menu() {
  const content = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  content.appendChild(menuContainer);

  const h1 = document.createElement("h1");
  h1.textContent = "Main Dishes";
  menuContainer.appendChild(h1);
  
  const menuDishesContainer = document.createElement("div");
  menuDishesContainer.classList.add("menu-dishes-container");
  menuContainer.appendChild(menuDishesContainer);
  
  const dish1Container = document.createElement("div");
  dish1Container.classList.add("dish1-container");
  menuDishesContainer.appendChild(dish1Container);
  console.log(dish1Container)

  const pancakeHeader = document.createElement("h3");
  pancakeHeader.textContent = "Pancakes";
  dish1Container.appendChild(pancakeHeader);
  const pancakePara = document.createElement("p");
  pancakePara.textContent = "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.";
  dish1Container.appendChild(pancakePara);
  
  const pancakePriceImageDiv = document.createElement("div");
  dish1Container.appendChild(pancakePriceImageDiv);

  const pancakePrice = document.createElement("h4");
  pancakePrice.textContent = "$4";
  pancakePriceImageDiv.appendChild(pancakePrice);
  const pancakeImage = document.createElement("img");
  pancakeImage.src = pancake;
  pancakePriceImageDiv.appendChild(pancakeImage);

  
  const dish2Container = document.createElement("div");
  dish2Container.classList.add("dish2-container");
  menuDishesContainer.appendChild(dish2Container);

  const toastHeader = document.createElement("h3");
  toastHeader.textContent = "French Toast";
  dish2Container.appendChild(toastHeader);
  const toastPara = document.createElement("p");
  toastPara.textContent = "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.";
  dish2Container.appendChild(toastPara);
  
  const toastPriceImageDiv = document.createElement("div");
  dish2Container.appendChild(toastPriceImageDiv);

  const toastPrice = document.createElement("h4");
  toastPrice.textContent = "$5";
  toastPriceImageDiv.appendChild(toastPrice);
  const toastImage = document.createElement("img");
  toastImage.src = frenchToast;
  toastPriceImageDiv.appendChild(toastImage);



  const dish3Container = document.createElement("div");
  dish3Container.classList.add("dish3-container");
  menuDishesContainer.appendChild(dish3Container);

  const bvHeader = document.createElement("h3");
  bvHeader.textContent = "Beary Veggie Sandwich";
  dish3Container.appendChild(bvHeader);
  const bvPara = document.createElement("p");
  bvPara.textContent = "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.";
  dish3Container.appendChild(bvPara);
  
  const bvPriceImageDiv = document.createElement("div");
  dish3Container.appendChild(bvPriceImageDiv);

  const bvPrice = document.createElement("h4");
  bvPrice.textContent = "$9";
  bvPriceImageDiv.appendChild(bvPrice);
  const bvImage = document.createElement("img");
  bvImage.src = bv;
  bvPriceImageDiv.appendChild(bvImage);


  const dish4Container = document.createElement("div");
  dish4Container.classList.add("dish4-container");
  menuDishesContainer.appendChild(dish4Container);

  const bltHeader = document.createElement("h3");
  bltHeader.textContent = "BLT Sandwich";
  dish4Container.appendChild(bltHeader);
  const bltPara = document.createElement("p");
  bltPara.textContent = "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.";
  dish4Container.appendChild(bltPara);
  
  const bltPriceImageDiv = document.createElement("div");
  dish4Container.appendChild(bltPriceImageDiv);

  const bltPrice = document.createElement("h4");
  bltPrice.textContent = "$10";
  bltPriceImageDiv.appendChild(bltPrice);
  const bltImage = document.createElement("img");
  bltImage.src = blt;
  bltPriceImageDiv.appendChild(bltImage);
  
}