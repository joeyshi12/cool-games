# Cool Games

A collection of p5.js web games hosted at <a href="https://coolgames.joeyshi.tech">coolgames.joeyshi.tech</a>.

<html>
<body>
  <p>This example demonstrates how to assign an "onclick" event to a p element.</p>

  <button id="demo" onclick="(() => {
    const x = document.getElementById('element');
    x.innerHTML = 1;
  })()">
    Click me.
  </button>
  <p id="element">0</p>
</body>
</html>
