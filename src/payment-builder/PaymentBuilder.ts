import paymentStrategies from "../payment-strategies/paymentStrategies";
import PaymentStrategy from "../payment-strategies/PaymentStrategy.type";

export default class PaymentBuilder {
  strategies: Map<string, PaymentStrategy>;

  constructor() {
    this.strategies = paymentStrategies;
  }

  getStrategy(strategyName: string) {
    return this.strategies.get(strategyName);
  }
}
