const keyMatcher = function(object1, object2, key) {
	let firstvalue;
	let seccondvalue;
	for (let i in object1) {
		if(i === key) {
			firstvalue = object1[i];
		}
	}
	for(let j in object2) {
		if(j === key) {
			seccondvalue = object2;
		}
	}
	if (firstvalue === seccondvalue) {
		return true;
	} else {
		return false;
	}
}
console .log(keyMatcher({a: 1, b: 2, c: 3}, {here: 3, is: 2, a: 1, silly: 0, example: -1}, 'a'));
console.log(keyMatcher({apple: "red", banana: "yellow", cherry: "red"}, {apple: "green", banana: "brown", cherry: "black"}, "apple") )