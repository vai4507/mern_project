
import './loginstyle.css';
import Axios from 'axios';
function Login(){

    return (
        <div>
            
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>



            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>



            <section class="login-block">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 login-sec">
                            <h2 class="text-center">Login Now</h2>
                            <form class="login-form">
                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="text-uppercase">Email ID</label>
                                    <input type="email" class="form-control" placeholder="" />

                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1" class="text-uppercase">Password</label>
                                    <input type="password" class="form-control" placeholder="" />
                                </div>


                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" />
                                        <small>Remember Me</small>
                                    </label>
                                    <button type="submit" class="btn btn-login float-right">Submit</button>
                                </div>

                            </form>

                        </div>
                        <div class="col-md-8 banner-sec">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner" role="listbox">
                                    <div class="carousel-item active">
                                        <img class="d-block img-fluid" src="https://img.freepik.com/premium-photo/many-people-parked-car-showroom_674594-11547.jpg?w=900" alt="First slide" />
                                        <div class="carousel-caption d-none d-md-block">
                                            <div class="banner-text">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block img-fluid" src="https://img.freepik.com/premium-photo/elegant-luxury-cars-sale-dealership-salon_118628-3325.jpg?w=900" alt="First slide" />
                                        <div class="carousel-caption d-none d-md-block">
                                            <div class="banner-text">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block img-fluid" src="https://img.freepik.com/free-photo/stylish-elegant-woman-car-salon_1157-20980.jpg?w=900&t=st=1699559175~exp=1699559775~hmac=ac689d34afd8da450d5edb2dd36edf99c7ffa14c4668bae367ea9dbff22dc524" alt="First slide" />
                                        <div class="carousel-caption d-none d-md-block">
                                            <div class="banner-text">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Login;