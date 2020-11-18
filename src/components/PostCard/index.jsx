import React from 'react'
import './index.css'

import {FiUsers,FiThumbsUp,FiMessageSquare,FiShare2} from 'react-icons/fi'

export default function PostCard(){
    return (
        <div className="card">
            <div className="card-header">
                <div className="col-1">
                    <img width="40" height="40" src="https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.0-1/cp0/p50x50/120970581_1539214596249813_6404335918860722817_o.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_eui2=AeEzYBOfqkVVI4-XG2Ze_GejgkszHexTlWuCSzMd7FOVa79droN-L-vn3vJwBF6JmhOoiyM3NWOPUILmQgCmpewe&_nc_ohc=oHGjG5CQRnkAX_Z8cK2&_nc_ht=scontent.fcpq2-1.fna&tp=27&oh=a9461d16a0885038d364995382c23666&oe=5FD61CE9"/>
                    <div>
                        <label>Louis Hudson</label>
                        <small>3 h  <FiUsers size={13}/></small>
                    </div>
                </div>
                <div className="col-2">
                    <label>...</label>
                </div>
                

            </div>
            <p>KKKKKKKKKKKK</p>
            <div className="card-body">
                <img  src="https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.0-9/125824020_364984404575717_1193228853677990951_o.jpg?_nc_cat=1&ccb=2&_nc_sid=825194&_nc_eui2=AeG9v_JwBMfA6fAmGMnE5OElXoGRZcrVX-FegZFlytVf4TjKSqMMr6uCMkLDw_eiun2PhG1wG9vkoRjYi3dKFCsY&_nc_ohc=k-egt5isSx8AX9aI5WT&_nc_ht=scontent.fcpq2-1.fna&oh=7defdafb3f1b43747038d4998acafccf&oe=5FDAA643"/>
            </div>
            <div className="card-footer">
                <a> <span><FiThumbsUp size={25}/> </span> Curtir</a>
                <a> <span><FiMessageSquare size={25}/></span> Comentar</a>
                <a> <span><FiShare2/></span>Compartilhar</a>
            </div>
        </div>
    )
}