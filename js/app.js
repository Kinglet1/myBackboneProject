var appModelInstance = new app.appModel();
var canvasView = new app.canvasView({ model: appModelInstance });
var bgColorSelectorView = new app.bgColorSelectorView({ model: appModelInstance });
var fontColorSelectorView = new app.fontColorSelectorView({ model: appModelInstance });
var fontSizeSelectorView = new app.fontSizeSelectorView({ model: appModelInstance });
var bgImageSelectorView = new app.bgImageSelectorView({ model: appModelInstance });
var textInputView = new app.textInputView({ model: appModelInstance });
var downloadButtonView = new app.downloadButtonView({ model: appModelInstance });