'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
      templateUrl: "view1/view1.html",
      controller: "View1Controller"
  }


      otherwise({redirectTo: '/view1'})
  };
}]);

//{ date: '2015-02-27T23:51:52.662604+00:00',
//    from: [Object],
//    id: '273dc012-40bb-4189-911d-48ed34623eaa',
//    mentions: [],
//    message: '\'use strict\';\n\nangular.module(\'myApp.view1\', [\'ngRoute\'
//    .html\',\n    controller: \'View1Ctrl\'\n  });\n}])\n\n.controller(\'View1Ctrl\'
//    function(data){\n\n        $scope.items =  data;\n\n        console.log($scope.i
//        type: 'message' },
//    { date: '2015-02-28T00:46:33.757932+00:00',
//        from: [Object],
//        id: '76eda64c-d239-49c0-af74-c1dce1b7fe87',
//        mentions: [],
//        message: 'hey guys, i don\'t exactly know if you guys could use this righ
//        oofddffdnphfgcellkdfbfbjeloo',
//        type: 'message' },
//    { date: '2015-02-28T00:46:43.517808+00:00',
//        from: [Object],
//        id: 'd720f826-05c9-44c9-bbd3-638466b0da21',
//        mentions: [],
//        message: 'this or',
//        type: 'message' },
