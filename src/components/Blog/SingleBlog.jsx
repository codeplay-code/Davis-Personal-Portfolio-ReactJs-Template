import { Link } from 'react-router-dom';
import './Blog.scss';
import PropTypes from 'prop-types';

const SingleBlog = ({ element }) => {
  const { imgLink, title, date, designation, href } = element;
  return (
    <div className={`st-post-single st-style1`}>
      <Link to={href} className="st-post-thumb st-zoom">
        <img src={imgLink} className="st-zoom-in" alt="blog1" />
      </Link>
      <div className="st-post-info">
        <div className="st-post-date">
          By:
          <a href="blog-details.html" className="st-post-author">
            {designation}
          </a>
          <span className="st-post-date-divider">|</span>
          <span className="st-post-publish-date">{date}</span>
        </div>
        <h4 className="st-post-title">
          <Link to={href}>{title}</Link>
        </h4>
      </div>
    </div>
  );
};

SingleBlog.propTypes = {
  element: PropTypes.object,
};

export default SingleBlog;
