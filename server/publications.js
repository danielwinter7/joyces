if (Meteor.isServer) {
	Meteor.publish('uploads', function() {
	  return Uploads.find();
	});

	Meteor.publish('questions', function() {
	  return Questions.find();
	})
}