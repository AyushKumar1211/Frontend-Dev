"use strict";
const rawData=['{"user":"Alex","age":25}','{"id":2}','{invalid}','{"user":"Mina","age":"22"}'];const clean=[];
rawData.forEach((r,i)=>{try{const obj=JSON.parse(r);if(!obj.user||!obj.age) throw new Error("MissingKeys");obj.age=Number(obj.age);if(obj.age>=18) clean.push(obj);}catch(e){console.log("Error line",i+1,e.message);} });console.log(clean);