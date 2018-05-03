var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var newName = 'Marian';
var allNames = femaleNames.concat(maleNames);

if (allNames.indexOf(newName) === -1) {
    console.log('Witaj Piotrze!');
    newName = allNames.push(newName);
}
