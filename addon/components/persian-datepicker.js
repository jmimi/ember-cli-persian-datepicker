import Ember from 'ember';
import layout from '../templates/components/persian-datepicker';

export default Ember.Component.extend({
  layout: layout,
  tagName: "persian-datepicker",
  destElId: null,
  autoClose: true,

  didInsertElement: function(){
    this._super(...arguments);

    var destElId = this.get('destElId');
    if(!destElId){
      return;
    }

    Ember.$(`#${destElId}`).pDatepicker({
      autoClose: this.get('autoClose')
    });
  }
});
