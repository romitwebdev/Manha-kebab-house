import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { SiUbereats } from "react-icons/si";
import { FaTiktok, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Links = () => {
    return (
        <>
            <div className="link_icons_holder d-flex flex-column align-items-center">
                <a
                    href="https://www.facebook.com/profile.php?id=100089511788586"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaFacebookSquare className="icon facebook" />
                </a>

                <a
                    href="https://glovoapp.com/pt/pt/almada/manha-restaurante-amd/?content=menu-c.1193525112"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="glovo_logo.png"
                        alt=""
                        height={40}
                        width={40}
                        className="img-icon glovo"
                    />
                </a>
                <a
                    href="https://glovoapp.com/pt/pt/almada/manha-restaurante-amd/?content=menu-c.1193525112"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="bolt.png"
                        alt=""
                        height={40}
                        width={40}
                        className="img-icon bolt"
                    />
                </a>
                <a
                    href="https://www.order.store/pt/store/manha-cafe-restaurante/w_B0hpCHQF-KWt_YFlR52A"
                    target="_blank"
                    rel="noreferrer"
                >
                    <SiUbereats className="icon uber" />
                </a>
                <a
                    href="https://wa.me/+351920106378"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsWhatsapp className="icon whatsapp" />
                </a>
                <a
                    href="https://www.tiktok.com/@manha_kebabhouse?_t=8bSMwOn8N5u&_r=1"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaTiktok className="icon tiktok" />
                </a>

                <a
                    href="https://www.instagram.com/manha.kebabhouse/?igshid=YmMyMTA2M2Y%3D"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagramSquare className="icon insta" />
                </a>
            </div>
        </>
    );
};

export default Links;
