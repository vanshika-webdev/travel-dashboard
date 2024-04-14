import React from 'react'
import './loginForm.css'

function Loginform() {
  return (
    <div>
   {/* <!-- Password Reset 8 - Bootstrap Brain Component --> */}
<section class="bg-light p-2 p-md-4 p-xl-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-xxl-11">
        <div class="card border-light-subtle shadow-sm">
          <div class="row g-0">
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <div class="col-12 col-lg-11 col-xl-10">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  <div class="row">
                    <div class="col-12">
                      <div class="mb-5">
                        <div class="text-center mb-4">
                          <a href="#!">
                            <img src="./logo.svg" alt="Brand logo" width="175" height="57" />
                          </a>
                        </div>
                        <h4 class="text-center heading">LOGIN</h4>
                      </div>
                    </div>
                  </div>
                  <form action="#!">
                    <div class="row gy-3 overflow-hidden">
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required />
                          <label for="email" class="form-label"><img src="./usericon.svg" alt="" width="30" height="30" /> Username</label>
                        </div>
                        <div class="form-floating mb-2">
                          <input type="password" class="form-control" name="password" id="password" placeholder="$#gsu&*12v" required />
                          <label for="password" class="form-label"><img src="./passwordicon.svg" alt="" width="30" height="30" /> Password</label>
                        </div>
                      </div>
                      <div class="form-check d-flex justify-content-left mb-2">
                    <input class="form-check-input m-1" type="checkbox" value="" id="#" />
                    <label class="form-check-label" for="#">
                     Remember Me <a href="#">Forget Password?</a>
                    </label>
                  </div>
                      <div class="col-12">
                        <div class="d-grid">
                          <button class="btn btn-lg" type="submit">Login Now</button>
                        </div>
                      </div>
                    </div>
                  </form>
                
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <img class="img-fluid w-100 h-60 object-fit-cover" loading="lazy" src="./login-image.svg" alt="Welcome back you've been missed!" />
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

export default Loginform
