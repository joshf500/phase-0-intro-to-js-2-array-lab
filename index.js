// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name){
   cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name){
    const appendedCats = [...cats, name];
    return appendedCats;
}
function prependCat(name){
    const prependedCats = [name, ...cats];
    return prependedCats;
}
function removeLastCat(name){
    const lastRemoved = cats.slice(0, cats.length-1);
    return lastRemoved;
}
function removeFirstCat(name){
    const firstRemoved = cats.slice(1);
    return firstRemoved;
}