import { SalesByPaymentMethodData, SalesByStoreData } from './types';

export const buildSalesByStoreChart = (sales: SalesByStoreData[]) => {
  const labels = sales.map((sale) => sale.storeName);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};

export const buildSalesByPaymentMethod = (sales: SalesByPaymentMethodData[]) => {
  const labels = sales.map((sale) => sale.description);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
