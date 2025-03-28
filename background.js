const app = {
  data() {
    return {
      APP_NAME: "AI中控",
      user: "",
      pwd: "",
      vcode: "",
      verifycodeUrl: "https://example.com/verifycode",
      kfInfo: localStorage.getItem("kfInfo") || ""
    };
  },
  methods: {
    changeVcode() {
      this.verifycodeUrl = "https://example.com/verifycode?" + Math.random();
    },
    submitReg(event) {
      event.preventDefault();
      const username = this.user.trim();
      const password = this.pwd.trim();
      const verificationCode = this.vcode.trim();

      if (!username || !password || !verificationCode) {
        alert("请填写完整信息！");
        return;
      }

      console.log("用户名:", username);
      console.log("密码:", password);
      console.log("验证码:", verificationCode);

      localStorage.setItem("user", JSON.stringify({ username }));
      alert("登录成功！");
    },
    getInfo(callback) {
      callback({
        user: "永久账户",
        token: "example_token"
      });
    },
    setLocalStorage(data) {
      localStorage.setItem("updateUrl", data.updateUrl || "");
      localStorage.setItem("kfInfo", data.kfInfo || "");
      localStorage.setItem("officalSite", data.officalSite || "");
    },
    getRandomWelcomeMessage() {
      const messages = [
        "欢迎各位老铁来到直播间",
        "大哥大姐王子公主们，大家好",
        "欢迎来到直播间的家人们",
        "万水千山总是情，帮忙点赞行不行",
        "帮忙点点赞，感谢家人们的到来"
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }
  }
};

export default app;