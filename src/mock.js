//引入mockjs
import Mock from 'mockjs'
//使用mockjs模拟数据
Mock.mock('news/api', 'get', {
  "user|5-10": [{
    'name': '@cname', //中文名称
    'age|1-100': 100, //100以内随机整数
    'birthday': '@date("yyyy-MM-dd")', //日期
    'city': '@city(false)',//中国城市
    'id|+1': 0
  }],
  'isLoading|1-2':true 
});