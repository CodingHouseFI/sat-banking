'use strict';

var app = angular.module('bankingApp');

app.controller('homeCtrl', function($q, $http) {
  console.log('homeCtrl');
});


app.controller('accountCtrl', function($scope, $state, transactions) {
  console.log('accountCtrl');
  console.log('transactions:', transactions);
  $scope.transactions = transactions;
});

app.controller('newTransactionCtrl', function($scope, $state) {
  console.log('newTransactionCtrl');
});
