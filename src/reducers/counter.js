
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            // passing an arugment to increase the count by 2 rather than 1
            return state + action.payload
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};

export default counterReducer;
