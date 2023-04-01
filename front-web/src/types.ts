export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByDateData = {
  date: string;
  sum: number;
};

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
};

export type SalesSummaryData = {
  sum?: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type SalesByStoreData = {
  storeName: string;
  sum: number;
};

export type SalesByPaymentMethodData = {
  description: string;
  sum: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
