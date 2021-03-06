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

	var docHeight = $( document ).height();
	//30px of question at bottom
	var imageHeight = (docHeight-38)/2;

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
		},
		methods: {
		  	goIndex: function() {
		  		
	        	FlowRouter.go('home');
	        	location.reload();
			}
		}
	}); // Vue

	var uploads = new Vue({
		el: '#upload_images',
		data: {
			questionId: questionId,
			imageHeight: imageHeight
		},
		ready: function () {
		  return this.loader = false;
		},
		sync: {
		  uploads: function () {
		    return Uploads.find({}, {limit: 2});
		  }
		},
		methods: {
			voting: function(id, voices) {
				console.log(id + " und " +voices);
				Uploads.update(id, {
			        $set: {
			        	voices: voices+1,
			        	updateAt: new Date()
			        }
			    });

			    var total = 0;

				Uploads.find({}, {limit: 2}).map(function(doc) {
				  total += doc.voices;
				});

				Uploads.update(id, {
			        $set: {
			        	voicesTogeter: total
			        }
			    });
			}
		}
	}); // Vue

});