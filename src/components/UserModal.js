import React, { Component } from 'react';
import { Modal, Form, Input,Radio,Select,DatePicker,Checkbox,Row,Col } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


const dateFormat = 'YYYY-MM-DD';
const FormItem = Form.Item;
const { Option } = Select;

//弹出表单组件
class UserEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  //弹出表单展示
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

  //弹出框表单数据提交
  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      values.id= this.props.record.id;
      //时间数据格式修改
      if (!err) {
        const goodvalues = {
          ...values,
          'birthday': values['birthday'].format('YYYY-MM-DD'),
        };
        console.log(goodvalues);
        onOk(goodvalues);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    //record单条数据
    const { name, sex, job,birthday,hobby } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    
    //Modal中的表单构造，okHandle提交表单数据
    return (
      <span>
        <span onClick={this.showModelHandler}>{children}</span>
        <Modal
          title="填写人员数据 "
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
                <Radio value="男">男</Radio>
                <Radio value="女">女</Radio>
              </Radio.Group>,
            )}
            </Form.Item>   

            <Form.Item label="职业" hasFeedback>
            {getFieldDecorator('job', {
              initialValue:job,
              rules: [{ message: '请选择你的职业' }],
            })(
              <Select placeholder="请选择你的职业">
                <Option value="歌手">歌手</Option>
                <Option value="演员">演员</Option>
                    <Option value="学生">学生</Option>
                    <Option value="工程师">工程师</Option>
              </Select>,
            )}
          </Form.Item>
  
          <Form.Item  label="出生日期">
          {getFieldDecorator('birthday',{
              initialValue: moment(birthday,dateFormat),
            })(<DatePicker/>)}
         </Form.Item>
         
  
          <Form.Item label="爱好">
            {getFieldDecorator('hobby', {
             initialValue:hobby,
            })(
              <Checkbox.Group  style={{ width: '100%' }}>
                <Row>
                  <Col span={8}>
                    <Checkbox value="游泳">游泳</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox  value="羽毛球">
                      羽毛球
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="游戏">游戏</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="跳舞">跳舞</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="唱歌">唱歌</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="跑步">跑步</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="篮球">篮球</Checkbox>
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
