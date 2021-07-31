import womanimg1 from '../images/woman/1.jpg';
import watchesimg8 from '../images/watches/8.jpg';
import menimg13 from '../images/men/13.jpg';
import sunimg7 from '../images/sunglasses/7.jpg';
import watchesimg4 from '../images/watches/4.jpg';
import menimg10 from '../images/men/10.jpg';
import womanimg6 from '../images/woman/6.jpg';
import sunimg1 from '../images/sunglasses/1.jpg';
import menimg8 from '../images/men/8.jpg';

export const FeaturedProdutsData = [
  {
    title: 'Beautiful Pants',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta delectus consectetur sed vel et vitae ex corporis libero doloribus, ducimus impedit aliquam illum suscipit vero dolorum a animi, voluptatibus similique. Inventore temporibus nobis magnam.',
    img: womanimg1,
    stars: 4,
    price: 42000,
    category: 'Woman',
    id: '1',
    reviews: 21,
  },
  {
    title: 'Brown Watch',
    desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam reprehenderit ab voluptate facilis libero repellat, adipisci optio? Pariatur repellendus tempora temporibus, maxime officia sint nam! Aliquam in velit minima quo impedit excepturi minus ab magnam et perferendis.',
    img: watchesimg8,
    stars: 4.5,
    price: 76000,
    category: 'Watches',
    id: '43',
    reviews: 34,
  },
  {
    title: 'Brown Coat',
    desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam reprehenderit ab voluptate facilis libero repellat, adipisci optio? Pariatur repellendus tempora temporibus, maxime officia sint nam! Aliquam in velit minima quo impedit excepturi minus ab magnam et perferendis.',
    img: menimg13,
    stars: 4.5,
    price: 99000,
    category: 'Men',
    id: '35',
    reviews: 17,
  },
  {
    title: 'Night Sunglass',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem id minima odit! Quis possimus nostrum eum. Voluptas illum excepturi ipsa quidem ullam delectus facilis accusamus ratione exercitationem doloribus, eligendi libero corporis! Aperiam totam ratione dolorem autem.',
    img: sunimg7,
    stars: 4,
    price: 57000,
    category: 'Sunglasses',
    id: '22',
    reviews: 36,
  },
  {
    title: 'KD Watch',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet obcaecati ducimus iste, neque perferendis tempora ut molestiae. Animi, velit atque. Hic, reiciendis voluptatum, mollitia, odio eos totam illo minus ea sunt consectetur odit impedit temporibus explicabo? Necessitatibus error nihil rerum laborum vel?',
    img: watchesimg4,
    stars: 3.7,
    price: 56000,
    category: 'Watches',
    id: '39',
    reviews: 74,
  },
  {
    title: 'Jeans Sweater',
    desc: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem mollitia id natus esse, excepturi ratione earum! Veritatis voluptatum ipsam, necessitatibus aperiam exercitationem quasi nostrum. Temporibus recusandae deleniti vel quas tempora quidem veniam',
    img: menimg10,
    stars: 3.3,
    price: 75000,
    category: 'Men',
    id: '32',
    reviews: 36,
  },
  {
    title: 'Coat',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea, dolore, cumque nulla at sit facilis suscipit inventore necessitatibus neque doloribus ab, numquam ullam aliquid eaque alias architecto molestias optio!',
    img: womanimg6,
    stars: 4.5,
    price: 180000,
    category: 'Woman',
    id: '6',
    reviews: 16,
  },
  {
    title: 'Sunglass OKA',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam neque voluptate fugit mollitia sed. Suscipit necessitatibus sed expedita molestias sint eligendi quasi omnis, veniam praesentium quod saepe magni enim fuga alias sapiente dignissimos doloremque.',
    img: sunimg1,
    stars: 3.5,
    price: 50500,
    category: 'Sunglasses',
    id: '16',
    reviews: 34,
  },
  {
    title: 'White Shirt',
    desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem id minima odit! Quis possimus nostrum eum. Voluptas illum excepturi ipsa quidem ullam delectus facilis accusamus ratione exercitationem doloribus, eligendi libero corporis! Aperiam totam ratione dolorem autem.',
    img: menimg8,
    stars: 4,
    price: 160000,
    category: 'Men',
    id: '30',
    reviews: 4,
  },
];

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 1000);
};
