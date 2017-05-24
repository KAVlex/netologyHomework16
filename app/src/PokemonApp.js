var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'ngResource', 'restangular', 'ui.bootstrap', 'ngMaterial']);

angular.
module('PokemonApp')

.config(['$routeProvider', 'RestangularProvider',
    function config($routeProvider, RestangularProvider) {

        $routeProvider.
        when('/pokemons', {
            template: '<pokemon-list></pokemon-list>'
        }).
        when('/pokemons/:pokemonId', {
            template: '<pokemon-detail></pokemon-detail>'
        }).
        when('/edit/:pokemonId', {
            templateUrl: 'src/EditPokemon/EditPokemon.html',
            controller: 'EditPokemonCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });

        RestangularProvider.setBaseUrl('https://api.backendless.com/v1/data/');

    }
])

.config(['$httpProvider', function($httpProvider) {

    $httpProvider.defaults.headers.common = {
        "application-id": "B9CE46A9-7E97-DFA1-FF39-3AFE25BBEE00",
        "secret-key": "29C0795C-7BC9-58A1-FF8F-1620D9A62C00"
    };

}]);
