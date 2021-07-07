import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {RestorIcon} from '@material-ui/icons'
const Editor = () => (
    <BottomNavigation
      showLabels
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
    </BottomNavigation>
);

export default Editor;
