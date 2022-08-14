const {readFileSync,writeFileSync}= require('fs')
const first= readFileSync('./subfolder/sample.txt','utf-8')
console.log(first)