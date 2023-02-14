<template>
  <div>
    <v-select
      v-if="allValutes"
      v-model="select"
      :items="allValutes"
      item-text="name"
      item-value="data"
      label="Выбрать валюту"
      @change="changeSelectedValue"
    >
    </v-select>
    <ul class="list">
      <li @click="setActiveTab('EUR')">
        <current-element
          v-if="euro"
          :data="euro[0].data"
          :active="activeTab"
          @setCurrentValue="setCurrentValue"
        />
      </li>
      <li @click="setActiveTab('USD')">
        <current-element
          v-if="euro"
          :data="dollar[0].data"
          :active="activeTab"
          @setCurrentValue="setCurrentValue"
        />
      </li>
      <li @click="setActiveTab(select.CharCode)">
        <current-element
          @setCurrentValue="setCurrentValue"
          v-if="select"
          :data="select"
          :active="activeTab"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import CurrentElement from '~/components/CurrentElement'
export default {
  data() {
    return {
      select: null,
      activeTab: 'EUR',
    }
  },
  components: {
    CurrentElement,
  },
  computed: {
    allValutes() {
      return this.$store.getters.allValutes
    },
    euro() {
      return this.allValutes.filter((item) => item.name === 'EUR')
    },
    dollar() {
      return this.allValutes.filter((item) => item.name === 'USD')
    },
  },
  methods: {
    setActiveTab(name) {
      this.activeTab = name
    },
    changeSelectedValue() {
      this.setActiveTab(this.select?.CharCode)
      this.$emit('setCurrentValue', {
        value: this.select?.Value,
        name: this.select?.CharCode,
      })
    },
    setCurrentValue({ activeValue, activeName }) {
      this.$emit('setCurrentValue', { value: activeValue, name: activeName })
    },
  },
  mounted() {
    this.setCurrentValue({
      activeValue: this.euro[0].data.Value,
      activeName: 'EUR',
    })
  },
}
</script>
<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0;
  li {
    list-style-type: none;
  }
}
</style>
