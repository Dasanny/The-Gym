Vue.component('coupon-a', {
  template:`
  <input placeholder="enter coupon code" @blur="onCouponApply">
  `,

  methods: {
    onCouponApply(){
      this.$emit('applied');
    }
  }
});

/*
window.Event = new class {
constructor(){
this.vue = new Vue();
}

fire(event, data = null){
this.vue.$emit(event, data);
}

listen(event, callback){
this.vue.$on(event, callback)
}
}
*/
//  call Event.$emit using Event.fire and Event.$on using Event.listen

//window.Event = new Vue();

/*
Vue.component('coupon-b', {
template:`
<input placeholder="enter coupon code" @blur="onCouponApply">
`,

methods: {
onCouponApply(){
Event.$emit('applied');
}
}
});
*/


Vue.component('modal', {
  template: `
  <div class="modal is-active">
    <div class="modal-background"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <slot name="header"></slot>
        </p>
        <button class="delete" aria-label="close"></button>
      </header>

      <section class="modal-card-body">
        <slot></slot>
      </section>

      <footer class="modal-card-foot">
        <slot name="footer">
          <a class="button is-primary">ookkk</a>
        </slot>
      </footer>

    </div>
  </div>
  `
});

Vue.component('progress-view', {
    data(){
      return { completionRate: 555 };
    }
});

let a = new Vue({
  el: '#root',

  data: {
    couponApplied: false
  },

  methods: {
    onCouponApply(){
      this.couponApplied = true;
    }
  }
});

/*
let b = new Vue ({
el: '#root2',

data: {
couponApplied: false
},

//  listen for event on window.Event instance
//  Not limited to parent child communication
created(){
Event.$on('applied', () => alert('it works!'));
}
});
*/

let c = new Vue({
  el: '#root3',
});

let d = new Vue({
  el: '#root4'
});
