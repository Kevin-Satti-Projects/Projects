function caesar(string, key) {
  let holder = string.split("");
  let changed = Array(holder.length).fill(0);
  for (let i = 0; i < holder.length; i++) {
    if (holder[i].match(/[a-z]/i)) {
      changed[i] = String.fromCharCode(holder[i].charCodeAt(0) + key);
    } else {
      changed[i] = holder[i];
    }
  }
  return changed.join("");
}
module.exports = caesar;
