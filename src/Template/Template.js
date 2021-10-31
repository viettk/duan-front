import './css/style.css';
import './css/bootstrap.min.css';
import './css/demo.css';
import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';

function Template(){
    return(
        <div>
        <div id="wrapper">
          {/* Sidebar */}
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <img className="img-fluid" src="img/logo.png" alt="" />
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Thống kê */}
            <li className="nav-item">
              <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-chart-area" />
                <span className="title-menu">Thống kê</span>
              </a>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  <a className="collapse-item" href="revenue.html">Doanh thu</a>
                  <a className="collapse-item" href="customer.html">Khách hàng</a>
                </div>
              </div>
            </li>
            {/* Sản phẩm */}
            <li className="nav-item">
              <a className="nav-link" href="product.html">
                <i className="fas fa-cubes" />
                <span>Sản phẩm</span>
              </a>
            </li>
            {/* Danh mục */}
            <li className="nav-item">
              <a className="nav-link" href="category.html">
                <i className="  fas fa-list" />
                <span>Danh mục</span>
              </a>
            </li>
            {/* Hóa đơn */}
            <li className="nav-item">
              <a className="nav-link" href="Bill.html">
                <i className="fas fa-file-invoice" />
                <span>Hóa đơn</span></a>
            </li>
            {/* Phiếu nhập */}
            <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-ambulance" />
                <span>Phiếu nhập</span></a>
            </li>
            {/* Phiếu giảm giá */}
            <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-percent" />
                <span>Phiếu giảm giá</span></a>
            </li>
            {/* Nhân viên */}
            <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-users" />
                <span>Nhân viên</span></a>
            </li>
          </ul>
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <nav className="
              navbar navbar-expand navbar-light
              bg-white
              topbar
              mb-4
              static-top
              shadow
            ">
                {/* Sidebar Toggle (Topbar) */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                  <i className="fa fa-bars" />
                </button>
                {/* Topbar Search */}
                <form className="
                d-none d-sm-inline-block
                form-inline
                mr-auto
                ml-md-3
                my-2 my-md-0
                mw-100
                navbar-search
              ">
                  <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Nhập từ khóa tìm kiếm" aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm" />
                      </button>
                    </div>
                  </div>
                </form>
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                  {/* Nav Item - Search Dropdown (Visible Only XS) */}
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-search fa-fw" />
                    </a>
                    {/* Dropdown - Messages */}
                    <div className="
                    dropdown-menu dropdown-menu-right
                    p-3
                    shadow
                    animated--grow-in
                  " aria-labelledby="searchDropdown">
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input type="text" className="form-control bg-light border-0 small" placeholder="Nhập từ khóa tìm kiếm" aria-label="Search" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  {/* Thông báo */}
                  <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-bell fa-fw" />
                      {/* Counter - Alerts */}
                      <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                    {/* Dropdown - Alerts */}
                    <div className="
                    dropdown-list dropdown-menu dropdown-menu-right
                    shadow
                    animated--grow-in
                  " aria-labelledby="alertsDropdown">
                      <h6 className="dropdown-header">
                        <i className="fas fa-bell" />
                        Thông báo
                      </h6>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                          <div className="icon-circle bg-primary">
                            <i className="fas fa-user-alt" />
                          </div>
                        </div>
                        <div>
                          <span className="font-weight-bold"> Nguyễn Thành</span><br />
                          <b>Đã đặt hàng chờ xác nhận</b><br />
                          <p className="time">5 phút trước</p>
                          <button type="button" className="btn btn-warning">
                            Xác nhận
                          </button>
                          <button type="button" className="btn btn-info">Hủy</button>
                        </div>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                          <div className="icon-circle bg-warning">
                            <i className="fas fa-user-alt" />
                          </div>
                        </div>
                        <div>
                          <span className="font-weight-bold"> Trần Việt</span><br />
                          <b>Đã đặt hàng chờ xác nhận</b><br />
                          <p className="time">5 phút trước</p>
                          <button type="button" className="btn btn-warning">
                            Xác nhận
                          </button>
                          <button type="button" className="btn btn-info">Hủy</button>
                        </div>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                          <div className="icon-circle bg-success">
                            <i className="fas fa-user-alt" />
                          </div>
                        </div>
                        <div>
                          <span className="font-weight-bold">Hoàng Anh</span><br />
                          <b>Đã đặt hàng chờ xác nhận</b><br />
                          <p className="time">5 phút trước</p>
                          <button type="button" className="btn btn-warning">
                            Xác nhận
                          </button>
                          <button type="button" className="btn btn-info">Hủy</button>
                        </div>
                      </a><a className="dropdown-item text-center small text-gray-500" href="#">Xem tất cả</a>
                    </div>
                  </li>
                  <div className="topbar-divider d-none d-sm-block" />
                  {/* Nav Item - User Information */}
                  <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img className="img-profile rounded-circle" src="img/user.png" />
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">Username</span>
                    </a>
                    {/* Dropdown - User Information */}
                    <div className="
                    dropdown-menu dropdown-menu-right
                    shadow
                    animated--grow-in" aria-labelledby="userDropdown">
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-user-alt mr-2" />
                        Profile
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt mr-2 " />
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Doi 7 Website 2021</span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
        {/* Logout Modal*/}
        <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Chắc chứ</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Chọn "Đăng xuất" bên dưới khi bạn không hoạt động nữa 
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">
                  Hủy
                </button>
                <a className="btn btn-primary" href="login.html">Đăng xuất</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Template;