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
      <>
      <h3 className="text-white m-3 menuTitre">Menu</h3>
        <ul className={activeMenu ? "active" : ""}>
          <li>
            <a href="#" target="_blank" className="a"><FontAwesomeIcon icon={faUser} className="symbol"/>
              {" "}
              &nbsp; A propos de moi
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="a"><FontAwesomeIcon icon={faBars} className="symbol"/>
            &nbsp; Comptétence
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="a"><FontAwesomeIcon icon={faFolderOpen} className="symbol"/>
            &nbsp;
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="a"><FontAwesomeIcon icon={faPhone} className="symbol"/>
            &nbsp;Contact
            </a>
          </li>
        </ul>
        <button className="menu" onClick={() => {
              this.setState({ activeMenu: !activeMenu });
            }}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        
      </>
    );
  }
}
export default Nav;
