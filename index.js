//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE




/*
1. Return the all friends of a given customers name.
When returning the friends of the customer it
should be a string and NOT the friends array. 
*/

function friendsOfCustomer(name){
  //CODE BELOW HERE

 for(var i = 0; <= customers.length - 1; i++){
  if(name === customers[i].name){
    for(var o = 0; o <= customers{i}.friends.length - 1; o++)
     console.log(customers[i].friends[o].name)
   }
  }
 }

  //CODE ABOVE HERE
}





/*
2. Return the phone number and address of a 
given customer when thier name is entered into the 
function.
*/

function contactInfo(name){
  //CODE BELOW HERE
 return(contactInfo.number.adress){
   for(var i = 0; <= customer.phoneNumber - 1; i++){
  if(name === customers[i].name){
    for(var o = 0; o <= customer.adress - 1; o++)
     console.log(customers[i].phoneNumber[o].adress)
 }

  //CODE ABOVE HERE
}