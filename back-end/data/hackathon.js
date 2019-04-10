export default class Hackathon {

    constructor(
        name,
        startTs,
        endTs
    ) {
        this.name = name;
        this.startTs = startTs;
        this.endTs = endTs;
    }

    getName() {
        return this.name;
    }

    getStartTs() {
        return this.startTs;
    }

    getEndTs() {
        return this.endTs;
    }

    get() {
        return JSON.stringify(this);
    }

    setName(name) {
        this.name = name;
    }

    setStartTs(startTs) {
        this.startTs = startTs;
    }

    setEndTs(endTs) {
        this.endTs = endTs;
    }
}