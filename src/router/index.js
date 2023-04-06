import {createRouter, createWebHashHistory} from 'vue-router';
import routes from './routes';
import registerHooks from './hooks';

const router = registerHooks(
  createRouter({
    history: createWebHashHistory(),
    routes,
    strict: true,
    sensitive: true,
  })
);

window.router = router;
export default router;
