/*jslint unparam: true*/
var dateRange = function(items, startDate, endDate) {
    'use strict';
    if ((!endDate) || (startDate === '') || (startDate === undefined)) {
        return items;
    }
    var matches = [];
    angular.forEach(items, function(value, key) {
        var itemDate = moment(value.premDate, 'YYYY-MM-DD'),
            s = moment(startDate, 'YYYY-MM-DD'),
            e = moment(endDate, 'YYYY-MM-DD') + 86399999;
        if (itemDate >= s && itemDate <= e) {
            matches.push(value);
        }
    });
    return matches;
},

excelDate = function(date) {
    'use strict';
    return new Date(Math.round(((date - 25569)*86400+28800)*1000));
},

inRange = function(items, startProp, endProp, lead, first) {
    'use strict';
    if (items) {
        var match = first ? [items[0]] : null,
            today = moment.utc().unix(),
            format = moment.ISO_8601,
            s,
            e;
        lead = lead * 24 * 60 * 60;

        angular.forEach(items, function(value) {
            if (5 === value[startProp].toString().length) {
                s = excelDate(value[startProp]).toISOString();
                e = excelDate(value[endProp]).toISOString();
            } else {
                s = value[startProp];
                e = value[endProp];
            }
            s = moment(s, format).unix() - (3*60*60);
            e = moment(e, format).unix() + (19*60*60) + (59*60) + 59;

            s = s - lead;
            if (today >= s && today <= e) {
                match = [value];
            }
        });
        return match;
    }
};

(function(angular) {
    'use strict';
    angular.module('filters.dateRange', [])
        .filter('dateRange', function() {
            return dateRange;
        })
        .filter('excelDate', function() {
            return excelDate;
        })
        .filter('inRange', function() {
            return inRange;
        });
}(window.angular));
/*jslint unparam: false*/