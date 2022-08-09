let movies = ["12 обезьян", "Крестный отец", "Интерстеллар", "Человек-швейцарский нож"];
for (let movie of movies) {
    console.log ( movie );
  }
//________________________________________________________1

let cars = ["Volvo", "Scoda", "Toyota", "Mazda"];
let str = cars.join(', ');
let cars2 = str.split(', ');

//________________________________________________________2

let friends = ["Алёнка", "Лёлька"];
friends.forEach(function(item, index, array) {
   array[index] = "Hello " + item;
  });

//________________________________________________________3

let num = [2, 5, 3];
num = Boolean (num);

//________________________________________________________4

let sortarr = [1,6,7,8,3,4,5,6];
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  sortarr.sort(compareNumeric);
 
//________________________________________________________5

let sortarr2 = [1,6,7,8,3,4,5,6];
function filtering () {
    return sortarr2.filter(item => ( item > 3));
  }

//________________________________________________________6

function GetIndex (arr, x) {
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] == x) {
           console.log (i);
       } 
    }
    if (arr.includes(x) !== true )  {
       console.log ("There is no such number in array");
   }
   }
   let k = [2, 4, 6, 3, 5, 8, 5, 1000];
   GetIndex (k, 5);

//________________________________________________________7

let i = 1;
while (i < 10) { 
  console.log( i );
  i++;
}

//________________________________________________________8

Prime: for (let i = 2; i < 10; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue Prime;
      }
      console.log( i ); 
    }

//________________________________________________________9

for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log (i);
}

//________________________________________________________10