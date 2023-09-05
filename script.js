const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'bison steak',
    category: 'dinner',
    price: 22.99,
    img: './imag  es/item-10.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const btnCont = document.getElementById('btn-container');
const main = document.getElementById('main');

/*** create menu items */
const getMain = (arr) => {
  let str = '';
  arr.forEach((item) => {
    str += `<article class="card">
    <img
      class="img"
      src="https://images.pexels.com/photos/4050990/pexels-photo-4050990.jpeg?cs=srgb&dl=pexels-alleksana-4050990.jpg&fm=jpg&w=640&h=427"
      alt=""
    />
    <div class="info">
      <span class="title"
        ><h1 class="" id="title">${item.title}</h1>
        <h6 id="price">${item.price}$</h6>
      </span>
      <span class="description">${item.desc}
      </span>
    </div>
  </article>`;
  });
  return str;
};
main.innerHTML = getMain(menu);

/*** create filter buttons */
const getBtn = (arr) => {
  let str = '<button class="btn active" data-id="all">all</button>';
  arr.forEach((item) => {
    if (!str.match(item.category))
      str += `<button class="btn" data-id="${item.category}">${item.category}</button>`;
  });
  return str;
};
btnCont.innerHTML = getBtn(menu);

const filterbtn = document.querySelectorAll('.btn');
console.log(filterbtn);
filterbtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    filterbtn.forEach((b) => {
      b.classList.remove('active');
    });
    btn.classList.add('active');
    let value = e.currentTarget.dataset.id;

    let categories = menu.filter((item) => {
      if (item.category === value) {
        return item;
      }
    });

    if (value === 'all') {
      main.innerHTML = getMain(menu);
    } else {
      main.innerHTML = getMain(categories);
    }
  });
});
