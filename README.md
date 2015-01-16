# Ember-cli-reduce-computed-macros

Provides the ember-rcp computed macros to be used in conjunction with [ember-cli-reduce-computed](http://github.com/patricklx/ember-cli-reduce-computed)

## Addon Install

install `ember-cli-reduce-computed` first.

`ember install:addon patricklx/ember-cli-reduce-computed-macros`

then in your app:

`import install from 'ember-cli-reduce-computed-macros':`
`install(true/false)`

if you pass `true` to the install function it will overwrite the Ember.computed.* functions.
If not, they will be installed at `Ember.rcp.*` and `Ember.acp.*`

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
