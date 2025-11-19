let product = " wireless headphones PRO ";
let cleaned = product.trim().toLowerCase().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
let finalTitle = cleaned.replace("Pro", "Pro Edition");
console.log(finalTitle);
console.log("Length:", finalTitle.length);
