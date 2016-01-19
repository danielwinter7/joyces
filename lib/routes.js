FlowRouter.route('/', {
	name: 'home',
	action: function () {
		BlazeLayout.render('main', { top: 'header', content: 'question_index'});
	}
});

FlowRouter.route('/question', {
	name: 'question_index',
	action: function () {
		BlazeLayout.render('main', { content: 'question_index'});
	}
});

FlowRouter.route('/question/:questionId', {
	name: 'question_detail',
	action: function (params) {
		BlazeLayout.render('main', { content: 'question_detail'});
	}
});


FlowRouter.route('/questions-summary/:questionId', {
	name: 'questions_summary',
	action: function (params) {
		BlazeLayout.render('main', { content: 'questions_summary'});
	}
});