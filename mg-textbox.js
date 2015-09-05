angular.module('ngDirective',[])

.directive('configTextBox', function() {
  return {
    restrict: 'E',
    template: '<input type="text"/>',
    link: function(scope, element, attr) {
      element.bind('keydown', function(which){
        console.log(which);
      });
    }
  }
});
