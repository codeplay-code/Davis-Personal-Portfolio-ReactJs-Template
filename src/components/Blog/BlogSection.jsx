import PropTypes from 'prop-types';
import "./Blog.scss";
import SectionHeading from '../SectionHeading/SectionHeading';
import Carousel from '../Slider/Carousel';

const Blog = ({ data }) => {
  return (
    <section id="blog">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"Blogs"} />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <Carousel data={data} />
      </div>
      <div className="st-height-b95 st-height-lg-b75"></div>
    </section>
  )
}

Blog.propTypes = {
  variant: PropTypes.string,
  data: PropTypes.object
}

export default Blog
