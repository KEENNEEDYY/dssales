import { useEffect, useMemo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartSeriesData, FilterData, SalesByDateData } from '../../types';
import { formatDate, formatPrice } from '../../utils/formatters';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { buildChartSeries, chartOptions, sumSalesByDate } from './helpers';
import './styles.css';

type Props = {
  filterData?: FilterData;
};

function SalesByDate({ filterData }: Props) {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByDateData[]>('/sales/by-date', { params })
      .then((response) => {
        setChartSeries(buildChartSeries(response.data));
        setTotalSum(sumSalesByDate(response.data));
      })
      .catch(() => {
        console.error('Error to fetch sales by date');
      });
  }, [params]);

  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Evolução das vendas</h4>
        {filterData?.dates && (
          <span className="sales-by-date-period">
            {formatDate(filterData?.dates?.[0])} até {formatDate(filterData?.dates?.[1])}
          </span>
        )}
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">{formatPrice(totalSum)}</h2>
          <span className="sales-by-date-quantity-label">Vendas no período</span>
          <span className="sales-by-date-quantity-description">
            O gráfico mostra as vendas em todas as lojas
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Vendas', data: chartSeries }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDate;
