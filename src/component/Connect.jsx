import { useState } from 'react';

const Connect = () => {
  const [info, setInfo] = useState("Let's Connect");

  return (
    <div className="connect p-6">
      <div className="box-atom">
        <div className="allring grid grid-cols-2 gap-6 justify-center">
          <div className="nucleus1 flex flex-col items-center space-y-4">
            <a href="https://instagram.com/contactsushil">
              <img
                className="img-prop w-[50px] h-[50px] object-cover"
                onMouseOver={() => setInfo("Follow me on Insta!!")}
                onMouseLeave={() => setInfo("Let's Connect")}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346"
                alt="Instagram"
              />
            </a>
            <a href="https://twitter.com/contactsushill">
              <img
                className="img-prop w-[50px] h-[50px] object-cover"
                onMouseOver={() => setInfo("Follow me on X!!")}
                onMouseLeave={() => setInfo("Let's Connect")}
                src="https://seeklogo.com/images/T/twitter-new-logo-8A0C4E0C58-seeklogo.com.png?v=638258088440000000"
                alt="Twitter"
              />
            </a>
          </div>

          <div className="nucleus2 flex flex-col items-center space-y-4">
            <a href="https://github.com/sushilpandeyy/">
              <img
                className="img-prop w-[50px] h-[50px] object-cover"
                onMouseOver={() => setInfo("Follow me on GitHub!!")}
                onMouseLeave={() => setInfo("Let's Connect")}
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                alt="GitHub Profile"
              />
            </a>
            <a href="https://contactsushil.medium.com/">
              <img
                className="img-prop w-[50px] h-[50px] object-cover"
                onMouseOver={() => setInfo("Follow me on Medium!!")}
                onMouseLeave={() => setInfo("Let's Connect")}
                src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png"
                alt="Medium"
              />
            </a>
          </div>

          <div className="nucleus3 flex flex-col items-center space-y-4">
            <a href="https://linkedin.com/in/contactsushil">
              <img
                className="img-prop w-[50px] h-[50px] object-cover"
                onMouseOver={() => setInfo("Let's Connect on LinkedIN!!")}
                onMouseLeave={() => setInfo("Let's Connect")}
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIN"
              />
            </a>
            <a href="mailto:contact.sushilpandey@gmail.com">
              <img
                className="img-prop w-[50px] h-[50px] object-cover"
                onMouseOver={() => setInfo("Connect via Email!!")}
                onMouseLeave={() => setInfo("Let's Connect")}
                src="https://static-00.iconduck.com/assets.00/gmail-icon-256x256-lp4z4kz6.png"
                alt="MailID"
              />
            </a>
          </div>

          <div className="nucleus4 flex flex-col items-center space-y-4">
            <a href="https://www.youtube.com/shorts/SXHMnicI6Pg">
              <img
                className="img-prop w-[50px] h-[50px] object-cover"
                onMouseOver={() => setInfo("Message me on Whatsapp!!")}
                onMouseLeave={() => setInfo("Let's Connect")}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
                alt="Whatsapp"
              />
            </a>
            <a href="https://contactsushil.vercel.app/">
              <img
                className="img-prop w-[50px] h-[50px] object-cover"
                onMouseOver={() => setInfo("Checkout My Portfolio")}
                onMouseLeave={() => setInfo("Let's Connect")}
                src="https://media.licdn.com/dms/image/C4D03AQFj1UEp1hibQA/profile-displayphoto-shrink_200_200/0/1662981447177?e=1701907200&v=beta&t=nAQkppRVV8iJqW0zZU8g9WigAa04eZh58z0lNY1GJzI"
                alt="Portfolio"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bot-follow mt-6">
        <center>
          <h1 className="Follow-txt text-2xl font-semibold text-gray-900">{info}</h1>
        </center>
      </div>
    </div>
  );
};

export default Connect;
