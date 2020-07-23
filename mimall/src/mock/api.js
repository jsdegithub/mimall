import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id|198100-198199": 0,
        "username": "@cname",
        "email": "@email",
        "phone": /^1[3456789]\d{9}$/,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
});