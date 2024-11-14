import {InputField} from '../components/fields/InputField.jsx'
import {SelectField} from '../components/fields/SelectField.jsx'
import {TextAreaField} from '../components/fields/TextAreaField.jsx'
import {CheckboxField} from "../components/fields/CheckboxField.jsx";
import {Section} from '../components/Section.jsx'
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "./validationSchema.js";
import {paymentOptions} from '../data/data.js'
import './IPayForm.css';

const IPayForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = (data) => console.log("Form Submitted Data:", data);

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Section title="Одержувач">
                <InputField id="target_edrpou" label="ЄДРПОУ або РНОКПП" placeholder="Введіть ЄДРПОУ чи РНОКПП"
                            register={register} errors={errors}/>
                <InputField id="target_fio" label="Назва одержувача" placeholder="Введіть назву одержувача"
                            register={register} errors={errors}/>
                <InputField id="target_rr" label="Рахунок IBAN" placeholder="Введіть IBAN рахунок отримувача"
                            register={register} errors={errors}/>
            </Section>

            <Section title="Категорія платежу">
                <CheckboxField id="budget_payment" label="Бюджетний платіж"
                               sublabel="(Податки, штрафи та інші платежі до бюджету)" register={register}/>
                <SelectField id="paymentType" options={paymentOptions} register={register}
                             placeholder="Select Payment Type" errors={errors}/>
                <TextAreaField id="form_desc" label="Призначення платежу" placeholder="Вкажіть призначення переказу"
                               register={register} errors={errors}/>
            </Section>

            <Section title="Відправник">
                <InputField id="sender_fio" label="ПІБ відправника" placeholder="Прізвище Ім'я По-батькові"
                            register={register} errors={errors}/>
                <InputField id="sender_phone" label="Номер телефону" placeholder="Номер телефону" register={register}
                            errors={errors}/>
                <InputField id="invoice" label="Сума" placeholder="10 - 29 000" register={register} errors={errors}/>
            </Section>

            <Section title="Карткові дані">
                <InputField id="sender_card_pan" label="Номер Картки" placeholder="Номер картки відправника"
                            register={register} errors={errors}/>
                <InputField id="sender_card_exp" label="Термін дії" placeholder="MM/YY" register={register}
                            errors={errors}/>
                <InputField id="sender_card_cvv" label="CVV" placeholder="CVV" register={register} errors={errors}/>
            </Section>

            <button type="submit">Submit</button>
        </form>
    );
};

export {IPayForm};
