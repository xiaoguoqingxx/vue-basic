<template>
  <div class="home">
    <div>
      {{ test }}
    </div>
    <div>
      element-ui:
      <input v-model="testOne"/>
      <el-button type="success" @click="change">element-ui变更</el-button>
    </div>
    <div>
      ant-design-vue:
      <input v-model="testTwo"/>
      <a-button type="primary"  @click="changeTwo">ant-design-vue变更</a-button>
    </div>
    <div>
      vant:
      <input v-model="testThree"/>
      <van-button type="primary" @click="changeThree">vant变更</van-button>
    </div>
    
  </div>
</template>

<script>

import { mixin } from '../utils/mixin'

export default {
  name: 'Home',
  data: ()=>{
    return{
      testOne: '',
      testTwo: '',
      testThree: ''
    }
  },
  mixins: [mixin],
  methods: {
    change(){
      if (this.testOne==='') return
      this.setOneAction({ key: 'test', content: this.testOne })
    },
    changeTwo() {
      if (this.testTwo==='') return
      this.setOneAction({ key: 'test', content: this.testTwo })
    },
    changeThree() {
      if (this.testThree==='') return
      this.setOneAction({ key: 'test', content: this.testThree })
    }
  }
}
</script>
