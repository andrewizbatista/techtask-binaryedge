import React from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

// Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

export const DataLeakEmails = ({ emails, seen }: DataLeakEmailsProps) => {
  return (
    <List dense>
      <FixedSizeList
        itemData={emails}
        itemCount={emails?.length || 0}
        itemSize={50}
        width="100%"
        height={200}
      >
        {(props) => <EmailItem seen={seen} {...props} />}
      </FixedSizeList>
    </List>
  );
};

export interface DataLeakEmailsProps {
  emails: { email: string }[];
  seen: boolean;
}

const EmailItem = ({ data, index, style, seen }: EmailItemProps) => {
  const email = data[index]?.email;
  const domain = email?.split('@')[1];

  return (
    <ListItem style={style}>
      <ListItemIcon>
        <AlternateEmailIcon color={seen ? 'secondary' : 'primary'} />
      </ListItemIcon>
      <ListItemText
        color={seen ? 'secondary' : 'primary'}
        primary={email}
        secondary={domain}
      />
    </ListItem>
  );
};

interface EmailItemProps extends ListChildComponentProps {
  seen: boolean;
}

export default DataLeakEmails;
