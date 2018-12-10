export default class Day4 {

    static getParsedRecord(input) {

        let actionMap = {
            'G': 'START',
            'f': 'SLEEP',
            'w': 'WAKE',
        };

        let ret = {
            action: actionMap[input[19]],
            utc: new Date(input.substring(1, 16)),
        };

        if (ret.action === 'START') ret.id = parseInt(input.split('#')[1].split(' ')[0]);

        return ret;

    }

    static getGuardMinutes(input) {

        return input.split('\n')
            .map(this.getParsedRecord)
            .reduce((col, record) => {

                switch (record.action) {
                    case 'START':
                        col.activeGuard = record.id;
                        if(!col.minutes.has(record.id)) col.minutes.set(record.id, []);
                        col.minutes.get(col.activeGuard).push({state:'wake', time: record.utc});
                         break;
                    case 'SLEEP':
                        col.minutes.get(col.activeGuard).push({state:'sleep', time: record.utc});
                        break;
                    case 'WAKE':
                        col.minutes.get(col.activeGuard).push({state: 'wake', time: record.utc});
                        break;
                }

                return col;

            }, {minutes: new Map(), activeGuard: null});

    }

    static getTotalGuardMinutes(input) {

        return Array.from(this.getGuardMinutes(input).minutes).
            map(guard => {

                let totalMinutes = guard[1].reduce(function (col, action) {

                    if(col.previousAction === null) {
                        col.previousAction = action;
                        return col;
                    }

                    if (action.state === 'sleep') {
                        col.total += Date.parse(action.time) - Date.parse(col.previousAction.time);
                    }

                    col.previousAction = action;

                    return col;

                }, {previousAction: null, total: 0});

                return {id: guard[0], total: totalMinutes.total}

            })

    }

}