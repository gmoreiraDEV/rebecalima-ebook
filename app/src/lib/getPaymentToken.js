const EfiJS = require("payment-token-efi");

const ENVIRONMENT = process.env.SANBOXEFI;
const ACCOUNT_ID_EFI = process.env.ACCOUNT_ID_EFI;

async function getPaymentToken(creditCard) {
  const res = await EfiJS.CreditCard.setAccount(ACCOUNT_ID_EFI)
    .debugger(true)
    .setEnvironment(ENVIRONMENT == true ? "sandbox" : "production")
    .setCreditCardData(creditCard)
    .getPaymentToken()
    .then((data) => {
      const paymentToken = data.payment_token;
      const cardMask = data.card_mask;

      return {
        paymentToken,
        cardMask,
      };
    })
    .catch((err) => {
      return err;
    });
  return res;
}

module.exports = getPaymentToken;
