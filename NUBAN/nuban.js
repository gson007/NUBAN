//Get bank code and Account/Serial Number
class Nuban {

    constructor(bankCode, AccountNumber) {
        this.bankCode = bankCode;
        this.AccountNumber = AccountNumber;
    }

    checkNuban() {
        //Make Sure Serial/Account Number is a string
        if (this.AccountNumber.length !== 9 || typeof this.AccountNumber !== 'string') {
            throw new Error('Account Number must be equal to 9 and must be a string');
        }
        if (this.bankCode.length !== 3 || typeof this.bankCode !== 'string') {
            throw new Error('Bank Code must be equal to 3 and must be a string');
        }
        const dictionary = [3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3];
        //Add bankCode and Account Number for calculation from the algorithm
        let account = (this.bankCode + this.AccountNumber).split("");
        let counter = 0;

        //Calculate Check Digit and store in counter variable
        account.forEach((currentValue, index) => {
            counter += (currentValue * dictionary[index]);
        });
        //Get the check Digit
        counter = 10 - (counter % 10);
        //if Check digit is 10, return 0
        counter = (counter == 10) ? 0 : counter;
        //Add the check digit to account Number/Serial Number
        account.push(counter);
        //Remove bank Code
        account.splice(0, 3);
        //return Nuban Code for the account
        this.NubanCode = account.join("");
    }
}