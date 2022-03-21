import { agents } from './routes/agents'
import { auth } from './routes/auth/login'
import { chains } from './routes/chains/chains'
import { completions } from './routes/completions'
import { spells } from './routes/spells'
import { Route } from './types'

export const routes: Route[] = [
  ...chains,
  ...spells,
  ...auth,
  ...agents,
  ...completions
]
