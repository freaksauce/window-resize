/**
 * Resize function based from MDN
 * https://developer.mozilla.org/en-US/docs/Web/Events/resize
 */
const windowResize = (() => {
  let savedCallback = null;
  let running = false;

  // run the actual callback
  function runCallbacks() {
    savedCallback();
    running = false;
  }

  // fired on resize event
  function resize() {
    if (!running) {
      running = true;
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }
  }

  // adds callback to loop
  function addCallback(callback) {
    savedCallback = callback;
  }

  return {
    // public method to add additional callback
    add: callback => {
      window.addEventListener("resize", resize);
      addCallback(callback);
    },
    clear: () => {
      window.removeEventListener("resize", resize);
    }
  };
})();

export default windowResize;
