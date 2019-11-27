
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
           
            var personCount = 0;
            for(var item in state){
                personCount++;
            }
            console.log(personCount);
            values.id = (personCount+1);
            console.log(values);
            console.log(state);
            state.push(values);
            return state.filter(item=>item.id!==-1);
        },
        
    },

    
}