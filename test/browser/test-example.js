suite('example', function () {

  setup(function (done) {
    this.timeout(10000);
    // phantomjs seems to keep session data between runs,
    // so clear before running tests
    localStorage.clear();
    hoodie.account.signOut().done(function () {
      hoodie.account.signUp('anontest', 'password')
        .fail(function (err) {
          assert.ok(false, err.message);
        })
        .done(function() {
          done();
        });
    });
  });

  test('publish data', function (done) {
    this.timeout(5000);
    hoodie.store.add('foo', {a:1})
      .done(function(obj) {
        hoodie.publish(obj)
          .done(function() {
            assert.ok(true); // we reached this point!
            done();
          })
          .fail(function(err) {
            console.log('err', err);
            assert.ok(false, err.message);
          });
      });
  });
});
