const cloudinary = require('cloudinary');
// Set cloudinary configurations.
cloudinary.config = {
  'cloudName': 'smart-support',
  'apiKey': '351798631832662',
  'apiSecret': 'DbxCnGLP02gXkAtfpKkE-yo3QqA'
}

module.exports = (request, response) => {
  console.log(request);
  console.log('\n**************************');
  console.log(request.files);
  console.log('\n**************************');
  response.json({
    status: 0
  });
}
