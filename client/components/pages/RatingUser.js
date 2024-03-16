import React from 'react'
import { Row, Col, Carousel } from 'antd';

export default function RatingUser() {
  return (
<>
<div className="testimonial-section">
      <Row justify="center" align="middle">
        <Col span={18}>
        <h2 style={{marginBottom:"0"}}><span>Fueling</span> Competitive advantage <span>for our clientele</span></h2>
					<p style={{fontSize:"2vw", fontFamily:"Roboto-Thin"}}>Domain expertise, deep understanding enables you to stay competitive, and delight your customers.</p>
          <Carousel autoplay dots={false}>
            <div className="testimonial-item">
              <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum neque vel tortor dignissim ultricies."</p>
              <p className="testimonial-author">- John Doe, CEO</p>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-text">"Vestibulum at magna vel turpis congue pulvinar sed eget nisi. Praesent nec lorem et velit vehicula consectetur."</p>
              <p className="testimonial-author">- Jane Smith, Marketing Manager</p>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-text">"Fusce ut velit sed odio convallis scelerisque. Nullam sed augue id turpis tincidunt commodo."</p>
              <p className="testimonial-author">- Michael Johnson, IT Consultant</p>
            </div>
          </Carousel>
        </Col>
      </Row>

    </div>

    

</>
  )
}
