const faker = require('faker');
const fs = require('fs');
const Detail = require('./Detail.js');

const dummyData = [];
const randomize = () => ({
  _index: '',
  address: faker.address.streetAddress(),
  price: faker.random.number({ min: 800000, max: 5000000 }),
  body: faker.lorem.paragraphs(),
  subTitle: `${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
  ff_type: Math.random() > 0.5 ? 'Single Family' : 'Multi-Family',
  ff_yearBuilt: 1918 + Math.floor(Math.random() * 100),
  ff_heating: Math.random() > 0.5 ? 'Central' : 'None',
  ff_cooling: Math.random() > 0.5 ? 'Central' : 'None',
  ff_parking: `${faker.random.number({ min: 1, max: 6 })} spaces`,
  ff_lot: `${faker.random.number({ min: 1000, max: 10000 })} sqft`,
  ff_daysOnZillow: faker.date.past(),
  ff_pricePerSqft: faker.random.number({ min: 100, max: 1000 }),
  ff_saves: faker.random.number({ min: 70, max: 700 }),
  if_bedRoom: faker.random.number({ min: 1, max: 10 }),
  if_bathRoom: `${faker.random.number({ min: 1, max: 10 })} full, ${faker.random.number({ min: 1, max: 10 })} half`,
  if_heatingAndCooling: faker.random.words(),
  if_basement: faker.random.words(),
  if_flooring: faker.random.number({ min: 1, max: 10 }),
  if_other: faker.random.words(),
  sm_size: faker.random.number({ min: 1, max: 10 }),
  sm_amenities: faker.random.words(),
  sm_spaces: `${faker.random.number({ min: 1, max: 6 })} spaces`,
  c_typeAndStyle: faker.random.words(),
  c_d_builtIn: faker.date.past(),
  c_d_remodel: faker.date.past(),
  c_m_roof: faker.random.words(),
  c_m_exterior: faker.random.words(),
  c_other: faker.random.words(),
  ef_l_lot: faker.random.number({ min: 1, max: 10 }),
  ef_l_lotWidth: faker.random.number({ min: 1, max: 10 }),
  ef_other: faker.random.words(),
  parking: faker.random.words(),
  o_l_soldDate: faker.date.past(),
  o_l_soldPrice: faker.random.number({ min: 800000, max: 5000000 }),
  a_daysOnZillow: faker.date.past(),
  a_pastThirtydayView: faker.random.number({ min: 5, max: 50 }),
  a_savedLog: faker.random.number({ min: 5, max: 50 }),
});

for (let i = 1; i < 102; i += 1) {
  const aRandomObj = randomize();
  aRandomObj._index = i;
  aRandomObj.name = `home${i}`;
  dummyData.push(aRandomObj);
}

// fs.writeFile('./zillowListingData.json', JSON.stringify(dummyData), 'utf8', (err) => {
//   if (err) {
//     console.log('Some error occured - file either not saved or corrupted file saved.');
//   } else {
//     console.log('It\'s saved!');
//     process.exit();
//   }
// });
console.log(dummyData[0]);
const insertDummies = () => (Detail.insertMany(dummyData, () => {
  process.exit();
}));

insertDummies();

// --------------------------- EXTRA COMPONENT ------------------------------//
//
// const UserRequest = require('./UserRequest.js');
// const firstBuyers = [
//   {
//     name: faker.random.words(),
//     phone: faker.random.number({ min: 800000, max: 5000000 }),
//     mail: faker.random.words(),
//     timeStamp: faker.date.past(),
//   },
//   {
//     name: faker.random.words(),
//     phone: faker.random.number({ min: 800000, max: 5000000 }),
//     mail: faker.random.words(),
//     timeStamp: faker.date.past(),
//   }
// ]


// const insertDummyBuyer = () => {
//   return UserRequest.insertMany(firstBuyers);
// }

// insertDummyBuyer();
