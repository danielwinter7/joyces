Meteor.subscribe("questions");

Template.header.onRendered(function () {
	var help = new Vue({
	    el: '#help-wrapper',
	    data: {
	        help: false
	    }
	})
});

Template.question_index.onCreated( function () {
  this.autorun( () => {
    let questionId = FlowRouter.getParam('questionId');
    return this.subscribe('singleQuestion', questionId );
  });
});


Template.question_index.onRendered(function () {

	$('input#question').characterCounter();

	var questionId = FlowRouter.getParam('questionId');

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
	        survey: false	   
	    },
	    methods: {
	      handleIt: function (e) {
	      	
	      	var question = e.target.question.value;
	      	Questions.insert({
		        title: question,
		        createdAt: new Date()
		    });

		    event.target.question.value = "";
		    FlowRouter.go('/questions-summary/'+questionId);
		    e.preventDefault();
	    	}
		}

	});

	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = $('#surveyplus').offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			$('#surveyplus').css({
				'position': 'fixed',
				'top': 0,
				'left': 0,
				'background': 'rgba(224, 223, 222, 0.95)',
				'width': '100%',
				'float': 'left',
				'z-index': 777,
				'transition': 'all 0.3s ease-in-out'
			});
		} else {
			$('#surveyplus').removeAttr('style').css({
				'position': 'relative',
				'transition': 'all 0.3s ease-in-out'
			});
		}   
	};
	
	// run our function on load
	sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
	});

});


Template.question_list.onRendered( function () {
	var question = new Vue({
		el: '#surveyplus',
	    data: {
	        surveyplus: false 
	    },
	    methods: {
	      handleIt: function (e) {
	      	
	      	var question = e.target.question.value;
	      	Questions.insert({
		        title: question,
		        createdAt: new Date()
		    });

		    event.target.question.value = "";
		    FlowRouter.go('/questions-summary/'+questionId);
		    e.preventDefault();
	    	}
		}
	}); // Vue
});


Meteor.startup(function() {
  Uploader.finished = function(index, file) {
    Uploads.insert(_.extend(file, {voices: 0, voicesTogether: 0}), function (err, fileObj) {
	});
  }
});

//Images.insert(_.extend(file, {product:'myproductid', otherInfo: {}}), function (err, fileObj) {});