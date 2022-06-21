import { combineReducers } from 'redux'

import { spellApi } from './api/spells'
import { greetingsApi } from './api/greetings'
import tabReducer from './tabs'
import configreducer from './admin/config/configState'
import scopeSlice from './admin/scope/scopeState'
import clientSlice from './admin/clientS/clientState'

const reducers = combineReducers({
  tabs: tabReducer,
  [spellApi.reducerPath]: spellApi.reducer,
  [greetingsApi.reducerPath]: greetingsApi.reducer,
  config: configreducer,
  scope: scopeSlice,
  client: clientSlice,
})

export default reducers
