Template.header.onRendered(function () {
	var help = new Vue({
	    el: '#help-wrapper',
	    data: {
	        help: false
	    }
	})
});

Template.index.onRendered(function () {

	var survey = new Vue({
	    el: '#survey-wrapper',
	    data: {
	        survey: false 
	    },
	    methods: {
	      handleIt: function (e) {
	        if(!this.question.title)
	          return alert('Title can\'t be blank!');

	        // this.project.set('title', this.project.title);

	        // if (this.project.validate()) {
	        //   this.project.save();
	        //   FlowRouter.go('projects_index');
	        // }
	        // else {
	        //   return alert('Validation Error!')
	        // }
	      	e.preventDefault();
	      }
	    }
	});
});
