const chai = require('chai');
const expect = chai.expect;

const StringUtils = require('../index.js'); 
const isEmptyOrNullOrUndefOrNanOrWhitespace = StringUtils.isEmptyOrNullOrUndefOrNanOrWhitespace;


describe('StringUtils', function() {

    describe('isEmptyOrNullOrUndefOrNanOrWhitespace', function() {
        beforeEach(function() {
            // Do something before each test is run
        });
        afterEach(function() {
          // Do something after each test.
        });

        context('argument is a valid string', function() {
            it('should return false', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace('test');
                expect(isNullOrWhitespace).to.equal(false);
            });
        });

        context('argument is an emoji 😊', function() {
            it('should return false', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace('😊');
                expect(isNullOrWhitespace).to.equal(false);
            });
        });

        context('argument is empty with single quoted string', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace('');
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is empty with double quoted string', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace("");
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is space with single quoted string', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace(' ');
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is space with double quoted string', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace(" ");
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is null character (\\0)', function() {
            it('should return false', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace('\0');
                expect(isNullOrWhitespace).to.equal(false);
            });
        });

        context('argument is horizontal tab (\\t)', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace('\t');
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is vertical tab (\\v)', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace('\v');
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is form feed (\\f)', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace('\f');
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is newline/line feed (\\n)', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace('\n');
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is carrage return (\\r)', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace('\r');
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is BOM (\\uFEFF)', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace('\uFEFF');
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is NO-BREAK SPACE (\\u00a0))', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace('\u00a0');
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is OGHAM SPACE MARK (\\u1680))', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace('\u1680');
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument charCodeAt(0) for " "', function() {
            it('should return true', function() {
                let str = ' '.charCodeAt(0);
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace(str);
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument charCodeAt(0) for "\\v"', function() {
            it('should return true', function() {
                let str = '\v'.charCodeAt(0);
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace(str);
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument charCodeAt(0) for "\\uFEFF"', function() {
            it('should return true', function() {
                let str = '\uFEFF'.charCodeAt(0);
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace(str);
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is null', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace(null);
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is undefined', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace(undefined);
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

        context('argument is NaN', function() {
            it('should return true', function() {
                let isNullOrWhitespace = isEmptyOrNullOrUndefOrNanOrWhitespace(NaN);
                expect(isNullOrWhitespace).to.equal(true);
            });
        });

    });


});
  