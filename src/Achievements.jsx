import React, { useState } from 'react';
import './Achievement.css'
import pic from './assets/achievements.jpg'
const OurAchievements = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleViewMore = () => {
    setShowFullText(true);
  };

  const handleViewLess = () => {
    setShowFullText(false);
  };

  return (
    <div className="achievements-container">
      <div className="achievement-text">
        <h2>Our Vision</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat volutpat est,
          vitae gravida ipsum suscipit vel. Vestibulum scelerisque tempus lacus ut consectetur.
          Vestibulum pulvinar nisl in justo consectetur cursus. Fusce ultrices finibus justo nec
          feugiat. Sed congue ultricies mauris ut vulputate. Donec finibus maximus dui vel finibus.
          {showFullText ? (
            <>
              Morbi semper sem vitae eros viverra, a pulvinar quam consectetur. Integer dapibus magna
              vitae neque tristique, at cursus tellus facilisis. Mauris luctus scelerisque tortor nec
              posuere. Duis ac nisl sit amet sapien pellentesque iaculis. Donec vulputate ultrices
              ultricies. Mauris tempor lectus vitae sem volutpat tincidunt. Vestibulum pretium leo id
              nisl ultrices, id vulputate leo interdum. Mauris ac lectus ac nulla malesuada interdum.
              Nunc sollicitudin leo eu tortor volutpat, in dapibus nulla lacinia. Integer eu elit eget
              urna fringilla volutpat. Nullam et lacus ut felis molestie malesuada. Nulla facilisi.
              Curabitur a ex sit amet tellus dapibus feugiat. Integer aliquam posuere enim, sed
              elementum nulla congue non. Proin congue, nunc id tincidunt eleifend, mauris nunc
              porttitor lacus, id egestas quam tellus eu lorem. Sed ac dignissim turpis, at aliquet
              nibh. Duis vehicula ex nec ligula finibus, a varius enim pharetra. Proin interdum mauris
              id faucibus pharetra. Curabitur et arcu tristique, aliquet metus vel, aliquam metus.
              Curabitur efficitur finibus facilisis. Aenean ullamcorper justo at massa semper varius.
              Sed lacinia tellus vel felis tristique, nec tempus nulla ullamcorper. Integer id velit ac
              nunc fermentum mattis.
            </>
          ) : (
            <>
              Morbi semper sem vitae eros viverra, a pulvinar quam consectetur.
            </>
          )}
        </p>
        {showFullText ? (
          <button className="view-less-btn" onClick={handleViewLess}>
            View Less
          </button>
        ) : (
          <button className="view-more-btn" onClick={handleViewMore}>
            View More
          </button>
        )}
      </div>
      <div className="achievement-image">
        <img src={pic} alt="Achievement" />
      </div>
    </div>
  );
};

export default OurAchievements;
