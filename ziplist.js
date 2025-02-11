"use strict";
function ziplist(list, list2) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        result.push(list[i], list2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(list, list2) {
    const result = [];
    list.forEach((element, index) => {
        result.push(element, list2[index]);
    });
    return result;
}
console.log(ziplist(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
