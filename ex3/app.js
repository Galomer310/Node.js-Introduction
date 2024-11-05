const { readFile, writeFile } = require('./fileManager');

const runFileOperations = async () => {
    try {
        // Read content from Hello World.txt
        const content = await readFile('HelloWorld.txt');
        console.log('Content of HelloWorld.txt:', content);

        // Write new content to Bye World.txt
        const writeMessage = await writeFile('ByeWorld.txt', 'Writing to the file');
        console.log(writeMessage);
    } catch (error) {
        console.error(error);
    }
};

runFileOperations();
