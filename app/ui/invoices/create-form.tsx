import { CustomerField } from '@/app/lib/definitions';
import { createInvoice } from '@/app/lib/actions';
import InvoiceFormFields from '@/app/ui/invoices/invoice-form';

export default function Form({ customers }: { customers: CustomerField[] }) {
  return (
    <InvoiceFormFields
      customers={customers}
      action={createInvoice}
      submitLabel="Create Invoice"
    />
  );
}
