import React, { useState } from 'react'

function Slider({ record, filtered }) {

    return (
        <div >
            <div className="row justify-content-center align-items-center" style={{ marginTop: "40px" }}>
                {
                    filtered && filtered.map((val) => {
                        return (
                            <div className="card m-2" style={{ width: '18rem' }}>
                                <img src={val.Poster} style={{ height: "200px", objectFit: "contain" }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{val.Title}</h5>
                                    <p className="card-text">Year :- <strong>{val.Year}</strong></p>
                                    <p className="card-text">imdbID :- <strong>{val.imdbID}</strong></p>
                                    <p className="card-text">Type :- <strong>{val.Type}</strong></p>
                                    <a href="#" className="btn btn-primary" style={{ background: "rgb(130, 101, 254)" }}>Book Ticket</a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Slider