//Title case (or Capital Case) is a specific method of capitalizing the characters of every word in a sentence in order to make it usable as a title or headline.//

const titleCase  = function(text) {
  // Your code in here ...
  let string = "";
  for (let i = 0; i < text.length; i++) {
    if ( i === 0) {
      string += text[i].toUpperCase();
    } else if (text[i] === " ") {
      string += " ";
      i++;
      string += text[i].toUpperCase();
    } else if (text[i] !== "") {
      string += text[i].toLowerCase();
    }
  }
  return string;
};


console.log(titleCase("this is an example"));