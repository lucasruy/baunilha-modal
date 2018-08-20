import constants from '../../constants';

const enableModal = (self) => {
  self.modal.classList.add(constants.CLASSES.isActive);

    if (self.options.overlay === true) {
      self.overlay.classList.add(constants.CLASSES.isActive);
    }
}

export default enableModal;