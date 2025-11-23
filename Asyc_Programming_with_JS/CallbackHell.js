function design(cb) {
    setTimeout(() => cb("Design complete"), 1000);
}

function build(cb) {
    setTimeout(() => cb("Build complete"), 1000);
}

function test(cb) {
    setTimeout(() => cb("Test complete"), 1000);
}

function deploy(cb) {
    setTimeout(() => cb("Deploy complete"), 1000);
}

function celebrate(cb) {
    setTimeout(() => cb("Celebrate"), 1000);
}

design(msg1 => {
    console.log(msg1);
    build(msg2 => {
        console.log(msg2);
        test(msg3 => {
            console.log(msg3);
            deploy(msg4 => {
                console.log(msg4);
                celebrate(msg5 => {
                    console.log(msg5);
                });
            });
        });
    });
});
