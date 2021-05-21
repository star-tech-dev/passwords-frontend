import mongoose from 'mongoose'

export const itemModel = new mongoose.Schema({
  // group: {},
  name: {
    type: String
  },
  url: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  note: {
    type: String
  }
})

export default itemModel
