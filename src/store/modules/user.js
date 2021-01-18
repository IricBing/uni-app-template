import { getToken, setToken, removeToken } from '../storage/token.js';
import { getRoleList, setRoleList, removeRoleList } from '../storage/roleList.js';
import { getGuardList, setGuardList, removeGuardList } from '../storage/guardList.js';
import { getExpiresIn, setExpiresIn, removeExpiresIn } from '../storage/expiresIn.js';
import { getExpiresAt, setExpiresAt, removeExpiresAt } from '../storage/expiresAt.js';
import { getUserData, setUserData, removeUserData } from '../storage/userData.js';

export default {
  state: {
    token: getToken() || '', //用户Token信息
    expiresIn: getExpiresIn() || null, //token有效期，单位：毫秒
    expiresAt: getExpiresAt() || null, //token过期时间，精确到毫秒
    roleList: getRoleList() || [], //用户角色列表
    guardList: getGuardList() || [], //用户权限列表
    userData: getUserData() || null //用户信息
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
      setToken(token);
    },
    SET_EXPIRES_IN: (state, expiresIn) => {
      state.expiresIn = expiresIn;
      setExpiresIn(expiresIn);
    },
    SET_EXPIRES_AT: (state, expiresAt) => {
      state.expiresAt = expiresAt;
      setExpiresAt(expiresAt);
    },
    EXTEND_TOKEN_EXPIRES_AT: state => {
      state.expiresAt = Date.now() + state.expiresIn;
      setExpiresAt(state.expiresAt);
    },
    SET_ROLE_LIST: (state, roleList) => {
      state.roleList = roleList;
      setRoleList(roleList);
    },
    SET_GUARD_LIST: (state, guardList) => {
      state.guardList = guardList;
      setGuardList(guardList);
    },
    SET_USER_DATA: (state, userData) => {
      state.userData = userData;
      setUserData(userData);
    },
    LOGOUT: state => {
      state.token = '';
      state.expiresIn = null;
      state.expiresAt = null;
      state.roleList = [];
      state.guardList = [];
      state.userData = null;
      removeToken();
      removeExpiresIn();
      removeExpiresAt();
      removeRoleList();
      removeGuardList();
      removeUserData();
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('SET_TOKEN', token);
    },
    setExpiresIn({ commit }, expiresIn) {
      commit('SET_EXPIRES_IN', expiresIn);
    },
    setExpiresAt({ commit }, expiresAt) {
      commit('SET_EXPIRES_AT', expiresAt);
    },
    extendTokenExpiresAt({ commit }) {
      commit('EXTEND_TOKEN_EXPIRES_AT');
    },
    setRoleList({ commit }, roleList) {
      commit('SET_ROLE_LIST', roleList);
    },
    setGuardList({ commit }, guardList) {
      commit('SET_GUARD_LIST', guardList);
    },
    setUserData({ commit }, userData) {
      commit('SET_USER_DATA', userData);
    },
    logout({ commit }) {
      commit('LOGOUT');
    }
  }
};
