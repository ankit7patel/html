// // Function to calculate tax
// function calculateTax() {
//     var incomeAmount = parseFloat(document.getElementById("incomeAmount").value);
//     var taxBrackets = [
//       { minIncome: 0, maxIncome: 10000, taxRate: 0 },
//       { minIncome: 10001, maxIncome: 50000, taxRate: 0.1 },
//       { minIncome: 50001, maxIncome: 100000, taxRate: 0.2 },
//       { minIncome: 100001, maxIncome: Infinity, taxRate: 0.3 }
//     ];
//     var tax = calculateTaxAmount(incomeAmount, taxBrackets);
  
//     // Display the result
//     document.getElementById("taxResult").textContent = "Tax Amount: $" + tax.toFixed(2);
    
//   }
  
//   // Function to calculate tax amount based on income and tax brackets
//   function calculateTaxAmount(income, brackets) {
//     var tax = 0;
//     var remainingIncome = income;
  
//     for (var i = 0; i < brackets.length; i++) {
//       var bracket = brackets[i];
//       var taxableIncome = Math.min(remainingIncome, bracket.maxIncome - bracket.minIncome);
//       tax += taxableIncome * bracket.taxRate;
//       remainingIncome -= taxableIncome;
  
//       if (remainingIncome <= 0) {
//         break;
//       }
//     }
  
//     return tax;
//   }
  
//   // Add click event listener to the Calculate Tax button
//   document.getElementById("calculateButton").addEventListener("click", calculateTax);
  // Function to calculate tax amount based on income and tax brackets

// function calculateTaxAmount(income, brackets) {
//   var tax = 0;
//   var remainingIncome = income;

//   for (var i = 0; i < brackets.length; i++) {
//     var bracket = brackets[i];
//     var taxableIncome = Math.min(remainingIncome, bracket.maxIncome - bracket.minIncome);

//     // If taxable income falls within the bracket
//     if (taxableIncome > 0) {
//       // Calculate tax based on tax rate
//       tax += taxableIncome * bracket.taxRate;
//       remainingIncome -= taxableIncome;
//     }

//     // If remaining income is less than or equal to 0, break the loop
//     if (remainingIncome <= 0) {
//       break;
//     }
//   }

//   // If remaining income is still greater than 0, apply a flat tax rate
//   if (remainingIncome > 0) {
//     tax += remainingIncome * 0.4; // Example: Flat tax rate of 40%
//   }

//   return tax;
// }
