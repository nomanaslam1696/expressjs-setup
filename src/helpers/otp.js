export function generateRandomNumber() {
  const random_number = Math.floor(Math.random() * (100000 - 999999)) + 999999;
  return random_number;
}