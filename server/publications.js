
Meteor.publish('uploads', function() {
  return Uploads.find();
});

Meteor.publish('questions', function() {
  return Questions.find();
})

Meteor.publish('singleQuestion', function(id){
  return Questions.find({_id: id});
});
