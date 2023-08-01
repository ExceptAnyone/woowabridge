const { MESSAGE, FLAG } = require("../lib/constants");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */

  makeBridge(size, generateRandomNumber) {
    const bridge = Array.from({ length: size }, () => generateRandomNumber()); //TODO: 피드백 받기
    return bridge.map((randomNumber) =>
      randomNumber === 1 ? FLAG.UPPER : FLAG.LOWER
    );

    // const bridge = Array(size).fill('').map(() => generateRandomNumber);
    // return bridge.map((randomNumber) => (randomNumber === 1 ? 'U' : 'D'));
    // }
    // return Array(size).fill('').map(() => {
    //   const randomNumber = BridgeRandomNumberGenerator.generate(size);
    // // const number = generateRandomNumber();
    //   return randomNumber === 0 ? FLAG.LOWER : FLAG.UPPER;
    // }
  },
};

module.exports = BridgeMaker;
