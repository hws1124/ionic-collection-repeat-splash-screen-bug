angular.module('starter.controllers', ['ionic'])

	.controller('MyCtrl', function($scope) {

		$scope.noMoreItemsAvailable = false;

		$scope.loadMore = function() {
			for (var i = 1; i < 5; i++) {
				var itemDate = moment().add(i, 'days');

				var item = {
					description: 'Description for item:' + $scope.items.length,
					date: itemDate.toDate()
				};
				$scope.items.push(item);
			}

			if ( $scope.items.length == 99 ) {
				$scope.noMoreItemsAvailable = true;
			}
			$scope.$broadcast('scroll.infiniteScrollComplete');
		};

		$scope.items = [];

	});









/*




(function() {

	angular.module('starter')
		   .controller('ItemController', ItemController)

	function ItemController() {
		$scope.noMoreItemsAvailable = false;

		$scope.loadMore = function() {

			for (var i = 1; i < 20; i++) {
				var itemDate = moment().add(i, 'days');

				var item = {
					description: 'Description for item ' + i,
					date: itemDate.toDate()
				};
				items.push(item);
			}

			if ( $scope.items.length == 99 ) {
				$scope.noMoreItemsAvailable = true;
			}
			$scope.$broadcast('scroll.infiniteScrollComplete');
		};

		$scope.items = [];

////////////////////////

		var vm = this,
			items = [];



		for (var i = 1; i < 1000; i++) {
			var itemDate = moment().add(i, 'days');

			var item = {
				description: 'Description for item ' + i,
				date: itemDate.toDate()
			};
			items.push(item);
		}

		vm.items = items;
		return vm;

	}

})();
*/
