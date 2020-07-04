import Payment from "../controllers/Payment";

class PayUi {
  parentElement: HTMLElement;
  paymentOptions: NodeListOf<HTMLInputElement>;
  paymentForm: HTMLFormElement;
  payment: Payment;
  constructor(parentElement: HTMLElement) {
    this.parentElement = parentElement;
    this.paymentOptions = document.querySelectorAll(".payment-options input");
    this.paymentForm = document.querySelector(
      ".payment-form"
    ) as HTMLFormElement;
    this.payment = new Payment();
    this.handleSubmit();
  }

  handleSubmit() {
    this.paymentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const chekedOption = this.getCheckedOption();
      this.payment.pay(chekedOption.value);
    });
  }

  getCheckedOption(): HTMLInputElement {
    const checkedOption = Array.from(this.paymentOptions).find(
      (option) => option.checked
    );

    return checkedOption!;
  }

  render() {
    let PayUi = ` <form class="payment-form">
      <fieldset>
        <legend>Please select payment method</legend>
        <div class="payment-options">
          <input type="radio" name="payment" id="cash" value="cash" checked>
          <label for="cash">Pay With Cash</label>
          <input type="radio" name="payment" id="credit" value="credit">
          <label for="cash">Pay With Credit</label>
        </div>
        <button type="submit">Pay</button>
      </fieldset>
    </form>`;
    this.parentElement.innerHTML = PayUi;
  }
}

export default PayUi;
