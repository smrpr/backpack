function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M18.1 9.8l2.4-2.4c1.1-1.1 1.1-2.8 0-3.9s-2.8-1.1-3.9 0l-2.4 2.4 3.9 3.9zm-5.3-2.5l-8.5 8.5-1.6 4.6c-.1.5.4 1 .9.9l4.6-1.6 8.5-8.5-3.9-3.9z" /></svg>;
});