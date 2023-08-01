const { FLAG } = require("../lib/constants");
const {Error_Message} = require("./Error");

class Validate {
    static bridgeLength(length) {
        if(length <3 || length>20) {
            throw Error_Message.OUT_OF_RANGE
        };

        if(isNaN(length)) {
            throw Error_Message.NOT_NUMBER
        }
    }

    // static enterKey(key) {
    //     if(key !== FLAG.LOWER || key !== FLAG.UPPER) {
    //         throw Error_Message.SELECT_ERROR
    //     }
    // }
}

module.exports = Validate;