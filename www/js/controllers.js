angular

.module('attendance-app')

.controller('loginCtrl', function ($scope, $ionicPopup, $state, $http, Api_Endpoint)	{

	$scope.userData = {};

	console.log($scope.userData.matric_no);

	$scope.login = function ()	{

		if ($scope.userData.matric_no == null || $scope.userData.password == null)	{
			var alertPopup = $ionicPopup.alert({
        			title: 'Login Failed',
        			template: 'Please fill in both blanks.'
      		});

      		return;
      	}

      	if ($scope.userData.matric_no != parseInt($scope.userData.matric_no, 10))	{
      		var alertPopup = $ionicPopup.alert({
        			title: 'Login Failed',
        			template: 'Only numbers are allowed as matric number.'
      		});

      		return;
      	}

		$http.post(Api_Endpoint.url + '/login', $scope.userData)
		
		.then(function (respond)	{
			if (respond.data.success == true)	{
				$state.go('app.event-list');
			}	else	{
				var alertPopup = $ionicPopup.alert({
        			title: 'Login Failed',
        			template: 'Wrong password or username entered!'
      			});
			}
		},	function (error)	{
			var alertPopup = $ionicPopup.alert({
        			title: 'Login Failed',
        			template: 'Server is currently not responding.'
      		});
		});

	};

})

.controller('registerCtrl', function ($scope, $ionicPopup, $state, $http, Api_Endpoint)	{

	$scope.userData = {};

	$scope.register = function ()	{

		if ($scope.userData.matric_no == null || $scope.userData.password == null || $scope.userData.repeat == null)	{
			var alertPopup = $ionicPopup.alert({
        			title: 'Register Failed',
        			template: 'Please fill in all blanks.'
      		});

      		return;
      	}

      	if ($scope.userData.password.length < 1)	{
      		var alertPopup = $ionicPopup.alert({
        			title: 'Register Failed',
        			template: 'Password must be longer than 8 characters.'
      		});

      		return;
      	}

      	if ($scope.userData.password != $scope.userData.repeat)	{
      		var alertPopup = $ionicPopup.alert({
        			title: 'Register Failed',
        			template: 'Repeated password does not match with password.'
      		});

      		return;
      	}


      	if ($scope.userData.matric_no != parseInt($scope.userData.matric_no, 10))	{
      		var alertPopup = $ionicPopup.alert({
        			title: 'Register Failed',
        			template: 'Only numbers are allowed as matric number.'
      		});

      		return;
      	}

		$http.post(Api_Endpoint.url + '/register', $scope.userData)
		
		.then(function (respond)	{
			if (respond.data.success == true)	{
				$state.go('app.view-me');
			}
		},	function (error)	{
			var alertPopup = $ionicPopup.alert({
        			title: 'Register Failed',
        			template: 'Server is currently not responding.'
      		});
		});

	};
})

.controller('viewmeCtrl', function ($scope, $ionicPopup, $http, Api_Endpoint)	{

	$scope.userData = {
		matric_no: 35282,
		session_key: '123qwe'
	};

	$scope.meritsData = {};
	$scope.totalMerit = 0;
	$scope.totalEvent = 0;

	$scope.$on('$ionicView.afterEnter', function ()	{

  		$http.post(Api_Endpoint.url + '/view-me', $scope.userData)
		.then(function (respond)	{
			if (respond.data.success == true)	{
				$scope.meritsData = JSON.parse(JSON.stringify(respond.data.result));
			}	
		},	function (error)	{
			var alertPopup = $ionicPopup.alert({
	    			title: 'Authentication Failed',
	    			template: 'Server is currently not responding.'
	  		});
		});

		angular.forEach($scope.meritsData, function (value,index)	{
                $scope.totalMerit += value.merit_point;
                $scope.totalEvent++;
        });

	});

})

.controller('eventlistCtrl', function ($scope, $ionicPopup, $http, Api_Endpoint)	{

	$scope.userData = {
		matric_no: 35282,
		session_key: '123qwe'
	};

	$scope.eventsData = {};

	$scope.$on('$ionicView.afterEnter', function ()	{

  		$http.post(Api_Endpoint.url + '/view-me', $scope.userData)
		.then(function (respond)	{
			if (respond.data.success == true)	{
				$scope.eventsData = JSON.parse(JSON.stringify(respond.data.result));
				console.log($scope.eventsData);
			}	
		},	function (error)	{
			var alertPopup = $ionicPopup.alert({
	    			title: 'Authentication Failed',
	    			template: 'Server is currently not responding.'
	  		});
		});
	});

});