import {useForm} from "react-hook-form";

const paymentOptions = [
    {value: 'utilities', label: 'Комунальні послуги (ОСББ, ЖБК, світло, вода, електроенергія, дом...)'},
    {value: 'internet', label: 'Оплата Інтернету'},
];
const IPayForm = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => console.log("Form Submitted Data:", data)
    return <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <input
            type="text"
            placeholder="Введіть ЄДРПОУ чи РНОКПП"
            {...register("target_edrpou")}
        />
        <label htmlFor="target_edrpou">ЄДРПОУ або РНОКПП</label>
        <br/>

        <input
            type="text"
            placeholder="Введіть назву одержувача"
            {...register("target_fio")}
        />
        <label htmlFor="target_edrpou">Назва одержувача</label>
        <br/>

        <input
            type="text"
            placeholder="Введіть IBAN рахунок отримувача"
            {...register("target_rr")}
        />
        <label htmlFor="target_edrpou">Рахунок IBAN</label>
        <br/>

        <input
            id="checkbox-budget"
            type="checkbox"
            {...register("budget_payment")}
        />
        <label htmlFor="checkbox-budget">
            <span>Бюджетний платіж</span>
            <span>(Податки, штрафи та інші платежі до бюджету)</span>
        </label>
        <br/>

        <select {...register('paymentType')}>
            <option value="">Select Payment Type</option>
            {paymentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        <br/>

        <textarea
            placeholder="Вкажіть призначення переказу"
            {...register("form_desc")}
        />
        <label htmlFor="form_desc">Призначення платежу</label>
        <br/>

        <input
            type="text"
            placeholder="Прізвище Ім'я По-батькові"
            {...register("sender_fio")}
        />
        <label htmlFor="form_desc">ПІБ відправника</label>
        <br/>

        <input
            type="text"
            placeholder="Номер телефону"
            {...register("sender_phone")}
        />
        <label htmlFor="form_desc">Номер телефону</label>
        <br/>

        <input
            type="text"
            placeholder="10 - 29 000"
            {...register("invoice")}
        />
        <label htmlFor="invoice">Сума</label>
        <br/>

        <input
            type="text"
            placeholder="Номер картки відправника"
            {...register("sender_card_pan")}
        />
        <label htmlFor="invoice">Номер Картки</label>
        <br/>

        <input
            type="text"
            placeholder="MM/YY"
            {...register("sender_card_exp")}
        />
        <label htmlFor="invoice">Термін дії</label>
        <br/>

        <input
            type="text"
            placeholder="CVV"
            {...register("sender_card_cvv")}
        />
        <label htmlFor="invoice">CVV</label>
        <br/>

        <button type="submit">Submit</button>
    </form>
}

export {IPayForm}