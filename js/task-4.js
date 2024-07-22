function getShippingCost(country) {
  const isWorth1 = 170;
  const isWorth2 = 100;
  const isWorth3 = 250;
  const isWorth4 = 120;

  switch (country) {
    case 'Australia':
      return 'Shipping to ${country} will cost ${isWorth1} credits';
      break;
    case 'China':
      return 'Shipping to ${country} will cost ${isWorth2} credits';
      break;
    case 'Chile':
      return 'Shipping to ${country} will cost ${isWorth3} credits';
      break;
    case 'Jamaica':
      return 'Shipping to ${country} will cost ${isWorth4} credits';
      break;
    default:
      return 'Sorry, there is no delivery to your country';
      break;
  }
}
console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
