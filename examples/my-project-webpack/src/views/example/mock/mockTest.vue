<template>
  <div>
    <h1>{{ title }}</h1>

    <el-form >
      <el-form-item label="IP:">
        <el-input name="ip" type="text" v-model="sendIp.ip" placeholder="IP"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>

      <el-form-item label="city:">
        <el-input type="text" v-model="ipInfo.city" placeholder="city"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getIpInfo } from 'api/taobao'
export default {
  data () {
    return {
      title: 'mockTest',
      ipInfo: {
        country: '未知',
        country_id: '-1',
        area: '未知',
        area_id: '-1',
        region: '未知',
        region_id: '-1',
        city: '未知',
        city_id: '-1',
        county: '未知',
        county_id: '-1',
        isp: '未知',
        isp_id: '-1',
        ip: '127.0.0.1'
      },
      sendIp: {
        ip: '114.255.44.132'
      }
    }
  },
  methods: {
    onSubmit () {
      getIpInfo(this.sendIp).then(response => {
        this.ipInfo.city = response.data.data.city;
      })
    },
    onSubmitCORS () {
      var options = {
        method: 'GET',
        params: this.sendIp
      }
      this.$http.jsonp('/service/getIpInfo.php', options).then(function (response) {
        alert(response)
      }).catch(function(obj){

		  })
    }

  }
}
</script>
