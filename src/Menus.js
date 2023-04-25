import React from "react";

const Menus = () => {
    return (
        <>
            <div className="menu_holder" id="menus">
                <h1 className="menu_header my-5 border-bottom d-inline-block px-4">
                    Our Menus
                </h1>
                <div className="img-holder">
                    <img
                        src="menu.jpg"
                        alt=""
                        className="menus_image w-100"
                        loading="lazy"
                    />
                    <div className="social_icon_holder">
                        <div className="single-icons">
                            <a
                                href="https://www.facebook.com/profile.php?id=100089511788586"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="facebook.png"
                                    alt=""
                                    className="social_icon fb"
                                />
                            </a>
                        </div>
                        <div className="group-icons">
                            <a
                                href="https://glovoapp.com/pt/pt/almada/manha-restaurante-amd/?content=menu-c.1193525112"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="glovo3.png"
                                    alt=""
                                    className="social_icon glovo"
                                />
                            </a>
                            <a
                                href="https://glovoapp.com/pt/pt/almada/manha-restaurante-amd/?content=menu-c.1193525112"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="glovo3.png"
                                    alt=""
                                    className="social_icon glovo"
                                />
                            </a>
                            <a
                                href="https://www.order.store/pt/store/manha-cafe-restaurante/w_B0hpCHQF-KWt_YFlR52A"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="uber.png"
                                    alt=""
                                    className="social_icon uber"
                                />
                            </a>
                            <a
                                href="https://wa.me/+351920106378"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="whatsapp.png"
                                    alt=""
                                    className="social_icon whatsapp"
                                />
                            </a>
                            <a
                                href="https://www.tiktok.com/@manha_kebabhouse?_t=8bSMwOn8N5u&_r=1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="tiktok.png"
                                    alt=""
                                    className="social_icon tiktok"
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/manha.kebabhouse/?igshid=YmMyMTA2M2Y%3D"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="instagram.png"
                                    alt=""
                                    className="social_icon insta"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menus;
