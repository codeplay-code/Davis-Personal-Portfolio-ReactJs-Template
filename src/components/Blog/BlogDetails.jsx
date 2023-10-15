import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import './BlogDetails.scss';
import './Blog.scss';
import './Comment.scss';
import '../Contact/Contact.scss';
import Carousel from '../Slider/Carousel';

const BlogDetails = () => {
  const blogDetails = {
    heroBg: '/images/hero-bg17.jpg',
    useFor: 'image-slider',
    sliderSetting: {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
    sliderImages: [
      {
        imgLink: '/images/hero-bg3.jpg',
      },
      {
        imgLink: '/images/hero-bg4.jpg',
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="st-content">
      <div
        className="st-page-heading st-bg"
        style={{ backgroundImage: `url(${blogDetails.heroBg})` }}
      >
        <div className="container">
          <div className="st-page-heading-in text-center">
            <h1 className="st-page-heading-title">
              Dynamically procrastinate B2C users <br />
              after installed base benefits..
            </h1>
            <div className="st-post-label">
              <span>
                By <Link to="">Mary Neo</Link>
              </span>
              <span>Mar 15, 2020</span>
            </div>
          </div>
        </div>
      </div>
      {/* .st-page-heading */}
      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-md-1">
            <div className="st-post-details st-style1">
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps.
              </p>
              <img
                className="st-zoom-in"
                src="/images/hero-bg3.jpg"
                alt="blog1"
              />
              <h2>Collaboratively administrate empowered.</h2>
              <div className="st-post-info">
                <div className="st-post-text">
                  <p>
                    Podcasting operational change management inside of workflows
                    to establish a framework. Taking seamless key performance
                    indicators offline to maximise the long tail. Keeping your
                    eye on the ball while performing a deep dive on the start-up
                    mentality to derive convergence on cross-platform
                    integration.
                  </p>
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. Dramatically visualize
                    customer directed convergence without revolutionary ROI.
                  </p>
                  <p>
                    Podcasting operational change management inside of workflows
                    to establish a framework. Taking seamless key performance
                    indicators offline to maximise the long tail.
                  </p>
                  <h2>Blog video post can also added.</h2>
                  {/* For Youtube */}
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      width={'100%'}
                      height={459}
                      src="https://www.youtube.com/embed/vGOL7ZvuGMc"
                      allowFullScreen=""
                    ></iframe>
                  </div>
                  {/* For Vimeo */}
                  {/* <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" width="816" height="459" src="https://player.vimeo.com/video/172077385?title=0&st-byline=0&portrait=0&color=EE5A3F&autoplay=0&loop=0&wmode=transparent" allowfullscreen></iframe>
          </div> */}
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. Dynamically innovate
                    resource-leveling customer service for state of the art
                    customer service.
                  </p>
                  <blockquote>
                    Integer accumsan arcu ligula, eget dictum augue egestas sed.
                    Curabitur bibendum, lorem ac dapibus pellentesque, justo
                    lectus bibendum enim.
                    <small>
                      by: <span>Mark Parker</span>
                    </small>
                  </blockquote>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration some
                    even slightly believable. If you are going to use passage of
                    Lorem Ipsum.
                  </p>
                  <h2>Phosfluorescently engage worldwide?</h2>
                  <p>
                    Proactively envisioned multimedia based expertise and
                    cross-media growth strategies. Seamlessly visualize quality
                    intellectual capital without superior collaboration and
                    idea-sharing. Holistically pontificate installed base
                    portals after maintainable products.
                  </p>
                  <Carousel data={blogDetails} />
                  {/* .st-slider */}
                  <div className="st-height-b20 st-height-lg-b20" />
                  <p>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information highway will close the loop
                    on focusing solely on the bottom line.
                  </p>
                </div>
                <div className="st-height-b35 st-height-lg-b35" />
                <div className="st-post-meta">
                  <div className="st-post-tages">
                    <h4 className="st-post-tage-title">Tags:</h4>
                    <ul className="st-post-tage-list st-mp0">
                      <li>
                        <Link to="#">App</Link>
                      </li>
                      <li>
                        <Link to="#">php</Link>
                      </li>
                      <li>
                        <Link to="#">web</Link>
                      </li>
                      <li>
                        <Link to="#">business</Link>
                      </li>
                      <li>
                        <Link to="#">agency</Link>
                      </li>
                      <li>
                        <Link to="#">development</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="st-post-share">
                    <h4 className="st-post-share-title">Share:</h4>
                    <div className="st-post-share-btn-list">
                      <Link to="#">
                        <Icon icon="fa6-brands:facebook-f" />
                      </Link>
                      <Link to="#">
                        <Icon icon="fa6-brands:twitter" />
                      </Link>
                      <Link to="#">
                        <Icon icon="fa6-brands:behance" />
                      </Link>
                      <Link to="#">
                        <Icon icon="fa6-brands:instagram" />
                      </Link>
                      <Link to="#">
                        <Icon icon="fa6-brands:pinterest-p" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="st-height-b60 st-height-lg-b60" />
              </div>
              <div className="st-post-btn-gropu">
                <Link
                  to="#"
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Previous Post
                </Link>
                <Link
                  to="#"
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Next Post
                </Link>
              </div>
            </div>
            <div className="st-height-b60 st-height-lg-b60" />
            <div className="comments-area">
              <div className="comment-list-outer">
                <h2 className="comments-title">Comments(3)</h2>
                <ol className="comment-list">
                  <li className="comment">
                    <div className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-author">
                          <img
                            src="/images/comment1.jpg"
                            alt="comment1"
                            className="avatar"
                          />
                          <Link to="" className="nm">
                            Smith Jhon
                          </Link>
                        </div>
                        {/* .comment-author */}
                        <div className="comment-metadata">
                          <Link to="">
                            <span>15 Jan, 2020</span>
                          </Link>
                        </div>
                        {/* .comment-metadata */}
                      </div>
                      {/* .comment-meta */}
                      <div className="comment-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="reply">
                        <Link to="" className="comment-reply-link">
                          Reply
                        </Link>
                      </div>
                    </div>
                    <ol className="children">
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-meta">
                            <div className="comment-author">
                              <img
                                src="/images/comment2.jpg"
                                alt="comment1"
                                className="avatar"
                              />
                              <span className="nm">
                                <Link to="">Robat Newman</Link>
                              </span>
                            </div>
                            {/* .comment-author */}
                            <div className="comment-metadata">
                              <Link to="">
                                <span>15 Jan, 2020</span>
                              </Link>
                            </div>
                            {/* .comment-metadata */}
                          </div>
                          {/* .comment-meta */}
                          <div className="comment-content">
                            <p>
                              Consectetuer adipiscing elit. Lorem ipsum dolor
                              sit amet, consectetuer.
                            </p>
                          </div>
                          <div className="reply">
                            <Link to="" className="comment-reply-link">
                              Reply
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ol>
                    {/* .children */}
                  </li>
                  <li className="comment">
                    <div className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-author">
                          <img
                            src="/images/comment1.jpg"
                            alt="comment1"
                            className="avatar"
                          />
                          <span className="nm">
                            <Link to="">Hannibal Lecter</Link>
                          </span>
                        </div>
                        {/* .comment-author */}
                        <div className="comment-metadata">
                          <Link to="">
                            <span>26 Jan, 2016</span>
                          </Link>
                        </div>
                        {/* .comment-metadata */}
                      </div>
                      {/* .comment-meta */}
                      <div className="comment-content">
                        <p>
                          Lorem ipsum dolor sit amet. Lorem ipsum adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="reply">
                        <Link to="" className="comment-reply-link">
                          Reply
                        </Link>
                      </div>
                    </div>
                  </li>
                </ol>
                {/* .comment-list */}
              </div>
              {/* .comment-list-outer */}
              <div className="comment-respond">
                <h2 className="comment-reply-title">Add your comment</h2>
                <form method="post" className="comment-form">
                  <p className="comment-form-author">
                    <input
                      name="author"
                      type="text"
                      placeholder="Name*"
                      required=""
                    />
                  </p>
                  <p className="comment-form-email">
                    <input
                      name="email"
                      type="email"
                      placeholder="E-mail*"
                      required=""
                    />
                  </p>
                  <p className="comment-form-url">
                    <input
                      id="url"
                      name="url"
                      type="url"
                      placeholder="Website"
                    />
                  </p>
                  <p className="comment-form-comment">
                    <textarea
                      name="comment"
                      cols={40}
                      rows={5}
                      placeholder="Write here...*"
                      required=""
                      defaultValue={''}
                    />
                  </p>
                  <p className="form-submit">
                    <button
                      type="submit"
                      className="st-btn st-style1 st-color1 st-size-medium"
                    >
                      Post Comment
                    </button>
                  </p>
                </form>
              </div>
              {/* .comment-respond */}
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80" />
    </section>
  );
};

export default BlogDetails;
