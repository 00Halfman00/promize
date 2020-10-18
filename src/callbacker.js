
const func1 = () => {
    
}

const func2 = () => {
    
}


const syncCallbacker = (func1, func2) => {
    const value = func1();
    return func2(value);
};

const asyncCallbacker = null;

module.exports = { syncCallbacker, asyncCallbacker };
