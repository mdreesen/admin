import { group } from '@/actions/groupExampleData';

export async function expenses() {
    const groupCustomers = await group();
    return groupCustomers.expenses
}

export async function findExpense(data: string) {
  const allExpenses = await expenses();

  const expense = allExpenses.filter((item) => {
      const idToString = item.id.toString()
      return idToString.includes(data)
  });

  return expense[0];
}