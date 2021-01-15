var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!'
    },
    beforeCreate: function() {
      console.log("beforeCreate");
    },
    created: function() {
      console.log("created");   
      // data, computed, methods, watch 등과 같은 옵션 설정이 안료된 시점이므로 data 등을 사용할 수 있다.
      // 하지만 마운트는 되지 않았기 때문에 $el은 사용할 수 없다.
    },
    mounted: function() {
      console.log("mounted");
      // $el을 사용하여 DOM에 접근할 수 있다. mounted 훅이 호출되었다고 모든 컴포넌트가 마운트 되었다고 보장할 수는 없다.
      // 전체가 렌더링 보장된 상태에서 작업을 하기 위해서는 $nextTick을 사용해야 한다.
      console.log('mounted', this.$el);
      this.$nextTick(()=>{
          // 모든 화면이 렌더링 되고 난 후 호출
      })
    },
    updated: function() {
      console.log("updated");
    }
  });