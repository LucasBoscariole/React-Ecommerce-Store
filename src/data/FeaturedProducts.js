import image1 from '../images/woman/1.jpg';
import image2 from '../images/men/5.jpg';
import image3 from '../images/woman/2.jpg';
import image4 from '../images/sunglasses/5.jpg';
import image5 from '../images/men/7.jpg';
import image6 from '../images/watches/3.jpg';
import image7 from '../images/sunglasses/2.jpg';
import image8 from '../images/woman/11.jpg';
import image9 from '../images/watches/4.jpg';

export const FeaturedProdutsData = [
  {
    title: 'New Coat',
    star: 4.5,
    price: 39000,
    img: image1,
    alt: 'clothes',
    reviews: 325,
    category: 'Woman',
  },
  {
    title: "Men's clothes",
    star: 4.3,
    price: 75000,
    img: image2,
    alt: 'men',
    reviews: 35,
    category: 'Men',
  },
  {
    title: 'Woman',
    star: 3.5,
    price: 120000,
    img: image3,
    alt: 'woman',
    reviews: 80,
    category: 'Woman',
  },
  {
    title: 'OAK Sunglass',
    star: 4,
    price: 51000,
    img: image4,
    alt: 'clothes',
    reviews: 325,
    category: 'Woman',
  },
  {
    title: 'Men Cloth',
    star: 3.7,
    price: 160000,
    img: image5,
    alt: 'clothes',
    reviews: 325,
    category: 'Woman',
  },
  {
    title: 'AS Watch',
    star: 4.2,
    price: 81000,
    img: image6,
    alt: 'clothes',
    reviews: 64,
    category: 'Men',
  },
  {
    title: 'Sunglass KSA',
    star: 4,
    price: 17000,
    img: image7,
    alt: 'clothes',
    reviews: 24,
    category: 'Woman',
  },
  {
    title: 'Sa Cloth',
    star: 2.8,
    price: 110000,
    img: image8,
    alt: 'clothes',
    reviews: 97,
    category: 'Men',
  },
  {
    title: 'Los Mans',
    star: 3,
    price: 57000,
    img: image9,
    alt: 'clothes',
    reviews: 55,
    category: 'Men',
  },
];

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 1000);
};
