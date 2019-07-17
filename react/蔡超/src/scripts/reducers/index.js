import { combineReducers } from 'redux';

import { demo } from './demo';
import { user } from './user';
import { search } from './search';
import { sidebar } from './sidebar';
import { login } from './login';
import { find } from './find';
import { player } from './player';
import { music } from './music';
import { songlist } from './songlist';
import { songsheet } from './songsheet';
import { dynamic } from './dynamic';
import { home } from './home';

export const reducers = combineReducers({
    demo,
    user,
    search,
    sidebar,
    login,
    find,
    player,
    music,
    songlist,
    songsheet,
    dynamic,
    home
})