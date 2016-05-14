/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
    name: 'ember-cli-persian-datepicker',

    included: function (app) {
        this._super.included(app);

        if (app.env === 'development') {
            app.import(path.join(app.bowerDirectory, "persian-datepicker", "dist", "css", "persian-datepicker-0.4.5.css"));
            app.import(path.join(app.bowerDirectory, "persian-datepicker", "dist", "js", "persian-datepicker-0.4.5.js"));
            app.import(path.join(app.bowerDirectory, "persian-date", "dist", "0.1.8", "persian-date-0.1.8.js"));
        }
        else {
            app.import(path.join(app.bowerDirectory, "persian-datepicker", "dist", "css", "persian-datepicker-0.4.5.min.css"));
            app.import(path.join(app.bowerDirectory, "persian-datepicker", "dist", "js", "persian-datepicker-0.4.5.min.js"));
            app.import(path.join(app.bowerDirectory, "persian-date", "dist", "0.1.8", "persian-date-0.1.8.min.js"));
        }
    }
};
