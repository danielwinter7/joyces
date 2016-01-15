Questions = new Mongo.Collection('questions');


Project = Astro.Class({
  name: 'Question',
  collection: Questions,
  fields: {
    title: {
      type: 'string',
      validator: Validators.minLength(3, 'The first name is too short!')
    }
  },
  methods: {
    created: function () {
      return moment(this.createdAt).format('DD/MM/YYYY');
    },
    updated: function() {
      return moment(this.updatedAt).fromNow();
    }
  },
  events: {
    'beforeUpdate': function () {
      return this.set('updatedAt', new Date)
    }
  }
});