import {delay} from '../utils';

export default async function login(loginId, loginPwd) {
  await delay();
  if (loginId === 'admin' && loginPwd === '123123') {
    const user = {
      loginId,
      name: '管理员',
    };

    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }
}
