# myredux
1、 现有的状态管理工具有那些？

redux mobx mobx-state-tree redoil vuex

2、redux 基于flux 思想的一个工具

每一层 分的比较清楚 整个状态管理清晰可见 麻烦

3、 mobx 清亮 去掉最麻烦的Reducer 

action + state 缺点 ：mobx @observer(函数组件)


react hooks => mobx-state-lite =>provider

mobx-state-tree(sction *) +mobx-state-lite 去掉

4、useReducer  =>

5、recoil
/" 如何操作或修改 value 由 f 给出。
store -$ container
currentState -$ __value
action -$ f
currentReducer -$ map
middleware -$ IO functor (解决异步操作的各种问题。)