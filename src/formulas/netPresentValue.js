export default function NetPresentValue(discountRate,cashflowByYearObj) {
   
   
  //  let initialInvestment = 500000
   // let initial = (-(initialInvestment)/((1+discountRate)^0))
    let sumOfYears = 0
   // let myArray = {0: -500000, 1: 210000, 2: 237000, 3: 265000}
   

    let i = 0, len = Object.keys(cashflowByYearObj).length;
    while (i < len) {
        // your code
        let currentDiscountRate = (Math.pow(discountRate, i))
        let currentCashFlow = cashflowByYearObj[i]/currentDiscountRate
        sumOfYears = sumOfYears + currentCashFlow
        console.log(currentCashFlow)
      //  console.log(myArray[i+1])

        i++ //increases the value of i after the code runs

    }
    console.log("Net Present Value: " + sumOfYears)
    return sumOfYears
}