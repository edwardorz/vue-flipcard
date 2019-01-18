<template lang="pug">
#app.page
  .title vue-flipcard
  .desc Vue flip card component
  .card-container
    vue-flipcard(
      :height="240"
      @flip="onFlip"
    )
      .content.front(slot="front")
        h1 正面 | Front
        p 这是一个水平的翻转卡片，鼠标进入时翻转
        p I'm a horizontal filpcard, put your mouse over me to flip
      .content.back(slot="back")
        h1 背面 | Back
        p 将鼠标移出恢复正面
        p Move your mouse out of me to flip
    
    vue-flipcard(
      :height="240"
      direction="vertical"
    )
      .content.front(slot="front")
        h1 正面 | Front
        p 这是一个垂直的翻转卡片，鼠标进入时翻转
        p I'm a horizontal filpcard, put your mouse over me to flip
      .content.back(slot="back")
        h1 背面 | Back
        p 将鼠标移出恢复正面
        p Move your mouse out of me to flip
    
    vue-flipcard(
      ref="flipcard"
      :height="240"
      disable
    )
      .content.front(slot="front")
        h1 正面 | Front
        p 这是一个自定义的翻转卡片，点击按钮以翻转
        p Click the button to flip manually!
        .btn(@click="onManualFlip") Click Me

      .content.back(slot="back")
        h1 背面 | Back
        p 这是一个自定义的翻转卡片，点击按钮以翻转
        p Click the button to flip manually!
        .btn(@click="onManualFlip") Click Me
</template>

<script>
export default {
  name: 'App',
  methods: {
    onFlip () {
      console.log('flipped!')
    },
    onManualFlip () {
      this.$refs.flipcard.flip()
    }
  }
}
</script>

<style lang="less">
html, body {
  height: 100%;
}

body {
  margin: 0;
  background-color: #f6f7f7;
}

#app {
  padding: 40px 20px;

  .title {
    font-size: 32px;
    text-align: center;
    font-weight: bold;
  }

  .desc {
    font-size: 16px;
    color: #555;
    text-align: center;
    margin-bottom: 30px;
  }

  .card-container {
    text-align: center;
  }

  .vue-flipcard {
    margin: 10px;
    display: inline-block;
  }

  .content {
    padding: 0 20px;
    text-align: left;
  }


  .btn {
    width: 100px;
    margin: 0 auto;
    height: 35px;
    line-height: 35px;
    font-size: 18px;
    user-select: none;
    cursor: pointer;
    text-align: center;
    border: 1px solid rgba(122, 122, 122, 0.3);
    border-radius: 3px;
    background-color: #2196F3;
    color: #fff;
  }
}
</style>
