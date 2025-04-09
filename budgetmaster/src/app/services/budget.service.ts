import { Injectable } from "@angular/core";
import { Expense } from "../models/expense.interface";

@Injectable({ providedIn: "root" })
export class BudgetService {
  private expenses: Expense[] = [];

  constructor() {
    const saved = localStorage.getItem("expenses");
    if (saved) this.expenses = JSON.parse(saved);
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  addExpenses(exp: Expense): void {
    this.expenses.push(exp);
    this.save();
  }

  deleteExpense(id: string): void {
    this.expenses = this.expenses.filter(e => e.id !== id);
    this.save();
  }

  getTotal(): number {
    return this.expenses.reduce((sum, e) => sum + e.amount, 0);
  }

  private save(): void {
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  }

}
