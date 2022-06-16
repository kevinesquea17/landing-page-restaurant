const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 15,
    effect: 'slide',
    loopedSlides: 1,
    rewind: true,
   });

   const mobileMenu = document.querySelector('#btn-mobile');
   const navegation = document.querySelector('.navegation');

   mobileMenu.addEventListener('click', () => {
      navegation.classList.toggle('show');
   })

const myJson = {
  "cities": [
    {"name": "Paris", "pop": 2},
    {"name": "London", "pop": 8},
    {"name": "New York", "pop": 9}
  ]
};


const customers = [
  {
    id: 'a0675',
    name: 'Peter',
    purchaseAmount: 400,
  },

  {
    id: 'a0676',
    name: 'Lana',
    purchaseAmount: 600,
  },

  {
    id: 'a0677',
    name: 'Amber',
    purchaseAmount: 700,
  }
]


function calc(array, n1, n2) {
  // Your code goes here
  if(array.length != 0 && n1 <= n2){
    let sum = 0;
    for(let i = n1; i <= n2; i++){
      sum = sum + array[i];
    }
    return sum;
  }

  return 0;
}
  

let array = [0,1,2,3,4,5,3];

console.log(calc(array, 0, 0));
  