const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Profile in History
const profileDetailSchema = new Schema(
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
      followers_url: {
         type: String,
         required: false
      },
      gists_url: {
         type: String,
         required: false
      },
      organizations_url: {
         type: String,
         required: false
      },
      repos_url: {
         type: String,
         required: false
      },
      type: {
         type: String,
         required: false
      },
      site_admin: {
         type: String,
         required: false
      },
      name: {
         type: String,
         required: true
      },
      company: {
         type: String,
         required: false
      },
      blog: {
         type: String,
         required: false
      },
      location: {
         type: String,
         required: false
      },
      email: {
         type: String,
         required: false
      },
      hireable: {
         type: String,
         required: false
      },
      bio: {
         type: String,
         required: false
      },
      twitter_username: {
         type: String,
         required: false
      },
      public_repos: {
         type: String,
         required: false
      },
      public_gists: {
         type: String,
         required: false
      },
      followers: {
         type: String,
         required: false
      },
      following: {
         type: String,
         required: false
      },
      created_at: {
         type: String,
         required: false
      },
      updated_at: {
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

module.exports = mongoose.model('ProfileDetail', profileDetailSchema);