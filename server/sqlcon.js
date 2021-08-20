const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'bactaiot3vjvjytid4es-mysql.services.clever-cloud.com',
    user     : 'ulusesjj15uc8xhd',
    password : 'TVTsdOx6I1vwfbwDbXrn',
    database : 'bactaiot3vjvjytid4es'
  });

  
  connection.connect((err)=>{

        if(err)
        {
            throw err;
        }
        else
        {
            console.log("my sql connected");
        }
        
  });
module.exports = connection;