import mongoose from 'mongoose'

const Admin = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  passwordChanged: {
    type: Boolean
  }
})

export default mongoose.model('Admin', Admin, 'Admin')