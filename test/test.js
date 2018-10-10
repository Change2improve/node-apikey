var client = require('../index');

describe('API Key Testing Spec', function () {
    describe('Use the API to make some get calls', function () {
        it('should get the endpoints json', function (done) {
            client(require('./apikey.js')).getEndpoints(function (data) {
                console.log(data);
                done();
            });
        });
        it('should get the user\'s documents', function (done) {
            client(require('./apikey.js')).getDocuments({}, function (data) {
                console.log(data);
                done();
            });
        });
    });
});

