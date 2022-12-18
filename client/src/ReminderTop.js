import InputLinkField from "./InputLinkField";
import Options from "./Options";
import Submit from "./Submit";
import './styles/styles.scss';

function ReminderTop() {
  return (
    <div className="ReminderTop">
      <h1>Contest Control</h1>
      <div className="ReminderTopSubDiv">
        <p>Remind me of this link:</p>
        <InputLinkField />
        <p>Remind me every:</p>
        <Options />
        <Submit />
      </div>
    </div>
  );
}

export default ReminderTop;
