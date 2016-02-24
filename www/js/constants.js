angular

.module('attendance-app')

.constant('Auth-Event', {
	authorized: false
})

.constant('Role', {
	admin: 'admin-role',
	student: 'student-role'
})

.constant('Api_Endpoint', {
	url: 'http://localhost:3000/mobileapi'
});