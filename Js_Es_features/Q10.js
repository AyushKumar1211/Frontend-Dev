"use strict";
function outer(){console.log(undefined);var count=5;const inner=()=>{console.log(count);};inner();}outer();