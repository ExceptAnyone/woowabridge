const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
const { MESSAGE } = require("../lib/constants");

class App {
  play() {
    this.printStart();
  }

  printStart() {
    OutputView.printMessage(MESSAGE.START);
  }

}

const app = new App;
app.play();
module.exports = App;
