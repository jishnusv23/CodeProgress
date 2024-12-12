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

console.log(calculator.calculateDiscount(regularCustomer));
console.log(calculator.calculateDiscount(primiumCustomer));
console.log(calculator.calculateDiscount(vipCustomer));
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Without open-close principle

class DiscountCalculatorWithout {
  calculateDiscount(customerType) {
    if (customerType === "regular") {
      
      return 5;
    } else if (customerType === "primiumcustomer") {
      return 10;
    } else {
      return 0;
    }
  }
}
const calculatorWithout = new DiscountCalculatorWithout();
console.log(calculatorWithout.calculateDiscount("regular"));
console.log(calculatorWithout.calculateDiscount("primiumcustomer"));
