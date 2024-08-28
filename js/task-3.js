function checkForSpam(message) {
  //  змінюю на нижній регістр символи в рядку

  let lowerCaseMessage = message.toLowerCase();

  // Перевіряю, чи містить повідомлення заборонені слова "spam" або "sale"

  if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
    return true;
  } else {
    return false;
  }
}

// перевіряю, чи коректно працює функція

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
