import axios from 'axios';

const url = 'http://localhost:8080/danh-muc';
class DanhmucUrl{
    getAll( name, parent_name){
        return axios.get(url + '?name=' + name +'&parent_name='+ parent_name);
     }
     getDanhMucCha(){
         return axios.get(url +'/cha');
     }

     getById(id){
         return axios.get(url+'/'+id);
     }

     post(){
         return axios.post(url);
     }

    //  putStudent(id){
    //      return axios.put(studentUrl+"/"+id);
    //  }
}
export default new DanhmucUrl();