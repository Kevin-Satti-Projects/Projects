function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
}

module.exports = capitalize;
