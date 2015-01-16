import Ember from 'ember';

import {
  sum,
  min,
  max,
  map,
  sort,
  setDiff,
  mapBy,
  mapProperty,
  filter,
  filterBy,
  filterProperty,
  uniq,
  union,
  intersect
} from './macros/reduce_computed_macros';

var acp = {
  map: map,
  sort: sort,
  setDiff: setDiff,
  mapBy: mapBy,
  mapProperty: mapProperty,
  filter: filter,
  filterBy: filterBy,
  filterProperty: filterProperty,
  uniq: uniq,
  union: union,
  intersect: intersect
};

var rcp = {
  sum: sum,
  min: min,
  max: max
};

var install = function (replace) {
  var name;
  Ember.acp = acp;
  Ember.rcp = rcp;
  if (replace) {
    for (name in acp) {
      Ember.computed[name] = acp[name];
    }
    for (name in rcp) {
      Ember.computed[name] = rcp[name];
    }
  }
};


if (Ember.libraries) {
  Ember.libraries.register('ember-cli-reduce-computed-macros', '0.1.0');
}

export {
  acp,
  rcp,
  install
};

export default {
  acp: acp,
  rcp: rcp,
  install: install
};
