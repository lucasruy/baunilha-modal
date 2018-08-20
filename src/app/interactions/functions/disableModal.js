import constants from '../../constants';

const disableModal = (self) => {
  self.modal.classList.remove(constants.CLASSES.isActive);

    if (self.options.overlay === true) {
      self.overlay.classList.remove(constants.CLASSES.isActive);
    }
}

export default disableModal;