/**
 * Hoodie plugin publish-data
 * Handle publishing of data into a publically readable database
 */

module.exports = function (hoodie, callback) {

  // setup task handlers
  hoodie.task.on('hello:add', function (db, task) {
    task.msg = 'Hello, ' + task.name;
    hoodie.task.success(db, task);
  });

  // plugin initialization complete
  callback();

};
