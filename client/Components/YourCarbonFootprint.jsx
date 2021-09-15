const React = require('react');

const YourCarbonFootprint = () => {
  return (
    <div className='rightChart'>
      <div className='footprintNumber'>{529}</div>
      <div className='footprintMeasure'>kg</div>
      <div className='footprintLabel'>Your Carbon Footprint</div>
    </div>
  );
}

module.exports = YourCarbonFootprint;
