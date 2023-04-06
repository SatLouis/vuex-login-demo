<script setup>
import {computed} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

const stroe = useStore();
const router = useRouter();

const userInfo = computed(() => stroe.state.user.userInfo);
const loading = computed(() => stroe.state.user.loading);

const handleLoginOut = async () => {
  await stroe.dispatch('user/loginOutApi');
  router.push('/login');
};
</script>

<template>
  <div class="user-name">
    <span v-if="loading">loading...</span>
    <template v-else>
      <template v-if="userInfo.loginId">
        <router-link to="/user">{{ userInfo.name }}</router-link>
        <a href="" @click.prevent="handleLoginOut()">退出</a>
      </template>
      <router-link v-else to="/login" exact-path>Login</router-link>
    </template>
  </div>
</template>

<style scoped>
.user-name {
  display: inline-block;
}
.user-name a,
.user-name span {
  margin-right: 15px;
}
</style>
