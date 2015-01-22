suite('example', function () {

  setup(function (done) {
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
    this.timeout(10000);
    var obj = {a:1};
    var task = hoodie.publish('cart', obj);
    task.fail(function (err) {
      console.log('err', err);
      assert.ok(false, err.message);
    });
    task.done(function () {
      assert.ok(true); // we reached this point!
      done();
    });
  });

});
