import React from 'react'
import './index.css'
import logo from '../../assets/images/logo.svg'

import {HiOutlineHome,HiPlus} from 'react-icons/hi'
import {CgPlayButtonR} from 'react-icons/cg'
import {AiOutlineShop} from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'
import {SiMessenger} from 'react-icons/si'
import {GoBell} from 'react-icons/go'

import {IoMdArrowDropdown} from 'react-icons/io'
export default function Header(){

    return(
        <div>
            <div className="navbar">
                <div className="first-column">
                    <img width="40" height="40" src={logo}/>
                    <input placeholder="Pesquisar no Facebook"/>
                </div>
                <div className="second-column">
                    <ul className="navbar-links">
                        <li><a><HiOutlineHome color='#b1b2b4' size={30}/></a></li>
                        <li><a><CgPlayButtonR color='#b1b2b4' size={30}/></a></li>
                        <li><a><AiOutlineShop color='#b1b2b4' size={30}/></a></li>
                        <li><a><FaUsers size={30} color='#b1b2b4'/></a></li>
                        
                    </ul>
                </div>
                <div className="third-column">
                    <div className='user-img'>
                        <img width='30' height='30' src="https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.0-1/cp0/p50x50/120970581_1539214596249813_6404335918860722817_o.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_eui2=AeEzYBOfqkVVI4-XG2Ze_GejgkszHexTlWuCSzMd7FOVa79droN-L-vn3vJwBF6JmhOoiyM3NWOPUILmQgCmpewe&_nc_ohc=oHGjG5CQRnkAX_Z8cK2&_nc_ht=scontent.fcpq2-1.fna&tp=27&oh=a9461d16a0885038d364995382c23666&oe=5FD61CE9"/>
                        <label>Louis</label>
                    </div>
                    <a className="btn-action"><HiPlus size={18}/></a>
                    <a className="btn-action"><SiMessenger/></a>
                    <a className="btn-action"><GoBell/></a>
                    <a className="btn-action"><IoMdArrowDropdown size={28}/></a>

                </div>
            </div>
        </div>
        
    )
}