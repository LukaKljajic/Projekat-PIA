import mongoose from 'mongoose'

const Admin = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
})

export default mongoose.model('Admin', Admin, 'Admin')