import mongoose from 'mongoose'

const NewsCategory = new mongoose.Schema({
  number: {
    type: Number
  },
  name: {
    type: String
  }
})

export default mongoose.model('NewsCategory', NewsCategory, 'NewsCategory')