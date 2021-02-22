import mongoose from 'mongoose'

const List = new mongoose.Schema({
  subjectCode: {
    type: String
  },
  closed: {
    type: Boolean
  },
  timeForUploading: {
    type: Date
  },
  name: {
    type: String
  },
  time: {
    type: Date
  },
  place: {
    type: String
  },
  limit: {
    type: Number
  },
  numberOfStudents: {
    type: Number
  }
})

export default mongoose.model('List', List, 'List')