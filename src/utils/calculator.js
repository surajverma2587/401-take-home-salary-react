export const calculateResults = (taxYear, annualSalary) => {
  console.log(taxYear, annualSalary);

  return {
    annualSalary,
    taxableIncome: 37500,
    taxPercentage: 40,
    taxPayable: 15000,
    takeHomeSalary: 35000,
  };
};
