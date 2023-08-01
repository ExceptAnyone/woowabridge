const OutputView = require("./OutputView");
const InputView = require("./InputView");
const { MESSAGE } = require("../lib/constants");

class App {
  play() {
    this.printStart();
    InputView.readBridgeSize();
    OutputView.printMap();
  }

  printStart() {
    OutputView.printMessage(MESSAGE.START);
  }

}

const app = new App;
app.play();
module.exports = App;
