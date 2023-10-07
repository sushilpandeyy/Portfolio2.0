import {useState} from 'react'
import './common/Connect.css'
const Connect = () => {
 const [info, setinfo]=useState("Let's Connect");
  return (
    <div className='connect'>
   <div className="box-atom">
    <div className="allring">
    <div className="nucleus1">
      <a href="https://instagram.com/contactsushil"><center><img className="img-prop" id="insta-img" onMouseOver={()=>setinfo("Follow me on Insta!!")} onMouseLeave={()=>setinfo("Let's Connect")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346" alt="Instagram" /></center></a>
      <a href="https://twitter.com/contactsushill"><center><img  className="img-prop" id="twitter-img" onMouseOver={()=>setinfo("Follow me on X!!")} onMouseLeave={()=>setinfo("Let's Connect")} src="https://seeklogo.com/images/T/twitter-new-logo-8A0C4E0C58-seeklogo.com.png?v=638258088440000000" alt="Twitter" /></center></a>
    </div>
    <div className="nucleus2">
    <a href="https://github.com/sushilpandeyy/"><center><img className="img-prop" id="git-img" onMouseOver={()=>setinfo("Follow me on GitHub!!")} onMouseLeave={()=>setinfo("Let's Connect")}  onClick={console.log("GIT")} src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="Github Profile" /></center></a>
    <a href="https://contactsushil.medium.com/"><center><img  className="img-prop" id="med-img" onMouseOver={()=>setinfo("Follow me on Medium!!")} onMouseLeave={()=>setinfo("Let's Connect")} src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png" alt="Medium" /></center></a>
    </div>
    <div className="nucleus3">
    <a href="https://linkedin.com/in/contactsushil"><center><img className="img-prop" id="link-img" onMouseOver={()=>setinfo("Let's Connect on LinkedIN!!")} onMouseLeave={()=>setinfo("Let's Connect")} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIN" /></center></a>
    <a href="mailto:contact.sushilpandey@gmail.com"><center><img  className="img-prop" id="mail-img" onMouseOver={()=>setinfo("Connect via Email!!")} onMouseLeave={()=>setinfo("Let's Connect")} src="https://static-00.iconduck.com/assets.00/gmail-icon-256x256-lp4z4kz6.png" alt="MailID" /></center></a>
    </div>
    <div className="nucleus4">
    <a href="https://www.youtube.com/shorts/SXHMnicI6Pg"><center><img className="img-prop" id="what-img" onMouseOver={()=>setinfo("Message me on Whatsapp!!")} onMouseLeave={()=>setinfo("Let's Connect")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png" alt="Whatsapp" /></center></a>
    <a href="https://contactsushil.vercel.app/"><center><img  className="img-prop" id="sus-img" onMouseOver={()=>setinfo("Checkout My Portfolio")} onMouseLeave={()=>setinfo("Let's Connect")} src="https://media.licdn.com/dms/image/C4D03AQFj1UEp1hibQA/profile-displayphoto-shrink_200_200/0/1662981447177?e=1701907200&v=beta&t=nAQkppRVV8iJqW0zZU8g9WigAa04eZh58z0lNY1GJzI" alt="" /></center></a>
    </div>
    <div className="center"></div>
    </div>
   </div>
   <div className="bot-follow">
   <center><h1 className='Follow-txt'>{info}</h1></center>
   </div>
    </div>
  )
}

export default Connect