import CustomerForm from '@/components/forms/update/CustomerForm';
import { findCustomer } from '@/actions/customers'; 

export default async function Page({ params }: any) {
  const { id } = await params;
  const customer = await findCustomer(id);

  return (
    <>
      <CustomerForm data={customer} />
    </>
  )
}
