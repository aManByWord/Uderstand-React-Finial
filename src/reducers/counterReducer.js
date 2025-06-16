import CounterObj from '../models/counterObj.js';

export default function counterReducer(counterData, action) {
    switch (action.type) {
        case "increment": {
            return counterData.map(function incrementArray(counter) {
                if (counter.id == action.id)
                    return { ...counter, total: counter.total + 1 };
                else
                    return counter;
            });
        }
        case "decrement": {
            return counterData.map(function decrementArray(counter) {
                if (counter.id == action.id)
                    return { ...counter, total: counter.total > 0 ? counter.total - 1 : 0 };
                else
                    return counter;
            });
        }
        case "add": {
            const newCounter = new CounterObj(counterData.length,
                { longName: action.data.longName, shortName: action.data.shortName, },
                action.data.tab,
                action.data.startingValue
            );
            return [...counterData, newCounter];
        }
        default:
            throw Error("Unknowen Action: " + action.type);
    }
}


