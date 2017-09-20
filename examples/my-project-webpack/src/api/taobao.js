import fetch from 'utils/fetch'
// import axios from 'axios'
// var qs = require('qs')
export function getIpInfo (ip) {
  //方法2
  return fetch({
    url: '/ipServiceTaobao/getIpInfo.php',
    method: 'get',
    params: ip, //  qs.stringify(ip)
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
      // 'Access-Control-Allow-Origin': '*' //服务端
    }
  })

  //方法1
  // axios.get('/service/getIpInfo.php', {
  //   params: ip
  // })
  // .then(function (response) {
  //   console.log(response)
  // })
  // .catch(function (error) {
  //   console.log(error)
  // })
}
