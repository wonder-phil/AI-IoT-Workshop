AFRAME.registerComponent('s-comp', {

        init: function() {
          console.log("HELLO");
        },
        tick: function() {
          console.log("click");
        },
        remove: function() {
          console.log("Goodnight moon!");
        }
 });