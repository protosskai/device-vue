<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="deviceList" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column width="120px" align="center" label="DeviceName">
        <template slot-scope="scope">
          <span>{{ scope.row.deviceName }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {fetchList} from '@/api/device'
export default {
  name: 'Device',
  data() {
    return {
      deviceName: 'TestDevice',
      deviceList: null,
      listLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    guide() {
      alert('This is Test')
    },
    getList(){
        fetchList().then(response => {
            this.deviceList = response.data
        })
    }
  }
}
</script>

