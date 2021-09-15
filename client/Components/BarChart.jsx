const React = require('react');
import TransactionContainer from '../Container/TransactionContainer';
const { useEffect } = require('react');
const {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
} = require('recharts');

const data = [];

const Co2Chart = (props) => {
  const obj = {};
  useEffect(() => {
    props.props.forEach((el) => {
      if (!obj.transactionDate) {
        obj[el.transactionDate] = el.carbonAmount;
      } else {
        obj[el.transactionDate] += el.carbonAmount;
      }
    });
    Object.entries(obj).forEach((el) => {
      const newObj = {
        date: el[0],
        kg: Math.round(el[1], 1),
      };
      data.push(newObj);
    });
  }, []);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis type='number' domain={['auto', 'auto']} />
        <Legend />
        <Bar dataKey='kg' fill='#8884d8'>
          <LabelList dataKey='kg' position='middle' />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

module.exports = Co2Chart;
