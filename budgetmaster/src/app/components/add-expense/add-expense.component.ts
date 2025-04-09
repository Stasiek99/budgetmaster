import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { BudgetService } from "../../services/budget.service";
import { Expense } from "../../models/expense.interface";

import { MatCard } from "@angular/material/card";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";


@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [
    MatCard,
    MatFormField,
    MatInput,
    FormsModule,
    MatButton,
    MatFormFieldModule,
  ],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent {
  constructor(private budgetService: BudgetService) {}

  name: string = '';
  amount: number | null = null;

  add(): void {
    const expense: Expense = {
      id: this.generateId(),
      name: this.name,
      amount: this.amount || 0,
      date: new Date()
    };
    this.budgetService.addExpenses(expense);
    this.name = '';
    this.amount = null;
  }

  private generateId(length = 10): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
