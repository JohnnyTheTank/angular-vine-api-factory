"use strict";

/**
 @author Jonathan Hornung (https://github.com/JohnnyTheTank)
 @url https://github.com/JohnnyTheTank/angular-vine-api-factory
 @licence MIT
 */

angular.module("jtt_vine", [])
    .factory('vineFactory', ['$http', 'vineSearchDataService', function ($http, vineSearchDataService) {

        var vineFactory = {};

        vineFactory.getVideosFromTag = function (_params) {

            if(!_params.tag) {
                return false;
            }

            var searchData = vineSearchDataService.getNew("videosFromTag", _params);

            return $http({
                    method: 'GET',
                    url: searchData.url,
                    params: searchData.object,
                }
            );
        };

        return vineFactory;
    }])
    .service('vineSearchDataService', function () {
        this.getApiBaseUrl = function (_params) {
            return "https://api.vineapp.com/";
        };

        this.fillDataInObjectByList = function (_object, _params, _list) {

            angular.forEach(_list, function (value, key) {
                if (typeof _params[value] !== "undefined") {
                    _object.object[value] = _params[value];
                }
            });

            return _object;
        };

        this.getNew = function (_type, _params) {

            var defaultLimit = 20;

            var vineSearchData = {
                object: {},
                url: "",
            };

            switch (_type) {

                case "videosFromTag":
                    vineSearchData.object = {};
                    vineSearchData.url = this.getApiBaseUrl() + "timelines/tags/" + _params.tag;
                    break;
            }

            return vineSearchData;
        };
    });