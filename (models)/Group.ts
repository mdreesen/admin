import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const customerSchema = new Schema(
    {
        name: String,
        first_name: String,
        last_name: String,
        title: String,
        business: String,
        email: String,
        phone: String,
        country: String,
        street: String,
        city: String,
        state: String,
        postal_code: String,
        createdBy: String,
        updatedAt: String
    }, { timestamps: true });

const expenseSchema = new Schema(
    {
        name: String,
        value: Number,
        createdBy: String,
        created: String,
    }, { timestamps: true });

const invoicesSchema = new Schema(
    {
        name: String,
        company: String,
        commission: String,
        expenseForProject: String,
        date: String,
        dateTime: String,
        customerPayment: String,
        total: String,
        status: String,
        createdBy: String,
        created: String,
    }, { timestamps: true });

const revenueSchema = new Schema(
    {
        company: String,
        commission: String,
        expenseForProject: String,
        customerPayment: String,
        total: String,
        date: String
    }, { timestamps: true });

const settingsSchema = new Schema(
    {
        showCustomers: Boolean,
        showExpenses: Boolean,
        showInvoices: Boolean,
        showRevenue: Boolean,
        showRevenueChart: Boolean,
        showCustomersChart: Boolean,
        showExpensesChart: Boolean,
        showTeam: Boolean,
    }, { timestamps: true });

const teamSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        password: String,
        title: String,
        department: String,
        email: String,
        telephone: String,
        role: String,
        status: String,
        country: String,
        street: String,
        city: String,
        state: String,
        postal_code: String,
    }, { timestamps: true });

const groupSchema = new Schema(
    {
        group_name: String,
        customers: [customerSchema],
        expenses: [expenseSchema],
        invoices: [invoicesSchema],
        revenue: [revenueSchema],
        team: [teamSchema],
        settings: [settingsSchema],
    }, { timestamps: true });

const Group = mongoose.models.Group || mongoose.model("Group", groupSchema);
export default Group;