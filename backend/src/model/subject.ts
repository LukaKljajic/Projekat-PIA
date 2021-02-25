import mongoose from 'mongoose'

const Subject = new mongoose.Schema({
  name: {
    type: String
  },
  department: {
    type: String
  },
  news: {
    type: Array
  },
  semester: {
    type: Number
  },
  type: {
    type: String
  },
  code: {
    type: String
  },
  goal: {
    type: String
  },
  numOfClasses: {
    type: Number
  },
  ESPB: {
    type: Number
  },
  theoryPeriods: {
    type: Array
  },
  practicalPeriods: {
    type: Array
  },
  theoryTeachers: {
    type: Array
  },
  practicalTeachers: {
    type: Array
  },
  haveLabs: {
    type: Boolean
  },
  propositions: {
    type: String
  },
  theoryMaterials: {
    type: Array
  },
  practicalMaterials: {
    type: Array
  },
  oldTests: {
    type: Array
  },
  labs: {
    type: Object
  },
  project: {
    type: Object
  },
  oldTestsEnabled: {
    type: Boolean
  },
  labsEnabled: {
    type: Boolean
  },
  projectEnabled: {
    type: Boolean
  },
  students: {
    type: Array
  }
})

export default mongoose.model('Subject', Subject, 'Subject')