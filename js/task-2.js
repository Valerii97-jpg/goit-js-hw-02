function formatMessage(message, maxLength) {
  const cilcSimvol = message.length;
  const delSimvol = message.slice(0, maxLength);
  if (cilcSimvol > maxLength) {
    return `${delSimvol}...`;
  } else {
    return message;
  }
}
console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
