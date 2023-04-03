import { useEffect, useMemo, useState } from 'react';
import './styles.css';
import { FilterData, Sale, SpringPage } from '../../types';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { formatDate, formatGender, formatPrice } from '../../utils/formatters';

type Props = {
  filterData?: FilterData;
};

const exptraParams = {
  page: 0,
  size: 12,
  sort: 'date,desc'
};

function SalesTable({ filterData }: Props) {
  const [sales, setSales] = useState<SpringPage<Sale>>();
  const params = useMemo(() => buildFilterParams(filterData, exptraParams), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SpringPage<Sale>>('/sales', { params })
      .then((response) => {
        setSales(response.data);
      })
      .catch(() => {
        console.error('Error to fech sales');
      });
  }, [params]);

  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {sales &&
            sales.content.map((sale) => (
              <tr key={sale.id}>
                <td>#{sale.id}</td>
                <td>{formatDate(sale.date)}</td>
                <td>{formatGender(sale.gender)}</td>
                <td>{sale.categoryName}</td>
                <td>{sale.storeName}</td>
                <td>{sale.paymentMethod}</td>
                <td>{formatPrice(sale.total)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
