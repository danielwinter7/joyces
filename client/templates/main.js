Template.header.onRendered(function () {
	var help = new Vue({
	    el: '#help-wrapper',
	    data: {
	        help: false
	    }
	})
});

Template.question_index.helpers({

});

Template.question_index.onRendered(function () {

	$('input#question').characterCounter();

	var question = new Vue({
		el: '#question_list',
		data: {
		  loader: true
		},
		ready: function () {
		  return this.loader = false;
		},
		sync: {
		  questions: function () {
		    return Questions.find({}, {sort: {createdAt: -1}});
		  }
		}
	}); // Vue
	

	var survey = new Vue({
	    el: '#survey-wrapper',
	    data: {
	        survey: false,
	        message: '',
		    valid: false
		   
	    },
	    methods: {
	      handleIt: function (e) {
	      	
	      	var question = e.target.question.value;
	      	Questions.insert({
		        title: question,
		        createdAt: new Date()
		    });

		    event.target.question.value = "";
		    FlowRouter.go('questions_summary');
		    e.preventDefault();
	    	}
		}

	});
});

Meteor.startup(function() {
  Uploader.finished = function(index, file) {
  	//var question = e.target.question.value;
    Uploads.insert(file);
    console.log(index);
  }
});
