const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6
const time = process.hrtime();

const _ = require('lodash');

let final = [];

for (let i = 0; i < 100000; i++) {
    try {
        // Just to simulate the process
        const looper = _.times(100);
        _.each(looper, (num) => {
            const array = _.times(num);
            const total = _.reduce(array, (a, v) => a + v);
            final.push(total);
        });
    
    } catch (error) {
        console.log('Error:', error);
    }
}

console.log(`Speed with try catch.  There are: ${final.length} items`);

const diff = process.hrtime(time);
console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
console.log(`Benchmark took ${(diff[0] * NS_PER_SEC + diff[1]) * MS_PER_NS} milliseconds`);