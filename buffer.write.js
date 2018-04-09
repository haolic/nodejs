const buf = Buffer.alloc(256);
len = buf.write('www.baidu.com');

console.log("写入的字节数:" + len);