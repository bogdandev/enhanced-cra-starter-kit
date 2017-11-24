import { createSelector } from 'reselect'

const _getAppState = state => state.app

export const appStartedUp = createSelector(_getAppState, app => app.appStartedUp)

export const apiIsFetching = createSelector(_getAppState, app => app.apiFetching)

export const hasErrors = createSelector(_getAppState, app => app.error)