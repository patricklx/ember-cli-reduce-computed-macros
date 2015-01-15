# Ember-cli-reduce-computed-macros

Provides the ember-rcp computed macros to be used in conjunction with git://github.com/patricklx/ember-cli-reduce-computed

##Changes:
- The `filter` function uses the new callback `propertyChanged`
- only `filter` and `map` calculate indexes for property changes 
- indexes are computed immediatly after the array changed. Therfore adding/removing/replacing many items should be done as a bulk operation

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
