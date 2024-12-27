import {invoices} from '@/actions/invoices';

export function revenuePerMonth() {
    return [
        {
            name: "January",
            "Revenue of month": 1000,
        },
        {
            name: "February",
            "Revenue of month": 1500,
        },
        {
            name: "March",
            "Revenue of month": 2000,
        },
        {
            name: "April",
            "Revenue of month": 2900,
        },
        {
            name: "May",
            "Revenue of month": 4400,
        },
        {
            name: "June",
            "Revenue of month": 5200,
        },
        {
            name: "July",
            "Revenue of month": 5500,
        },
        {
            name: "August",
            "Revenue of month": 7500,
        },
        {
            name: "September",
            "Revenue of month": 7000,
        },
        {
            name: "October",
            "Revenue of month": 9500,
        },
        {
            name: "November",
            "Revenue of month": 10000,
        },
        {
            name: "December",
            "Revenue of month": 11000,
        },
    ]
};

export async function revenue() {
    return [
        {
            id: 1,
            company: 'Richard & Sons',
            commission: '2.00',
            expenseForProject: '1.000',
            customerPayment: '4,509.00',
            total: '3,509.00',
            date: 'January 22, 2023'
        },
        {
            id: 2,
            company: 'Planet Express',
            commission: '0.00',
            expenseForProject: '4,000.00',
            customerPayment: '3,999.00',
            total: '1.00',
            date: 'January 22, 2023'

        },
        {
            id: 3,
            company: 'Window Cleaning',
            commission: '3.00',
            expenseForProject: '200.00',
            customerPayment: '3,000.00',
            total: '2,800.00',
            date: 'January 22, 2023'
        },
    ]
}

export async function allRevenue() {
    const allInvoices = await invoices();
    const allRevenue = await revenue();

    const findRevenueInInvoice = allInvoices.map((item) => {
        const makeRevenue = { id: item.id, ...item.lastInvoice }
        return makeRevenue
    });

    return [...allRevenue, ...findRevenueInInvoice]
}