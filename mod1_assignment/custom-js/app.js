(function() {
  "use strict";
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.items="";
    $scope.lunchChkMsg='';
    $scope.elemHighlighterClass='';
    $scope.msgClass='';
    $scope.showLunchMsg = function(){
      var items_count = getItemsCount($scope.items);
      if(items_count==0){
        $scope.elemHighlighterClass='highlight-error';
        $scope.msgClass='error-msg';
      }else{
        $scope.elemHighlighterClass='';
        $scope.msgClass='success-msg';
      }
      
      $scope.lunchChkMsg = getLunchChkMsg(items_count);
    }
  }

  function getLunchChkMsg(items_count){
    var msg = 'Please enter data first';
    if (items_count>0 && items_count<=3)
        msg = 'Enjoy!';
    else if (items_count > 3)
        msg = 'Too Much!';

    return msg;
  }

  function getItemsCount(items_list){ // takes comma separated list of items as argument
      var items_count = 0;
      if(items_list!=''){
        var items = items_list.split(',');

        for(var i=0, itm=''; i<items.length; i++) {
          itm = items[i].replace(/^\s*/,'').replace(/\s*$/,'');
          if(itm!='')
            items_count += 1;
        }
      }
      return items_count;
  }



})();
