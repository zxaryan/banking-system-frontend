import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
 {
  path: '',
  canActivate: [authGuard],
  loadComponent: () =>
    import('./layout/main-layout/main-layout')
      .then(m => m.MainLayout),

  children: [
    {
      path: 'dashboard',
      loadComponent: () =>
        import('./features/dashboard/dashboard/dashboard')
          .then(m => m.Dashboard)
    },

    {
      path: 'accounts',
      loadComponent: () =>
        import('./features/accounts/account-list/account-list')
          .then(m => m.AccountList)
    },

    {
      path: 'accounts/:id',
      loadComponent: () =>
        import('./features/accounts/account-details/account-details')
          .then(m => m.AccountDetails)
    },

    {
      path: 'accounts/create',
      loadComponent: () =>
        import('./features/accounts/create-account/create-account')
          .then(m => m.CreateAccount)
    },

    {
      path: 'transactions',
      loadComponent: () =>
        import('./features/transactions/transaction-history/transaction-history')
          .then(m => m.TransactionHistory)
    },

    {
      path: 'deposit',
      loadComponent: () =>
        import('./features/transactions/deposit/deposit')
          .then(m => m.Deposit)
    },

    {
      path: 'withdraw',
      loadComponent: () =>
        import('./features/transactions/withdraw/withdraw')
          .then(m => m.Withdraw)
    },

    {
      path: 'transfer',
      loadComponent: () =>
        import('./features/transactions/transfer/transfer')
          .then(m => m.Transfer)
    },

    {
      path: 'customers',
      loadComponent: () =>
        import('./features/customers/customer-list/customer-list')
          .then(m => m.CustomerList)
    },

    {
      path: 'profile',
      loadComponent: () =>
        import('./features/users/user-profile/user-profile')
          .then(m => m.UserProfile)
    }
  ]
}
]