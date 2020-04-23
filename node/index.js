const express = require('express')

const app = express()

const mondb = [{
        name: 'zs',
        age: 10,
        play: '哈哈 去腾讯'
    },
    {
        name: 'ls',
        age: 20,
        play: '哈哈 去oppo'
    }
]


//使用中间件实现跨域请求
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); //允许的来源
    res.header("Access-Control-Allow-Headers", "Content-Type"); //请求的头部
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); //允许请求的方法
    next();
})

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


var resData = ''
app.post('/a', (req, res) => {
    let params = req.body.name

    let result = mondb.filter(item => item.name === params)

    resData = result.length > 0 ? result[0].play : '没有数据'

    console.log(
        '中间件 发送成功~~',
        resData
    );
    res.json({
        code: 0,
        msg: '发送成功'
    })

})

app.get('/b', (req, res) => {
    console.log(
        '获取成功'
    );

    res.json({
        code: 0,
        msg: '获取成功',
        data: resData
    })
})


app.listen(3000, () => {
    console.log('中间件 this is node success 3000!!!');

})