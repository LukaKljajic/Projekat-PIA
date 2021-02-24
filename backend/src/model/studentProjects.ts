import mongoose from 'mongoose'

const StudentProjects = new mongoose.Schema({
  subjectCode: {
    type: String
  },
  theme: {
    type: String
  },
  type: {
    type: String
  }
})

export default mongoose.model('StudentProjects', StudentProjects, 'StudentProjects')