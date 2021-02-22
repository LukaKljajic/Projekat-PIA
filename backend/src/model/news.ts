import mongoose from 'mongoose'

const News = new mongoose.Schema({
  numberOfCategory: {
    type: Number
  },
  date: {
    type: Date
  },
  content: {
    type: String
  }
})

export default mongoose.model('News', News, 'News')