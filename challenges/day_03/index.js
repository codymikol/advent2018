export default class Day3 {

    static getValues(input) {
        return input.split('\n').map((value) => {

            let id_xyhw = value.split(' @ ');
            let id = parseInt(id_xyhw[0].split('#')[1]);

            let xy_hw = id_xyhw[1].split(': ');

            let xy = xy_hw[0].split(',').map(x => parseInt(x));
            let wh = value.split(': ')[1].split('x').map(i => parseInt(i));

            return {
                id: id,
                x: xy[0],
                y: xy[1],
                width: wh[0],
                height: wh[1]
            }

        })
    }

    static getNonOverlapping(input) {
        return Array.from(this.processInputs(input).spaces).filter(function (curVal) {
            return curVal[1] === 1;
        }).length
    }

    static processInputs(input) {

        return this.getValues(input)
            .reduce(function (col, currentValue) {

                for (var i = currentValue.width; i > 0; i--) {
                    for (var j = currentValue.height; j > 0; j--) {

                        let offsetX = i + currentValue.x;
                        let offsetY = j + currentValue.y;

                        let key = offsetX.toString() + ':' + offsetY.toString();

                        if(col.spaces.has(key)) {
                            col.spaces.set(key, col.spaces.get(key) + 1);
                        } else {
                            col.spaces.set(key, 1)
                        }

                        if(col.spaces.get(key) === 2) col.overlapping++;

                    }
                }

                return col;

            }, {overlapping: 0, spaces: new Map()})

    }

    static getOverlapping(input) {
        return this.processInputs(input).overlapping;
    }

}
