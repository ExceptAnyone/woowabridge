const {Error_Message} = require("./Error");

class Validate {
    static bridgeLength(length) {
        if(length <3 || length>20) {
            throw Error_Message.OUT_OF_RANGE
        };
    }
}

module.exports = Validate;