dbPassword =
  'mongodb+srv://xfar:' +
  encodeURIComponent('xfar') +
  '@cluster0-rqaap.mongodb.net/passport?retryWrites=true';

module.exports = {
  mongoURI: dbPassword,
};
