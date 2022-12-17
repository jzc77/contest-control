import InputLinkField from "./InputLinkField";
import Options from "./Options";
import './styles/styles.scss';

function ReminderTop() {
  return (
    <div className="ReminderTop">
      <p>Remind me of this link:</p>
      <InputLinkField />
      <p>Remind me every:</p>
      <Options />
    </div>
  );
}

export default ReminderTop;
