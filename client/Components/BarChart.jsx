const React = require('react');
const { PureComponent } = require('react');
const {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
} = require('recharts');

const data = [
  {
    name: 'Jan',
    kg: 400,
  },
  {
    name: 'Feb',
    kg: 210,
  },
  {
    name: 'Mar',
    kg: 290,
  },
  {
    name: 'Apr',
    kg: 100,
  },
  {
    name: 'May',
    kg: 181,
  },
  {
    name: 'Jun',
    kg: 500,
  },
  {
    name: 'Jul',
    kg: 50,
  },
  {
    name: 'Aug',
    kg: 250,
  },
  {
    name: 'Sep',
    kg: 50,
  },
  {
    name: 'Oct',
    kg: 50,
  },
  {
    name: 'Nov',
    kg: 50,
  },
  {
    name: 'Dec',
    kg: 50,
  },
];

const Co2Chart = () => {
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
        <YAxis />
        <Legend />
        <Bar dataKey='kg' fill='#8884d8'>
          <LabelList dataKey='kg' position='top' />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

module.exports = Co2Chart;