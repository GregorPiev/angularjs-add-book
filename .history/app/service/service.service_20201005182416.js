'use strict'
angular.module('service')
    .factory('GetGenre', function ($resource) {
        var url = 'https://angularjs-addbook.firebaseio.com/genres.json';
        return $resource(url, {},
            {
                get: {
                    method: "GET",
                    isArray: true,
                    cache: false
                },
                update: {
                    method: "PUT",
                    isArray: true,
                    cache: false
                }
            })
    })
    .factory('EditGenre', function ($resource) {
        var url = 'https://angularjs-addbook.firebaseio.com/genres/:id.json';
        return $resource(url, { id: '@idGenre' },
            {
                get: {
                    method: "GET",
                    isArray: false,
                    cache: false

                },
                update: {
                    method: "PATCH",
                    params: { id: "@idGenre" }
                },
                delete: {
                    method: 'DELETE'
                }
            });
    })
    .factory('GetSubGenre', function ($resource) {
        var url = 'https://angularjs-addbook.firebaseio.com/genres/:id.json';
        return $resource(url);

    })
    .factory('AddSubgenre', function ($resource) {
        var url = 'https://angularjs-addbook.firebaseio.com/genres/:id.json';
        return $resource(url, { id: '@idGenre' },
            {
                get: {
                    method: "GET",
                    isArray: false,
                    cache: false

                },
                update: {
                    method: "PATCH",
                    params: { id: "@idGenre" }
                }
            });

    })
    .factory('AddBook', function ($resource) {
        var url = 'https://angularjs-addbook.firebaseio.com/genres/:id.json';
        return $resource(url, { id: '@idGenre' },
            {
                get: {
                    method: "GET",
                    isArray: false,
                    cache: false

                },
                update: {
                    method: "PATCH",
                    params: { id: "@idGenre" }
                },
                delete: {
                    method: 'DELETE',
                    params: { id: "@idGenre" },
                    isArray: true
                }
            });

    })
