import PropTypes from 'prop-types'

const SingleResume = ({ element }) => {
  const { title, duration, subTitle, text} = element;
  return (
    <div className="st-resume-timeline">
      <h3 className="st-resume-timeline-title">{title}</h3>
      <div className="st-resume-timeline-duration">{duration}</div>
      <h4 className="st-resume-timeline-subtitle">{subTitle}</h4>
      <div className="st-resume-timeline-text"><p>{text}</p></div>
    </div>
  )
}

SingleResume.propTypes = {
  element: PropTypes.object,
}

export default SingleResume;
