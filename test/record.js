const nock = require('nock');
const path = require('path');
const fs = require('fs');

module.exports = function (options) {
    options = options || {};
    const test_folder = options.test_folder || 'test';
    const fixtures_folder = options.fixtures_folder || 'fixtures';
    let nockResReports;

    return {
        before: function () {
            nockResReports = path.join(test_folder, fixtures_folder, this.currentTest.title + '.json');
            console.log('file exist=====', fs.existsSync(nockResReports));
            if (fs.existsSync(nockResReports)) {
                has_fixtures = true;
            } else {
                has_fixtures = false;
                nock.recorder.rec({
                    output_objects: true,
                });
            }
        },
        // saves our recording if fixtures didn't already exist
        after: function (done) {
            if (!has_fixtures) {
                var fixtures = nock.recorder.play();
                fs.writeFile(nockResReports, JSON.stringify(fixtures), function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("File saved successfully!");
                }, done);
                nock.restore();
            } else {
                done();
            }
        }
    }
};