const topBtn = document.querySelector('#top');
const bottomBtn = document.querySelector('#bottom');
const dressBtn = document.querySelector('#dress');
const allBtn = document.querySelector('#all');
const buttons = document.querySelectorAll('.buttons > button');

const events = {
  top: '상의',
  bottom: '하의',
  dress: '원피스',
};

const products = [
  { name: '반팔티', price: '10000', type: '상의' },
  { name: '린넨 셔츠', price: '45000', type: '상의' },
  { name: '긴팔티', price: '11000', type: '상의' },
  { name: '린넨 바지', price: '25000', type: '하의' },
  { name: '슬랙스', price: '18000', type: '하의' },
  { name: '롱 원피스', price: '40000', type: '원피스' },
  { name: '린넨 원피스', price: '30000', type: '원피스' },
];

buttons.forEach((item) => {
  item.addEventListener('click', () => {
    reduced = products.reduce((res, ele) => {
      if (ele.type === events[item.id] || item.id === 'all')
        res.push({ name: ele.name, price: ele.price });
      return res;
    }, []);
    console.log(reduced);
  });
});

const errorMsg = () => {
  return `indexing error, You must enter a range between 0 and ${
    products.length - 1
  }.`;
};

const totalTwo = (idx1, idx2) => {
  let sum = 0;
  try {
    sum = parseInt(products[idx1].price) + parseInt(products[idx2].price);
  } catch {
    console.log(errorMsg());
  }
  console.log('totalTwo : ', sum);
};

const totalAll = (...args) => {
  let sum = 0;
  try {
    for (x of args) sum += parseInt(products[parseInt(x)].price);
  } catch {
    console.log(errorMsg());
  }
  console.log(`totalAll(${[args]}) : `, sum);
};

totalTwo(1, 2);
totalAll(1, 2, 3);
