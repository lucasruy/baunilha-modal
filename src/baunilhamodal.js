(function() {
  'use-strict';

  var utils = {
    extendDefaults: function(source, properties) {
      var property;
      for (property in properties) {
        if (properties.hasOwnProperty(property)) {
          source[property] = properties[property];
        }
      }
      return source;
    }
  }

  var interactions = {
    enableModal: function() {
      this.modal.classList.add('is-active');

      if (this.options.overlay === true) {
        this.overlay.classList.add('is-active');
      }
    },
    disableModal: function() {
      this.modal.classList.remove('is-active');

      if (this.options.overlay === true) {
        this.overlay.classList.remove('is-active');
      }
    },
    mountModal: function(self) {
      var modalWrapper, modalContent, modalContentHolder;

      modalWrapper = document.createDocumentFragment();
  
      self.modal = document.createElement('div');
  
      self.modal.setAttribute('class', self.options.modalClass);
      self.modal.setAttribute('style', 
        'max-width:' + self.options.maxWidth + ';' +
        'min-width:' + self.options.minWidth + ';' +
        'margin: 0px auto'
      );

      modalContentHolder = document.createElement('div');
      modalContentHolder.classList.add(self.options.modalClass + '__content');
      self.modal.appendChild(modalContentHolder);
      modalWrapper.appendChild(self.modal);
  
      if (typeof self.options.content === 'string') {
        modalContent = self.options.content;
        modalContentHolder.innerHTML = modalContent;

      } else if (self.options.content instanceof Element) {
        modalContent = self.options.content;
        modalContentHolder.appendChild(modalContent);

      } else {
        modalContent = self.options.content.innerHTML;
        modalContentHolder.innerHTML = modalContent;
      }
  
      if (self.options.buttonClose === true) {
        self.buttonClose = document.createElement('button');
        self.buttonClose.classList.add(self.options.modalClass + "__close");
        self.buttonClose.innerHTML = 'x';
        self.modal.appendChild(self.buttonClose);
      }
  
      if (self.options.overlay === true) {
        self.overlay = document.createElement('div');
        self.overlay.classList.add(self.options.modalClass + "__overlay");
        modalWrapper.appendChild(self.overlay);

        if (self.options.overlayClose === true) {
          self.overlay.addEventListener('click', function(){
            interactions.disableModal.call(self)
            console.log('close');
          },false);
        }
      }

      if (typeof self.options.appendOn === 'string') {
        this.appendOn = document.querySelector(self.options.appendOn);
        this.appendOn.appendChild(modalWrapper);
      } else {
        document.body.appendChild(modalWrapper);
      }
    }
  }

  function BaunilhaModal() {

    this.modal = null;
    this.overlay = null;
    this.buttonClose = null;
    this.appendOn = null;

    var defaults = {
      modalClass: 'basic-modal',
      buttonTarget: '.basic-modal-open',
      content: '',
      
      maxWidth: '500px',
      minWidth: '280px',
      
      buttonClose: true,
      overlay: true,
      overlayClose: true,
      keyboard: true,
      appendOn: null
    }

    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = utils.extendDefaults(defaults, arguments[0]);
    }

    this.init();

    return this;
  }

  BaunilhaModal.prototype.build = function() {
    interactions.mountModal(this);
  }

  BaunilhaModal.prototype.open = function() {
    var self = this;

    var setActive = function (){
      var buttonOpen = document.querySelectorAll(self.options.buttonTarget);

      for (var i = 0; i < buttonOpen.length; i += 1) {
        buttonOpen[i].addEventListener('click', function(){
          interactions.enableModal.call(self);
        }, false);
      }
    }

    if (typeof this.options.buttonTarget === 'string') {
      setActive();
    }
  }

  BaunilhaModal.prototype.close = function() {
    var self = this;

    var setDesactive = function() {
      self.buttonClose.addEventListener('click', function(){
        interactions.disableModal.call(self);
      }, false);
    }

    if (this.options.buttonClose === true) {
      setDesactive();
    }
  }

  BaunilhaModal.prototype.destroy = function() {
    this.modal.remove();
    this.overlay.remove();
  }

  BaunilhaModal.prototype.keyboard = function() {
    var self = this;

    var closeOnEscPress = function(event) {
      if (event.keyCode === 27) {
        interactions.disableModal.call(self);
      }
    }
    
    document.addEventListener('keydown', closeOnEscPress, false);

  }

  BaunilhaModal.prototype.init = function() {
    this.build();
    this.open();
    this.close();
    this.keyboard();
  }

  window.BaunilhaModal = BaunilhaModal;

})(window);