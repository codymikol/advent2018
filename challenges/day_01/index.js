export default class Day1 {

    static getValues(input) {
        return input.split('\n').map((value) => parseInt(value))
    }


    static getFrequency(input) {
        return this.getValues(input).reduce((col, val) => col + val, 0)
    }

    static getDuplicateFrequency(input) {
        let set = new Set();
        let freq = 0;
        let done = false;
        while(!done) {
            done = this.getValues(input).some(value => {
                freq += value;
                if(set.has(freq)) return true;
                set.add(freq);
            })
        }
        return freq;
    }

}


