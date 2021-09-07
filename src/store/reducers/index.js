import { combineReducers } from 'redux'

import user from './user'
import notifications from './notifications'
import tabnav from './tabnav'
import selected from './selected'

export default combineReducers({
    user,
    notifications,
    tabnav,
    selected
});