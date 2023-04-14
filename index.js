import "./index.css";

const Notification = (props) => {
  const { message, icon, className } = props;
  return (
    <div className={className}>
      <img className="age" src={icon} />
      <p className="para">{message}</p>
    </div>
  );
};

const element = (
  <div className="main-cont">
    <h1 class="head">Notifications</h1>
    <div className="cont1">
      <Notification
        message="Information message"
        icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="info"
      />
      <Notification
        message="Success message"
        icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="suc"
      />
      <Notification
        message="Warning message"
        icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="war"
      />
      <Notification
        message="Error message"
        icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="err"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
