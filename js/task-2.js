function formatMessage(message, maxLength) {
  // перевіряю  довжину рядка повідомлення відповідно до заданої максимальної довжини

  if (message.length <= maxLength) {
    //   повертає початковий рядок без змін
    return message;
  } else {
    // повертає обрізану версію до maxLength символів і додає трикрапку "..." в кінці рядка
    return message.substring(0, maxLength) + '...';
  }
}

// перевіряю, чи коректно працює функція

console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"
