
import axios from 'axios'

//配置基础路径
axios.defaults.baseURL='http://localhost:9999';

let getBrand=()=>{
  return axios.get('/brand')
};
//获取所有分类
let getcategory=()=>{
  return axios.get('/classify');
};
//获取分类详情
let getclassify=()=>{
  return axios.get("/storeinfo");
};




let getslide=()=>{
  return axios.get('/getslides')
};
let getbaseimg=()=>{
  return axios.get('/baseimg')
};
let getnewstore=()=>{
  return axios.get('/getnewstore')
};
let getdayslides=()=>{
  return axios.get('/getdayslides')
};
let getstylelist=()=>{
  return axios.get('/getstylelist')
};
let getstoreinfo=()=>{
  return axios.get('/storeinfo')
};
let getStoreById=(Id)=>{
  return axios.get('/getStoreById?storeId='+Id)
};
let addcollect=(Id,istr)=>{
  return axios.get('/collect?infoId='+Id+'&isCollected='+istr)
};




let getInfo=()=>{
  return axios.get('/storeinfo');
};
let getCollect=()=>{
  return axios.get('/getCollections')
};
let getCollectPayOrCount=()=>{
  return axios.get('/collectcount')
};
let delData=(id)=>{
  return axios.get('/delStore?storeId='+id)
};
//http://localhost:9999/collect?infoId=5&isCollected=false
let getCollectPay=(id,or)=>{
  return axios.get('/collectpay?infoId='+id+'&isCollected='+or)
};
let getCollectPayCount=(id,count)=>{
  return axios.get('/collectpaycount?infoId='+id+'&isCollected='+count)
};

let gethomeimg=()=>{
  return axios.get('/homeimg')
};

export {getBrand,getcategory,getclassify,getslide,getbaseimg,getnewstore,getdayslides,
  getstylelist,getstoreinfo,getStoreById,addcollect,getInfo,getCollect,getCollectPayOrCount,
  delData,getCollectPay,getCollectPayCount,gethomeimg
};
