
<template>

<div>
  


<div id="text">
  <div>This is a little text typing effect.</div><br/>
  <div>This is a little text typing effect.</div><br/>
   <div>This is a little text typing effect.</div><br/>
  <div>This is a little text typing effect.</div><br/>
    <div>This is a little text typing effect.</div><br/>
  <div>This is a little text typing effect.</div><br/>
</div>

</div>
</template>

<script>
export default{
     data () {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  },

  mounted: function(){


var text = document.getElementById('text');

var typingDelay = 50;


displayText(text, typingDelay);



function displayText(target, delay, callback, nodes) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  if (index === 0) {
    nodes = [].slice.call(target.children);
    target.innerHTML = '';
  }
  var currentNode = nodes[index];
  var currentNodeText = currentNode.innerHTML;

  currentNode.innerHTML = '';
  target.appendChild(currentNode);

  if (currentNodeText) {
    var i = 0;
    var cars = currentNodeText.split('');
    var effect = setInterval(function () {
      currentNode.innerHTML += cars[i];
      i++;

      if (i === cars.length) {
        clearInterval(effect);

        if (index < nodes.length - 1) {
          displayText(target, delay, callback, nodes, ++index);
        } else {
          callback();
        }
      }
    }, delay);
  } else {
    if (index < nodes.length - 1) {
      displayText(target, delay, callback, nodes, ++index);
    } else {
      callback();
    }
  }
}
 
  }
 
  }
</script>


<style lang="scss">
$grey: #424242;
$white: #F5F5F5;
$darkgrey: darken($grey, 15%);
$darkwhite: darken($white, 15%);
$lightgrey: lighten($grey, 15%);

body {
  padding: 1em;
  background: $grey;
  color: $white;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 14px;
  line-height: 1.5em;
}

#text {
  
  padding: 1em;
  background: $darkgrey;
  border-radius: 0.2em;
}

code {
  background: $white;
  color: $darkgrey;
  padding: 0.1em;
}

.highlight {
  @extend code;
  
  background: yellow;
  color: red;
}

</style>