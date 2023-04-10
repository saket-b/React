import React from 'react'

const Signup = () => {

    const handleSignup = ()=>{
        
    }

  return (
    <div>
    <form>
        <div class="mb-3">
            <label forhtml="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label forhtml="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name = "password"/>
        </div>
       
        <button type="submit" class="btn btn-primary" onSubmit={handleSignup} >Signup</button>
    </form>

</div>
  )
}

export default Signup
