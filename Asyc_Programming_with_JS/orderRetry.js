function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5 ? resolve("Success") : reject("Failed");
        }, 800);
    });
}

async function processOrder() {
    for (let i = 1; i <= 3; i++) {
        try {
            const res = await submitOrder();
            console.log("Attempt " + i + ": " + res);
            return;
        } catch (e) {
            console.log("Attempt " + i + ": Failed");
        }
    }
    throw new Error("Order could not be processed");
}

(async () => {
    try {
        await processOrder();
    } catch (e) {
        console.log(e.message);
    }
})();
