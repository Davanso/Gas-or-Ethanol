document.getElementById('fuelForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting before validation
  event.preventDefault();
  
  // Get values from the input fields
  const gasolineEfficiency = parseFloat(document.getElementById('gasolineEfficiency').value);
  const alcoholEfficiency = parseFloat(document.getElementById('alcoholEfficiency').value);
  
  // Validation check: make sure both values are greater than zero and realistic
  if (gasolineEfficiency <= 0 || alcoholEfficiency <= 0) {
    // Evitar o envio do formulário antes da validação
    alert('Erro: Os valores de eficiência do combustível (km/l) devem ser maiores que zero.');
    return; // Stop the form from submitting if validation fails
  }
  
  // Further validation: check if the values are too high (optional)
  if (gasolineEfficiency > 100 || alcoholEfficiency > 100) {
    alert('Erro: A eficiência do combustível (km/l) parece muito alta. Por favor, verifique sua entrada.');
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
    resultMessage = 'A gasolina é mais eficiente em termos de custo.';
  } else if (roundedGasolineCostPerKm > roundedAlcoholCostPerKm) {
    resultMessage = 'O etanol é mais eficiente em termos de custo.';
  } else {
    resultMessage = 'Ambos os combustíveis têm a mesma eficiência de custo.';
  }
  
  // Display the result
  document.getElementById('result').innerText = `
    Custo da gasolina por km: R$ ${roundedGasolineCostPerKm.toFixed(2)} \n
    Custo do álcool por km: R$ ${roundedAlcoholCostPerKm.toFixed(2)} \n
    ${resultMessage}
  `;
});
