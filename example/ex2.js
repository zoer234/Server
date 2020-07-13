let mysql = require('mysql');
const { resourceUsage } = require('process');

let connection = mysql.createConnection(
    {
        host : 'database-1.cfxtcmls0tk9.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'dl871018'
}
);

// 유저 데이터를 30개만 가져와서, 이메일 주소와 날짜를 출력하시오.
//let query = 'select email, created_at from users limit 30;'

// connection.query(query, function(error, results, fields){        
// console.log(results)    
// })

// 가장 먼저 회원가입한 사람의 이메일과 가입일을 출력하시오.
//query = 'select * from users order by created_at limit 1;'

//connection.query(query, function(error, results, fields){        
//console.log(results[0].email + " , " +
//results[0].created_at.toString())    
//})

query = 'select * from users  '


connection.end()

