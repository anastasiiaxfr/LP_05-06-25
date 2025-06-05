import Link from "next/link";
import Image from "next/image";
import app1 from "@/assets/img/app1.svg";
import app2 from "@/assets/img/app2.svg";
import logo from "@/assets/img/logo-w.svg";
import { footer_menu as menu } from "../contstant";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          {menu.map((i, ind) => (
            <div key={ind}>
              <h3>{i.group}</h3>
              <nav className="footer_menu">
                {i.items.map((j, ind) => (
                  <Link href={j.url} key={ind}>
                    {j.title}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="footer_btm">
        <div className="container">
          <Link href="/">
            <Image src={logo} alt="Brass" />
          </Link>
          <div className="my-10">
            <p>Available on</p>
            <div className="apps">
              <Link className="app" href="/">
                <Image src={app1} alt="" />
              </Link>
              <Link className="app" href="/">
                <Image src={app2} alt="" />
              </Link>
            </div>
          </div>
          <p className="max-w-[500px]">
            Banking services backed by Bancorp MFB & FCMB and regulated by the
            Central Bank of Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
