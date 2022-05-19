import './style.css';
import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helpers';

const initialData = [
  { x: '2022-01-01', y: 100 },
  { x: '2022-03-10', y: 50 },
  { x: '2022-04-25', y: 79 },
  { x: '2022-08-16', y: 43 },
  { x: '2022-01-17', y: 300 }
];

function SalesByDate() {
  return (
    <>
      <div className="base-card sales-by-date-container">
        <div>
          <h4 className="sales-by-date-title">Evolução de vendas</h4>
          <span className="sales-by-date-period">01/01/2017 a 31/01/2017</span>
        </div>
        <div className="sales-by-date-data">
          <div className="sales-by-date-quantity-container">
            <h2 className="sales-by-date-quantity">464.988,00</h2>
            <span className="sales-by-date-quantity-label">Vendas no período</span>
            <span className="sales-by-date-quantity-description">
              O gráfico mostra as vendas em todas as lojas
            </span>
          </div>
          <div className="sales-by-date-chart">
            <ReactApexChart
              options={chartOptions}
              series={[{ name: 'vendas', data: initialData }]}
              type="bar"
              height={240}
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesByDate;
