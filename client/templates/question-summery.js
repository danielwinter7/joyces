Meteor.subscribe("questions");

Template.question_summery.onRendered(function () {

	var qsummery = new Vue({
		el: '.qs__wrapper',
		data: {
		  loader: true
		},
		ready: function () {
		  return this.loader = false;
		},
		methods: {
		  	goIndex: function() {
	        	FlowRouter.go('home');
			}
		}
	}); // Vue

});