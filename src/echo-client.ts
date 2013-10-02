class EchoClient {

    private target = <HTMLIFrameElement>document.getElementById('echo-iframe');
    constructor(private receiveCallback: (text: string) => void) { }

    echo(text: string) {
        var self = this;
        window.addEventListener('message', function receiver(event) {
            self.receiveCallback(event.data);
            window.removeEventListener('message', receiver);
        });
        this.target.contentWindow.postMessage(text, '*');
    }
}