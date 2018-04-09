const buf1 = Buffer.alloc(10);

const buf2 = Buffer.alloc(10, 1);

const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1, 2, 3]);

const buf5 = Buffer.from('tést');

const buf6 = Buffer.from('tést', 'latin1');

console.log(buf1);
console.log(buf1.toString('ascii'));
console.log(buf2);
console.log(buf2.toString());
console.log(buf3);
console.log(buf3.toString());
console.log(buf4);
console.log(buf4.toString());
console.log(buf5);
console.log(buf5.toString());
console.log(buf6);
console.log(buf6.toString('latin1'));