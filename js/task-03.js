const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


images.forEach(image => {
  // console.log(image);
  const itemForImg = document.createElement('li')
  console.log(itemForImg);
  itemForImg.classList.add('item')
  const picture = document.createElement('img');
  // console.log(picture);
  
  picture.alt = image.alt;
  picture.src = image.url;
  picture.classList.add("pic");
  

  // console.log(picture);
  itemForImg.appendChild(picture)
  const galleryEl = document.querySelector('.gallery');
  galleryEl.appendChild(itemForImg)

});
