<template lang="pug">
.vue-flipcard(
  :class="[direction, { 'back': back }]"
  :style="{ 'width': width + 'px', 'height': height + 'px' }"
  @mouseenter="onMouseEnter"
  @mouseleave="onMouseLeave")
  .vue-flipcard__front(:style="{ 'transform-origin': 'center center ' + zoffset + 'px' }")
    slot(name="front")
  .vue-flipcard__back(:style="{ 'transform-origin': 'center center ' + zoffset + 'px' }")
    slot(name="back")
</template>

<script>
export default {
  name: 'VueFlipcard',
  data () {
    return {
      back: false
    }
  },
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    zoffset: {
      type: Number,
      default: 20
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    flip () {
      this.back = !this.back
      this.$emit('flip')
    },
    onMouseEnter () {
      !this.disable && this.flip()
    },
    onMouseLeave () {
      !this.disable && this.flip()
    }
  }
}
</script>

<style lang="less" scoped>
.vue-flipcard {
  position: relative;
  
  &__front,
  &__back {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 15px rgba(173, 173, 173, 0.2);
    perspective: 1000;
    transform-style: preserve-3d;
    transition: transform .6s;
    backface-visibility: hidden; /* backface-visibility 属性指定当元素背面朝向观察者时是否可见。元素的背面总是透明的，当其朝向观察者时，显示正面的镜像 */
  }
  
  &__front {
    z-index: 2;
  }

  &.horizontal &__back {
    transform: rotate3d(0, 1, 0, -180deg);
  }

  &.horizontal.back &__front {
    transform: rotate3d(0, 1, 0, 180deg);
  }

  &.horizontal.back &__back {
    transform: rotate3d(0, 1, 0, 0);
  }

  &.vertical &__back {
    transform: rotate3d(1, 0, 0, -180deg);
  }

  &.vertical.back &__front {
    transform: rotate3d(1, 0, 0, 180deg);
  }

  &.vertical.back &__back {
    transform: rotate3d(1, 0, 0, 0);
  }
}
</style>