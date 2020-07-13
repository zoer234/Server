// require = 모듈을 사용하겠다 또는 라이브러리를 * 규칙 변수이름 똑같이 해줘야한다.
// 이 파일 안엣 , mysql 라이브러리를 사용하겠다. 
let mysql = require('mysql')

let connection = mysql.createConnection(
    {
        host : 'database-1.cfxtcmls0tk9.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'dl871018'
}
);


// let insert_query = 'insert into memo (title , comment) \ values ("hi" , "nice to meet you") '
// connection.query(insert_query , function(error , result){
//     console.log(result)
// })

// connection.query('select * from memo' , function(error , results , fields){
//     console.log(results) 
//     console.log(results[0].cnt)
// })

let q_like = "%he%"
connection.query('select title from memo where title like ? and id = ? ', 
[ q_like, 1 ],
function(error, results,fields){
    console.log(results)

    
 
})




connection.end() // 연결 끊기 * 매우 중요




