// Home module
import "../styles/home.css";

export function home() {
  const content = document.querySelector("#content");

  const homeBackground = document.createElement("div");
  homeBackground.classList.add("home-background");
 

  const homeLayer = document.createElement("div");
  homeLayer.classList.add('home-layer');

  const layerTextContainer = document.createElement('div');
  layerTextContainer.classList.add('layer-text-container');
  const layerTextHeader = document.createElement('h1');
  layerTextHeader.textContent = 'Welcome To Bite, Where All The Magic Are Made!';

  const layerTextP = document.createElement('p');
  layerTextP.textContent = 'We do not cook, we create emotions.';
  const layerOrderBtn = document.createElement('button');
  layerOrderBtn.textContent = 'Order Now!';

  layerTextContainer.appendChild(layerTextHeader);
  layerTextContainer.appendChild(layerTextP);
  layerTextContainer.appendChild(layerOrderBtn);
  homeLayer.appendChild(layerTextContainer);
  homeBackground.appendChild(homeLayer)
  content.appendChild(homeBackground);
}