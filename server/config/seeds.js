const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Cats' },
    { name: 'Dogs' },
    { name: 'Turtles' },
    { name: 'Lamas' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Cat head scratching 1 hour',
      description:
        'Give your cat the luxury it demands with a one hour head scratching service from Purrfect Paws!',
      image: 'kitty.jpg',
      category: categories[0]._id,
      price: 99.99,
      quantity: 1
    },
    {
      name: 'Cat hair shaving',
      description:
        'Are you upset with your cat?  Did it wake you up at 3am?  Pay your cat back with our Full Cat Shaving service!',
      image: 'kitty1.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 1
    },
    {
      name: 'Dog Hair Cutt',
      category: categories[1]._id,
      description:
        'Is your dog shedding everywhere?  Get your dog a Purrfect Haircut!',
      image: 'puppy.jpg',
      price: 37.99,
      quantity: 20
    },
    {
      name: 'Turtle Wax',
      category: categories[1]._id,
      description:
        'Make your turtle Purr with a shinny shell waxing!.',
      image: 'turtle.jpg',
      price: 33.99,
      quantity: 1
    },
    {
      name: 'Nail clipping ',
      category: categories[1]._id,
      description:
        'Just like us dogs like a fresh nail clipping!',
      image: 'puppy1.jpg',
      price: 24.99,
      quantity: 1
    },
    {
      name: 'Camel Camp',
      category: categories[2]._id,
      description:
        'Everyone knows Camels are very social.  Sign your camel up for our Camel Camp!',
      image: 'camel.jpg',
      price: 399.99,
      quantity: 30
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Colin',
    lastName: 'McElhatton',
    email: 'colin@testmail.com',
    password: 'test1234',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Robert',
    lastName: 'Smith',
    email: 'robert@testmail.com',
    password: 'test1234'
  });

  console.log('users seeded');

  process.exit();
});
