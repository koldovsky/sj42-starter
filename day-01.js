/**
https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript
*/
function correctTail(body, tail) {
  const sub = body.substr(body.length - tail.length);
  if (sub === tail) return true; return false;
}
