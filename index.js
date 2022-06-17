const fs = require('fs');

try {

    const data = fs.readFileSync('./a.json', 'utf8');

    // parse JSON string to JSON object
    const databases = JSON.parse(data);

    console.log(databases);

    // print all databases
    // databases.forEach(db => {
    //     console.log(`${db.Abstract}: `);
    // });

} catch (err) {
    console.log(`Error reading file from disk: ${err}`);
}
