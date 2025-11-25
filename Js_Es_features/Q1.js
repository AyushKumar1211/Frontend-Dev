"use strict";
const apiData=["25","true","false","NaN","  ","100px","3.14",null,undefined];
const valid=[];const invalid=[];
apiData.forEach(v=>{const num=Number(v);if(Number.isFinite(num)&&v!==""&&v!== " "&& !isNaN(num)){valid.push(num);}else{invalid.push(v);}
console.log({value:v,number:num,boolean:Boolean(v),string:String(v)});});
console.log("valid",valid,"invalid",invalid);