"use strict";
const transactions=[{id:1,amount:2000},{id:2,amount:-500},{id:3},null];
const valid=[],invalid=[];
transactions.forEach(t=>{try{if(t===null) throw new Error("NullEntry");if(typeof t.id==="undefined"||typeof t.amount==="undefined") throw new Error("MissingField");if(t.amount<0) throw new Error("NegativeAmount");valid.push(t);}catch(e){invalid.push({t,error:e.message});}});
console.log("valid",valid);console.log("invalid",invalid);