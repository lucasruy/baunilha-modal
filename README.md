# BaunilhaModal
This is a simple modal plugin, createad for expedite modal make proccess.
plugin current version is v1.0.2

## Get Started

### Usage

Initialize the script by running:

```js
const myModal = new BaunilhaModal({
    buttonTarget: '.my-button',
    content: 'This text is inputed on my modal'
});
```

### Customization

You can pass an object as a parameter to customize

```js
const myModal = new BaunilhaModal({
    buttonTarget: '.my-button',
    content: 'This text is inputed on my modal',
    modalClass: 'custom-modal-class',
    hasCloseButton: true
});
```

### Settings
These are the plugin customization options.

Option | Type | Default | Description
------ | ---- | ------- | -----------
modalClass | string | 'basic-modal' | Define `wrapper` class of your modal.
buttonTarget | string | '.basic-modal-open' | Button selector that opens the modal, supports multiple buttons to open a modal.
content | string  | '' | Defines the content that will be within its modal, this item accepts the following formats: `string`,` outerHTML` and `nodeElement`.
maxWidth | string | '500px' | Set max width of your modal.
minWidth | string | '280px' | Set min width of your modal.
hasCloseButton | boolean | true | If `true` includes a modal close button, if it is set to` false` this button will not exist..
overlay | boolean | true | Enables overlay around the modal.
overlayClose | boolean | false | If it is `true`, when clicking on the overlay the modal is closed.
keyboard | boolean | true | When `ESC` is pressed, the modal is closed.
appendTo | string | null | Receives the selector (`.class`, `#id`, `TAGNAME`) of an element where you want to add the modal.

### Methods

Method | Description
------ | -----------
init() | It calls other methods important for the execution of the plugin, they are the following `build()`, `open()`, `close()`, `keyboard()`.
build() | Responsible for creating and rendering modal according to the customization options.
open() | This method displays the modal on the screen.
close() | This method hides the modal.
keyboard() | Adds support for interactions with keys, supported interactions: `ESC` to close the modal.
destroy() | Removes the modal with its components.

### Dependencies
- The plugin does not have dependencies to work, remembering that it was written to be applied in modern browser.

### Compatibility
List of browsers where the plug-in was tested.

Browser | Version
------- | -------
Chrome  | 68.0.3440.106
Firefox | 61.0.2
Opera   | 54.0
Edge    | 42.17134.1.0
IE      | Not supported*

### Contributing

Feel free to report any issues! If you wish to contribute by fixing a bug or implementing a new feature, please first read the [CONTRIBUTING](./CONTRIBUTING.md) guide.

### License

Copyright (c) 2018 [Lucas Ruy](https://github.com/LucasRuy)
This content is released under the [MIT License](https://opensource.org/licenses/MIT).