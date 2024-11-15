export const getDynamicPlaceholder = (paymentOptions, selectedPaymentType) => {
    const selectedOption = paymentOptions.find(option => option.value === selectedPaymentType);
    return selectedOption ? selectedOption.placeholder : "Вкажіть призначення переказу";
};
