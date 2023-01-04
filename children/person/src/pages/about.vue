

<template>
  <el-card class="about">
    <el-form :model="form" :inline="true">
      <el-form-item label="关于" prop="about">
        <el-input v-model="form.about" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>

    <!--  -->

    <section>
      <el-button type="primary" >新增</el-button>
      <el-button type="danger" v-btnAuth="'user:edit'">删除</el-button>
    </section>
<!--  -->
<br/>
    <el-table border :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
    <el-table-column label="操作" >
      <el-button type="danger" v-btnAuth="'user:edit'">删除</el-button>
      <el-button type="primary" size="small">编辑</el-button>
    </el-table-column>
  </el-table>
  </el-card>
</template>

<script lang="ts" setup>
const form = reactive({
  about: ''
})

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style lang="less" scoped>
.about {
 margin: 10px;
 padding: 15px;
}
</style>
