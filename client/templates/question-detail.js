Meteor.subscribe("questions");
Meteor.subscribe("uploads");

Template.question_detail.onCreated( function () {
  this.autorun( () => {
    let questionId = FlowRouter.getParam('questionId');
    return this.subscribe('singleQuestion', questionId );
  });
});

Template.question_detail.onRendered(function () {

	var questionId = FlowRouter.getParam('questionId');

	var question = new Vue({
		el: '#question_detail',
		data: {
			questionId: questionId
		},
		ready: function () {
		  return this.loader = false;
		},
		sync: {
		  question: function() {
	        if(questionId)
	          // console.log("yes");
	          return Questions.findOne(questionId);

	        else
	          return new Questions();
	      
	      }
		}
	}); // Vue

	var uploads = new Vue({
		el: '#upload_images',
		data: {
		  loader: true
		},
		ready: function () {
		  return this.loader = false;
		},
		sync: {
		  uploads: function () {
		    return Uploads.find({}, {limit: 2});
		  }
		}
	}); // Vue

});