<script setup>
import {ref, computed} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';
import login from '@/apis/login';

const loginId = ref('');
const loginPwd = ref('');

const router = useRouter();
const store = useStore();

const loading = computed(() => store.state.user.loading);

const loginClick = async () => {
  if (!loginId.value && !loginPwd.value) {
    return alert('请输入账号密码！');
  }

  const res = await store.dispatch('user/loginApi', {
    loginId: loginId.value,
    loginPwd: loginPwd.value,
  });

  if (!res) {
    return alert('账号密码不存在');
  }
  store.commit('user/setUserInfo', res);
  const {to} = router.currentRoute.value.query;
  router.push(to ? decodeURIComponent(to) : '/home');
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-item">
      <label>账号：</label>
      <input type="text" v-model="loginId" />
    </div>
    <div class="form-item">
      <label>密码：</label>
      <input type="password" autocomplete="new-password" v-model="loginPwd" />
    </div>
    <div class="form-item">
      <label></label>
      <button @click="loginClick" :disabled="loading">
        {{ loading ? 'loading...' : '登录' }}
      </button>
    </div>
  </form>
</template>

<style scoped>
.form-item {
  margin: 1em auto;
  width: 300px;
  display: flex;
  align-items: center;
}
.form-item input {
  height: 26px;
  font-size: 14px;
  flex: 1 1 auto;
}
.form-item label {
  width: 70px;
}
.form-item button {
  flex: 1 1 auto;
  background: #50936c;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  height: 35px;
  font-size: 16px;
}
</style>
