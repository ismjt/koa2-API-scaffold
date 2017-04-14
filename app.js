var mysql  = require('mysql');  //调用MySQL模块

//创建一个connection
var connection = mysql.createConnection({    

    host     : 'localhost',       //主机
    user     : 'majt',            //MySQL认证用户名
    password:'majt',
    port:   '3306',
    database: 'app_end'

});

//创建一个connection
connection.connect(function(err){

    if(err){       

        console.log('[query] - :'+err);

        return;

    }

    console.log('[connection connect]  succeed!');

}); 

//查询
var selectSQL = 'select * from `mock_user`';

//执行SQL语句
connection.query(selectSQL, function(err, rows, fields) {
    if (err) {
        console.log('[query] - :'+err);
        return;
    }
    console.log(rows); 

}); 

//关闭connection
connection.end(function(err){
    if(err){       
        return;
    }
    console.log('[connection end] succeed!');

});