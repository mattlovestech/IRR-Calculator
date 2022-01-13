export default function NetPresentValue() {
    let npv = 1
    let discountRate = 1.06
    let initialInvestment = 500000
    let initial = (-(initialInvestment)/((1+discountRate)^0))
    let sumOfYears = 0
    npv = initial + sumOfYears
    let myArray = {0: -500000, 1: 210000, 2: 237000, 3: 265000}
    let year1 = 237000/1.1236

    let i = 0, len = Object.keys(myArray).length;
    while (i < len) {
        // your code
        let currentDiscountRate = (Math.pow(discountRate, i))
        let currentCashFlow = myArray[i]/currentDiscountRate
        sumOfYears = sumOfYears + currentCashFlow
        console.log(currentCashFlow)
      //  console.log(myArray[i+1])

        i++ //increases the value of i after the code runs

    }
    console.log(sumOfYears)
    return initial
}