let mysql = require('mysql');
const { resourceUsage } = require('process');
const { release } = require('os');

let connection = mysql.createConnection(
    {
        host : 'database-1.cfxtcmls0tk9.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'dl871018'
}
);

//let query = 'select concat(author_fname , author_lname ) as full_name from books'

//query = 'select title as "short title"  from books'


//query = 'select concat(title ," " ," was released in" , " ", released_year) as blurb from books'

3-7
//query = 'select title , char_length(title)  from books'

//3-8;
// let booksname = "insert into books(title , author_fname , author_lname , released_year , stock_quantity , pages)\
// values ('10% Happier' , 'Dan' , 'Harris' , 2014 , 29 , 256),\
//        ('fake_book' , 'Freida' , 'Harris' , 2001 , 287 , 428),\
//        ('Lincoln In The Bardo ' , 'George' , 'Saunders' , 2017 , 1000 , 367 )"


// 3-9

//query = 'select title , released_year from books order by title , released_year desc limit 5;'


// 3-10

// query = 'select title , pages from books order by pages desc limit 1'

// query = 'select count(title) from books where title like "%the%"'

// query = 'select released_year ,  count(*) from books group by released_year'

query = 'select released_year ,  count(*) as books , round(avg(pages),3) from books group by released_year order by released_year asc'

connection.query(query, function(error, results, fields){        
    console.log(results)    
    })

connection.end()