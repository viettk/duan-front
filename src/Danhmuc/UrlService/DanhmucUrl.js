import axios from 'axios';

const url = 'http://localhost:8080/danh-muc';
class DanhmucUrl{
    getAll(page, name, parent_name){
        let num = page -1;
        return axios.get(url + '?page=1' + '?name=' + name +'&parent_name='+ parent_name);
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