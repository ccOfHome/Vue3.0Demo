<template>
  <div class="home">
    <!-- <button @click="changeStatus">click</button>

    <div class='animate__animated animate__bounce' v-if="status">111111</div> -->

    <!-- <div class="container">
      <div class="row">
        <div class="col-sm">三分之一</div>
        <div class="col-sm">三分之一</div>
        <div class="col-sm">三分之一</div>
      </div>
    </div> -->

    <!-- <my-icon id="" color="text-primary" :size="50"></my-icon> --> <!--50 是数字-->
    <!-- <my-icon id="" color="text-primary" size="50"></my-icon> --> <!--50 是字符串-->

    <div class="wrapper">
      <slide-bar icon-id="icon-wangluo" icon-color="text-warning" icon-size="45">Welcome to here</slide-bar>
      <div class="w-100">
        <content-head>
          <template #title>{{ title }}</template>
          <template #des>{{ des }}</template>
          <template #calc>您已被赞{{praise}}次</template>
        </content-head>
        <transition enter-active-class="animate__animated animate__zoomIn">
          <router-view></router-view>
        </transition>
      </div>
      <user-profile :src="src"/>
    </div>
  </div>
</template>

<style>
.home {
  background: url('../assets/img/bg.jpg') no-repeat center;
  height: 100vh;
  background-size: cover;
}

.wrapper {
  width: 95vw;
  height: 90vh;
  background-color: rgb(44, 48, 80);
  position: absolute;
  left: calc(50% - 95vw / 2);
  top: calc(50% - 90vh / 2);
  display: flex;
  justify-content: space-between;
}

.w-100{
  width: 100%;
  overflow-y: scroll;
}
</style>

<script>
/* import { ref } from 'vue'; */
import userProfile from '@/components/user-profile/user-profile.vue';
import slideBar from '@/components/slide-bar/slide-bar.vue';
import contentHead from '@/components/content-head/content-head.vue';
// eslint-disable-next-line no-unused-vars
import { watch, ref, watchEffect, computed } from 'vue';
// eslint-disable-next-line no-unused-vars
import { useRouter } from 'vue-router';
/* import { praise } from '@/lib/praise-lib.js'; */
import { useStore } from 'vuex';
import { pathToSign } from "@/lib/router-lib.js";

/* const status = ref(false);
const changeStatus = () => (status.value = !status.value); */
export default {
  name: 'Home',
  components: {
    userProfile,
    slideBar,
    contentHead
  },
  setup() {
    // const router = useRouter();
    // const title = ref("I'M");
    // const des = ref("");
    /* watch(router.currentRoute,({ path, name }) => {
      const condition = path ==='/' ? "I'M" : "";
      title.value = condition;

      const condition1 = path ==='/' ? "Mark" : name;
      des.value = condition1;
    },{
      immediate: true
    }) */

    /* watchEffect(() => {
      const { path, name } = router.currentRoute.value;
      const condition = path ==='/' ? "I'M" : "";
      title.value = condition;

      const condition1 = path ==='/' ? "Mark" : name;
      des.value = condition1;
    }) */

    /* const router = useRouter();
    const title = computed(() => {
      const { path } = router.currentRoute.value;
      const condition = path ==='/' ? "I'M" : "";
      return condition;
    });
    const des = computed(() => {
      const { path, name } = router.currentRoute.value;
      const condition1 = path ==='/' ? "Mark" : name;
      return condition1;
    }); */

    const { title, des } = pathToSign();
    const store = useStore();
    const praise = computed(() => store.state.praiseMod.praise);

    return {
      /* status,
      changeStatus, */
      src: require('../assets/img/user.jpg'),
      title,
      des,
      praise
    };
  },
  // Vue2
  /* watch: {
    $route(newVal) {
      console.log(newVal);
    }
  } */
  /* data() {
    return {
      status: false
    }
  },
  methods: {
    changeStatus () {
      this.status = !this.status;
    }
  } */

}
</script>
