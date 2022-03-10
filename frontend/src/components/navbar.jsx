import React from 'react'
import { ReactComponent as GitHub } from '../assets/img/github.svg'
import '../assets/styles/navbar.css'
export default function Navbar() {
    return (
        <header className='dsmovie-navbar'>
            <nav className="container-fluid px-5">
                <div className='row p-2 align-items-center'>
                    <div className='col text-light fs-2 fw-bold'>DSMovie</div>
                    <a className='col-auto' href="https://github.com/GislaineFrandalozo">
                        <div className="row gx-2">
                            <GitHub className='col align-self-center' />
                            <div className="col d-flex">
                                <p className='m-2 fs-6 text-light'>/GislaineFrandalozo</p>
                            </div>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}