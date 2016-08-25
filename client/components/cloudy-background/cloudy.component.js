import angular from 'angular';

export class CloudyComponent {}

export default angular.module('cloudy', [])
    .component('ttCloudy', {
        template: require('./cloudy-background.html'),
        controller: CloudyComponent
    })
    .name;
