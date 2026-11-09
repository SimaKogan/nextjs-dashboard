'use client';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import { updateInvoice } from '@/app/lib/actions';
import InvoiceFormFields from '@/app/ui/invoices/invoice-form';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  return (
    <InvoiceFormFields
      customers={customers}
      invoice={invoice}
      action={updateInvoiceWithId}
      submitLabel="Edit Invoice"
    />
  );
}
