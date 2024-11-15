const budgetPaymentOptions = [
    {value: 'tax', label: '101 Сплата суми податків і зборів / єдиного внеску', placeholder: "*;101;РНОКПП; ПІБ"},
    {value: 'fine', label: '121 Сплата адміністративного штрафу', placeholder: "*;121;РНОКПП; ПІБ; дата порушення"},
    {
        value: 'advance_pay',
        label: '125 Авансові внески, нараховані на суму дивідентів та прирівняних до них платежів',
        placeholder: "*;125;РНОКПП; ПІБ; деталі платежу"
    },
];

const nonBudgetPaymentOptions = [
    {
        value: 'utilities',
        label: 'Комунальні послуги (ОСББ, ЖБК, світло, вода, електроенергія, дом...)',
        placeholder: "0/п, адреса, період, призначення (сплата за ...)"
    },
    {
        value: 'internet',
        label: 'Інтернет/Телебачення/Телеком послуги',
        placeholder: "0/п, особовий рахунок, період оплати"
    },
];

export {budgetPaymentOptions, nonBudgetPaymentOptions};