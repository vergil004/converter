<template>
  <div class="calculator">
    <div class="calculator__switch">
      <div
        :class="{ 'calculator__label--active': !mode }"
        class="calculator__label"
      >
        {{ name }}
      </div>
      <v-switch v-model="mode" color="green" />
      <div
        :class="{ 'calculator__label--active': mode }"
        class="calculator__label"
      >
        RUB
      </div>
    </div>
    <div class="calculator__bottom">
      <v-form class="calculator__form">
        <v-text-field
          label="У меня есть"
          v-model="inputData"
          hint="Введите сумму валюты которую вы хотите конвертировать"
          outlined
        ></v-text-field>
      </v-form>
      <div class="calculator__name">{{ nameFrom }}</div>
      <v-text-field
        v-model="result"
        readonly
        label="Хочу приобрести"
        outlined
        class="calculator__result"
      />
      <div class="calculator__name">{{ nameTo }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.calculator {
  margin-top: 32px;
  border-top: 2px solid #0f0;
  padding-top: 16px;
  &__switch {
    display: flex;
    align-items: center;
    .v-input {
      margin-left: 16px;
      margin-right: 16px;
    }
  }
  &__label {
    font-size: 16px;
    &--active {
      color: #0f0;
    }
  }
  &__bottom {
    display: flex;
    align-items: center;
  }
  &__form {
    width: 370px;
  }
  &__result {
    max-width: 370px;
  }
  &__name {
    margin: 0 16px -7px 16px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      inputData: 1,
      mode: true,
    }
  },
  props: {
    value: {
      required: true,
      default: 1,
      type: Number,
    },
    name: {
      required: true,
      default: '',
      type: String,
    },
  },
  computed: {
    result() {
      return !this.mode
        ? Number(this.inputData) * this.value
        : Number(this.inputData) / this.value
    },
    nameFrom() {
      return !this.mode ? this.name : 'RUB'
    },
    nameTo() {
      return this.mode ? this.name : 'RUB'
    },
  },
}
</script>
