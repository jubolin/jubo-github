var github = new Jubo.connect();

var handle = Meteor.setInterval(function() {
  github.whoami("KLjiumbR3ZkwcrkJn", '86227', function(error) {
    if(error) {
    } else {
      Meteor.clearInterval(handle);

      github.subscribe("starRepository", function() {
        // send http request
        console.log('star respository');
      });
      
      github.subscribe("addUserAsCollaborator", function() {
        console.log('addd user as collaborator');
      });
      
      github.subscribe("unstarRepository", function() {
        console.log('unstar respository');
      });
    }
  });
},500);


