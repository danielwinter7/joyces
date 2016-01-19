Meteor.subscribe("questions");


Template.questions_summary.onCreated( function () {
  this.autorun( () => {
    let questionId = FlowRouter.getParam('questionId');
    return this.subscribe('singleQuestion', questionId );
  });
});

Template.questions_summary.onRendered(function () {

	var questionId = FlowRouter.getParam('questionId');

	var qsummery = new Vue({
		el: '.qs__wrapper',
		data: {
		  loader: true
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
		},
		methods: {
		  	goIndex: function() {
	        	FlowRouter.go('home');
			}
		}
	}); // Vue

});