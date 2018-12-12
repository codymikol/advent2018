export default class Day7 {

    static getInstructionMap(input) {

        let instructions = {};

        input.split('\n')
            .forEach(function (rule) {

                let blocker = rule[5];
                let blocked = rule[36];

                if (!instructions[blocker]) instructions[blocker] = {blockedBy: new Set(), blocks: new Set()};
                if (!instructions[blocked]) instructions[blocked] = {blockedBy: new Set(), blocks: new Set()};

                instructions[blocker].blocks.add(blocked);
                instructions[blocked].blockedBy.add(blocker);

            });

        return instructions;

    }

    static getOrder(input) {

        let instructions = this.getInstructionMap(input);
        let instructionSize = Object.keys(instructions).length;

        let processedInstructions = [];

        while(processedInstructions.length < instructionSize) {

            let nextInstruction = Array.from(instructions)
                .filter(function (instruction) {
                    return instruction.blockedBy.size === 0;
                })
                .reduce(col, val => {
                    return val[0].charCodeAt(0) < col[0].charCodeAt(0) ? val ? col;
                }, )[0]

            nextInstruction.blocks.forEach(val => instructions[val].blockedBy.delete(val));
            processedInstructions.push(nextInstruction);
            



        }

    }

}