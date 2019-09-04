<template>
  <div id="app">
    <div>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <DT
      :data="table.data"
      :config="table.config"
      :columns="table.columns"
      :events="table.events"
    >
      <template v-slot:date="aaa">
        <span>{{ aaa.row.date }}</span>
      </template>

      <template v-slot:address="aaa">
        <span>{{ aaa.row.address }}</span>
      </template>
    </DT>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      table: {
        data: [
          { id: 0, date: 201712, name: '张三', address: '广州' },
          { id: 1, date: 20192, name: '李四', address: '深圳' },
          { id: 2, date: 20193, name: '张三', address: '广州' }
        ],
        config: {
          style: { width: '99.9%' },
          stripe: true
        },
        events: {
          select: this.selectItem
        },
        columns: [
          { type: 'selection', width: '180', algin: 'center' },
          { prop: 'date', label: '日期', width: '180', slot: 'date' },
          { prop: 'name', label: '姓名', width: '100' },
          { prop: 'address', label: '地址', slot: 'address' }
        ]
      }
    }
  },
  methods: {
    selectItem(selection, row) {
      console.log(selection, row)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
