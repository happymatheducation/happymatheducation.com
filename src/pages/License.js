import React from 'react'
import { Link } from 'react-router-dom'

const License = () => {
  return (
    <div style = {{textAlign: 'center', padding: '0vw 5vw 0vw 5vw'}}>
        <h1>
            License
        </h1>
        <p>
        Copyright (c) 2022 Happy Math Education
<br></br>
<br></br>
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
<br></br>
<br></br>
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
<br></br>
<br></br>
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
<br></br>
<br></br>
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
<br></br>
<br></br>
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        </p>

        <Link to = '/'>
            <br></br>
            Back To Home
        </Link>
    </div>
  )
}

export default License