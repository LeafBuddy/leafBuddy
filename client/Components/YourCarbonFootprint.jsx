const React = require('react');

export default function YourCarbonFootprint() {
  return (
    <div className='rightChart'>
      <div className='footprintNumber'>{529}</div>
      <div className='footprintMeasure'>kg</div>
      <div className='footprintLabel'>Your Carbon Footprint</div>
    </div>
  );
}
