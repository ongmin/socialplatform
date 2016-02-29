import mongoose from 'mongoose'

export default mongoose.model('User', {
  user_id: String,
  given_name: String,
  family_name: String,
  nickname: String,
  picture: String,
  updated_at: String,
  email: String
})
