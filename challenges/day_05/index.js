export default class Day5 {

    static react(input) {

        const CAPITILIZED_OFFSET = 32;

        let ret = input;

        for (let i = 0; i < ret.length - 1; i++) {
            if (Math.abs(ret.charCodeAt(i) - ret.charCodeAt(i + 1)) === CAPITILIZED_OFFSET) {
                ret = ret.slice(0, i) + ret.slice(i + 2);
                i -= 2;
            }
        }

        return ret;

    }

    static getPolymerRemovalLengths(input) {

        const CAPITILIZED_OFFSET = 32;

        let ret = {};

        for(let i = 'a'.charCodeAt(0); i < 'z'.charCodeAt(0); i++) {
            let lower = String.fromCharCode(i);
            let upper = String.fromCharCode(i - CAPITILIZED_OFFSET);
            let withoutLower = input.replace(new RegExp(lower, 'g'), '');
            let withoutLowerUpper = withoutLower.replace(new RegExp(upper, 'g'), '');
            ret[lower + '/' + upper] = this.react(withoutLowerUpper).length;
        }

        return ret;

    }

    static getSmallestPolymer(input) {
        return Object.values(this.getPolymerRemovalLengths(input))
            .reduce(function (col, charachter) {
                return charachter < col ? charachter : col;
            }, Infinity)
    }

}