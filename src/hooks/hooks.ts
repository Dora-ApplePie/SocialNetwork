import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {AppDispatch, AppRootStateType} from '../redux/reduxStore'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector