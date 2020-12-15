import React from "react";
import NavLinks from "./NavLinks";
import NavSocial from "./NavSocial";

const MobileNav = () => {
    return (
        <nav>
            <div class="mobile-nav">
                <div class="mobile-nav-overlay-hidden">
                    <ul class="mobile-nav-options">
                        <NavLinks class="mobileMenuItem" input={"about"} />
                        <NavLinks class="mobileMenuItem" input={"Portfolio"} />
                        <NavLinks class="mobileMenuItem" input={"Contact"} />
                        <NavSocial />
                    </ul>
                </div>
                <button
                    id="mobileMenu"
                    class="mobile-menu"
                    aria-label="Toggle menu."
                    aria-controls="mobile-nav-overlay-hidden"
                >
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </nav>
    );
};

export default MobileNav;
