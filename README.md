[![Build Status](https://travis-ci.org/janl/hoodie-plugin-publish-data.svg)](https://travis-ci.org/janl/hoodie-plugin-publish-data)
[![Dependency Status](https://david-dm.org/janl/hoodie-plugin-publish-data.svg)](https://david-dm.org/janl/hoodie-plugin-publish-data)
[![devDependency Status](https://david-dm.org/janl/hoodie-plugin-publish-data/dev-status.svg)](https://david-dm.org/janl/hoodie-plugin-publish-data#info=devDependencies)

# Hoodie Plugin Publish Data

This plugin allows you to publish data to a shared public database and read from it.

In brief:

To publish data:

```
hoodie.publish(type, obj)
  .done()
  .fail()
```

To read the oublished data:

```
var publicStore = hoodie.store.open('plugin-publish-data');
// use regular hoodie.store methods to work with the data
```