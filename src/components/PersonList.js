import React from 'react';
import PropTypes from 'prop-types';
import {Table,Tag,Popconfirm,Button} from 'antd';
import UserModal from './UserModal';

//人员表格构造,接受行为参数和表格数据persons
const PersonList=({onEdit,onDelete,persons})=>{
    
    //表格列
    const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key:'name',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          key:'sex',
        },
        {
          title: '工作',
          dataIndex: 'job',
          key:'job',
        },
        {
          title: '生日',
          dataIndex: 'birthday',
          key:'birthday',
        },
        {
          title: '爱好',
          dataIndex: 'hobby',
          key: 'hobby',
          render: hobby => (
            <span>
              {hobby.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record,index) => (
            <span>
              <UserModal record={record} onOk={onEdit}>
                <Button>修改</Button>
              </UserModal>
              <Popconfirm title="删除?" onConfirm={() => onDelete(record.id)}>
                <Button>删除</Button>
              </Popconfirm>
            </span>
          ),
        },
    ];

    //返回表格
    return(
        <Table
            dataSource={persons}
            columns={columns}
            pagination={false}
            rowKey={record => record.id}
        />
        
  
    );
};

//表格数据与函数
PersonList.PropTypes={
    onDelete:PropTypes.func.isRequired,
    persons:PropTypes.array.isRequired,
};
export default PersonList;
