function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("Failed to fetch bugs");
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => console.table(bugs))
    .catch(err => console.log(err));
