export const ROUTES_NAMES = {
  DASHBOARD: 'Início',
  CUSTOMERS: 'Clientes',
  SUPPLIERS: 'Fornecedores',
  INVOICES: 'Faturas',
};

export const ROUTES_PATHS = {
  DASHBOARD: '/',
  CUSTOMERS: '/customers',
  SUPPLIERS: '/suppliers',
  INVOICES: '/invoices',
};

export const routesMap = new Map<string, string>([
  [ROUTES_PATHS.DASHBOARD, ROUTES_NAMES.DASHBOARD],
  [ROUTES_PATHS.CUSTOMERS, ROUTES_NAMES.CUSTOMERS],
  [ROUTES_PATHS.SUPPLIERS, ROUTES_NAMES.SUPPLIERS],
  [ROUTES_PATHS.INVOICES, ROUTES_NAMES.INVOICES],
]);
