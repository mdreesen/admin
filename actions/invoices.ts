import { group } from '@/actions/groupExampleData';

export async function invoices() {
    const groupCustomers = await group();
    return groupCustomers.invoices
}

export async function findInvoices(data: string) {
  const allInvoices = await invoices();

  const findInvoice = allInvoices.filter((item) => {
      const idToString = item.id.toString()
      return idToString.includes(data)
  });

  return findInvoice[0];
}