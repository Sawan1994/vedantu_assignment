import React, { useState, useEffect } from "react";
import "./style.css";

function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(children[0].props.tab);

  useEffect(() => {
    if (defaultTab) {
      let tabIndex = children.findIndex(
        (child) => defaultTab === child.props.tab
      );

      if (tabIndex !== -1) {
        setActiveTab(children[tabIndex].props.tab);
      }
    }
  }, []);

  const onTabClick = (label) => {
    console.log("Tab clicked : ", label);
    setActiveTab(label);
  };

  return (
    <div className="tabs_container">
      <ul className="tabs_list">
        {children.map((child) => {
          return (
            <li
              onClick={() => onTabClick(child.props.tab)}
              className={activeTab === child.props.tab ? "active" : ""}
              key={child.props.tab}
            >
              {child.props.tab}
            </li>
          );
        })}
      </ul>

      <div className="tab_content">
        {children.map((child) => {
          if (child.props.tab === activeTab) {
            return child.props.children;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Tabs;
