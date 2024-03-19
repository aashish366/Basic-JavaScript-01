// const mySym=Symbol("key1")

// const JsUser={
//     name:"Aashish",
//     "full name":"Aashish Kumar",
//     [mySym]:"myKey1",
//     age:18,
//     location:"JaiPur",
//     email:"aashishmw333@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","Saturday"]
// }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym])

// JsUser.email="aashishmw366@gmail.com";
// // console.log(JsUser);

//freeze will freeze the value Its mean you can't change the value of JsUser ;
// Object.freeze(JsUser);
// JsUser.email="aashishmw399@gmail.com";
// console.log(JsUser);


// JsUser.greeting=function(){
//     console.log("Hello Js User");
// }

// JsUser.greetingTwo=function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());