import {invoices} from '@/actions/invoices';
import { group } from '@/actions/groupExampleData';

export async function revenue() {
    const groupCustomers = await group();
    return groupCustomers.revenue
}

export async function revenuePerMonth() {
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

export async function allRevenue() {
    const allInvoices = await invoices();
    const allRevenue = await revenue();

    const findRevenueInInvoice = allInvoices.map((item) => {
        const makeRevenue = { id: item.id, ...item.lastInvoice }
        return makeRevenue
    });

    return [...allRevenue, ...findRevenueInInvoice]
}