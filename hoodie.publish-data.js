/**
 * Hoodie plugin publish-data
 * Handle publishing of data into a publically readable database
 */

/* global Hoodie */

// // dreamcode:
// hoodie.publish(type, obj)
//   .done()
//   .fail()

Hoodie.extend(function (hoodie) {
  'use strict';

  // extend the hoodie.js API
  hoodie.publish = function (obj) {

    return hoodie.remote.push([obj])
      .done(function() {
        var id = obj.type + '/' + obj.id
        return hoodie.task.start('publishdata', {objectId: id})
      })
      .fail(function(err) {
        console.log('pushing failed!', err);
      });
  };

});

