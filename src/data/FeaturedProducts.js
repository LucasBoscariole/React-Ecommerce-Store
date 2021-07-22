import image from '../images/featured1.jpg';

export const FeaturedProdutsData = [
  {
    title: 'New Coat',
    star: 4.5,
    price: 39000,
    img: image,
    alt: 'clothes',
    reviews: 325,
  },
  {
    title: 'New Coat',
    star: 4.5,
    price: 39000,
    img: image,
    alt: 'clothes',
    reviews: 325,
  },
  {
    title: 'New Coat',
    star: 4.5,
    price: 39000,
    img: image,
    alt: 'clothes',
    reviews: 325,
  },
  {
    title: 'New Coat',
    star: 4.5,
    price: 39000,
    img: image,
    alt: 'clothes',
    reviews: 325,
  },
  {
    title: 'New Coat',
    star: 4.5,
    price: 39000,
    img: image,
    alt: 'clothes',
    reviews: 325,
  },
  {
    title: 'New Coat',
    star: 4.5,
    price: 39000,
    img: image,
    alt: 'clothes',
    reviews: 325,
  },
  {
    title: 'New Coat',
    star: 4.5,
    price: 39000,
    img: image,
    alt: 'clothes',
    reviews: 325,
  },
  {
    title: 'New Coat',
    star: 4.5,
    price: 39000,
    img: image,
    alt: 'clothes',
    reviews: 325,
  },
  {
    title: 'New Coat',
    star: 4.5,
    price: 39000,
    img: image,
    alt: 'clothes',
    reviews: 325,
  },
];

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};
