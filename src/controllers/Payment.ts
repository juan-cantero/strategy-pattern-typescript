import PaymentStrategy from "../payment-strategies/PaymentStrategy.type";
import PaymentBuilder from "../payment-builder/PaymentBuilder";

class Payment {
  private paymentBuilder: PaymentBuilder;
  constructor() {
    this.paymentBuilder = new PaymentBuilder();
  }

  getPaymentStrategy(strategy: string): PaymentStrategy {
    return this.paymentBuilder.getStrategy(strategy)!;
  }

  pay(strategy: string) {
    const paymentStrategy = this.getPaymentStrategy(strategy);

    console.log(paymentStrategy());
  }
}

export default Payment;
