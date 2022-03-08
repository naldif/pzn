function samplePromise(){
    return Promise.resolve("Nito");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();