import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faUser,faPhone,faFolderOpen} from "@fortawesome/free-solid-svg-icons";
import "./nav.css";
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeMenu: false,
        };
      }
  render() {
    let { activeMenu } = this.state;
    return (
      <div className="nav">
        <div>
        <h1 className="port" data-aos="fade-zoom-in"> Portfo<span>lio</span></h1>
        </div>
      <div>
        <ul className={activeMenu ? "active" : ""}>
          <li>
            <a href="#ab" className="a"><FontAwesomeIcon icon={faUser} className="symbol"/>
              {" "}
              &nbsp; A propos de moi
            </a>
          </li>
          <li>
            <a href="#comp"  className="a"><FontAwesomeIcon icon={faBars} className="symbol"/>
            &nbsp; Comptétence
            </a>
          </li>
          <li>
            <a href="#pro"  className="a"><FontAwesomeIcon icon={faFolderOpen} className="symbol"/>
            &nbsp;
              Portfolio
            </a>
          </li>
          <li>
            <a href="#call"  className="a"><FontAwesomeIcon icon={faPhone} className="symbol"/>
            &nbsp;Contact
            </a>
          </li>
        </ul>
        <button className="menu" onClick={() => {
              this.setState({ activeMenu: !activeMenu });
            }}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        
      </div>
      </div>
      
    );
  }
}
export default Nav;
