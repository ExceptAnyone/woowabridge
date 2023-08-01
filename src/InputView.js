const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../lib/constants");
const Validate = require("./Validate");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */


const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGE.ENTER, (length) => {
      Validate.bridgeLength(length);
      const bridgeGame = new BridgeGame(length);
      bridgeGame.move(length);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(MESSAGE.DIRECTION, (direction) => {
      // Validate.enterKey(direction);
      console.log('direction', direction);
      })
    },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
