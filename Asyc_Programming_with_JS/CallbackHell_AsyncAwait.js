function wait(msg) {
    return new Promise(resolve => {
        setTimeout(() => resolve(msg), 1000);
    });
}

async function runPipeline() {
    console.log(await wait("Design complete"));
    console.log(await wait("Build complete"));
    console.log(await wait("Test complete"));
    console.log(await wait("Deploy complete"));
    console.log(await wait("Celebrate"));
}

runPipeline();
