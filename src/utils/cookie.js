export default {
  get(key) {
    let res = null;
    const name = `${key}=`;
    const cookies = document.cookie.split('; ');

    cookies.forEach(cookie => {
      if (!cookie.includes(name)) return;
      res = cookie.substring(name.length);
    });

    return res;
  },
  set(key, value, expireDays) {
    const date = new Date();
    date.addDays(expireDays);
    document.cookie = `${key}=${value}; path=/; expires=${date.toUTCString()};`;
  },
  remove(key) {
    document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  },
  removeAll() {
    const cookies = document.cookie.split(';');

    cookies.forEach(cookie => {
      if (!cookie) return;

      const index = cookie.indexOf('=');
      const key = index > -1 ? cookie.substring(0, index) : cookie;
      this.remove(key);
    });
  },
};
