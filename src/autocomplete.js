angular.module('mackstar.autocomplete', [])

.directive('autoCompleteOptions', function() {
    return {
        restrict:'EA',
        replace: true,
          template: '<ul class="dropdown-menu"><li ng-repeat="option in options"><a>{{}}</a></li></ul>'
    }
})

.directive('autoComplete', function($compile) {
  return {
    restrict:'EA',
    transclude:false,
    replace: false,
    link: function (scope, element) {
        var el = $compile( "<div auto-complete-options></div>" )( scope );
        element.parent().append(el);
        scope.$apply();
    }
  }
});