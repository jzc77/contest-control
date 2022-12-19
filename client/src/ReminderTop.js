import InputLinkField from "./InputLinkField";
import Options from "./Options";
// import CustomOptionsHidden from "./CustomOptionsHidden";
import Submit from "./Submit";
import './styles/styles.scss';

function ReminderTop() {
  return (
    <>
      <h1 className="siteTitle">Contest Control</h1>
      <div className="ReminderTopSubDiv">
        <p>Remind me of this link:</p>
        <InputLinkField />
        <p>Remind me every:</p>
        <Options />
        {/* <CustomOptionsHidden /> */}
        <Submit />
      </div>
    </>
  );
}

export default ReminderTop;
