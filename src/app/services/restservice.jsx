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
            this.getContributors()
        })
        .catch(err => {
            console.error('Error getting user data >>\n', err)
        })
    }

    getContributors = () => {
        this.getData(this.props.contributorsUrl, 'contributors')
    }

    getData = (url, context) => {
        fetch(url, {
            accept: 'application/json'
        })
        .then(res => res.json())
        .then(json => {
            console.log('>>>>', json)
            this.props[context] = json
        })
        .catch(err => {
            console.error('Error getting user data >>\n', err)
        })
    }
}
