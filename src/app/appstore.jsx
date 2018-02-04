import {observable} from 'mobx'

export default class AppStore {
	@observable text = 'React + MobX + React Router + Material-UI + CSS Modules'
	@observable projects = []
    @observable projectsUrl = 'https://raw.githubusercontent.com/fatterpave/projectb/master/data/projects.json'
}
