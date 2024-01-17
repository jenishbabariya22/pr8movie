import React, { useState, useEffect } from 'react'
import Slider from './Slider'

function Navbar({ movies,setMovies }) {

    const [filtered, setfiltered] = useState(movies)
    const [search, setsearch] = useState("")

    useEffect(() => {
        if (search.length === 0) {
            let rec = JSON.parse(localStorage.getItem("user"));
            setfiltered(rec);
        }
        else {
            const newPacientes = movies.filter(value => value.Title.toLowerCase().includes(search.toLowerCase()))
            setfiltered(newPacientes)
            console.log(newPacientes);
        }
    }, [search])

    const all = () => {
        let ans = movies.filter((val) => {
            return val.Type === "movie"
        })
        setfiltered(ans)
        console.log(ans);

    }

    const action = () => {
        let ans = movies.filter((val) => {
            return val.category === "action"
        })
        setfiltered(ans)
        console.log(ans);

    }

    const comedy = () => {
        let ans = movies.filter((val) => {
            return val.category === "comedy"
        })
        setfiltered(ans)
        console.log(ans);
    }

    const crime = () => {
        let ans = movies.filter((val) => {
            return val.category === "crime"
        })
        setfiltered(ans)
    }

    const drama = () => {
        let ans = movies.filter((val) => {
            return val.category === "drama"
        })
        setfiltered(ans)
    }

    const family = () => {
        let ans = movies.filter((val) => {
            return val.category === "family"
        })
        setfiltered(ans)
    }

    const history = () => {
        let ans = movies.filter((val) => {
            return val.category === "history"
        })
        setfiltered(ans)
    }

    const romance = () => {
        let ans = movies.filter((val) => {
            return val.category === "romance"
        })
        setfiltered(ans)
    }

    const thriller = () => {
        let ans = movies.filter((val) => {
            return val.category === "thriller"
        })
        setfiltered(ans)
    }

    const adventure = () => {
        let ans = movies.filter((val) => {
            return val.category === "adventure"
        })
        setfiltered(ans)
    }

    return (

        <div>
            <div style={{background: "rgba(111, 86, 242, 0.88)",padding:"40px",}}>
            <div style={{justifyContent:"center",display:"flex" }}>
                <input value={search} onChange={(e) => setsearch(e.target.value)} type="text" style={{ width: "400px", height: "40px", padding: "15px", border: "1px solid black", borderRadius: "10px", marginTop: "68px" }} placeholder='Search Movies' />
            </div>
            <div style={{ paddingTop: "60px",display:"flex",flexWrap:"wrap",margin:"auto"}}className='px-5 justify-content-center'>
                <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px", }} className='px-3 mb-2' onClick={all}>All</button>
                <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} className='px-3' onClick={action}>Action</button>
                <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} className='px-3' onClick={adventure}>Adventure</button>
                <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} className='px-3' onClick={comedy}>Comedy</button>
                <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} className='px-3' onClick={crime}>Crime</button>
                <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} className='px-3' onClick={drama}>Drama</button>
                <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} className='px-3' onClick={family}>Family</button>
                <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} onClick={history}>History</button>
                <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} onClick={romance}>Romance</button>
                <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} onClick={thriller}>Thriller</button>
            </div>
            </div>
            <Slider filtered={filtered} />
        </div>
    )
}

export default Navbar