import './Review.scss';
import PropTypes from 'prop-types';

const SingleReview = ({element}) => {
  const {imgLink,title,designation,text} = element;
  return (
    <div className={`st-testimonial st-style1 `} data--duration="0.8s" data--delay="0.2s">
      <div className="st-testimonial-text">
        <p>{text}</p>
        <div className="st-quote"><img src="/images/icon/quote.png" alt="quote" /></div>
      </div>
      <div className="st-testimonial-info">
        <div className="st-testimonial-img"><img src={imgLink} alt="client1" /></div>
        <div className="st-testimonial-meta">
          <h4 className="st-testimonial-name">{title}</h4>
          <div className="st-testimonial-designation">{designation}</div>
        </div>
      </div>
    </div>
  )
}
SingleReview.propTypes = {
  element: PropTypes.object
}

export default SingleReview;
