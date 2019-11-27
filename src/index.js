import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva(
    {
        initialState: {
          
         persons: [
           {
             id: 1,
             name: '胡彦斌',
             sex: '男',
             job:'歌手',
             birthday:'1997/09/16',
             hobby:['跑步','篮球','游戏']
           },
           {
               id: 2,
               name: '是多少',
               sex: '男',
               job:'演员',
               birthday:'1997/09/16',
               hobby:['跑步','篮球','游戏']
           },
           {
             id: 3,
               name: '小明',
               sex: '男',
               job:'学生',
               birthday:'1997/09/16',
               hobby:['跑步','篮球','游戏']
           },
           {
             id: 4,
               name: '小红',
               sex: '女',
               job:'歌手',
               birthday:'1997/09/16',
               hobby:['跑步','篮球','游戏']
           },
           {
             id: 5,
               name: '小林',
               sex: '男',
               job:'工程师',
               birthday:'1997/09/16',
               hobby:['跑步','篮球','游戏']
           },
         ],
        },
      }
);

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/persons').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
