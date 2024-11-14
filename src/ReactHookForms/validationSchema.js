import * as yup from 'yup';


const validationSchema = yup.object().shape({
    target_edrpou: yup
        .string()
        .required("Поле ЄДРПОУ або РНОКПП є обов'язковим")
        .matches(/^[0-9]{8,10}$/, "Невірний формат: введіть 8-10 цифр"),

    target_fio: yup
        .string()
        .trim()
        .required("Поле назви одержувача є обов'язковим")
        .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'`\s-]{2,50}$/, "Тільки літери, пробіли та деякі символи (' ` -) дозволені")
        .min(2, "Назва одержувача має бути не менше 2 символів")
        .max(50, "Назва одержувача має бути не більше 50 символів"),

    target_rr: yup
        .string()
        .required("Поле рахунку IBAN є обов'язковим")
        .matches(/^UA\d{27}$/, "Невірний формат IBAN (потрібно UA + 27 цифр)")
        .test("iban-structure", "Недійсний IBAN", value => {
            return value && value.length === 29 && value.startsWith("UA");
        }),

    paymentType: yup
        .string()
        .required("Вибір типу платежу є обов'язковим"),

    form_desc: yup
        .string()
        .trim()
        .required("Поле призначення платежу є обов'язковим")
        .max(255, "Призначення платежу не повинно перевищувати 255 символів"),

    sender_fio: yup
        .string()
        .trim()
        .required("Поле ПІБ відправника є обов'язковим")
        .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'`\s-]{2,50}$/, "Тільки літери, пробіли та деякі символи (' ` -) дозволені")
        .min(2, "ПІБ має бути не менше 2 символів")
        .max(50, "ПІБ має бути не більше 50 символів"),

    sender_phone: yup
        .string()
        .required("Поле телефону є обов'язковим")
        .matches(/^\+380\d{9}$/, "Невірний формат: введіть у форматі +380XXXXXXXXX"),

    invoice: yup
        .number()
        .typeError("Сума повинна бути числом")
        .required("Поле суми є обов'язковим")
        .min(10, "Мінімальна сума 10")
        .max(29000, "Максимальна сума 29000")
        .test("currency-format", "Сума повинна мати не більше двох знаків після коми", value => {
            return /^\d+(\.\d{1,2})?$/.test(value);
        }),

    sender_card_pan: yup
        .string()
        .trim()
        .required("Поле номера картки є обов'язковим")
        .matches(/^\d{16}$/, "Невірний формат: введіть 16 цифр картки"),

    sender_card_exp: yup
        .string()
        .trim()
        .required("Поле терміну дії є обов'язковим")
        .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Невірний формат: MM/YY")
        .test("expiration-date", "Термін дії картки минув", value => {
            if (!value) return false;
            const [month, year] = value.split('/').map(Number);
            const expiryDate = new Date(`20${year}`, month);
            return expiryDate > new Date();
        }),

    sender_card_cvv: yup
        .string()
        .trim()
        .required("Поле CVV є обов'язковим")
        .matches(/^\d{3}$/, "Невірний формат: введіть 3 цифри CVV")
});

export {validationSchema};