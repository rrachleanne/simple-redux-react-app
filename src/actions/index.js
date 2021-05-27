
// passing an arugment to increase the count by 2 rather than 1

export const increment = (multiply) => {
    return {
        type: "INCREMENT",
        payload: multiply
    };
};

export const decrement = () => {
    return {
        type: "DECREMENT",
    };
};

