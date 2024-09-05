document.getElementById('fuelForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting before validation
  event.preventDefault();
  
  // Get values from the input fields
  const gasolineEfficiency = parseFloat(document.getElementById('gasolineEfficiency').value);
  const alcoholEfficiency = parseFloat(document.getElementById('alcoholEfficiency').value);
  
  // Validation check: make sure both values are greater than zero and realistic
  if (gasolineEfficiency <= 0 || alcoholEfficiency <= 0) {
    alert('Error: Fuel efficiency (km/l) values must be greater than zero.');
    return; // Stop the form from submitting if validation fails
  }
  
  // Further validation: check if the values are too high (optional)
  if (gasolineEfficiency > 100 || alcoholEfficiency > 100) {
    alert('Error: Fuel efficiency (km/l) seems too high. Please check your input.');
    return; // Stop the form from submitting if validation fails
  }
  
  // Proceed with the calculation if validation passes
  const gasolinePrice = parseFloat(document.getElementById('gasolinePrice').value);
  const alcoholPrice = parseFloat(document.getElementById('alcoholPrice').value);
  
  const gasolineCostPerKm = gasolinePrice / gasolineEfficiency;
  const alcoholCostPerKm = alcoholPrice / alcoholEfficiency;
  
  // Round values to two decimal places for comparison
  const roundedGasolineCostPerKm = parseFloat(gasolineCostPerKm.toFixed(2));
  const roundedAlcoholCostPerKm = parseFloat(alcoholCostPerKm.toFixed(2));
  
  let resultMessage;
  if (roundedGasolineCostPerKm < roundedAlcoholCostPerKm) {
    resultMessage = 'Gasoline is more cost-efficient.';
  } else if (roundedGasolineCostPerKm > roundedAlcoholCostPerKm) {
    resultMessage = 'Alcohol is more cost-efficient.';
  } else {
    resultMessage = 'Both fuels have the same cost-efficiency.';
  }
  
  // Display the result
  document.getElementById('result').innerText = `
    Gasoline cost per km: R$ ${roundedGasolineCostPerKm.toFixed(2)} \n
    Alcohol cost per km: R$ ${roundedAlcoholCostPerKm.toFixed(2)} \n
    ${resultMessage}
  `;
});
