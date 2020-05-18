const { GET_ALL_COMMUNITIES_ENDPOINT } = require('../../endpoints.json');

module.exports.stubConfig = {
  route: GET_ALL_COMMUNITIES_ENDPOINT,
  method: 'get',
  middleware: (req, res) => res.json(module.exports.stubData),
};

module.exports.stubData = [
  {
    id: '1234',
    slug: 'javascript',
    displayName: 'Javascript',
    desc: 'All things JavaScript, not just limited to React!',
    subscribers: 16,
  },
  {
    id: '12345',
    slug: 'java',
    displayName: 'Java',
    desc: 'All the cool stuff Java offers!',
    subscribers: 23,
  }
];
