FlowRouter.route '/',
	name: 'home'
	action: ->
		BlazeLayout.render 'main', { top: 'header', content: 'index'}

FlowRouter.route '/question',
	name: 'question'
	action: ->
		BlazeLayout.render 'main', { content: 'question'}

FlowRouter.route '/question/:questionId',
  name: 'question',
  action: (params) ->
    BlazeLayout.render 'detail', { content: 'question_detail' }

FlowRouter.route '/questions-summery',
	name: 'questions_summery'
	action: ->
		BlazeLayout.render 'main', { content: 'question_summery'}
