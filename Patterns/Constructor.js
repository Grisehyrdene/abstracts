class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }
    getURL(){
        return `https://${this.ip}:80`;
    }
}

const S = new Server('Server', '21.23.23.12')

console.log(S.getURL());