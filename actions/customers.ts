export async function customers() {
    return [
        {
            id: 1,
            name: 'Lindsay Walton',
            first_name: 'Lindsay',
            last_name: 'Walton',
            title: 'Owner',
            business: 'Property Owner (Great Bear Property)',
            email: 'lindsay@example.com',
            phone: '219-241-0061',
            country: 'United States',
            street: '123 Alpha Rd',
            city: 'Kalispell',
            state: 'Montana',
            postal_code: '59901'
        },
        { 
            id: 2,
            name: 'Greg Hill',
            first_name: 'Lindsay',
            last_name: 'Walton',
            title: 'Owner', 
            business: 'Lawyer INC.', 
            email: 'Greg@example.com', 
            phone: '406-607-0061',
            country: 'United States',
            street: '123 Alpha Rd',
            city: 'Kalispell',
            state: 'Montana',
            postal_code: '59901'
        },
        { 
            id: 3,
            name: 'Tess Willard',
            first_name: 'Tess',
            last_name: 'Willard',
            title: 'Owner', 
            business: 'Window Cleaning Business', 
            email: 'tess@example.com', 
            phone: '406-607-2271',
            country: 'United States',
            street: '123 Alpha Rd',
            city: 'Kalispell',
            state: 'Montana',
            postal_code: '59901'
        },
        { 
            id: 4,
            name: 'Will Brown',
            first_name: 'Will',
            last_name: 'Brown',
            title: 'Employee', 
            business: 'Window Cleaning Business', 
            email: 'will@example.com', 
            phone: '406-607-8032',
            country: 'United States',
            street: '123 Alpha Rd',
            city: 'Kalispell',
            state: 'Montana',
            postal_code: '59901'
        },
        { 
            id: 5,
            name: 'Thom Walker',
            first_name: 'Thom',
            last_name: 'Walker',
            title: 'Architect', 
            business: 'Straight Line INC.', 
            email: 'thom@example.com', 
            phone: '406-607-0092',
            country: 'United States',
            street: '123 Alpha Rd',
            city: 'Kalispell',
            state: 'Montana',
            postal_code: '59901'
        },
    ]
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
    console.log('server team', data);
    const users = await customers();

    const user = users.filter((item) => {
        const idToString = item.id.toString()
        return idToString.includes(data)
    });

    return user[0];
}