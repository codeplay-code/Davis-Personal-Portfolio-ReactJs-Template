import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SocialLinks = ({ data }) => {
  const [activeLink, setActiveLink] = useState(0);
  const handleIconHover = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="st-social-link">
      {data.map((item, index) => (
        <Link
          to={item.link}
          className={index === activeLink ? 'st-social-btn active' : 'st-social-btn'}
          onMouseEnter={() => handleIconHover(index)}
          key={index}
        >
          <span className="st-social-icon"><Icon icon={`fa6-brands:${item.icon}`} /></span>
          <span className="st-icon-name">{item.title}</span>
        </Link>
      ))}
    </div>
  )
}

SocialLinks.propTypes = {
  data: PropTypes.array,
}

export default SocialLinks;
