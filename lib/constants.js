//게임 내 메세지 모아놓자

const MESSAGE = Object.freeze({
    START: "다리 건너기 게임을 시작합니다.",
    ENTER: "다리의 길이를 입력해주세요. \n" ,
    DIRECTION: "이동할 칸을 선택해주세요. (위: U, 아래: D) \n",
    RESULT: "최종 게임 결과",
    SUCCESS_OR_FAILURE: "게임 성공 여부",
    TRY_COUNT: "총 시도한 횟수",
});

module.exports = { MESSAGE };