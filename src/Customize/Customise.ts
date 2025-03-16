interface ProfileOptions {
  name: string;
  socialMedia: SocialMedia[];
  description: string;
  role: string;
  contact: string;
  profileImage: string;
}

interface SocialMedia {
  url: string;
  name: string;
}

const ProfileObject: ProfileOptions = {
  name: "Ramu",
  socialMedia: [
    { url: "https://www.facebook.com/pramu.raman.5", name: "Facebook" },
    {
      url: "https://www.linkedin.com/in/pramu-raman-4149b4197/",
      name: "LinkedIn",
    },
    { url: "https://github.com/pramuraman", name: "GitHub" },
  ],
  description: `My name is Ramu and I am working as a DotNet developer with expertise in React and DotNet.
     I have worked on multiple projects and helped many people to build projects.`,
  role: "Software Developer",
  contact: "pramu.raman@gmail.com",
  profileImage:"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
};

export type {ProfileOptions}

export default ProfileObject;
