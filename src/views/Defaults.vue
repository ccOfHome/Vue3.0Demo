<template>
  <div class="default container">
      <div class="row">
          <button class="col btn btn-light rounded border-0" @click="toPage('About')">
              <my-icon id="icon-shu" color="text-danger" size="45"></my-icon>
              <h3>About Me</h3>
          </button>
          <button class="col btn btn-light rounded border-0" @click="toPage('Resume')">
              <my-icon id="icon-jianli" color="text-warning" size="45"></my-icon>
              <h3>Resume</h3>
          </button>
      </div>
      <div class="row">
          <button class="col btn btn-light rounded border-0" @click="toPage('Prefile')">
              <my-icon id="icon-gongwenbao" color="text-success" size="45"></my-icon>
              <h3>Prefile</h3>
          </button>
      </div>
  </div>
</template>

<style scoped>
.row {
    height: 30vh;
}
.col {
    color: white;
    margin: 10px 20px;
    background-color: rgba(255,255,255,0.1);
}
</style>

<script>
import { useRouter } from 'vue-router';
const routerJump = () => {
    const router = useRouter();
    const toPage = path => router.push(path);
    return {
        toPage
    }
}
export default {
    /* methods: {
        toPage(path) {
            this.$router.push(path);
        }
    } */
    setup() {
        const { toPage } = routerJump();
        return {
            toPage
        };
    }
}
</script>

