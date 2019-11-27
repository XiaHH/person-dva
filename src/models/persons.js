
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
            var idunm = state.length;
            console.log(values);
            console.log(state);
            return state.push(values);
        },
        
    },

    
}