let mysql = require('mysql');

let DatabaseConnectionConfig = {
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'schools'
}

let con = mysql.createConnection(DatabaseConnectionConfig);
con.connect(function (error) {
    if (error) {
        console.log('Connection Fail')
    }
    else {
        console.log('Connection Success');
        insertData(con)
    }
});

function insertData(con) {
    let sqlQuery = "INSERT INTO `students_lists`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Opi','99','Honers','077255585','Sirajgong')";
    con.query(sqlQuery, function (error) {
        if (error) {
            console.log('Data insert fail');
        }
        else {
            console.log('Data inert success')
        }
    })
}