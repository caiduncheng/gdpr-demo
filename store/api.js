export const api = {
  async login({ commit }, form) {
    return await this.$axios({
      url: "/online/authorization/auth/login",
      data: form,
      method: "POST",
      timeout: 1000 * 30
    });
  },

  async sendEmail(store, email) {
    return await this.$axios.post("/online/authorization/register/email/send", {
      email,
    });
  },
  async register(store, data) {
    return await this.$axios({
      url: `/online/management/operator/register`,
      method: "POST",
      data,
    });
  },
  async verifyRegisterToken(store, data) {
    return await this.$axios({
      url: `/online/authorization/register/url/validate/email/token`,
      method: "POST",
      data,
    });
  },
  async sendResetEmail(store, data) {
    return await this.$axios({
      url: `/online/authorization/password/reset/send/email`,
      method: "POST",
      data,
    });
  },
  async verifyResetToken(store, data) {
    return await this.$axios({
      url: `/online/authorization/password/reset/verify`,
      method: "POST",
      data,
    });
  },

  async resetPassword(store, data) {
    return await this.$axios({
      url: `/online/authorization/password/reset`,
      method: "POST",
      data,
    });
  },

  async getCountryList() {
    return await this.$axios({
      url: `/online/authorization/country/list`,
      method: "GET",
      params: {
        status: 1,
      },
    });
  },

  async getOperatorInfo(store, token) {
    return await this.$axios({
      url: `/online/authorization/operator/self`,
      method: "GET",
    });
  },

  async reRegister(store, data) {
    return await this.$axios({
      url: `/online/management/operator/re-register`,
      method: "POST",
      data,
    });
  },

  async getTimeStamp() {
    return await this.$axios({
      url: `/online/authorization/auth/timestamp`,
    });
  },

  async contactUs(store, data) {
    return await this.$axios({
      url: `/online/contact-us/message-record`,
      method: "POST",
      data,
    });
  },

  async verifyRegisterToken(store, data) {
    return await this.$axios({
      url: `/online/authorization/register/url/validate/email/token/`,
      method: "POST",
      data,
    });
  },

  async getInfo() {
    return await this.$axios({
      url: "/online/authorization/auth/user/info",
      method: "get",
    });
  },

  async logout(store) {
    return await this.$axios({
      url: "/online/authorization/auth/logout",
      method: "post",
    });
  },

  async getOperatorInfo({ state }, token) {
    return await this.$axios({
      headers: {
        "WEB-TOKEN": token,
      },
      url: `/online/authorization/operator/self`,
      method: "GET",
    });
  },
};
