import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {observer} from 'mobx-react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {deepOrange500} from 'material-ui/styles/colors'
import AppStore from './appstore'
import RestService from './services/restservice'
import Board from './components/board'

const appStore = new AppStore()
const restService = new RestService(appStore)

@observer
class Main extends Component {

    constructor (args) {
        super (args)
        restService.getProjects()        
    }

	getTheme () {
		return getMuiTheme({
			palette: {
				accent1Color: deepOrange500
			}
		})
	}

	render () {
		return (
			<MuiThemeProvider muiTheme={this.getTheme()} >
                <Board appStore={appStore} restService={restService} />
			</MuiThemeProvider>
		)
	}
}

export default Main
