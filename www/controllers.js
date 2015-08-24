angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  //alert('PlayListController1');
})

.controller('PlaylistsCtrl', function($scope) {
  //alert('PlayListController2');
  $scope.playlists = [{
    title: 'Featured',
    id: 1
  }, {
    title: 'Bestsellers',
    id: 2
  }, {
    title: 'Current Affairs',
    id: 3
  }, {
    title: 'Sports',
    id: 4
  }, {
    title: 'Music',
    id: 5
  }, {
    title: 'Trending',
    id: 6
  }, {
    title: 'Animals',
    id: 7
  }, {
    title: 'Seasonal',
    id: 8
  }];

  function setName(title) {
  $scope.title = this.title;
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  alert('PlayListController3,' + $stateParams.playlistId);

  function name() {
    return 'GO';
  }
  $scope.name = $stateParams.playlistId;
  //$scope.playlist=$state.playlistId;
});