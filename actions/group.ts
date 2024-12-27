import { currentYear } from "@/lib/date"

export function customers() {
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
            postal_code: '59901',
            createdAt: 'Fri Feb 09 2024 20:18:45 GMT+0000 (Coordinated Universal Time)',
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
            postal_code: '59901',
            createdAt: 'Fri Feb 09 2024 20:18:45 GMT+0000 (Coordinated Universal Time)',
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
            postal_code: '59901',
            createdAt: 'Fri Feb 09 2024 20:18:45 GMT+0000 (Coordinated Universal Time)',
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
            postal_code: '59901',
            createdAt: 'Fri Feb 09 2024 20:18:45 GMT+0000 (Coordinated Universal Time)',
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
            postal_code: '59901',
            createdAt: 'Fri Feb 09 2024 20:18:45 GMT+0000 (Coordinated Universal Time)',
        },
    ]
};

export function expenses() {
    return [
        {
            id: 1,
            name: 'Employees',
            value: 15000,
            createdBy: 'Leslie Alexander',
            created: 'March 17, 2023',
        },
        {
            id: 2,
            name: 'Materials',
            value: 8000,
            createdBy: 'Leslie Alexander',
            created: 'May 5, 2023',
        },
        {
            id: 3,
            name: 'Vehicles',
            value: 5000,
            createdBy: 'Courtney Henry',
            created: 'May 25, 2023',
        },
        {
            id: 4,
            name: 'Rent',
            value: 5120,
            createdBy: 'Leonard Krasner',
            created: 'June 7, 2023',
        },
        {
            id: 5,
            name: 'Bills',
            value: 1000,
            createdBy: 'Courtney Henry',
            created: 'June 10, 2023',
        },
    ]
};

export function invoices() {
    return [
        {
            id: 11211,
            name: 'Tuple',
            lastInvoice: { company: 'Tuple', commission: '0.00', expenseForProject: '0.00', date: 'January 22, 2023', dateTime: '2023-01-22', customerPayment: '14,000.00', total: '14,000.00', status: 'Paid' },
        },
        {
            id: 224554,
            name: 'SavvyCal',
            lastInvoice: { company: 'SavvyCal', commission: '0.00', expenseForProject: '0.00', date: 'January 22, 2023', dateTime: '2023-01-22', customerPayment: '14,000.00', total: '14,000.00', status: 'Withdraw' },
        },
        {
            id: 345654,
            name: 'Reform',
            lastInvoice: { company: 'Reform', commission: '0.00', expenseForProject: '0.00', date: 'January 22, 2023', dateTime: '2023-01-22', customerPayment: '14,000.00', total: '14,000.00', status: 'Active' },
        },
        {
            id: 434543,
            name: 'Reform',
            lastInvoice: { company: 'Reform', commission: '0.00', expenseForProject: '0.00', date: 'January 22, 2023', dateTime: '2023-01-22', customerPayment: '14,000.00', total: '14,000.00', status: 'Paid' },
        },
        {
            id: 576567,
            name: 'Blarg',
            lastInvoice: { company: 'Blarg', commission: '0.00', expenseForProject: '0.00', date: 'January 22, 2023', dateTime: '2023-01-22', customerPayment: '14,000.00', total: '14,000.00', status: 'Overdue' },
        },
        {
            id: 65456,
            name: 'Tripple',
            lastInvoice: { company: 'Tripple', commission: '0.00', expenseForProject: '0.00', date: 'January 22, 2023', dateTime: '2023-01-22', customerPayment: '14,000.00', total: '14,000.00', status: 'Paid' },
        },
    ]
};

export function revenue() {
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
};

export function settings() {
    return {
        id: 1,
        showCustomers: true,
        showExpenses: true,
        showInvoices: true,
        showRevenue: true,
        showRevenueChart: true,
        showCustomersChart: true,
        showExpensesChart: true,
        showTeam: true,
    }
};

export function team() {
    return [
        {
            id: 1,
            first_name: 'Michael',
            last_name: 'McFlurry',
            title: 'Developer',
            department: 'Development',
            email: 'm.flurry@example.com',
            telephone: '219-241-0061',
            role: 'admin',
            status: 'terminated',
            country: 'United States',
            street: '123 Alpha Rd',
            city: 'Kalispell',
            state: 'Montana',
            postal_code: '59901'
        },
        {
            id: 2,
            first_name: 'Phillip',
            last_name: 'Fry',
            title: 'Owner',
            department: '',
            email: 'p.fry@example.com',
            telephone: '406-607-3301',
            role: 'member',
            status: 'training',
            country: 'Canada',
            street: '123 tella Rd',
            city: 'Cambridge',
            state: 'Onterio',
            postal_code: '39354'

        },
        {
            id: 3,
            first_name: 'Quin',
            last_name: 'Geans',
            title: 'Admin',
            department: 'Security',
            email: 'q.geans@example.com',
            telephone: '406-607-9087',
            role: 'admin',
            status: 'active',
            country: 'United States',
            street: '123 Riley Rd',
            city: 'Portage',
            state: 'Ohio',
            postal_code: '45415'
        },
    ]
};

export async function group() {

    return {
        id: 123456789,
        group_name: 'Awesome Group INC.',
        customers: customers(),
        expenses: expenses(),
        invoices: invoices(),
        revenue: revenue(),
        team: team(),
        settings: settings()
    }
}