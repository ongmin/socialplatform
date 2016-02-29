import mongoose from 'mongoose'

export default mongoose.model('Channel', {
  name: String,
  slug: String,
  owner: Array,
  viewers: Array,
  playlist: Array
})
