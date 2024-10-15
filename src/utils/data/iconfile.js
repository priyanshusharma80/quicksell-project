import HighPriority from '../icons/high_priority.svg';
import MediumPriority from '../icons/medium_priority.svg';
import LowPriority from '../icons/low_priority.svg';
import UrgentPriorityGrey from '../icons/urgent_priority_grey.svg';
import NoPriority from '../icons/no_priority.svg';
import Backlog from '../icons/Backlog.svg';
import Cancelled from '../icons/Cancelled.svg';
import Done from '../icons/Done.svg';
import Todo from '../icons/to_do.svg'
import InProgress from '../icons/in-progress.svg'

export const statusIconMapping = {
    'In progress': InProgress,
    'Backlog': Backlog,
    'Todo': Todo,
    'Done': Done,
    'Cancelled': Cancelled,
  };

// Array for priority icons that we're gonna use
export const priorityIcons = [
    NoPriority,
    LowPriority,
    MediumPriority,
    HighPriority,
    UrgentPriorityGrey
];

export const statusIcons = {
    'Backlog': <div className="listIcon">
        <img src={Backlog} alt="Backlog" width="18" height="18" />
    </div>,
    'Todo': <div className="listIcon">
        <img src={Todo} alt="Todo" width="18" height="18" />
    </div>,
    'In progress': <div className="listIcon">
        <img src={InProgress} alt="In Progress" width="18" height="18" />
    </div>,
    'Done': <div className="listIcon">
        <img src={Done} alt="Done" width="18" height="18" />
    </div>,
    'Cancelled': <div className="listIcon">
        <img src={Cancelled} alt="Cancelled" width="18" height="18" />
    </div>
}
