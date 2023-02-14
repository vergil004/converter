<script>
import SelectorBlock from '~/components/SelectorBlock'
import CalculatorBlock from '~/components/CalculatorBlock'
export default {
  name: 'IndexPage',
  components: {
    SelectorBlock,
    CalculatorBlock,
  },
  data() {
    return {
      currentValue: 1,
      currentValueName: 'EUR',
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    },
  },
  async mounted() {
    await this.$store.dispatch('fetchValues')
  },
  methods: {
    setCurrentValue({ value, name }) {
      this.currentValue = Number(value)
      this.currentValueName = name
    },
  },
}
</script>

<template>
  <div>
    <SelectorBlock @setCurrentValue="setCurrentValue" v-if="!isLoading" />
    <CalculatorBlock :value="currentValue" :name="currentValueName" />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
</style>
