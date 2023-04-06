<script setup>
import {watch} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';

const store = useStore();
const router = useRouter();

watch(
  () => store.state.user.userInfo.loginId,
  (newV) => {
    if (newV) {
      const {to} = router.currentRoute.value.query;
      router.replace({
        path: to ? decodeURIComponent(to) : '/home',
      });
    }
  }
);
</script>

<template>
  <h1>正在登录中...</h1>
</template>
