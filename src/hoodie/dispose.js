/* exported hoodieDispose */

// hoodie.dispose
// ================

function hoodieDispose (hoodie) {

  // if a hoodie instance is not needed anymore, it can
  // be disposed using this method. A `dispose` event
  // gets triggered that the modules react on.
  function dispose() {
    hoodie.trigger('dispose');
  }

  //
  // Public API
  //
  hoodie.dispose = dispose;
}
