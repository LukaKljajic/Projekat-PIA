import mongoose from 'mongoose'

const Employee = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  name: {
    type: String
  },
  surname: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  website: {
    type: String
  },
  biography: {
    type: String
  },
  title: {
    type: String
  },
  cabinetNumber: {
    type: String
  },
  active: {
    type: Boolean
  },
  picture: {
    type: String
  },
  subjects: {
    type: Array
  }
})

export default mongoose.model('Employee', Employee, 'Employee')