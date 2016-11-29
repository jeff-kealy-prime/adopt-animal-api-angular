app.controller('ReptileController', ['$http', function($http){
  console.log("reptile controller running");
  var self = this;
  var key = '77675ee482874f499ddd394279f10552';
  var baseURL = 'http://api.petfinder.com/';

  self.animal = { }

  self.getRandomPet = function(){
    var query = 'http://api.petfinder.com/'; // baseURL for API
    query += 'pet.getRandom'; // selecting the method we would like to return
    query += '?key=' + key; // Giving petfinder our key
    query += '&animal=reptile';
    query += '&format=json'; // Telling petfinder we want our response to be JSON
    query += '&output=basic'; // Telling petfinder what data we want (more than just id)
    var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

    console.log('Request:', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.animal = response.data.petfinder.pet;
      console.log(self.animal);
    });

  }

  self.getRandomPet();

  self.message = "Welcome!"

}]);
