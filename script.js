function firstWord(s) {
  if (!s || s.indexOf(' ') === -1) {
    return s;
  } else {
    return s.split(' ')[0];
  }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
