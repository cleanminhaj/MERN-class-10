// Email pettern
// ====================

let email= 'minhajallsocial@hotmail.com'
let mailPattern= /^[a-z0-9_.]*@[a-z]{3,}\.[a-z]{2,5}$/;
console.log(mailPattern.test(email));



// username pattern
// =====================

let user= 'programmerminhaj'
let userPattern = /^[a-z0-9~`!@#$%^&*_+-]{3,}$/;
console.log(userPattern.test(user));



// Bangladeshi phone number pattern
// ==================================


let bdPhone= '+8801751055310'
let phonePattern =/^(\+8801|01)[0-9]{9}$/
console.log(phonePattern.test(bdPhone));



// // password pattern 
// =====================

let pass= 'Minhaj!@#%!*&(`<?'
let passPattern= /^[A-Za-z0-9~`!@#$%^&*()_<>?+=]{8,}$/
console.log(passPattern.test(pass));




 // zip code
// ===============


let zip = 4450
let zipPattern= /^[0-9]{4,5}$/
console.log(zipPattern.test(zip))
