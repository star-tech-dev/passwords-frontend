import mongoose from 'mongoose'

export const userModel = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  securityCode: {
    type: String,
    default: null
  },
  hasSecurityCode: {
    type: Boolean,
    default: false
  }
})

export default userModel
