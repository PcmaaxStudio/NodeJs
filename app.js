
let https = require('https')

const options = {
	hostname: 'api.github.com',
	port: 443,
	path: '/users/pcmaaxstudio',
	method: 'GET',
	headers: {
		'user-agent': 'nodejs'
	}
}

let request = https.request(options, (response) => {
	let body = ''
	response.on('data', (data) => {
		body = body + data
	})
	response.on('end', () => {
		console.log(body)
	})

})

request.end()

request.on('error', (e) => {
	console.error(e)
})
