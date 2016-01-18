Template.header.onRendered(function () {
	var help = new Vue({
	    el: '#help-wrapper',
	    data: {
	        help: false
	    }
	})
});

Template.index.onRendered(function () {

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
			//var pictureone = e.target.pictureone.value.replace(/C:\\fakepath\\/i, '')
	      	// var pictureone = e.target.pictureone.value.split('\\').pop();

	      	// var picturetwo = e.target.picturetwo.value.split('\\').pop();

	      	Questions.insert({
		        title: question,
		        // pictureone: pictureone,
		        // picturetwo: picturetwo,
		        createdAt: new Date() // current time
		    });

		    event.target.question.value = "";
		    //$("input:file").clearInputs(true);
		    FlowRouter.go('questions_summery');
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
