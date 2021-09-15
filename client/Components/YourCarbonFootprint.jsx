const React = require('react');
const { useEffect, useState } = require('react');

const YourCarbonFootprint = (props) => {
  const [transactions] = useState(props.props);
  const [carbonFootPrint7d, setFootprint] = useState(0);
  useEffect(() => {
    const result = transactions.reduce((acc, curr) => {
      return (acc += curr.carbonAmount);
    }, 0);
    setFootprint(result);
  });
  return (
    <div className='rightChart'>
      <div className='footprintNumber'>{carbonFootPrint7d.toFixed(1)}</div>
      <div className='footprintMeasure'>kg</div>
      <div className='footprintLabel'>Your 2 week Carbon Footprint</div>
    </div>
  );
};

module.exports = YourCarbonFootprint;
