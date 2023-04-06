import {computed} from 'vue';
import store from '@/store';

const userInfo = computed(() => store.state.user.userInfo);
const loading = computed(() => store.state.user.loading);

export default function registerHooks(router) {
  router.beforeEach((to, from, next) => {
    if (to.meta.auth && !userInfo.value.loginId) {
      if (loading.value) {
        next({
          path: '/loading',
          query: {to: encodeURIComponent(to.path)},
        });
      } else
        next({
          path: '/login',
          query: {to: encodeURIComponent(to.path)},
        });
    } else next();
  });

  return router;
}
