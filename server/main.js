import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';
import '../imports/api/modules.js';
var imageStore = new FS.Store.S3("images", {
    /* REQUIRED */
    accessKeyId: Meteor.settings.AWSAccessKeyId, 
    secretAccessKey: Meteor.settings.AWSSecretAccessKey, 
    bucket: Meteor.settings.AWSBucket
  });

  var Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      }
    }
  });

  Images.allow({
  insert: function() { return true; },
  update: function() { return true; },
  download: function() { return true; }
});
Meteor.startup(() => {

});
