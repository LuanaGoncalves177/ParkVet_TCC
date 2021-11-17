const db = require('knex')({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'your_database_user',
        password : 'your_database_password',
        database : 'myapp_test'
    }
});

const myFilesToRead = ['./file1.json', './file2.json'];

Promise.all(
    myFilesToRead.map((file) => {
        // yes you can require json files :)
        const fContent = require(file);
        return Promise.all(fContent.map((obj) => {
            // knex is a query builder, it will convert the code below to an SQL statement
            return db('table_name')
            .insert(obj)
            .returning('*')
            .then((result) => {
                console.log('inserted', result);
                return result;
            });
        }));
    })
)
.then((result) => {
    // let's now get these objects back
    return db('table_name')
    .select('*');
})
.then((result) => {
     // that's it
     console.log(JSON.stringify(result));
});