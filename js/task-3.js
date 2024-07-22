function checkForSpam(message) {
  const forbiddenWordsOne = "spam";
  const forbiddenWordsTwo = "sale";
  const normaliztdString = message.toLowerCase();
  const hasSpamWord1 = normaliztdString.includes(forbiddenWordsOne);
  const hasSpamWord2 = normaliztdString.includes(forbiddenWordsTwo);

  if (hasSpamWord1 || hasSpamWord2) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Latest technology news")); //false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
