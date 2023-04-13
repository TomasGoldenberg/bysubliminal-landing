import React from 'react';
import {
  InlineWidget,
  PopupWidget,
  useCalendlyEventListener
} from 'react-calendly';
import { useTheme } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import { postNewMeetingScheduled } from '../../api/contact';

const App = () => {
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();

  const handleScheduleMeet = (event) => {
    postNewMeetingScheduled(event);
    enqueueSnackbar('Event scheduled successfully', { variant: 'success' });
    console.log(event, event.data);
  };

  useCalendlyEventListener({
    onEventScheduled: handleScheduleMeet
  });
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/bysubliminal/15min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById('root')}
        text="Get in touch !"
        textColor={theme.palette.grey[900]}
        color={theme.palette.warning.main}
      />
      <InlineWidget url="https://calendly.com/bysubliminal/15min" />
    </div>
  );
};

export default App;
