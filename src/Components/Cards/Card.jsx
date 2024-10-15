import '../../utils/css/Card.css';
import { priorityIcons } from '../../utils/data/iconfile';
import { statusIconMapping } from '../../utils/data/iconfile';
import { getColor } from '../../utils/data/colors';

export default function Card(props) {
  const profileColor = getColor(props.cardDetails.userObj.name);

  return (
    <div className="card">
      <div className="cardHeader">
        <div className="cardId">{props.cardDetails.id}</div>
        <div className="cardProfile" style={{ backgroundColor: profileColor }}>
          <div className="cardInitials">
            {props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}
          </div>
          <div className={props.cardDetails.userObj.available ? "cardProfileInitial cardAvailable" : "cardProfileInitial"}></div>
        </div>
      </div>

      <div className="cardTitle">
        {props?.priorityCommand && <img src={statusIconMapping[props.status]} alt={props.statusTitle} style={{ marginRight: "5px" }} />}
        {props.cardDetails.title}
      </div>

      <div className="cardTags">
        <img src={priorityIcons[props.cardDetails.priority]} style={{ marginRight: "9px" }} alt="Priority Icon" />

        {props.cardDetails.tag.map((tag) => (
          <div className="tagBox" key={tag}>
            <div className="tagTitle">{tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
