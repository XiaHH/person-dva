import React from 'react'
import { connect } from 'dva';
import PersonList from '../components/PersonList';
import {Button} from 'antd';
import UserModal from '../components/UserModal'

//connect起model和component
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
    function handleEdit(id, values) {
        dispatch({
          type: 'persons/patch',
          payload: { id, values },
        });
    }

    //

    return(
        <div>
            <h2>人员列表</h2>
            <div>
                <UserModal record={{}} onOk={handleCreate}>
                    <Button type="primary">增加</Button>
                </UserModal>
            </div>
            <PersonList onEdit={handleEdit} onDelete={handleDelete} persons={persons} />
        </div>
    
    );
   
   
    
};

export default connect(
    ({persons})=>({persons,})
)(Persons);
    
