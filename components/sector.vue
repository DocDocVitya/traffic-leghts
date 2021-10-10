<template>
  <div>
    <div class="box"
         :class="{'red-active': activeColor === 'red', 'red': activeColor !== 'red', 'blink': showBlink('red')}">
      <div class="sec sec-red" v-if="activeColor === 'red'">{{ seconds }}</div>
    </div>
    <div class="box"
         :class="{'yellow-active': activeColor === 'yellow', 'yellow': activeColor !== 'yellow', 'blink': showBlink('yellow')}">
      <div class="sec sec-yellow" v-if="activeColor === 'yellow'">{{ seconds }}</div>
    </div>
    <div class="box"
         :class="{'green-active': activeColor === 'green', 'green': activeColor !== 'green', 'blink': showBlink('green')}">
      <div class="sec sec-green" v-if="activeColor === 'green'">{{ seconds }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sector",
  props: {
    activeColor: {
      type: String,
      required: true
    },
    seconds: {
      type: Number,
      required: true
    }
  },
  methods: {
    showBlink(color) {
      return this.activeColor === color && this.seconds < 3;
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  height: 200px;
  width: 200px;
  border-radius: 100%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sec {
  font-size: 55px;

  &-red {
    color: #f6d1d1;
  }

  &-yellow {
    color: #ef9917;
  }

  &-green {
    color: #bde8b1;
  }
}

.red {
  background-color: #dca6a6;

  &-active {
    background-color: red;

  }
}

.yellow {
  background-color: #c2c2a1;

  &-active {
    background-color: yellow;
  }
}

.green {
  background-color: #869386;

  &-active {
    background-color: green;
  }
}

@-webkit-keyframes blinker {
  from {
    opacity: 1.0;
  }
  to {
    opacity: 0.0;
  }
}

.blink {
  text-decoration: blink;
  -webkit-animation-name: blinker;
  -webkit-animation-duration: 0.6s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
  -webkit-animation-direction: alternate;
}
</style>
