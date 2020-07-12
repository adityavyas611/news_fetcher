  import React from 'react';
import './Footer.css';

const Footer = () => {
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; Copyrights. All rights reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <p className="credits">Made by Aditya Vyas</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
};

export default Footer;
