import React from 'react';
import '../../utils/css/Cards.css';
import Card from './Card';
import Menu from '../../utils/icons/menu.svg'
import Add from '../../utils/icons/add.svg'
import { priorityIcons, statusIcons } from '../../utils/data/iconfile';

export default function Cards(props) {
  // Reset card count for each group
  let cardCount = 0;

  const renderIcon = () => {
    if (props.group === 'priority') {
      return <img src={priorityIcons[props.listTitle]} alt={props.listTitle} style={{ marginRight: "8px" }} />;
    }
    else if(props.group === 'status'){
      return statusIcons[props.listTitle];
    }
    return null;
  };

  return (
    <div className="listContainer">
      <div className="listHeader">
        <div className="listHeaderLeft">
          {renderIcon()}
          <div className="listTitle">
            {{
              priority: <>
                {props.priorityList
                  ? props.priorityList.map(priorityProperty =>
                    priorityProperty.priority === props.listTitle
                      ? <>{priorityProperty.name}</>
                      : null
                  )
                  : null}
              </>,
              status: <>{props.listTitle}</>,
              user: <>{props.listTitle}</>,
            }[props.group]}
          </div>
          <div className="listSum">{cardCount}</div>
        </div>
        <div className="listHeaderRight">
          <div className="addItem">
            <img src={Add} alt="Add Item" width={18} height={18}/>
          </div>
          <div className="optionItem">
            <img src={Menu} alt="Options" width={18} height={18} />
          </div>
        </div>
      </div>

      <div className="cardItems">
        {props.tickets.map((ticket, index) => {
          let showCard = false;
          let priorityCommand = false;


          // Determine which cards to show based on the group
          if (props.group === 'status' && ticket.status === props.listTitle) {
            showCard = true;
          } else if (props.group === 'priority' && ticket.priority === props.listTitle) {
            priorityCommand = true;
            showCard = true;
          } else if (props.group === 'user' && ticket.userObj.name === props.listTitle) {
            priorityCommand = true;
            showCard = true;
          }

          if (showCard) {
            cardCount++;
            return <Card 
            key={ticket.id}
            cardDetails={ticket}
            status={ticket.status} 
            priorityCommand = {priorityCommand}
            />;
          }

          return null;
        })}
      </div>

      {/* Update card count display */}
      {/* <div className="listSum">{cardCount} items</div> */}
    </div>
  );
}
