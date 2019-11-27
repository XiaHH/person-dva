import React, { Component } from 'react';
import { Modal, Form, Input,Radio,Select,DatePicker,Checkbox,Row,Col } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
class UserEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModelHandler = e => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {

      if (!err) {
        console.log(values.birthday._d.getMonth);
        
        console.log(values);
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { name, sex, job,birthday,hobby } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>{children}</span>
        <Modal
          title="Edit User"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form {...formItemLayout} onSubmit={this.okHandler}>
            <FormItem {...formItemLayout} label="姓名">
              {getFieldDecorator('name', {
                initialValue: name,
              })(<Input />)}
            </FormItem>
            <Form.Item label="性别">
            {getFieldDecorator('sex',{
              initialValue: sex,
            })(
              
              <Radio.Group>
                <Radio value="male">男</Radio>
                <Radio value="female">女</Radio>
              </Radio.Group>,
            )}
            </Form.Item>   

            <Form.Item label="职业" hasFeedback>
            {getFieldDecorator('job', {
              initialValue:job,
              rules: [{ message: '请选择你的职业' }],
            })(
              <Select placeholder="请选择你的职业">
                <Option value="singer">歌手</Option>
                <Option value="actor">演员</Option>
                    <Option value="student">学生</Option>
                    <Option value="engineer">工程师</Option>
              </Select>,
            )}
          </Form.Item>
  
          <Form.Item type="date" label="出生日期">
          {getFieldDecorator('birthday',{
              initialValue: birthday,
            })(<DatePicker />)}
         </Form.Item>
         
  
          <Form.Item label="爱好">
            {getFieldDecorator('hobby', {
              initialValue: [hobby],
            })(
              <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                  <Col span={8}>
                    <Checkbox value="swim">游泳</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox  value="ymq">
                      羽毛球
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="game">游戏</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="dance">跳舞</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="sing">唱歌</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>,
            )}
          </Form.Item>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(UserEditModal);
