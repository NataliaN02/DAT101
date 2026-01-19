"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

const accountTypes = {
    normal: "Brukskonto",
    saving: "Sparekonto",
    credit: "Kreditkonto",
    pension: "Pensjonskonto"
};

const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner",        denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro",      denomination: "€"  },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$"  },
  GBP: { value: 0.0847, name: "Pound sterling",       denomination: "£"  },
  INR: { value: 7.8309, name: "Indiske rupee",        denomination: "₹"  },
  AUD: { value: 0.1581, name: "Australienske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso",     denomination: "₱"  },
  SEK: { value: 1.0580, name: "Svenske kroner",       denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar",     denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht",            denomination: "฿"  }
};

class TAccount {
  #type;
  #balance = 0;
  #withdrawCount = 0;
  #currencyType = CurrencyTypes.NOK;

  constructor(aType, aBalance = 0) {
    this.#type = aType;
    this.#balance = aBalance;
  }

  toString() {
    return this.#type;
  }

  getBalance() {
    return this.#balance;
  }

  setType(aType) {
    printOut(`Account is changed from ${this.#type} to ${aType}`);
    this.#type = aType;
    this.#withdrawCount = 0;
  }

  #currencyConvert(aFrom, aTo) {
    return CurrencyTypes.NOK.value / aFrom.value * aTo.value;
  }

  setCurrencyType(aType) {
    if (this.#currencyType === aType) return;

    const old = this.#currencyType;
    this.#balance *= this.#currencyConvert(old, aType);
    this.#currencyType = aType;

    printOut(`The account currency has change from ${old.name} to ${aType.name}`);
    printOut(`New balance is ${this.#balance.toFixed(2)}${aType.denomination}`);
  }

  deposit(aAmount, aType = CurrencyTypes.NOK) {
    if (aType !== this.#currencyType) {
      aAmount *= this.#currencyConvert(aType, this.#currencyType);
    }

    this.#balance += aAmount;
    this.#withdrawCount = 0;

    printOut(
      `Deposit of ${aAmount.toFixed(2)}${this.#currencyType.denomination}, new balance is ${this.#balance.toFixed(2)}${this.#currencyType.denomination}`
    );
  }

  withdraw(aAmount, aType = CurrencyTypes.NOK) {
    switch (this.#type) {
      case "Pensjonskonto":
        printOut(`You can't withdraw from Pensjonskonto!`);
        return;

      case "Sparekonto":
        if (this.#withdrawCount >= 3) {
          printOut(`You can't withdraw from a Sparekonto more than three times!`);
          return;
        }
        break;
    }

    if (aType !== this.#currencyType) {
      aAmount *= this.#currencyConvert(aType, this.#currencyType);
    }

    this.#balance -= aAmount;
    this.#withdrawCount++;

    printOut(
      `Withdrawal of ${aAmount.toFixed(2)}${this.#currencyType.denomination}, new balance is ${this.#balance.toFixed(2)}${this.#currencyType.denomination}`
    );
  }
}

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(Object.values(accountTypes).join(", "));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const myAccountPart2 = new TAccount("Brukskonto");
printOut(`myAccount = ${myAccountPart2.toString()}`);
myAccountPart2.setType("Sparekonto");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const myAccountPart3 = new TAccount("Brukskonto");
myAccountPart3.deposit(100);
myAccountPart3.withdraw(25);
printOut(`My account balance is ${myAccountPart3.getBalance()}`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const myAccountPart4 = new TAccount("Sparekonto", 100);
myAccountPart4.deposit(0);
myAccountPart4.withdraw(30);
myAccountPart4.withdraw(30);
myAccountPart4.withdraw(30);
myAccountPart4.withdraw(30);
myAccountPart4.setType("Pensjonskonto");
myAccountPart4.withdraw(10);
myAccountPart4.setType("Sparekonto");
myAccountPart4.withdraw(10);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const acc5 = new TAccount("Brukskonto");
acc5.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
acc5.setCurrencyType(CurrencyTypes.SEK);
acc5.setCurrencyType(CurrencyTypes.USD);
acc5.setCurrencyType(CurrencyTypes.NOK);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const acc7 = new TAccount("Brukskonto");

acc7.deposit(12, CurrencyTypes.USD);
acc7.withdraw(10, CurrencyTypes.GBP);

acc7.setCurrencyType(CurrencyTypes.CAD);
acc7.setCurrencyType(CurrencyTypes.INR);

acc7.withdraw(acc7.getBalance(), CurrencyTypes.SEK);
printOut(newLine);
