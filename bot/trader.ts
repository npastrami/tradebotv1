import { quote } from '../tools/quote';
import { generateRoute, executeRoute } from '../tools/route';

async function performTriangularArbitrage(TokenA, TokenB, TokenC, amountInTokenA) {
  console.log(`Starting arbitrage with amount ${amountInTokenA} of TokenA (${TokenA}).`);

  // Step 1: Quote for TokenA to TokenB
  const amountOutTokenB = await quote(TokenA, TokenB, amountInTokenA);
  console.log(`Quoted amount for TokenB: ${amountOutTokenB}`);

  // Step 2: Quote for TokenB to TokenC
  const amountOutTokenC = await quote(TokenB, TokenC, amountOutTokenB);
  console.log(`Quoted amount for TokenC: ${amountOutTokenC}`);

  // Step 3: Quote for TokenC back to TokenA
  const finalAmountTokenA = await quote(TokenC, TokenA, amountOutTokenC);
  console.log(`Final quoted amount for TokenA: ${finalAmountTokenA}`);

  // Evaluate if the final amount of TokenA is greater than the initial amount
  if (parseFloat(finalAmountTokenA) > parseFloat(amountInTokenA)) {
    console.log('Arbitrage opportunity detected! Executing trades...');

    // Execute the arbitrage trades
    // Note: This example assumes executeRoute() function can handle different tokens dynamically.
    // You may need to adjust these calls based on your actual function implementations.

    // Trade 1: TokenA to TokenB
    const route1 = await generateRoute(TokenA, TokenB, amountInTokenA, amountOutTokenB);
    if (route1 !== null) {
      await executeRoute(route1);
    }

    // Trade 2: TokenB to TokenC
    const route2 = await generateRoute(TokenB, TokenC, amountOutTokenB, amountOutTokenC);
    if (route2 !== null) {
      await executeRoute(route2);
    }

    // Trade 3: TokenC back to TokenA
    const route3 = await generateRoute(TokenC, TokenA, amountOutTokenC, finalAmountTokenA);
    if (route3 !== null) {
      await executeRoute(route3);
    }

    console.log('Triangular arbitrage executed successfully!');
  } else {
    console.log('No arbitrage opportunity found.');
  }
}

// Example call to performTriangularArbitrage
// Ensure you replace 'TokenA', 'TokenB', 'TokenC', and 'amountInTokenA' with actual values
// performTriangularArbitrage('0xTokenA', '0xTokenB', '0xTokenC', '1000');
// try this one