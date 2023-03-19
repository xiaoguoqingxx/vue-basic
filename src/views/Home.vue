<template>
  <div class="home">
    <div>
      {{ test }}
    </div>
    <div>
      <input v-model="testOne"/>
      <button @click="change">变更</button>
    </div>
  </div>
</template>

<script>

import { mixin } from '../utils/mixin'
export default {
  name: 'Home',
  data: ()=>{
    return{
      testOne: ''
    }
  },
  mixins: [mixin],
  methods: {
    change(){
      if (this.testOne==='') return
      this.setOneAction({ key: 'test', content: this.testOne })
    }
  }
}
</script>
