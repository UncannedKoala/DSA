
function areThereDuplicates() {
    // APPROACH 1 APPROACH 1 APPROACH 1 APPROACH 1 APPROACH 1 APPROACH 1 APPROACH 1 APPROACH 1 APPROACH 1 APPROACH 1 APPROACH 1 APPROACH 1 
    return new Set(arguments).size !== arguments.length;

    // APPROACH 2 APPROACH 2 APPROACH 2 APPROACH 2 APPROACH 2 APPROACH 2 APPROACH 2 APPROACH 2 APPROACH 2 APPROACH 2 APPROACH 2 APPROACH 2 
    // let collection = {}
    // for(let val in arguments){
    //   collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    // }
    // for(let key in collection){
    //   if(collection[key] > 1) return true
    // }
    // return false;

    // APPROACH 3 APPROACH 3 APPROACH 3 APPROACH 3 APPROACH 3 APPROACH 3 APPROACH 3 APPROACH 3 APPROACH 3 APPROACH 3 APPROACH 3 APPROACH 3 
    // args.sort((a, b) => {
    //   if (a < b) return -1;
    //   if (a > b) return 1;
    //   return 0;
    // });
    // let start = 0;
    // let next = 1;
    // while (next < args.length) {
    //   if (args[start] === args[next]) {
    //     return true;
    //   }
    //   start++;
    //   next++;
    // }
    // return false;

    // return new Set(arguments).size !== arguments.length;

}


console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true 


