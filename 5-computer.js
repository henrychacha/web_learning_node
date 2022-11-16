//定义类[电脑]

class Computer {
    //属性  
    constructor(brands,prices) {
        this.brand = brands;
        this.price = prices;
    }

    //方法
    output() {
        console.log(`${this.brand}  ${this.price} 输出内容...`);
    }
}

module.exports = Computer;