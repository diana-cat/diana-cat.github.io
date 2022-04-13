const images = ['../img/Anton1.png', '../img/Anton2.png', '../img/Anton3.png', '../img/Anton4.png', 
'../img/Anton5.png', '../img/Anton6.png', '../img/Anton7.png', '../img/Anton8.png'];
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumbBar');

const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');

let index = 0;
let lastImg;

for(let i = 0; i < images.length; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i])
    newImage.setAttribute('class', 'light')
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {displayedImage.src = e.target.src; index = i; 
                              darkLight(e.target); if(lastImg != null){darkLight(lastImg)}; 
                              lastImg = e.target; });
}

leftArrow.onclick = function()
{
  index = Number(index)-1;
  if(index < 0)
  {
    index = images.length-1;
  }
  displayedImage.src = images[index];
  darkLight(lastImg);
  darkLight(thumbBar.getElementsByTagName('img')[index]);
  lastImg = thumbBar.getElementsByTagName('img')[index];
}

rightArrow.onclick = function()
{
  index = Number(index)+1;
  if(index>images.length-1)
  {
    index = 0;
  }
  displayedImage.src = images[index];
  darkLight(lastImg);
  darkLight(thumbBar.getElementsByTagName('img')[index]);
  lastImg = thumbBar.getElementsByTagName('img')[index];
}

function darkLight(image)
{
  if(image.getAttribute('class') === 'light')
  {image.style.filter = "brightness(40%)";
  image.setAttribute('class', 'dark');}
  else
  {image.style.filter = "brightness(100%)";
  image.setAttribute('class', 'light');}
}
