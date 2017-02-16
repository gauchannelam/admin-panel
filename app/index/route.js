import Ember from 'ember';

export default Ember.Route.extend({
  init(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
      $('#menu').metisMenu();
    });
}

});
