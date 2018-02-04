import React from 'react'
import { render } from 'react-dom'
// import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
// import {Router, browserHistory} from 'react-router'
// import {Provider} from 'mobx-react'
import Main from './pages/Main'
// import rootRoutes from './routes'
// import stores from './stores'

// Needed for onTouchTap
injectTapEventPlugin()

render(
	<Main />,
	document.getElementById('app')
)

