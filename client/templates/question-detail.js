Meteor.subscribe("questions");

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

});