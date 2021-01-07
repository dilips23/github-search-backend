const UserProfile = require('../models/UserProfile');
// const ProfileDetail = require('../models/ProfileDetail'); // ProfileDetail

// Get the search history of User Profiles.
exports.getSearchHistory = (req, res, next) => {
   UserProfile.find()
   .then(profiles => {
         res.status(200).json({
            message: 'Records fetched successfully.',
            records: profiles
         });
      })
      .catch(err => {
         if (!err.statusCode) {
            err.statusCode = 500;
         }
         next(err);
      });
};

// Create search History for profiles
exports.createUserProfile = (req, res, next) => {
   const login = req.body.login;
   const id = req.body.id;
   const node_id = req.body.node_id;
   const avatar_url = req.body.avatar_url;
   const url = req.body.url;
   const html_url = req.body.html_url;
   const repos_url = req.body.repos_url;
   const type = req.body.type;
   const status = req.body.status;
   const isFavorite = req.body.isFavorite;

   const userprofile = new UserProfile({
      login: login,
      id: id,
      node_id: node_id,
      avatar_url: avatar_url,
      url: url,
      html_url: html_url,
      repos_url: repos_url,
      type: type,
      status: status,
      isFavorite: isFavorite
   });
   userprofile
      .save()
      .then(result => {
         console.log(' UserProfile created... ' + result);
         res.status(201).json({
            message: 'UserProfile created successfully.',
            post: result
         });
      })
      .catch(err => console.log(err));
};

// Delete records
exports.deleteSearchHistory = (req, res, next) => {
   const profileId = req.params.profileId;
   UserProfile.findOne({id: profileId})
   .then(profile => {
      return UserProfile.findOneAndRemove({id: profileId}, {'useFindAndModify': false});
   })
   .then(result => {
      console.log(result);
      res.status(200).json({ message: 'Deleted one history record.' });
   })
   .catch(err => {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      next(err);
   })
}


// update profile record - set Favorite Tag
exports.updateProfile = (req, res, next) => {
   const profileId = req.params.profileId;
   const login = req.body.login;
   const favTag = req.body.isFavorite;

   // get the record
   UserProfile.findOne({id: profileId})
      .then(profile => {
         if (!profile) {
            const error = new Error('Could not find the profile.');
            error.statusCode = 404;
            throw error;
         }
         profile.isFavorite = favTag;
         return profile.save();
      })
      .then(result => {
         res.status(200).json({ message: 'Favorite tag set.', post: result });
      })
      .catch(err => {
         if (!err.statusCode) {
            err.statusCode = 500;
         }
         next(err);
      });
};
