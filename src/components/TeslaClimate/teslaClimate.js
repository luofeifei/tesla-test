import React from 'react';
import './teslaClimate.css';
const TeslaClimate = (props) => (
  <div className="tesla-climate">
    <label
      className={`tesla-climate__item ${props.value ? 'tesla-climate__item--active' : '' }  ${!props.limit ? 'tesla-heat':''}`}
    >
      <p>{props.limit ? '制冷' : '取暖'} {props.value ? '开启' : '关闭'}</p>
      <i className="tesla-climate__icon"></i>
      <input
        type="checkbox"
        name="climate"
        checked={props.value}
        onChange={(e) => {props.handleChangeClimate()}}
      />
    </label>
  </div>
);
TeslaClimate.propTypes = {
  value: React.PropTypes.bool,
  limit: React.PropTypes.bool,
  handleChangeClimate: React.PropTypes.func
}
export default TeslaClimate;