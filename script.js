var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);
if (allNames.indexOf(newName) === -1) {
    console.log('Witaj Piotrze!');
}
var newName = allNames.push(newName);