angular

.module('attendance-app')

.service('AuthService', function ($http, Api_Endpoint)	{

	var data = {};

	var login = function (userData)	{
		$http.post(Api_Endpoint.url + '/login', userData)
		.then(function (respond)	{
			if (respond.data.success == true)	{
				return true;
			}	else	{
				data.error = 'Wrong password or matric number.';
				data.success = false;

				return false;
			}
		}, function (error)	{
			data.error = 'Server is currently not available.';
			data.success = false;

			return false;
		});
	};

	return {
    	login: login
  	};

});
