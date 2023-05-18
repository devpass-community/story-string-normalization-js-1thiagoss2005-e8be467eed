function removeAccent(str) {
   let word = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
   return word;
}

module.exports = removeAccent;
