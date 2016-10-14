/**
 * Angular JS One Day timeline
 *
 * (c) Ilia Glushkov
 * http://github.com/eliasmamo/angularjs-horizontal-timeline
 *
 * Version: v0.0.1
 *
 * Licensed under the MIT license
 */

angular.module('angular-one-day-timeline', [])

.directive('oneDayTimeline', function() {
	return {
		restrict: 'AE',
		controller: ['$scope', function ($scope) {

			$scope.ticks = [];
			for (var i = 1; i < 24; i++) {
				$scope.ticks.push(i > 9 ? i: "0" +i.toString());
			}

			$scope.calculateTicksLeft = function (value) {
				return parseInt(value)*4.166;
			};

			$scope.calculatePeriodStyles = function () {
				if ($scope.start && $scope.end) {

					calculatePercentFromMinutes = function (minutes) {
						return (minutes * 10) / 144;
					};

					calculatePercentFromTimeString = function (time) {
						return 100/24 * (parseInt(time.split(':')[0]) + (10/6 * parseInt(time.split(':')[1]))/100);
					};

					detectValueAndCalculatePercent = function (val) {
						if (/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(val) ) {
							return calculatePercentFromTimeString(val);
						}
						return calculatePercentFromMinutes(val);
					};

					var left  = detectValueAndCalculatePercent($scope.start);
					var width = detectValueAndCalculatePercent($scope.end) - left;

					return 'left:' + left + '%; width:' + width + '%';
				}
				return '';
			};
		}],
		scope: {
			start: '@',
			end: '@'
		},
		template: '<div class="cont">'
				+ 	'<div class="hour-ticks-container with-ticks">'
				+		'<div class="timeline-borders"></div>'
				+		'<div class="time-period" style="{{calculatePeriodStyles()}}"></div>'
				+		'<div ng-repeat="tick in ticks" class="hour-tick" style="left:{{ calculateTicksLeft(tick)}}%">'
				+			'<span class="tick-label">'
				+				'<i></i>{{tick}}'
				+			'</span>'
				+		'</div>'
				+	'</div>'
				+ '</div>'
	};
});
