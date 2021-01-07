const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// searched profile lists
const userProfileSchema = new Schema(
  {
    login: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    node_id: {
      type: String,
      required: true
    },
    avatar_url: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    html_url: {
      type: String,
      required: true
    },
    repos_url: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    status: {
      type: String,
      required: false
    },
    isFavorite: {
      type: String,
      required: false
    }
  },
    { timestamps: true }
); 

module.exports = mongoose.model('Userprofile', userProfileSchema);