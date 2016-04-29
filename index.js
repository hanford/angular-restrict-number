module.exports = require('angular')
  .module('ngNumbersOnly', [])
  .directive('ngNumbersOnly', ngNumbersOnly)
  .name

function ngNumbersOnly () {
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
