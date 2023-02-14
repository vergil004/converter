<script>
export default {
  props: {
    data: {},
    active: {
      type: String,
      default: '',
    },
  },
  computed: {
    differenceValue() {
      return this.data.Value - this.data.Previous
    },
    isPlus() {
      return this.differenceValue > 0
    },
    isMinus() {
      return this.differenceValue < 0
    },
  },
  methods: {
    setCurrentValue() {
      this.$emit('setCurrentValue', {
        activeValue: this.data.Value.toFixed(2),
        activeName: this.data.CharCode,
      })
    },
  },
}
</script>
<template>
  <div
    :class="{ 'current--active': data.CharCode === active }"
    class="current"
    @click="setCurrentValue"
  >
    <div class="current__check"></div>
    <div class="current__title">{{ data.Name }}</div>
    <div class="current__value">
      {{ data.Value }}
    </div>
    <div
      v-if="differenceValue !== 0"
      :class="{
        'current__value--plus': isPlus,
        'current__value--minus': isMinus,
      }"
    >
      {{ differenceValue.toFixed(4) }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
.current {
  display: block;
  width: 320px;
  height: 100%;
  border: 3px solid #fff;
  border-radius: 16px;
  padding: 16px;
  position: relative;
  &--active {
    border-color: green;
    .current__check {
      background-color: green;
    }
  }
  &__title {
    font-size: 20px;
  }
  &__check {
    border-radius: 100%;
    width: 8px;
    height: 8px;
    position: absolute;
    top: 28px;
    right: 16px;
    background-color: #fff;
  }
  &__value {
    font-size: 16px;
    &--plus {
      font-size: 12px;
      color: green;
    }
    &--minus {
      font-size: 12px;
      color: red;
    }
  }
}
</style>
