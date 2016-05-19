import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return [
            { id: 1, name: "Tom"},
            { id: 2, name: "Kenny"},
            { id: 3, name: "Sam"}
          ].findBy('id', params.order_id);
  }
});
