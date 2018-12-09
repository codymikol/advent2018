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

        let processed = this.processInputs(input);

        return Array.from(processed.allTerritories)
            .filter(function (value) {
               return !processed.overlappedTerritories.has(value)
            })[0]
    }

    static incrementMapKey(map, key, territoryId){
        if(map.has(key)) {
            map.get(key).push(territoryId);
        } else {
            map.set(key, [territoryId])
        }
    }

    static processInputs(input) {

        return this.getValues(input)
            .reduce((col, currentValue) => {

                for (var i = currentValue.width; i > 0; i--) {
                    for (var j = currentValue.height; j > 0; j--) {

                        let offsetX = i + currentValue.x;
                        let offsetY = j + currentValue.y;

                        let key = offsetX.toString() + ':' + offsetY.toString();

                        col.allTerritories.add(currentValue.id);

                        this.incrementMapKey(col.spaces, key, currentValue.id);

                        if(col.spaces.get(key).length === 2) {
                            col.overlapping++;
                        }

                        if(col.spaces.get(key).length > 1) {
                            col.spaces.get(key).forEach((territory) => { col.overlappedTerritories.add(territory) })
                        }

                    }
                }

                return col;

            }, {overlapping: 0, spaces: new Map(), overlappedTerritories: new Set(), allTerritories: new Set()})

    }

    static getOverlapping(input) {
        return this.processInputs(input).overlapping;
    }

}
