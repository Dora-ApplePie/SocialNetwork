import React from 'react';
import styles from './ProfileStatus.module.css'


type PropsType ={
    status: string
    updateProfileStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }

    activateEditMode = () =>{
        this.setState({
            editMode: true
        });
    }
    disActivateEditMode = () =>{
        this.setState({
            editMode: false
        });
        this.props.updateProfileStatus('I love React JS');
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.disActivateEditMode} value={this.props.status}/>
                    </div>
                }
            </div>)
    }
}

export default ProfileStatus;