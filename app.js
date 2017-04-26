// Problem : kita kan menampilkan profile github sesorang
// solusi : menggunakan NoddeJs untuk connect ke GitHub untuk mendapatkan info dan print ke console

// TODO: Connect to GitHub API
let https = require('https')

https.get('https://api.github.com/user/yofri', (result) => {
	console.log('got responses: ', result.statusCode)
})
// TODO: Baca Data
// TODO: Parsing Data
// TODO: Print ke console
















// let menampilkan = function(param) {
// 	console.log('ini fungsi menampilkan ' + param)
// }

// let menampilkan2 = (param) => {
// 	console.log('ini fungsi menampilkan ' + param)
// }
// menampilkan('data')
// menampilkan2('data2')


