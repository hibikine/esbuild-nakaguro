// this is ok
const a = { "・": "foo" };
console.log(a);

// this causes an invalid character error
const b = { "a・": 'foo' };
console.log(b);
