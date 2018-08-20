const mountModal = (self) => {
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

    if (self.options.hasCloseButton === true) {
      self.hasCloseButton = document.createElement('button');
      self.hasCloseButton.classList.add(self.options.modalClass + "__close");
      self.hasCloseButton.innerHTML = 'x';
      self.modal.appendChild(self.hasCloseButton);
    }

    if (self.options.overlay === true) {
      self.overlay = document.createElement('div');
      self.overlay.classList.add(self.options.modalClass + "__overlay");
      modalWrapper.appendChild(self.overlay);

      if (self.options.overlayClose === true) {
        self.overlay.addEventListener('click', function(){
          interactions.disableModal.call(self);
        },false);
      }
    }

    if (typeof self.options.appendTo === 'string') {
      self.appendTo = document.querySelector(self.options.appendTo);
      self.appendTo.appendChild(modalWrapper);
    } else {
      document.body.appendChild(modalWrapper);
    }
}

export default mountModal;