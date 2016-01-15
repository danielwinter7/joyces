Template.header.onRendered(function () {
	var btnHelp = new Vue({
  // options
	});
});

Template.index.onRendered(function () {
	var surveyWrapper = new Vue({
		el: '#survey-wrapper',
		data: {
			showQuestion: false
		},
		methods: {
			showSurvey: function (event) {
				showQuestion: true
			}
		}
		});

});