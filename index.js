/*const name="Tejesh";
const age=20;
const address="mnpli";
const x="my name is"+name+", age is "+age+",address is "+address;
const z=`My name is ${name} and i am ${age}`;
console.log(x);
console.log(z);

const y=x.split(",");
console.log(y)


//palindrome


const x="tet";
const y=x.split('');
//console.log(y);
const z=y.reverse();
//console.log(z);
let p;
for(let i=0;i<y.length;i++)


{
    
    if(x[i]==z[i])
{
     p="yes it is paliandrome";
}
else{
    p="no, not paliandrome";
}
console.log(p);
} 

//arrays

const fruits=['apples','oranges','pears'];
fruits[3]='grapes';
fruits.push('perry');
fruits.unshift('strawberry'); //beginning
fruits.pop();

console.log(Array.isArray(fruits)); //check if the above one is array or not
console.log(fruits.indexOf('oranges'));
console.log(fruits);


//object literals

const person =
{
    fname:'tej',
    lname:'k',
    age : 30,
    hobbies:['music','movies'],
    address:{ street:'mnpli',city:'plnmr'}
}
person.email='tej@gmail.com'
console.log(person);
console.log(person.hobbies[1]);
console.log(person.age);

const {fname,age,hobbies,address:{city}}=person;
console.log(age);
console.log(hobbies);
console.log(city);
*/

// using objects inside arrays

const todos= 
[
    {
        id:1,
        text:'meeting with tej',
        comp:true
    },

    {
        id:2,
        text:'meeting with doc',
        comp:false
    },

    {
        id:3,
        text:'meeting with ram',
        comp:true
    }

]
console.log(todos);
console.log(todos[1].id)
console.log(todos[2].comp)

//to JSON

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


//FOR LOOP

for(let i=0;i<5;i++)
{
    console.log(i);
}


//while
i=0;
while(i<5)
{
    console.log(i);
    i++;
}

//FOR LOOP

for(let i=0;i<todos.length;i++)
{
    console.log(todos[i].text);
}

//FOR-OF LOOP

for(let t of todos)
{
    console.log(t.id);
}
//FOR-EACH

todos.forEach(

    function(t)
{
    console.log(t.text);
}

);

//map

const x=todos.map(function(t)
{
    return t.text;
    return t.id;
}
);
console.log(x);



















