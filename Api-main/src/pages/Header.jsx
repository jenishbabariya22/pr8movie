import React from 'react'

function Header() {
  return (
    <div style={{ height: "100vh", position: "fixed", flexDirection: "column", display: "flex", padding: "10px", width: "20%" }} className='shadow d-flex justify-content-between align-items-center'>
      <div className='text-center'>
        <img style={{ width: "100px", paddingBottom: "15px" }} src="https://yt3.googleusercontent.com/ytc/APkrFKajwPsgqdgc4KJObKo-gI0cpqCCybvMUC6clt7D=s900-c-k-c0x00ffffff-no-rj" className='text-center' />
        <h3 style={{ color: "#8574af" }}>BlueLight Movies</h3>
      </div>

      <div>
        <button style={{ borderRadius: "8px", display: "block", width: "100%", marginBottom: "10px", border: "1px solid black", background: "#8265fe", color: "white" }} >General</button>
        <button style={{ borderRadius: "8px", display: "block", width: "100%", marginBottom: "10px", border: "1px solid black", background: "#8265fe", color: "white" }}>Trending</button>
        <button style={{ borderRadius: "8px", display: "block", width: "100%", marginBottom: "10px", border: "1px solid black", background: "#8265fe", color: "white" }}>Upcoming</button>
        <button style={{ borderRadius: "8px", display: "block", width: "100%", marginBottom: "10px", border: "1px solid black", background: "#8265fe", color: "white" }}>Favourite</button>
        <button style={{ borderRadius: "8px", display: "block", width: "100%", marginBottom: "10px", border: "1px solid black", background: "#8265fe", color: "white" }}>Login</button>
      </div>
      <div style={{ width: "100%" }}>
        <button style={{ borderRadius: "8px", width: "100%", marginBottom: "10px", border: "1px solid black", background: "#8265fe", color: "white" }}>Login</button>
      </div>
    </div>
  )
}

export default Header