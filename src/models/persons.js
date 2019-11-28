
//人员model构造
export default{
    namespace:'persons',
    state:[],
    reducers:{
        //删除行为 同时更新state
        'delete'(state,{payload:id}){
            return state.filter(item=>item.id!==id);
        },
        //添加
        'create'(state,{ payload: values }) {
            //计数，新增id
            var personCount = 0;
            for(var item in state){
                personCount++;
            }
            values.id = (personCount+1);
            state.push(values);
            return state.filter(item=>item.id!==-1);
        },
        //修改
        'patch'(state,{ payload : values}){
            var i;
            var pid = values.id;
            //找到修改项，进行修改
            for(i in state){
                if(pid === state[i].id){
                    state[i].name=values.name;
                    state[i].sex = values.sex;
                    state[i].job = values.job;
                    state[i].birthday = values.birthday;
                    state[i].hobby = values.hobby;
                    break;
                }
            }
            return state.filter(item=>item.id!== -1);
        },

        //查找
        'find'(state,{payload : name}){
            //返回数组中满足姓名相同的数据
            return state.filter(item=>item.name == name);
        },
        
    },

    
}