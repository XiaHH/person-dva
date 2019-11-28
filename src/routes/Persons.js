import React from 'react'
import { connect } from 'dva';
import PersonList from '../components/PersonList';
import {Button,Row,Col,Input} from 'antd';
import UserModal from '../components/UserModal'


//父级页面，包含标题，增加，搜索，表格等
//connect起model和component
const { Search } = Input;
const Persons=({dispatch,persons})=>{
   //删除函数
    function handleDelete(id){
        dispatch({
            type:"persons/delete",
            payload:id,
        });
    }
    //增加
    function handleCreate(values){
        dispatch({
            type: 'persons/create',
            payload: values,
          });
    }
    //修改
    function handleEdit(values) {
        dispatch({
          type: 'persons/patch',
          payload:  values ,
        });
    }

    //查找
    function handleFind(name){
        dispatch({
            type:'persons/find',
            payload:name,
        })
    }

    return(
        <div>
            <h2>人员列表</h2>
            <Row>
                <Col span={12}>
                <Search  placeholder="输入姓名进行搜索" onSearch={value=>handleFind(value)} enterButton />
                </Col>
                <Col span={4} offset={8}>
                <UserModal record={{}} onOk={handleCreate}>
                    <Button type="primary">增加</Button>
                </UserModal>
                </Col>
            </Row>  

            <PersonList onEdit={handleEdit} onDelete={handleDelete} persons={persons} />
        </div>
    
    );
   
   
    
};

export default connect(
    ({persons})=>({persons,})
)(Persons);
    
