function destructivelyAppendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.push(name)
  ["Milo", "Otis", "Garfield", "Ralph"]
  // return kittens
}

console.log(destructivelyAppendKitten("Ralph"))
