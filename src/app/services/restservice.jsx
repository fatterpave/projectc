import {observer} from 'mobx-react'
import {Component} from 'react'

@observer
export default class RestService extends Component {
	getProjects = () => {
        fetch(this.props.projectsUrl, {
            accept: 'application/json'
        })
        .then(res => res.json())
        .then(json => {
            this.props.projects = json
        })
        .catch(err => {
            console.error('Error getting user data >>\n', err)
        })
    }
}
