import PropTypes  from 'prop-types';
import './SectionHeading.scss';

const SectionHeading = ({title}) => {
  return (
    <div className="container">
      <div className={`st-section-heading st-style1`} data-aos="fade-up" data-aos-duration="800">
        <h4 className="st-section-heading-title">{title}</h4>
        <h2 className="st-section-heading-subtitle">{title}</h2>
      </div>
      <div className="st-height-b25 st-height-lg-b25"></div>
    </div>
  )
}

SectionHeading.propTypes = {
  title: PropTypes.string,
};
export default SectionHeading;
