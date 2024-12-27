import { group } from '@/actions/group';

export async function team() {
    const groupCustomers = await group();
    return groupCustomers.team
}

export async function findTeamMember(data: string) {
    const allMembers = await team();

    const member = allMembers.filter((item) => {
        const idToString = item.id.toString()
        return idToString.includes(data)
    });

    return member[0];
}