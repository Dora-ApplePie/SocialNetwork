import React from 'react';
import styles from './ProfileStatus.module.css'


type PropsType ={
    status: string
    updateProfileStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateProfileStatus(this.state.status);
    }

    onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
       this.setState({
           status: e.currentTarget.value
       })
    }


    componentDidUpdate(prevProps: any, prevState: any) { //до момента обновления
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.disActivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>)
    }
}

export default ProfileStatus;