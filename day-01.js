/**
https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript
*/
function helloWorld() {
    console.log('Hello');
}
helloWorld();


/**
 * http://www.codewars.com/kata/572059afc2f4612825000d8a
 * @param {*} month
 * @returns
 */

function howManydays(month) {
    var days;  
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;
    }
    return days;
}

/**
 * http://www.codewars.com/kata/57202aefe8d6c514300001fd
 */
function saleHotdogs(n) {
    if (n <= 4) return 100 * n;
    else if (n >= 5 && n <= 9) return 95 * n;
    else return 90 * n;
}

/**
 * http://www.codewars.com/kata/5721c189cdd71194c1000b9b
 * @param {*} dolls 
 * @returns 
 */

/* Sample
function grabDoll(dolls) {
    let bag = [];
    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;
        bag.push(dolls[i]);
        if (bag.length === 3) break;
    }
    return bag;
}*/

/* Sample 2
function giveMeFive(obj) {
    const newObj = [];
    for (let key in obj) {
      if (key.length === 5) newObj.push(key);
      if (obj[key].length === 5) newObj.push(obj[key]);
    }
    return newObj;
  }
/