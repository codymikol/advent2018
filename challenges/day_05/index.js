export default class Day5 {

    static react(input) {
        let ret = input;
        let solved = false;

        while (!solved) {
            solved = true;
            for (let i = 0; i < ret.length - 1; i++) {
                if(Math.abs(ret.charCodeAt(i) - ret.charCodeAt(i+1)) === 32) {
                    solved = false;
                    ret = ret.slice(0, i) + ret.slice(i+2);
                    break;
                }

            }
        }

        return ret;

    }

}