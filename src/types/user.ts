import { ICredentials, IUserData, IUserToUpdate } from './generalTypes'

export enum UserActionType {
  ACTION_LOGIN_USER = 'ACTION_LOGIN_USER',
  ACTION_FAILED_TO_LOGIN_USER = 'ACTION_FAILED_TO_LOGIN_USER',
  ACTION_LOGOUT_USER = 'ACTION_LOGOUT_USER',
  ACTION_FAILED_TO_LOGOUT_USER = 'ACTION_FAILED_TO_LOGOUT_USER',
  ACTION_USER_REGISTRATION = 'ACTION_USER_REGISTRATION',
  ACTION_FAILED_TO_REGISTER_USER = 'ACTION_FAILED_TO_REGISTER_USER',
  ACTION_UPDATE_USER = 'ACTION_UPDATE_USER',
  ACTION_FAILED_TO_UPDATE_USER = 'ACTION_FAILED_TO_UPDATE_USER',
  ACTION_SET_USER_DATA = 'ACTION_SET_USER_DATA',
  ACTION_SET_AUTH_STATUS = 'ACTION_SET_AUTH_STATUS',
  ACTION_SET_REGISTRATION_USER = 'ACTION_SET_REGISTRATION_USER',
  ACTION_RESET_USERS_ERROR = 'ACTION_RESET_USERS_ERROR',
  ACTION_CHECK_AUTH = 'ACTION_CHECK_AUTH',
  ACTION_SET_WEBSOCKET_CONNECTION = 'ACTION_SET_WEBSOCKET_CONNECTION'
}

export interface IUserReducer {
  isAuth: boolean
  isRegistered: boolean
  userData: IUserData
  loginError: string
  registrError: string
  updateError: string
  logoutError: string
  isWebSocketConnected: boolean
}

export interface ILoginUserAction {
  type: UserActionType.ACTION_LOGIN_USER
  payload: ICredentials
}

interface IFailedToLoginAction {
  type: UserActionType.ACTION_FAILED_TO_LOGIN_USER
  payload: string
}

interface ILogoutUserAction {
  type: UserActionType.ACTION_LOGOUT_USER
}

interface IFailedToLogoutUserAction {
  type: UserActionType.ACTION_FAILED_TO_LOGOUT_USER
  payload: string
}

export interface IUserRegistrationAction {
  type: UserActionType.ACTION_USER_REGISTRATION
  payload: ICredentials
}

interface IFailedToRegisterUser {
  type: UserActionType.ACTION_FAILED_TO_REGISTER_USER
  payload: string
}

export interface IUpdateUserAction {
  type: UserActionType.ACTION_UPDATE_USER
  payload: IUserToUpdate
}

interface IFailedToUpdateUserAction {
  type: UserActionType.ACTION_FAILED_TO_UPDATE_USER
  payload: string
}

interface ISetUserDataAction {
  type: UserActionType.ACTION_SET_USER_DATA
  payload: IUserData
}

interface ISetAuthStatusAction {
  type: UserActionType.ACTION_SET_AUTH_STATUS
  payload: boolean
}

interface ISetRegistrationUserAction {
  type: UserActionType.ACTION_SET_REGISTRATION_USER
  payload: boolean
}

interface IResetErrorsAction {
  type: UserActionType.ACTION_RESET_USERS_ERROR
}

interface ISetWebsocketConnection {
  type: UserActionType.ACTION_SET_WEBSOCKET_CONNECTION
  payload: boolean
}

export type UserAction =
  | ILoginUserAction
  | IFailedToLoginAction
  | ILogoutUserAction
  | IFailedToLogoutUserAction
  | IUserRegistrationAction
  | IFailedToRegisterUser
  | IUpdateUserAction
  | IFailedToUpdateUserAction
  | ISetUserDataAction
  | ISetAuthStatusAction
  | ISetRegistrationUserAction
  | IResetErrorsAction
  | ISetWebsocketConnection
