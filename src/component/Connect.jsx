import { useState } from 'react';
import { useSelector } from 'react-redux';
import './common/Connect.css'; 

const Connect = () => {
  const [info, setInfo] = useState("Let's Connect");
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode === 'Dark';
 
  const socialLinks = [
    {
      id: 'instagram',
      url: 'https://instagram.com/contactsushil',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346',
      hoverText: 'Follow me on Insta!!'
    },
    {
      id: 'twitter',
      url: 'https://twitter.com/contactsushill',
      icon: 'https://seeklogo.com/images/T/twitter-new-logo-8A0C4E0C58-seeklogo.com.png?v=638258088440000000',
      hoverText: 'Follow me on X!!'
    },
    {
      id: 'github',
      url: 'https://github.com/sushilpandeyy/',
      icon: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png',
      hoverText: 'Follow me on GitHub!!'
    },
    {
      id: 'medium',
      url: 'https://contactsushil.medium.com/',
      icon: 'https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png',
      hoverText: 'Follow me on Medium!!'
    },
    {
      id: 'linkedin',
      url: 'https://linkedin.com/in/contactsushil',
      icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
      hoverText: "Let's Connect on LinkedIn!!"
    },
    {
      id: 'email',
      url: 'mailto:contact.sushilpandey@gmail.com',
      icon: 'https://static-00.iconduck.com/assets.00/gmail-icon-256x256-lp4z4kz6.png',
      hoverText: 'Connect via Email!!'
    },
    {
      id: 'whatsapp',
      url: 'https://www.youtube.com/shorts/SXHMnicI6Pg',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png',
      hoverText: 'Message me on WhatsApp!!'
    },
    {
      id: 'portfolio',
      url: 'https://contactsushil.vercel.app/',
      icon: 'https://media.licdn.com/dms/image/C4D03AQFj1UEp1hibQA/profile-displayphoto-shrink_200_200/0/1662981447177?e=1701907200&v=beta&t=nAQkppRVV8iJqW0zZU8g9WigAa04eZh58z0lNY1GJzI',
      hoverText: 'Checkout My Portfolio'
    }
  ];

  return (
    <div className="connect p-6" style={{ backgroundColor: isDark ? '#1B1F23' : '#F4F2EE' }}>
      <div className="box-atom">
        <div className="allring grid grid-cols-2 gap-6 justify-center">
          <div className="nucleus1 flex flex-col items-center space-y-4" style={{ borderColor: isDark ? 'white' : '#333' }}>
            {socialLinks.slice(0, 2).map(link => (
              <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="img-prop w-[50px] h-[50px] object-cover"
                  onMouseOver={() => setInfo(link.hoverText)}
                  onMouseLeave={() => setInfo("Let's Connect")}
                  src={link.icon}
                  alt={link.id}
                />
              </a>
            ))}
          </div>

          <div className="nucleus2 flex flex-col items-center space-y-4" style={{ borderColor: isDark ? 'white' : '#333' }}>
            {socialLinks.slice(2, 4).map(link => (
              <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="img-prop w-[50px] h-[50px] object-cover"
                  onMouseOver={() => setInfo(link.hoverText)}
                  onMouseLeave={() => setInfo("Let's Connect")}
                  src={link.icon}
                  alt={link.id}
                />
              </a>
            ))}
          </div>

          <div className="nucleus3 flex flex-col items-center space-y-4" style={{ borderColor: isDark ? 'white' : '#333' }}>
            {socialLinks.slice(4, 6).map(link => (
              <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="img-prop w-[50px] h-[50px] object-cover"
                  onMouseOver={() => setInfo(link.hoverText)}
                  onMouseLeave={() => setInfo("Let's Connect")}
                  src={link.icon}
                  alt={link.id}
                />
              </a>
            ))}
          </div>

          <div className="nucleus4 flex flex-col items-center space-y-4" style={{ borderColor: isDark ? 'white' : '#333' }}>
            {socialLinks.slice(6, 8).map(link => (
              <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="img-prop w-[50px] h-[50px] object-cover"
                  onMouseOver={() => setInfo(link.hoverText)}
                  onMouseLeave={() => setInfo("Let's Connect")}
                  src={link.icon}
                  alt={link.id}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bot-follow mt-6">
        <center>
          <h1 className={`Follow-txt text-2xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            {info}
          </h1>
        </center>
      </div>
    </div>
  );
};

export default Connect;