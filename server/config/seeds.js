const db = require('./connection');
const { User, Customer, Service, Pet } = require('../server/models');

db.once('open', async () => {
  await Service.deleteMany();

  const services = await Service.insertMany([
    { name: 'Large Dog Grooming' },
    { name: 'Medium Dog Grooming' },
    { name: 'Small Dog Grooming' },
    { name: 'Teeth Brushing' },
    { name: 'Shell Waxing' }
  ]);

  console.log('services seeded');

  await Pet.deleteMany();

  const pets = await Pet.insertMany([
    {
      name: 'Lily the Lama',
      description:
        'She likes tacos',
      image: 'lama.jpg',
      owner: customer[0]._id,
    },
    {
      name: 'Lily the Lama',
      description:
        'She likes tacos',
      image: 'lama.jpg',
      owner: customer[0]._id,
    },
  ]);

  console.log('pets seeded');

  await Customer.deleteMany();

  await Customer.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    phone: '555-555-5555',
    pets: [
      {
        pets: [pets[0]._id, pets[1]._id]
      }
    ]
  });

  console.log('customers seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Colin',
    lastName: 'McElhatton',
    email: 'cmac@cu.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
