const tempConverter = function(value, cToF) {
	let fTemp = 0;
	let cTemp = 0;
	if (typeof value !== "number" ){
		return NaN;
	} else if(cToF === true) {
		fTemp = (value * 9 / 5) + 32;
		return (fTemp);
	} else if (cToF === false) {
		cTemp = (value - 32) * (5/9);
		return(Math.round(cTemp*10) / 10);
	}
}
console.log(tempConverter(32, true));
console.log(tempConverter(32, false));