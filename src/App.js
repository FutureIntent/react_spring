import React, { useState } from 'react';

function App() {

    const [res, setRes] = useState();

    function testAuth() {
        fetch('http://localhost:8080/user/cors',
            {
                method: 'POST',
                mode: 'cors',
                redirect: 'follow',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    word: 'zzz'
                })
            }
        )
            .then(async response => {               
                if (response.redirected) {
                    window.location.href = response.url;
                }
                const res = await response.json();
                console.log(res);
            })           
            .catch(err => console.log(err))
    }

    function logOut() {
        window.location.href = "http://localhost:8080/logout";
    }

  return (
      <div>
          <p>Placeholder</p>
          <button onClick={testAuth}>Test Auth</button>
          <button onClick={logOut}>Log Out</button>
    </div>
  );
}

export default App;
