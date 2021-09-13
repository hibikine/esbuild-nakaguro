# ESBuild Nakaguro

ESBuild converts object keys that contain katakana middle dot (・) into incorrect syntax when minifying them.

## Example

```js
// This is ok
const a = { '・': 'foo' };
console.log(a)

// This causes an invalid character error
const b = { 'a・': 'foo' };
// SyntaxError: Invalid or unexpected token
console.log(b)
```

## Environment

* Node.js 14.17.5
* npm 6.14.14
* ESBuild 0.12.27
* Ubuntu 20.04 (Windows Subsystem for Linux)

## How to reproduce

```
git clone https://github.com/hibikine/esbuild-nakaguro
cd esbuild-nakaguro
npm ci
npm run start
```
