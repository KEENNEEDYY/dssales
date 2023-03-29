import SalesSummaryCard from './sales-summary-card/intex';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import './styles.css';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard icon={<DoneIcon />} label="Média" value={534.0} />
      <SalesSummaryCard icon={<SyncIcon />} label="Quantidade" value={4434} />
      <SalesSummaryCard icon={<BarChartIcon />} label="Mínima" value={434.0} />
      <SalesSummaryCard icon={<AvatarIcon />} label="Máxima" value={3434.0} />
    </div>
  );
}

export default SalesSummary;
