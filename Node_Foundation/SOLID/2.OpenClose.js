class Customer {
  getDiscount() {
    return 0;
  }
}

class RegularCustomer extends Customer {
  getDiscount() {
    return 5;
  }
}

class PrimiumCustomer extends Customer {
  getDiscount() {
    return 10;
  }
}

class VipCustomer extends Customer {
  getDiscount() {
    return 20;
  }
}

const regularCustomer = new RegularCustomer();
const primiumCustomer = new PrimiumCustomer();
const vipCustomer = new VipCustomer();

class DiscountCalculator {
  calculateDiscount(customer) {
    return customer.getDiscount();
  }
}

const calculator = new DiscountCalculator();

// console.log(calculator.calculateDiscount(regularCustomer))
// console.log(calculator.calculateDiscount(primiumCustomer))
// console.log(calculator.calculateDiscount(vipCustomer))

var x = 10;
console.log(x); // 10
console.log(this.x); // 10
