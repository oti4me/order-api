import faker from 'faker';

// eslint-disable-next-line import/prefer-default-export
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

export const token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4MGU0NWJlNGIzMTE4MzA5M2RhNzUyYmIyZGU5Y2RjYTNlNmU4ZTciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY29uc3RydXlvLWNvZGluZy1jaGFsbGVuZ2UiLCJhdWQiOiJjb25zdHJ1eW8tY29kaW5nLWNoYWxsZW5nZSIsImF1dGhfdGltZSI6MTYwOTA5NDY2NCwidXNlcl9pZCI6IjVpRW0xSHZJeHViTGFpS080eWowTnBtdnEwRjIiLCJzdWIiOiI1aUVtMUh2SXh1YkxhaUtPNHlqME5wbXZxMEYyIiwiaWF0IjoxNjA5MDk0NjY0LCJleHAiOjE2MDkwOTgyNjQsImVtYWlsIjoiY29kaW5nLWNoYWxsZW5nZUBjb25zdHJ1eW8uZGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29kaW5nLWNoYWxsZW5nZUBjb25zdHJ1eW8uZGUiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.u8zlsdjjocO4DHlzq9wpN-Iubr6WZ1wZaanEA7A7PJqSoTllQrzymVL7QpH_iN1W3WbZAKM3Gzob9y3nwklfykdz2iV-kIDYXNXBQYv6Q9AnH-YolgSQ7boOHo0Xk6fzcC3WivGTjHh-2XJxzNGA4bHG_5jiZG9FXVkg3y-2-tMkkwlDEN3nwNZoh-I7no7yqUf7ymvkIgvkgQYzFqL1nN_UerHIMhGtY-KYlO5K-JeMvTsHrlPW7ydj5vkB7IjfzLB-uXsBkKy0vf5_IMVl5lXNU-S6nl8J4VI4uy82Vay4LjnIL5qOjJpw3JNAlwTo4nk5e7tC6xn2ERjDXl_Y7Q';
