import { createSelector } from 'reselect'

const _getAuth = state => state.auth

export const isAuthenticated = createSelector(_getAuth, auth => !!auth.token)