import '../styles/main.scss';

// https://vitejs.dev/guide/env-and-mode.html#env-variables
if (import.meta.env.DEV) {
  console.log({
    BASE_URL: import.meta.env.BASE_URL,
    PROD: import.meta.env.PROD,
    DEV: import.meta.env.DEV,
  });
}

console.log('hello world!');
