import React from "react";

const Header = () => {
    return (
        <>
            <div
                className="hero d-inline-block"
                style={{ height: "100vh", width: "100vw" }}
            >
                <div className="tagline_holder">
                    <h1 className="tagline">MANHA KEBAB HOUSE</h1>
                    <h3 className="sub-tagline">
                        Discover the Magic of our Kebabs
                    </h3>
                    <a href="#menus">
                        <button
                            className="btn_menu btn btn-info mt-3"
                            style={{
                                fontWeight: 700,
                                letterSpacing: "0.1rem",
                                borderWidth: "0.2rem",
                                fontSize: "1.7rem",
                            }}
                        >
                            Menus
                        </button>
                    </a>
                </div>

                <img
                    src="./hero-image.jpg"
                    alt=""
                    className="hero_img"
                    style={{ height: "100%", width: "100%" }}
                    loading="lazy"
                />
            </div>
        </>
    );
};

export default Header;
