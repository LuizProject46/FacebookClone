import React from 'react'
import './index.css'

import Stories from '../Stories/index'
import FormPost from '../FormPost'
import PostCard from '../PostCard'
export default function Main(){
    return (
        <div className='container'>
            <div className="left-menu">
                <aside>
                    <ul>
                        <li>
                            <img width="35" height="35" src="https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.0-1/cp0/p50x50/120970581_1539214596249813_6404335918860722817_o.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_eui2=AeEzYBOfqkVVI4-XG2Ze_GejgkszHexTlWuCSzMd7FOVa79droN-L-vn3vJwBF6JmhOoiyM3NWOPUILmQgCmpewe&_nc_ohc=oHGjG5CQRnkAX_Z8cK2&_nc_ht=scontent.fcpq2-1.fna&tp=27&oh=a9461d16a0885038d364995382c23666&oe=5FD61CE9"/>
                            <label>Louis Hudson</label>
                        </li>
                        <li>
                            <img width="35" height="35" src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png?_nc_eui2=AeGk49jS9FI4miU3DMJlnBzSC4TVz-PYFxULhNXP49gXFf-r5h757R25IJffC3zkU7AFHAaZuws0Nlyitqb5NfPZ"/>
                            <label>COVID-19: Central de Informações</label>
                        </li>
                        <li>
                            <img width="35" height="35" src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeH78IgH-ohj9Tvm96q_qKR6tEPFOzh_t-u0Q8U7OH-36xLLAKXWN1_ARCE_4EjkKyKhW__YA2NuCLlUsqlkLwIY"/>
                            <label>Paǵinas</label>
                        </li>
                        <li>
                            <img width="35" height="35" src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeF4tLBpm74vAb95VgvyCCHqqfpKmA4GtxSp-kqYDga3FK-jdK_ert6JK-qfqAbMp43WRjWGMzR9s1mow5qBLXbz"/>
                            <label>Amigos</label>
                        </li>
                        <li>
                            <img width="35" height="35" src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeENEqsJb22eDfecVG6DyfR1Z3xAUM5_bWpnfEBQzn9tanNR5u5ZtURUDuAOA5CLq5vCHERI-SU5QpT6xTBFWo8f"/>
                            <label>Grupos</label>
                        </li>
                        <hr
                            style={{
                                color: '#ced0d4',
                                background: '#ced0d4',
                                height: 1,
                                width: '90%'
                            }}
                        />
                    </ul>
                </aside>
            </div>
            <div className="main">
                <Stories/>
                <FormPost/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
            <div className="right-menu">
                
            </div>
        </div>
    )
}