/**
 * Hoodie plugin publish-data
 * Handle publishing of data into a publically readable database
 */
var async = require('async');

module.exports = function (hoodie, callback) {
  console.log('publish-data loaded');
  var publishDatabase = 'plugin-publish-data';

  // wait for publish-data tasks
  hoodie.task.on('publishdata:add', function (db, task) {
    // trigger replication with docIds from current db to publish-data db
    console.log('task: ', task);
    var replication = {
      source: db,
      target: publishDatabase,
      doc_ids: [task.objectId]
    };
    console.log(replication);
    hoodie.request('POST', '/_replicate', {
      data: replication
    }, function (error) {
      if (error) {
        console.log('replication failed: %j. Reason: %s', replication, error);
        return;
      }
      // console.log('replication done:', result);
      // resolve task:
      hoodie.task.success(db, task);
    });
  });

  var DB = hoodie.database;

  async.series([
    async.apply(DB.add, publishDatabase),
    async.apply(DB(publishDatabase).grantPublicReadAccess),
    async.apply(DB(publishDatabase).revokePublicWriteAccess)
  // plugin initialization complete
  ], function (err) {
    console.log('publish-data done');
    callback(err);
  });
};
