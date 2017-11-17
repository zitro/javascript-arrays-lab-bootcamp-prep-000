const app = "I don't do much."
var kitten = [];
function destructivelyAppendKitten(name){
  var kittens = kitten.push(name);
  return kittens;
}
