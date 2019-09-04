<template>
  <el-table :data="data" v-bind="config" v-on="events">
    <template v-for="(item, index) in columns">
      <el-table-column :key="index" v-bind="getItem('slot', item)">
        <template #default="{row, $index}" v-if="item.slot">
          <slot
            :name="item.slot"
            :row="row"
            :prop="item.prop"
            :index="$index"
          ></slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: 'DT',
  components: {},
  props: {
    data: {
      type: Array,
      default: () => []
    },
    config: {
      type: Object,
      default: () => {
        return {}
      }
    },
    events: {
      type: Object,
      default: () => {
        return {}
      }
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    getItem(key, item) {
      let obj = Object.assign({}, item)
      delete obj[key]
      return obj
    }
  }
}
</script>
<style lang="scss" scoped></style>
