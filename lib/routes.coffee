FlowRouter.route '/',
	name: 'home'
	action: ->
		BlazeLayout.render 'main', { top: 'header', content: 'index'}

FlowRouter.route '/question',
	name: 'question'
	action: ->
		BlazeLayout.render 'main', { content: 'question'}