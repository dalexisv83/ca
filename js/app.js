var flows_app = angular.module('ProcessFlowsApp', []);

flows_app.factory('Environment',function(){
    'use strict';
    return{
        config:{
          is_test:false, //by default set to false
          identifier:'' //by default set to empty string
        }
    };
}).directive('animateMe', function() {
   'use strict';
   return function(scope, element, attrs) {
      scope.$watch(attrs.animateMe, function() {
          element.hide().fadeIn(500); 
      });
   };
}).service('appService',function(){
   'use strict';
   
   this.dataSource = {};
   
   //private function for getting a parameter by name from the url
   var getParameterByName = function(name,environment) {
      if (environment.config.is_test) {
         return environment.config.identifier;
      }
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
   };
   
   this.setData = function(id, datasource){
     this.dataSource = datasource[id.toLowerCase()];
   };
   
   this.getData = function(){
     return this.dataSource;
   };
   
   /**
    * Retrieve a specific step by UID
    */
   this.getStepByUid = function(uid){
      /*jslint unparam: true*/
      var step = null;	
      angular.forEach(this.dataSource.data, function(data, index){	   
         if(uid === parseInt(data.uid,10)){	     
           step = data;
           return false;
         }
      });
      return step;
   };
   
   /**
   * Remove steps newer than the indexed step
   *
   */
   this.removeOldSteps = function(index,passed_steps){
      var i;
      for(i = 0; i <= index; i = i + 1){	  
       passed_steps.shift();
      }
      return passed_steps;
   };
   
   this.getPageId = function(identifier,environment){
      if (identifier.length > 0){
         return identifier.val();	   
      }
      return getParameterByName('id',environment);
   };
   
   this.filterHtml = function(link){     
      link.removeAttr("href");
   };
   
   this.scrollToTop = function(el){
     el.scrollTop(0);
   };  
   
});
