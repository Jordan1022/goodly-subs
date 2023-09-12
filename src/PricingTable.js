import React, { useEffect } from 'react';

const StripePricingTable = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const pricingTableScript = `
    <stripe-pricing-table
      pricing-table-id="prctbl_1NVgtTAbTC2zOtZGGDTql6mT"
      publishable-key="pk_live_51KBsNoAbTC2zOtZGT6aKcwOQz6bmJk8BQwghrZHcqauVjmFmuuFgOH5hAIce53zR8qHzE2XFlUZsIbNYAOH1XLQc00TrQwRZZ3">
    </stripe-pricing-table>
  `;

  return (
    <div id="pricing-table" >
      {/* Placeholder for the Stripe pricing table */}
      <div id="stripe-pricing-table-container"></div>

      {/* Inject the pricing table script and custom component */}
      <div dangerouslySetInnerHTML={{ __html: pricingTableScript }} />
    </div>
  );
};

export default StripePricingTable;
