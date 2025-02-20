import React, { Fragment } from 'react';
import './hero17.css';

const Hero17 = () => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            <Fragment>
              <span className="hero17-text7">
                Medium length hero headline goes here
              </span>
            </Fragment>
          </h1>
          <p className="hero17-text2 thq-body-large">
            <Fragment>
              <span className="hero17-text8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </span>
            </Fragment>
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span className="thq-body-small">
              <Fragment>
                <span className="hero17-text6">Main action</span>
              </Fragment>
            </span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span className="thq-body-small">
              <Fragment>
                <span className="hero17-text5">Secondary action</span>
              </Fragment>
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?w=1500"
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero17;
