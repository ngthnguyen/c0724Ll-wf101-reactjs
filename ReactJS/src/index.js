import React from 'react';
import ReactDOM from 'react-dom/client';

const element1 = React.createElement("li", null, "Hà Nội");
const element2 = React.createElement("li", null, "Đà Nẵng");
const element3 = React.createElement("li", null, "Hải Phòng");
const element4 = React.createElement("li", null, "TP. Hồ Chí Minh");
const element5 = React.createElement("li", null, "Cần Thơ");

const elementMain = React.createElement(
  "ul",
  null,
  element1,
  element2,
  element3,
  element4,
  element5
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elementMain);
reportWebVitals();
