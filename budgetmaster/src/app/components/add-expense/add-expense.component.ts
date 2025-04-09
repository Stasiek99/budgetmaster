import { Component } from '@angular/core';
import { BudgetService } from "../../services/budget.service";

import { MatCard } from "@angular/material/card";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
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
  name = "";
  amount: number | null = null;

  constructor(private budgetService: BudgetService) {}

  add(): void {
    if (this.name && this.amount) {
      this.budgetService.addExpenses({
        id: this.generateId(),
        name: this.name,
        amount: this.amount,
        date: new Date()
      });
      this.name = "";
      this.amount = null;
    }
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
