const React = require('react');
const { useEffect } = require('react');

const YourCarbonFootprint = (props) => {
  useEffect(() => {
    console.log('Your carbonFootprint:', props.props.carbonFootPrint7d);
  });
  return (
    <div className='rightChart'>
      <div className='footprintNumber'>{props.props.carbonFootPrint7d}</div>
      <div className='footprintMeasure'>kg</div>
      <div className='footprintLabel'>Your Carbon Footprint</div>
    </div>
  );
};

module.exports = YourCarbonFootprint;
