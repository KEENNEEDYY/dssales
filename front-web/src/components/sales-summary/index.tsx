import SalesSummaryCard from './sales-summary-card/intex';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import './styles.css';
import { FilterData, SalesSummaryData } from '../../types';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};

function SalesSummary({ filterData }: Props) {
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales summary');
      });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard icon={<DoneIcon />} label="Média" value={summary?.avg?.toFixed(2)} />
      <SalesSummaryCard icon={<SyncIcon />} label="Quantidade" value={summary?.count} />
      <SalesSummaryCard icon={<BarChartIcon />} label="Mínima" value={summary?.min} />
      <SalesSummaryCard icon={<AvatarIcon />} label="Máxima" value={summary?.max} />
    </div>
  );
}

export default SalesSummary;
