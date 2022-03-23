export const api = {
  async login({ commit }, form) {
    return await this.$axios.post("/online/authorization/auth/login", form);
  },

  async sendEmail(email) {
    return await this.$axios.post("/online/authorization/register/email/send", {
      email,
    });
  },
  async register(data) {
    return await this.$axios({
      url: `/online/management/operator/register`,
      method: "POST",
      data,
    });
  },
  async verifyRegisterToken(data) {
    return await this.$axios({
      url: `/online/authorization/register/url/validate/email/token/`,
      method: "POST",
      data,
    });
  },
  async sendResetEmail(data) {
    return await this.$axios({
      url: `/online/authorization/password/reset/send/email`,
      method: "POST",
      data,
    });
  },
  async verifyResetToken(data) {
    return await this.$axios({
      url: `/online/authorization/password/reset/verify`,
      method: "POST",
      data,
    });
  },

  async resetPassword(data) {
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

  async getOperatorInfo(token) {
    return await this.$axios({
      url: `/online/authorization/operator/self`,
      method: "GET",
    });
  },

  async reRegister(data) {
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
};
