import { mapGetters, mapActions } from 'vuex'
export const mixin = {
  computed: {
    ...mapGetters([
      'test'
    ])
  },
  methods: {
    ...mapActions([
      'setOneAction',
      'setMoreAction'
    ])
  }
}
