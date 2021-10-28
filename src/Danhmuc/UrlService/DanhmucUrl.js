import axios from 'axios';

const url = 'http://localhost:8080/danh-muc';
class DanhmucUrl{
    getAll(){
        return axios.get(url);
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