function destructivelyAppendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.push(name)
  return kittens
}

console.log(destructivelyAppendKitten("Ralph"))
