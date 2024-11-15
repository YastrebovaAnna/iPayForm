import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../validation/validationSchema';
import { defaultValues } from '../data/defaultValues';
import { budgetPaymentOptions, nonBudgetPaymentOptions } from '../data/paymentOptions';
import { getDynamicPlaceholder } from '../utils/placeholderUtils';

export const useFormLogic = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
        defaultValues,
    });

    const isBudgetPayment = watch('budget_payment');
    const selectedPaymentType = watch('paymentType');

    const paymentOptions = isBudgetPayment ? budgetPaymentOptions : nonBudgetPaymentOptions;
    const dynamicPlaceholder = getDynamicPlaceholder(paymentOptions, selectedPaymentType);

    const onSubmit = async (data) => {
        console.log("Form Submitted Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    };

    return { register, handleSubmit: handleSubmit(onSubmit), errors, isSubmitting, dynamicPlaceholder, paymentOptions };
};
