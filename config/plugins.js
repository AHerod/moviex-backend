module.exports = ({env}) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
  },
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'agn.j.herod@gmail.com',
      defaultReplyTo: 'agn.j.herod@gmail.com',
      testAddress: 'agn.j.herod@gmail.com',
    },
  }
});
