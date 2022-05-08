import React, {ChangeEvent} from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type FormDataType = {
    newMessageBody: string
}

const Dialogs = (props: DialogsPropsType) => {

    //let sendMessage = React.createRef<HTMLTextAreaElement>(); по максимуму не используем

    let addNewMessage = (values: FormDataType) =>{
        props.sendMessage(values.newMessageBody);
    };

    let dialogElements = props.dialogPage.dialogs
        .map(d => <DialogItem id={d.id} name={d.name} key={d.id}/>);

    let messagesElements = props.dialogPage.messages
        .map(m => <Messages messages={m} key={m.id}/>);


    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogItems}>
                    {dialogElements} {/*Отрисовка компоненты через переменную и маппинг*/}
                </div>
                <div className={style.messages}>
                    <div>{messagesElements}</div>
                    {/*Отрисовка компоненты через переменную и маппинг*/}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs;

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={'textarea'} name={'newMessageBody'} placeholder={"Enter your massage..."}/>
                </div>
                {/*<textarea className={style.button} onChange={onChangeNewMessage} value={props.dialogPage.newMessageBody}*/}
                {/*/>*/}
                {/*<button onClick={onSendMessage}>Send</button>*/}
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    )
}

const AddMessageFormRedux  = reduxForm<FormDataType>({
    form: 'dialogAddMessageForm' // a unique name for the form
})(AddMessageForm)