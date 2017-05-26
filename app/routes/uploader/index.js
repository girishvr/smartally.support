var cloudinary = require('cloudinary');
// Set cloudinary configurations.
cloudinary.config({
  cloud_name: 'smart-support',
  api_key: '351798631832662',
  api_secret: 'DbxCnGLP02gXkAtfpKkE-yo3QqA'
});

module.exports = (request, response) => {
  if (request.files.file.path) {
      cloudinary.uploader
      .upload(request.files.file.path)
      .then((url) => {
        response.json({
          status: 0,
          message: 'Upload complete.',
          imageEp: url.url
        });
      })
      .catch(() => {
        response.json({
          status: 1,
          message: 'Unable to upload.'
        });
      });
  }
  else {
    response.json({
      status: 1,
      message: 'Failed to save image, incorrect request.'
    });
  }
}
