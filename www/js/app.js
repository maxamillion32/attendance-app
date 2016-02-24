angular

.module('attendance-app', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html'
        })

            .state('app.event-list', {
                url: '/event-list',
                views: {
                    'menu-content': {
                        templateUrl: 'templates/event-list.html',
                        controller: 'eventlistCtrl'
                    }
                }
            })

            .state('app.view-me', {
                url: '/view-me',
                views: {
                    'menu-content': {
                        templateUrl: 'templates/view-me.html',
                        controller: 'viewmeCtrl'
                    }
                }
            })

            .state('app.opening-attendance', {
                url: '/opening-attendance',
                views: {
                    'menu-content': {
                        templateUrl: 'templates/opening-attendance.html'
                    }
                }
            })

            .state('app.closing-attendance', {
                url: '/closing-attendance',
                views: {
                    'menu-content': {
                        templateUrl: 'templates/closing-attendance.html'
                    }
                }
            })

            .state('app.event-feedback', {
                url: '/event-feedback',
                views: {
                    'menu-content': {
                        templateUrl: 'templates/event-feedback.html'
                    }
                }
            })

            .state('app.announcement', {
                url: '/announcement',
                views: {
                    'menu-content': {
                        templateUrl: 'templates/announcement.html'
                    }
                }
            })

            .state('app.emergency-contact', {
                url: '/emergency-contact',
                views: {
                    'menu-content': {
                        templateUrl: 'templates/emergency-contact.html'
                    }
                }
            })

            .state('app.opening-closing', {
                url: '/opening-closing',
                views: {
                    'menu-content': {
                        templateUrl: 'templates/opening-closing.html'
                    }
                }
            })

            .state('app.event-management', {
                url: '/event-management',
                views: {
                    'menu-content': {
                        templateUrl: 'templates/event-management.html'
                    }
                }
            })

        .state('login', {
            url: '/login',
            templateUrl: 'templates/login-page.html',
            controller: 'loginCtrl'
          
        })

        .state('first-time-user', {
            url: '/first-time-user',
            templateUrl: 'templates/first-time-user.html',
            controller: 'registerCtrl'
          
        })


})

.run(function ($ionicPlatform)  {
    $ionicPlatform.ready(function ()    {
        if (window.cordova && window.cordova.plugins.Keyboard)  {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar)   {
            StatusBar.styleDefault();
        }
    });

    //declare a function whenever a user is change any routes/state of url

});

