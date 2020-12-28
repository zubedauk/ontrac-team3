import React from 'react';
import 'antd/dist/antd.css';
import './viewprofile.css';
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import Header from './Header'
import Footer from './Footer'
import './main.css'
const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

class ViewProfile extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
      
      <Header />
        <List
          dataSource={[
            {
              name: "Berhane",
            },
          ]}
          bordered
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                <a onClick={this.showDrawer} key={`a-${item.id}`}>
                  View Profile
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="CodeYourFuture WM class-1"
              />
            </List.Item>
          )}
        />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p
            className="site-description-item-profile-p"
            style={{ marginBottom: 24 }}
          >
            Student Profile
          </p>
          <p className="site-description-item-profile-p">Personal</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Full Name" content="Berhane" />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Account"
                content="mail2berhane@gmail.com"
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="City" content="Birmingham" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="United Kingdom" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Birthday" content="February 2,1900" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Website" content="-" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Message"
                content="Make things as simple as possible but no simpler."
              />
            </Col>
          </Row>
          <Divider />
          <p className="site-description-item-profile-p">Company</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Position" content="Student" />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Responsibilities"
                content="Full Stack Developer"
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Department" content="Technology" />
            </Col>
            {/* <Col span={12}>
              <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
            </Col> */}
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Skills"
                content="HTML, CSS, JavaScript, React, Nodejs, SQL, Git"
              />
            </Col>
          </Row>
          <Divider />
          <p className="site-description-item-profile-p">Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content="mail2berhane@gmail.com" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Phone Number" content="+44 12345678" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Github"
                content={
                  <a href="https://github.com/bireworld">
                    https://github.com/bireworld
                  </a>
                }
              />
            </Col>
            <Col span={24}>
              <DescriptionItem
                title="LinkdIn"
                content={
                  <a href="https://linkedin.com/in/tbtworld/">
                    https://linkedin.com/in/tbtworld/
                  </a>
                }
              />
            </Col>
          </Row>
        </Drawer>
        <Footer />
      </>
    );
  }
}

export default ViewProfile;