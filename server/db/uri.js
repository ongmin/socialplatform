export default 'mongodb://' +
  process.env.SOCIALPLATFORM_MONGODB_USER + ':' +
  process.env.SOCIALPLATFORM_MONGODB_PASSWORD + '@' +
  process.env.SOCIALPLATFORM_MONGODB_URI
