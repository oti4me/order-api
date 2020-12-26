import faker from 'faker';

export const order = {
  "title": faker.name.findName(),
  "bookingDate": 1554284950000,
  "address": {
    "city": faker.address.city,
    "country": faker.address.country,
    "street": faker.address.streetAddress,
    "zip": faker.address.zipCode,
  },
  "customer": {
    "email": faker.internet.email(),
    "name": faker.name.findName(),
    "phone": faker.internet.phone
  },
  "uid": faker.random.uuid()
}
