/// <reference path="../src/echo-client.ts" />
/// <reference path="../definitions/mocha/mocha.d.ts" />
/// <reference path="../definitions/chai/chai.d.ts" />

describe('EchoClient', () => {
    var expect = chai.expect;
    var iframe: HTMLIFrameElement;

    before(() => {
        iframe = document.createElement('iframe');
        iframe.id = 'echo-iframe';
        iframe.src = '/iframe.html';
        document.body.appendChild(iframe);

    });

    it('＾〜`', ok => {
        var client = new EchoClient(text => {
            expect(text).to.equal('echooooo');
            ok();
        });

        client.echo('echooooo');

    });
});
