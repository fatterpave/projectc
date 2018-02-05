import React, {Component} from 'react'
import {observer} from 'mobx-react'
import RaisedButton from 'material-ui/RaisedButton'

@observer
export default class Board extends Component {
	
    constructor (args) {
        super(args)

        this.state = {
            piss: 3
        }
    }

    handleGetProjects = () => {
        console.log(this.props.appStore.projects)
        // this.props.restService.getProjects()
    }

	render () {
		return (
			<div>
                {this.props.appStore.text}
                <div>
                    <RaisedButton label='PEI' onClick={this.handleGetProjects} />
                </div>
                <div>
                    {
                        this.props.appStore.projects && this.props.appStore.projects.map((project, index) =>                                
                            <div key={index} style={{display: 'flex'}}>
                                <div key={'id_'+project.id} style={{width: '150px'}}>{project.id}</div>
                                <div key={'name_'+project.name} style={{width: '150px'}}>{project.name}</div>                             
                            </div>
                        )
                    }
                </div>
                <div>
                    {
                        this.props.appStore.contributors && this.props.appStore.contributors.map((contributor, index) =>                                
                            <div key={index} style={{display: 'flex'}}>
                                <div key={'id_'+contributor.id} style={{width: '150px'}}>{contributor.id}</div>
                                <div key={'name_'+contributor.name} style={{width: '150px'}}>{contributor.name}</div>
                                <div key={'birthdate_'+contributor.birthdate} style={{width: '150px'}}>{contributor.birthdate}</div>                             
                            </div>
                        )
                    }
                </div>
            </div>
		)
	}
}
