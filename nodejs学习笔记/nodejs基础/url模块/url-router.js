// 处理不同的HTTP请求在我们的代码中是另外一个不同的部分，叫做“路由选择”
const router = {
    login: (req, res) => {
        res.write('我是login方法')
    },
    register: (req, res) => {
        res.write('我是register方法')
    }
};
module.exports = router;