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
  hoodie.publish = function (type, obj) {
    return hoodie.store.updateOrAdd(type, null, obj)
    .then(function(obj) {
      return hoodie.remote.push([obj])
        .then(function(){
          return obj.type + '/' + obj.id
        });
    })
    .then(function(id) {
      hoodie.task.start('publishdata', {objectId: id})
    });
  };

});

