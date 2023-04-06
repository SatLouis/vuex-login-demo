import {delay} from '../utils';

export default async function loginOut() {
  await delay();
  localStorage.removeItem('user');
}
