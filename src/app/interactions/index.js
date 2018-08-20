import enableModal from './functions/enableModal.js';
import disableModal from './functions/disableModal.js';
import mountModal from './functions/mountModal.js';

const interactions = {
  enable: function(self){
    enableModal(self);
  },
  disable: function(self){
    disableModal(self);
  },
  mount: function(self){
    mountModal(self);
  }
};

export default interactions;