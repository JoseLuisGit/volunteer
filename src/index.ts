import '@app/utils/loadenv';

async function main() {
    console.log('Hello World' + process.env.NODE_ENV);
}

main();
