import tiktok from "../icons/tiktok-icon.png";
import { MailIcon } from "../icons/MailIcon";
import { InstagramIcon } from "../icons/InstagramIcon";

export const Footer = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center h-2/5 py-10 bg-greyBakground md:flex-row md:justify-between px-5">
          <div className="text-brand tracking-widest">
            Världens bästa Karlsson
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <MailIcon></MailIcon>
              </li>
              <li>
                <img src={tiktok} className="w-7 h-auto" />
              </li>
              <li>
                <InstagramIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
