import {InputField} from '../components/fields/InputField.jsx'
import {SelectField} from '../components/fields/SelectField.jsx'
import {CheckboxField} from '../components/fields/CheckboxField.jsx'
import {TextAreaField} from '../components/fields/TextAreaField.jsx'
import {Section} from '../components/Section.jsx'
import {useForm} from 'react-hook-form';
import {paymentOptions} from '../data/data.js'
import './IPayForm.css';


const IPayForm = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => console.log("Form Submitted Data:", data);

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Section title="Одержувач">
                <InputField id="target_edrpou" label="ЄДРПОУ або РНОКПП" placeholder="Введіть ЄДРПОУ чи РНОКПП"
                            register={register}/>
                <InputField id="target_fio" label="Назва одержувача" placeholder="Введіть назву одержувача"
                            register={register}/>
                <InputField id="target_rr" label="Рахунок IBAN" placeholder="Введіть IBAN рахунок отримувача"
                            register={register}/>
            </Section>

            <Section title="Категорія платежу">
                <CheckboxField id="budget_payment" label="Бюджетний платіж"
                               sublabel="(Податки, штрафи та інші платежі до бюджету)" register={register}/>
                <SelectField id="paymentType" options={paymentOptions} register={register}
                             placeholder="Select Payment Type"/>
                <TextAreaField id="form_desc" label="Призначення платежу" placeholder="Вкажіть призначення переказу"
                               register={register}/>
            </Section>

            <Section title="Відправник">
                <InputField id="sender_fio" label="ПІБ відправника" placeholder="Прізвище Ім'я По-батькові"
                            register={register}/>
                <InputField id="sender_phone" label="Номер телефону" placeholder="Номер телефону" register={register}/>
                <InputField id="invoice" label="Сума" placeholder="10 - 29 000" register={register}/>
            </Section>

            <Section title="Карткові дані">
                <InputField id="sender_card_pan" label="Номер Картки" placeholder="Номер картки відправника"
                            register={register}/>
                <InputField id="sender_card_exp" label="Термін дії" placeholder="MM/YY" register={register}/>
                <InputField id="sender_card_cvv" label="CVV" placeholder="CVV" register={register}/>
            </Section>

            <button type="submit">Submit</button>
        </form>
    );
};

export {IPayForm};
