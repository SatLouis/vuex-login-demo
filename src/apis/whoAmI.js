import {delay} from '../utils';

export default async function whoAmi() {
  await delay();
  try {
    return JSON.parse(localStorage.getItem('user'));
  } catch (error) {}
}
