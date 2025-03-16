import { ProfileOptions } from "../../Customize/Customise";

const ProfileSection = ({
  name = "MyName",
  socialMedia = [],
  description = "Your info",
  role = "Software Engineer",
  contact = "some@gmail.com",
  profileImage
}: ProfileOptions) => {
  return (
    <>
      <div className="py-3">
        <div className="d-flex align-items-center">
          <div className="w-50 order-1 ms-5">
        
            <div>
              {socialMedia.map((social) => (
                <a href={social.url} key={social.url} className="me-3">{social.name}</a>
              ))}
            </div>
          </div>
          <img
          className="order-0"
            src={profileImage}
            style={{
              width: "10rem",
              minWidth: "10rem",
              minHeight: "10rem",
              height: "10rem",
              borderRadius: "50%",
              border: "1px solid",
            }}
            alt="Ramu"
          ></img>
        </div>
        <h2 className="mt-3">{name}</h2>
            {/* <p>{role}</p>
            <p>{contact}</p> */}
            
           
            <p>{description}</p>
      </div>
    </>
  );
};

export default ProfileSection;
