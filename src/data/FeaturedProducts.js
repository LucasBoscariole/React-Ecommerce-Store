import image1 from '../images/woman/1.jpg';
import image2 from '../images/men/3.jpg';
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
  },
  {
    title: "Men's clothes",
    star: 4.3,
    price: 25000,
    img: image2,
    alt: 'men',
    reviews: 35,
  },
  {
    title: 'Woman',
    star: 3.5,
    price: 40000,
    img: image3,
    alt: 'woman',
    reviews: 80,
  },
  {
    title: 'OAK Sunglass',
    star: 4,
    price: 51000,
    img: image4,
    alt: 'clothes',
    reviews: 325,
  },
  {
    title: 'Men Cloth',
    star: 3.7,
    price: 47000,
    img: image5,
    alt: 'clothes',
    reviews: 325,
  },
  {
    title: 'AS Watch',
    star: 4.2,
    price: 34000,
    img: image6,
    alt: 'clothes',
    reviews: 64,
  },
  {
    title: 'Sunglass KSA',
    star: 4,
    price: 17000,
    img: image7,
    alt: 'clothes',
    reviews: 24,
  },
  {
    title: 'Sa Cloth',
    star: 2.8,
    price: 32000,
    img: image8,
    alt: 'clothes',
    reviews: 97,
  },
  {
    title: 'Los Mans',
    star: 3,
    price: 57000,
    img: image9,
    alt: 'clothes',
    reviews: 55,
  },
];

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};
