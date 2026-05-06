import fs from 'node:fs';

const filePath = "./hello.txt";

// Write to a file (synchronously)
fs.writeFileSync(filePath, "Hello, Node.js beginner!");

// Read the file (synchronously)
const content = fs.readFileSync(filePath, "utf8");

console.log("File content:", content);


console.log('1. Starting async read...');
fs.readFile('hello.txt', 'utf8', (err, data) => {
    console.log('2. File contents:', data);
});

console.log('3. Done')



