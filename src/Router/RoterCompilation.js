import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import PageNotFound from "../Auth/PageNotFound";
import ListDanhmuc from "../Danhmuc/DanhmucQl/ListDanhmuc";


function RoterComplitaion(){
    return(
        <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App } />
    
        <Route path="/danh-muc/:page?" component={ListDanhmuc} />
        {/* <PrivateRoutes component={ListDanhmuc} authed={false} path='/admin'  /> */}




        {/* component PageNotFound phải để cuối cùng */}
        <Route exact path="*" component={PageNotFound} />
      </Switch>
      </BrowserRouter>
    );
}
export default RoterComplitaion;