
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
		// console.log(body)
		//console.log(typeof body)
		//data masih dalam bentung string

		//convert STRING KE json (Javascript Object)
		let profile = JSON.parse(body)
		//console.log(profile.avatar_url + 'owns' + profile.public_repos + 'repo(s)')
		console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} followers(s)`)
	})
})

request.end()

request.on('error', (e) => {
	console.error(e)
})
