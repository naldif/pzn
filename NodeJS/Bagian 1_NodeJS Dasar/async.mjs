function samplePromise(){
    return Promise.resolve("Nito");
}

const name = await samplePromise();
console.info(name);
