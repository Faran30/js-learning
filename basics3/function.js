function addtwonumber(mumber1 , number2){

mumber1 + number2
}
addtwonumber(1 , 2)

function isloggedin(username){
    if(username === undefined){
        console.log("please Enter your name");
        return
    }
    
    return `${username} is logged in`
}
//  console.log(isloggedin());

function addtomycart(...num1){
    return num1
}
// console.log(addtomycart(4, 4, 5));

const user = {
    username :"faran",
    price : 999,
}
const user1 = {
    username : "abdullah",
    price : 500,
}
function myownfunction (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
myownfunction(user)




