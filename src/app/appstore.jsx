import {observable} from 'mobx'

export default class AppStore {
	@observable text = 'React + MobX + React Router + Material-UI + CSS Modules'
	@observable projects = []
    @observable contributors = []
    @observable milestonetypes = []
    @observable projecttypes = []
    @observable projectsUrl = 'https://raw.githubusercontent.com/fatterpave/projectc/master/data/projects.json'
    @observable contributorsUrl = 'https://raw.githubusercontent.com/fatterpave/projectc/master/data/contributors.json'
    @observable projecttypesUrl = 'https://raw.githubusercontent.com/fatterpave/projectc/master/data/projecttypes.json'
    @observable milestonetypesUrl = 'https://raw.githubusercontent.com/fatterpave/projectc/master/data/milestonetypes.json'
}
