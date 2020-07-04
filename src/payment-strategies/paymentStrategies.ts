import PaymentStrategy from "./PaymentStrategy.type";

const paymentStrategies: Map<string, PaymentStrategy> = new Map([
  ["cash", () => "I pay with cash"],
  ["credit", () => "I use my credit card"],
]);

export default paymentStrategies;
