import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './table'

const meta = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const invoices = [
  { id: 'INV001', status: 'Paid', method: 'Credit Card', amount: 250 },
  { id: 'INV002', status: 'Pending', method: 'PayPal', amount: 150 },
  { id: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: 350 },
  { id: 'INV004', status: 'Paid', method: 'Credit Card', amount: 450 },
]

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>A list of recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell className="font-medium">{inv.id}</TableCell>
            <TableCell>{inv.status}</TableCell>
            <TableCell>{inv.method}</TableCell>
            <TableCell className="text-right">${inv.amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            ${invoices.reduce((s, i) => s + i.amount, 0).toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const SelectedRow: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
        </TableRow>
        <TableRow data-state="selected">
          <TableCell>INV002 (selected)</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV003</TableCell>
          <TableCell>Unpaid</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const Empty: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
            No results.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const WideScrollable: Story = {
  render: (args) => (
    <div className="w-96">
      <Table {...args}>
        <TableHeader>
          <TableRow>
            {Array.from({ length: 10 }, (_, i) => (
              <TableHead key={i}>Column {i + 1}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 3 }, (_, r) => (
            <TableRow key={r}>
              {Array.from({ length: 10 }, (_, c) => (
                <TableCell key={c}>
                  R{r + 1}C{c + 1}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}
