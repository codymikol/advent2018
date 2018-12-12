export default class Day4 {
    
    static getSorted(input) {
        return input.split('\n').sort(function (a, b) {
            return new Date(a.substring(1,16)) - new Date(b.substring(1,16));
        })
    }

    static getParsedRecord(input) {

        let actionMap = {
            'G': 'START',
            'f': 'SLEEP',
            'w': 'WAKE',
        };

        let ret = {
            action: actionMap[input[19]],
            minutes: input.substring(15, 17),
        };

        if (ret.action === 'START') ret.id = parseInt(input.split('#')[1].split(' ')[0]);

        return ret;

    }

    static getBestGuardMinute(input) {

        let id = null;
        let sleeping = null;

        return this.getSorted(input)
            .forEach(entry => {
                let record = this.getParsedRecord(entry);
                if (record.action === 'START') id = record.id;

                if(record.action === 'SLEEP') {

                }

            })
    }

}