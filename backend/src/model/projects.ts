import mongoose from 'mongoose'

const Projects = new mongoose.Schema({
  employees: {
    type: Array
  },
  theme: {
    type: String
  },
  type: {
    type: String
  }
})

export default mongoose.model('Projects', Projects, 'Projects')