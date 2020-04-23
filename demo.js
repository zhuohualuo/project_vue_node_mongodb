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


function getData(value) {
    console.log('mondb', mondb);

    return mondb.filter(item => item.name === value)
}

console.log("getData('zs')", getData('zs'));