angular
  .module('ngNumber', [])
  .directive('ngNumber', ngNumber)

function ngNumber () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModelCtrl) {
      function fromUser (data) {
        if (isNaN(data)) {
          var resetValue = ngModelCtrl.$modelValue
          ngModelCtrl.$setViewValue(resetValue)
          ngModelCtrl.$render()
          return resetValue
        }
        return data
      }
      ngModelCtrl.$parsers.push(fromUser)
    }
  }
}
