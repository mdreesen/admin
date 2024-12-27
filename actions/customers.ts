import { group } from '@/actions/group';

export async function customers() {
    const groupCustomers = await group();
    return groupCustomers.customers
}

export async function customersPerMonth() {
    return [
        {
            name: "January",
            "Customers per month": 1000,
        },
        {
            name: "February",
            "Customers per month": 2000,
        },
        {
            name: "March",
            "Customers per month": 5000,
        },
        {
            name: "April",
            "Customers per month": 15000,
        },
        {
            name: "May",
            "Customers per month": 14000,
        },
        {
            name: "June",
            "Customers per month": 16000,
        },
        {
            name: "July",
            "Customers per month": 12000,
        },
        {
            name: "August",
            "Customers per month": 10000,
        },
        {
            name: "September",
            "Customers per month": 18000,
        },
        {
            name: "October",
            "Customers per month": 16000,
        },
        {
            name: "November",
            "Customers per month": 11000,
        },
        {
            name: "December",
            "Customers per month": 9000,
        },
    ]
}

export async function findCustomer(data: string) {
    const users = await customers();

    const user = users.filter((item) => {
        const idToString = item.id.toString()
        return idToString.includes(data)
    });

    return user[0];
}