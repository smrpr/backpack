import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M3 14h3v1c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-1zm9 1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h-3v1zm4-5.4V13H2V9.6c0-.8.5-1.4 1.3-1.6L4 5.5C4.2 4.6 5.1 4 6.2 4H7V2h4v2h.8c1.1 0 2 .6 2.3 1.5l.6 2.5c.8.2 1.3.8 1.3 1.6zM4.3 8h9.4l-.6-2.3c-.1-.5-.7-.9-1.3-.9H6.2c-.6 0-1.2.4-1.3.9L4.3 8zM6 10c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1zm8 0c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1z" /></svg>;
  }

}