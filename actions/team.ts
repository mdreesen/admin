export async function team() {
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

export async function findTeamMember(data: string) {
    const allMembers = await team();

    const member = allMembers.filter((item) => {
        const idToString = item.id.toString()
        return idToString.includes(data)
    });

    return member[0];
}