import './index.css'
import {FcVideoCall,FcPicture} from 'react-icons/fc'
import {CgSmileMouthOpen} from 'react-icons/cg'
export default function FormPost(){
    return (
        <div className="form">
           <div className="form-input">
               <img width="40" alt="me" height="40" src="https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.0-1/p160x160/120970581_1539214596249813_6404335918860722817_o.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_eui2=AeEzYBOfqkVVI4-XG2Ze_GejgkszHexTlWuCSzMd7FOVa79droN-L-vn3vJwBF6JmhOoiyM3NWOPUILmQgCmpewe&_nc_ohc=oHGjG5CQRnkAX_Z8cK2&_nc_ht=scontent.fcpq2-1.fna&tp=6&oh=668cad3b249585f6740ba83fb81d4dee&oe=5FD62845"/>
               <input placeholder="No que você está pensando?"/>
           </div>
           <div style={{paddingLeft: 30,paddingRight: 30}}>
            <hr />
           </div>
            <div className="form-controls">
                <div className="form-post-actions">
                    <a><FcVideoCall size={35} /></a>
                    <label>Vídeo ao vivo</label>
                </div>
                <div className="form-post-actions">
                    <a><FcPicture size={35}/> </a>
                    <label>Foto / Vídeo</label>
                    
                </div>
                <div className="form-post-actions">
                    <a><CgSmileMouthOpen color='#f7b928' size={35}/></a>
                    <label>Sentimento/atividade</label>
                </div>
          
            </div>
          
        </div>
    )
}