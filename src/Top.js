import React, { Component } from "react";

export default class Top extends Component {
  state = {
    menues: [
      { menuId: 1, menuName: "Anasayfa" },
      { menuId: 2, menuName: "Hakkımızda" },
      { menuId: 3, menuName: "İletişim" },
    ],
  };
  render() {
    const logocss = {
      textDecoration: "none",
      fontSize: "2.5rem",
      color: "#a4aaaf",
      padding: "0",
      margin: "auto",
    };
    const menucss = {
      textDecoration: "none",
      fontSize: "2rem",
      color: "white",
      padding: "0",
      margin: "auto",
    };
    return (
      <div className="d-flex justify-content-evenly p-0">
        <a href="/" style={logocss}>
          {this.props.info.logo}
        </a>
        <div style={menucss}>
          {this.props.info.menu}
          <ul>
            {this.state.menues.map(menu =>(<li key={menu.menuId}>{menu.menuName}</li>))}
          </ul>
        </div>
      </div>
    );
  }
}
