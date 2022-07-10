import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { Fragment, useState } from 'react';
import { Accent, ButtonType, Size } from '../../../globals';
import Button from '../Button/Button';
import './Header.scss';
import NavigationDrawer from './NavigationDrawer/NavigationDrawer';
import SearchBox from './SearchBox/SearchBox';
// import Logo from '-!svg-react-loader!../../../../assets/logo.svg'
// import Logo from '-!svg-react-loader!../../../../content/svg/logo_black.svg'
import HFLogo from '-!svg-react-loader!../../../../content/svg/huggingface_logo.svg'
//..GatsbyImageSharpFluid_noBase64 for no blur up effect
const fetchLogoQuery = graphql`
    query {
        file(relativePath: { eq: "logos/VietAI_Logo-RGB.png" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`;

const Header: React.FC = () => {
    const [isNavDrawerOpen, setNavDrawerOpen] = useState(false);
    const image = useStaticQuery(fetchLogoQuery);

    const toggleNavDrawer = () => {
        isNavDrawerOpen ? setNavDrawerOpen(false) : setNavDrawerOpen(true);
    };

    return (
        <Fragment>
            <header className="header">
                <div className="header__item">
                    <Link to="/">
                        <Img
                            fluid={image.file.childImageSharp.fluid}
                            alt="VietAI Research"
                            className="logo"
                            style={{width: "50px"}}
                        
                        ></Img>
                        {/* <img src={Logo}></img> */}
                        {/* <Logo/> */}
                    </Link>
                </div>
                <nav className="header__item nav">
                    <div className="nav__item">
                        <Link to="https://vietai.org/" target={'_blank'}>About</Link>
                    </div>
                </nav>

                {/* Github */}
                <div className="header__item header__item__secondary">
                    <a href="https://github.com/vietai" target={'_blank'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#333"
                            viewBox="0 0 24 24"
                        >
                            {/* eslint-disable-next-line max-len */}
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>

                {/* HuggingFace */}
                <div className="header__item header__item__secondary">
                    <a href="https://huggingface.co/VietAI" target={'_blank'}>
                        <HFLogo/>
                    </a>
                </div>




                {/* Facebook */}
                <div className="header__item header__item__secondary">
                    <a href="https://www.facebook.com/vietaipublic" target={'_blank'}>
                        <svg
                            viewBox="0 0 128 128"
                            width="20"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                // eslint-disable-next-line max-len
                                d="M128,112c0,8.8-7.2,16-16,16H16c-8.8,0-16-7.2-16-16V16C0,7.2,7.2,0,16,0h96c8.8,0,16,7.2,16,16V112z"
                                fill="#4267B2"
                            />
                            <path
                                // eslint-disable-next-line max-len
                                d="M68.877,128V78.188h-17.78V60.425h17.784V44.029c0-16.537,9.764-26.279,24.514-26.279  c7.068,0,12.834,0.756,14.605,0.991v18.573l-11.874-0.005c-8.022,0-9.523,3.979-9.523,9.572v13.544h20.556l-2.904,17.763H86.603V128  H68.877z"
                                fill="#ffffff"
                            />
                        </svg>
                    </a>
                </div>

                <div className="header__item header__item__secondary">
                    <a href="https://twitter.com/vietaiorg" target={'_blank'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#55ACEE"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>
                </div>
                <div className="header__item header__item__secondary">
                    <a href="https://www.linkedin.com/company/vietai" target={'_blank'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#007bb5"
                            viewBox="0 0 24 24"
                        >
                            {/* eslint-disable-next-line max-len */}
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                </div>

                <div className="header__item search-nav">
                    <SearchBox size={Size.small} />
                </div>
                <div className="header__item newsletter-nav">
                    <Button
                        accent={Accent.primary}
                        type={ButtonType.linkInternal}
                        onClickLink="https://vietai.org/contact/"
                        className="newsletter-nav__button"
                    >
                        Contact
                    </Button>
                </div>
            </header>
            <NavigationDrawer
                isNavDrawerOpen={isNavDrawerOpen}
                onToggleNavDrawer={toggleNavDrawer}
            />
        </Fragment>
    );
};

export default Header;
