import ExpenseForm from '@/components/forms/update/ExpenseForm';
import { findExpense } from '@/actions/expenses'; 

export default async function Page({ params }: any) {
    const { id } = await params;
    const expense = await findExpense(id);

    return (
        <>
            <ExpenseForm data={expense} />
        </>
    )
};