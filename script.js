// console.log('working')
 
document.addEventListener('DOMContentLoaded', () => {
    
    const style = document.createElement('style');
    style.textContent = `
      .card_container {
        display: flex;
        font-size: small;
        overflow-x: auto;
        margin-left: auto;
        margin-right: auto;
      }
      .card_img {
        background-color: #f1efee;
        border-radius: 228px;
        width: 110px;
        border: 2px;
        margin-bottom: 1rem;
      }
      .card {
        padding: 0.4rem;
        text-align: center;
        justify-content:center;
        text-transform: uppercase;
      }
      a{
        color:black;
        text-decoration: none;
        margin-bottom:1rem;
        text-align: center;
        margin-right: 1rem;
        margin-top:2rem;
      }
    `;
    
 
document.head.appendChild(style);
 
const cardContainer = document.createElement('div');
cardContainer.className = 'card_container';
 
const cardData = [
     
  {
            img: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/best-sellers.png',
            link: '/collections/jm-best-sellers/?convert_optout',
            text: 'Best Sellers'
          },
          {
            img: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/new.png',
            link: '/collections/jm-new-arrivals/?convert_optout',
            text: 'New'
          },
          {
            img: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/necklaces.png',
            link: '/collections/necklaces/?convert_optout',
            text: 'Necklaces'
          },
          {
            img: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/rings.png',
            link: 'rings.html/?convert_optout',
            text: 'Rings'
          },
          {
            img: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/bracelets.png',
            link: '/collections/bracelets/?convert_optout',
            text: 'Earrings'
          },
          {
            img: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/personalized.png',
            link: '/collections/personalized/?convert_optout',
            text: 'Personalized'
          }
];
 
cardData.forEach(card => {
  

  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
 const link =document.createElement('a');
 link.href=card.link;
  const img = document.createElement('img');
  img.className = 'card_img';
  img.src = card.img;
  img.alt = card.text;
 
  const text = document.createElement('p');
  text.textContent = card.text;
  link.appendChild(img);
  link.appendChild(text);
  cardDiv.appendChild(link);
 
 
  cardContainer.appendChild(link);
});

    
 
const heroBanner = document.getElementById('hero-banner');
console.log(heroBanner); 
 
    
    heroBanner.parentElement.insertBefore(cardContainer, heroBanner);  
      
  });
  
  