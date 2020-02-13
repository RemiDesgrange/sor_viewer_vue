export default class Datapoints {
    constructor(name, reader) {
        this.name = name;
        this.reader = reader;
        this.yMin = null;
        this.yMax = null;

        this.units = [{
                /**@todo error check if points numbers are same */
                "name": "number of Points",
                "type": "uInt",
                "length": 4,
                "term": true, //termination \0
            },
            {
                "name": "traces",
                "type": "Int",
                "length": 2,
                "term": true,
            },
            {
                "name": "repeat",
                "type": "uInt",
                "length": 4,
                "term": true,
            },
            {
                "name": "scaling",
                "type": "Int",
                "length": 2,
                "scale": 0.001,
                "term": true,
            },
        ];
    }
}