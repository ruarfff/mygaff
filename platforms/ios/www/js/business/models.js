/* global angular */

angular.module('mygaff.business.models', [])

    .factory('Business', function () {
        'use strict';

        function Business(id, content, thumbnail, title, images) {
            this.id = id;
            this.content = content;
            this.thumbnail = thumbnail;
            this.title = title;
            this.images = images;
        }

        Business.build = function (data) {
            return new Business(
                data.id,
                data.content,
                data.thumbnail,
                data.title,
                data.images
            );
        };

        Business.apiResponseTransformer = function (responseData) {
            if(!responseData) {
                throw new Error('Cannot build Business object. Data is empty');
            }
            if (angular.isArray(responseData)) {
                return responseData
                    .map(Business.build)
                    .filter(Boolean);
            }
            return Business.build(responseData);
        };

        /**
         * Return the constructor function
         */
        return Business;
    });