import React, {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  FocusEvent,
} from 'react';

// Components
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import DataLeakEmails from 'components/DataLeakEmails';

// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BugReportIcon from '@material-ui/icons/BugReport';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import VisibilityIcon from '@material-ui/icons/Visibility';

// Others
import useStyles from './styles';

export const DataLeak = ({ dataLeak }: DataLeakProps) => {
  const classes = useStyles();

  const [seen, setSeen] = useState<boolean>(false);

  const markSeen = useCallback(
    (e) => {
      e.stopPropagation();
      setSeen((v) => !v);
    },
    [seen],
  );

  const seenButtonEvents = {
    onClick: (e: MouseEvent) => markSeen(e),
    onFocus: (e: FocusEvent) => e.stopPropagation(),
  };

  useEffect(() => {
    setSeen(false);
  }, []);

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`PanelContent-${dataLeak.name}`}
        id={`PanelHeader-${dataLeak.name}`}
      >
        {seen ? (
          <IconButton {...seenButtonEvents}>
            <BugReportIcon color="secondary" />
          </IconButton>
        ) : (
          <IconButton {...seenButtonEvents}>
            <BugReportOutlinedIcon color="primary" />
          </IconButton>
        )}
        <Typography
          variant="subtitle2"
          color={seen ? 'secondary' : 'primary'}
          className={classes.dataLeakName}
        >
          {dataLeak.name}
        </Typography>
        <Chip
          color="secondary"
          icon={<VisibilityIcon />}
          label="Seen"
          size="small"
          className={classes.seenChip}
          style={{ opacity: seen ? 1 : 0 }}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.expansionDetails}>
        <DataLeakEmails emails={dataLeak?.emails || []} seen={seen} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export interface DataLeakProps {
  dataLeak: DataLeak;
}

export default DataLeak;
