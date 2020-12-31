import faker from 'faker';
import axios from 'axios';
import { uid as uuid } from 'uid';
import { firebase } from '../../src/config/firebase';

export const order = {
  title: faker.name.findName(),
  bookingDate: 1554284950000,
  address: {
    city: faker.address.city,
    country: faker.address.country,
    street: faker.address.streetAddress,
    zip: faker.address.zipCode,
  },
  customer: {
    email: faker.internet.email(),
    name: faker.name.findName(),
    phone: faker.internet.phone
  },
  uid: faker.random.uuid()
};

export const getToken = async () => {
  try {
    const customToken = await firebase.auth().createCustomToken(process.env.UID);
    const { data } = await axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=${process.env.API_KEY}`, {
      token: customToken,
      returnSecureToken: true
    });
    return data.idToken;
  } catch ({ response }) {
    return console.log(response.data);
  }
};
