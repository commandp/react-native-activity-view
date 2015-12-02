/**
 * @providesModule ActivityView
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  NativeModules
} = React;

var androidDummy = {
  show: e => {throw 'not impelement!'},
}

var NativeActivityView = NativeModules.ActivityView || androidDummy ;

/**
 * High-level docs for the ActivityView iOS API can be written here.
 */

var ActivityView = {
  show: NativeActivityView.show
};

module.exports = ActivityView;
