const Mock = require('mockjs')

const List = []
const count = 100

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: i,
        deviceName: "device" + i
    }))
}
console.log(List)
module.exports = [
    {
        url: '/vue-element-admin/device/list',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: {
                    deviceList: List
                }
            }
        }
    }
]