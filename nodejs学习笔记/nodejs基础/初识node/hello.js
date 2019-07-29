function Hello() {
    let name;
    this.setName = thyname => {
        name = thyname;
    };
    this.sayHello = () => {
        console.log(`Hello ${name}`);
    }
}

module.exports = Hello;