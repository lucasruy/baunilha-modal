import constants from './constants';
import interactions from './interactions';
import utils from './utils';

(function() {
  'use-strict';

  function BaunilhaModal() {
    this.modal = null;
    this.overlay = null;
    this.hasCloseButton = null;
    this.appendTo = null;

    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = utils.extend.defaults(constants.BAUNILHA_DEFAULTS, arguments[0]);
    }

    this.init();

    return this;
  }

  BaunilhaModal.prototype.build = function() {
    interactions.mount(this);
  }

  BaunilhaModal.prototype.open = function() {
    const self = this;

    const setActive = function (){
      const buttonOpen = document.querySelectorAll(self.options.buttonTarget);

      for (let i = 0; i < buttonOpen.length; i += 1) {
        buttonOpen[i].addEventListener(constants.EVENT_NAME.CLICK, function(){
          interactions.enable(self);
        }, false);
      }
    }

    if (typeof this.options.buttonTarget === 'string') {
      setActive();
    }
  }

  BaunilhaModal.prototype.close = function() {
    const self = this;

    const setDesactive = function() {
      self.hasCloseButton.addEventListener(constants.EVENT_NAME.CLICK, function(){
        interactions.disable(self);
      }, false);
    }

    if (this.options.hasCloseButton === true) {
      setDesactive();
    }
  }

  BaunilhaModal.prototype.destroy = function() {
    this.modal.remove();
    this.overlay.remove();
  }

  BaunilhaModal.prototype.keyboard = function() {
    const self = this;

    const closeOnEscPress = function(event) {
      if (event.keyCode === constants.KEYBOARD.ESC) {
        interactions.disable(self);
      }
    }

    document.addEventListener(constants.EVENT_NAME.KEYDOWN, closeOnEscPress, false);
  }

  BaunilhaModal.prototype.init = function() {
    this.build();
    this.open();
    this.close();
    this.keyboard();
  }

  window.BaunilhaModal = BaunilhaModal;

})(window);
