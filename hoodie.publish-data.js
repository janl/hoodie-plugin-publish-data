/**
 * Hoodie plugin publish-data
 * Handle publishing of data into a publically readable database
 */

/* global Hoodie */

Hoodie.extend(function (hoodie) {
  'use strict';

  // extend the hoodie.js API
  hoodie.hello = function (name) {
    return hoodie.task.start('hello', {
      name: name
    });
  };

});
