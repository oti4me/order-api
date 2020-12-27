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

export const token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4MGU0NWJlNGIzMTE4MzA5M2RhNzUyYmIyZGU5Y2RjYTNlNmU4ZTciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY29uc3RydXlvLWNvZGluZy1jaGFsbGVuZ2UiLCJhdWQiOiJjb25zdHJ1eW8tY29kaW5nLWNoYWxsZW5nZSIsImF1dGhfdGltZSI6MTYwOTA5ODc2NiwidXNlcl9pZCI6IjVpRW0xSHZJeHViTGFpS080eWowTnBtdnEwRjIiLCJzdWIiOiI1aUVtMUh2SXh1YkxhaUtPNHlqME5wbXZxMEYyIiwiaWF0IjoxNjA5MDk4NzY2LCJleHAiOjE2MDkxMDIzNjYsImVtYWlsIjoiY29kaW5nLWNoYWxsZW5nZUBjb25zdHJ1eW8uZGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29kaW5nLWNoYWxsZW5nZUBjb25zdHJ1eW8uZGUiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.g0oMFOlxAB9etyr8NnJosL7PIt9oTU1zZwRg9Icn6AceUSy444Tbg1sC-hSnPT09e0qjxjMz3DMOWSanKM1xE3wHSW65XE_k1au5LWT4WD8VA01WpUQh006sqggVFJv25B9ggcNgSCNLxBDrD2cD8gjdWFHVLw1vwrc7-Ss3KUmcMCmsAnLDZ6QqlUydrVmg_eBAS3ojeBWJiwKATlhNuJOuS6Dogi-trmXxTwl_-7IiMXK_UEV-BgKX2QV9ZdF1WlYyKmnqMghr1TLE7YTMcJL-T_H3arfIE9IIt5Mc7BYfQ54PzmQS1S6xvmCv7f0Zjb4kHaKArsHkJf-MGj0ujQ';
