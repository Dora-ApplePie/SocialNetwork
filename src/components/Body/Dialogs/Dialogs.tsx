import React from 'react'
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog'
import {Message} from './Message/Message'
import {Field, InjectedFormProps, reduxForm, reset} from 'redux-form'
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks'
import {sendNewMessageBodyAC} from '../../../redux/dialogsReducer'
import {maxLength300, required} from '../../../utils/validators/validators'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {Textarea} from '../../common/FormsControls/FormsControls'
import {getDialogs, getMessages} from '../../../redux/dialogsSelectors'
import {Navigate} from 'react-router-dom'
import {getIsAuth} from '../../../redux/authSelectors'

type FormDataType = {
    newMessageBody: string
}

export const DialogsForRedirect = () => {
    const dispatch = useAppDispatch()

    const isAuth = useAppSelector(getIsAuth)
    const dialogs = useAppSelector(getDialogs)
    const messages = useAppSelector(getMessages)

    const addNewMessage = (formData: FormDataType) => {
        dispatch(sendNewMessageBodyAC(formData.newMessageBody))
        dispatch(reset('dialogAddMessageForm'))
    }
    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs.map(dialog => <Dialog key={dialog.id}
                                               id={dialog.id}
                                               name={dialog.name}/>)}
            </div>
            <div className={s.messages}>
                {messages.map(message => <Message key={message.id}
                                                  id={message.id}
                                                  message={message.message}/>)}
                <AddMessageFormRedux onSubmit={addNewMessage} clearSubmit={() => {
                }}/>
            </div>
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'newMessageBody'}
                       component={Textarea}
                       placeholder={'New Message'}
                       validate={[required, maxLength300]}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default withAuthRedirect(DialogsForRedirect)