// <task></task>
Vue.component('task', {
  template: '<li><slot></slot></li>'
});

Vue.component('task-list', {
  template: '<div><task v-for="task in tasks">{{ task.desc }}</task></div>',

  /*
  For regular vue instances, we can set data = object but for components we
  have to make data a function that returns an object (not linked to any
  specific instance)
  */
  data() {
    return {
      tasks: [
        { desc: 'wake up', complete: true },
        { desc: 'breakfast', complete: true },
        { desc: 'lunch', complete: true },
        { desc: 'dinner', complete: true },
        { desc: 'sleep', complete: false }
      ]
    };
  }
});

Vue.component('meme', {
  template: '<h1>haha berry funny</h1>'
});

Vue.component('message', {
  props: ['title', 'body'],

  data() {
    return {
      visible: true
    };
  },

  template: `
  <article class="message" v-show="visible">
  <div class="message-header">
  {{ title }}

  <button type="button" @click="visible = false">x</button>
  </div>

  <div class="message-body">
  {{ body }}
  </div>
  </article>
  `
});

Vue.component('modal', {
  template:
  `<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content">
  <div class="box">
  <slot></slot>
  </div>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
  `
  //when clicked, emit event called close
  //the custom event listener @close in the html makes the root instance update the showModal property
});

Vue.component('tabs', {
  template: `
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
  `,

  data() {
    return { tabs: [] }
  },

  created() {
    this.tabs = this.$children
  },

  methods: {
    selectTab(selectedTab){
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  }

});

Vue.component('tab', {
  template: `
    <div v-show="isActive"><slot></slot></div>
  `,

  props: {
    name: {
      required: true
    },
    selected: {
      default: false
    }
  },

  data() {
    return {
      isActive: false
    };
  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },

  mounted() {
    this.isActive = this.selected;
  }
});

Vue.component('camera', {
  template: `
  <div class="camera">
  	<h2 class="camera-name">{{ name }}</h2>
    <div class="camera-rating">{{ rating }}</div>
  </div>
  `,

  props: {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },
  }
});

let a = new Vue({
  el: '#root',
});

let b = new Vue({
  el: '#root2',
});

let c = new Vue({
  el: '#root3',

  data: {
    showModal: false,
  }
});

let d = new Vue({
  el: '#root4',
});

let e = new Vue({
  el: '#root5',
});
