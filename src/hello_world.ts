/**
 * hello_world.ts
 */

export const helloWorld = () => {
  const div = document.getElementById('root');
  const text = document.createTextNode('Hello World with TypeScript');
  div.appendChild(text);
};
