import { Injectable } from "@angular/core";
import { Expense } from "../models/expense.interface";

@Injectable({ providedIn: "root" })
export class BudgetService {
  private expenses: Expense[] = [];

  getExpenses() {}

  addExpenses(exp: Expense): void {
    this.expenses.push(exp);
  }

  deleteExpense() {}

  getTotal() {}

}
