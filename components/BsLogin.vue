<template>
  <div class="bs-login">
    <el-dialog
      :visible.sync="dialogVisible"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="20%"
    >
      <div class="bs-login-wrap">
        <img
          class="bs-login-wrap__logo"
          src="~/assets/img/login/icon-logo.png"
        />
        <div class="bs-login-wrap__content">
          <el-form :model="form" :rules="rules" ref="ruleForm">
            <el-form-item prop="phone">
              <el-input
                v-model="form.phone"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
            <el-form-item prop="verificationCode">
              <el-input
                class="input-code"
                v-model="form.verificationCode"
                placeholder="请输入密码"
              >
                <el-button slot="suffix" type="text" @click="onSendCode">
                  {{ codeValue }}
                </el-button>
              </el-input>
            </el-form-item>
            <el-button class="login-wrap-content__login-btn" @click="onLogin"
              >登录</el-button
            >
          </el-form>
          <div
            @click="onAgreementSelect"
            class="login-wrap-content__agreement flex felx-start"
          >
            <div class="wrap-content-agreement-icons">
              <img
                v-if="isAcceptAgreement"
                class="icon-choose"
                src="~/assets/img/login/icon-accept.png"
              />
              <span v-else class="icon-unchoose"></span>
            </div>
            <span class="wrap-content-agreement__text flex-1">
              同意《用户协议》和《隐私协议》，首次登录将自动注册
            </span>
          </div>
        </div>
        <div class="bs-login-wrap__btn--close" @click="onClose">
          <img src="~/assets/img/login/icon-close.png" />
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Message } from "element-ui";
import { ApiGetCode, ApiPostLogin } from "@/plugins/api/account";
import { IsPhone } from "/plugins/utils";
import {Im, ImInit} from '@/plugins/chat'
const COUNT_DOWN_TIME = 60; // 验证码倒计时

export default {
  name: "BsLogin",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const validatorPhone = (_, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      if (!IsPhone(value)) {
        return callback(new Error("请输入正确的手机号"));
      }
      return callback();
    };
    return {
      form: {
        phone: "",
        verificationCode: "",
      },
      isAcceptAgreement: false, // 是否勾选协议
      countDown: 0, // 验证码倒计时
      rules: {
        phone: [{ validator: validatorPhone, trigger: "blur" }],
        verificationCode: [
          { required: true, message: "请输入验证码", trigger: "change" },
        ],
      },
    };
  },
  computed: {
    ...mapState(["token"]),
    dialogVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        if (!val) {
          this.$refs.ruleForm.resetFields();
          this.isAcceptAgreement = false;
          this.countDown = 0;
        }
        this.$emit("update:visible", val);
      },
    },
    codeValue() {
      return this.countDown ? `${this.countDown}s重新获取` : "获取验证码";
    },
  },
  methods: {
    onAgreementSelect() {
      this.isAcceptAgreement = !this.isAcceptAgreement;
    },
    async onSendCode() {
      if (this.countDown > 0 || !IsPhone(this.form.phone)) {
        return;
      }
      this.countDown = COUNT_DOWN_TIME;
      let time;
      const { result, error } = await ApiGetCode({
        phone: this.form.phone,
      });
      if (result) {
        time = setInterval(() => {
          if (this.countDown === 0) {
            clearInterval(time);
            return;
          }
          this.countDown -= 1;
        }, 1e3);
        return;
      }
      this.countDown = 0;
      clearInterval(time);
      Message.error(error.message || "验证码发送失败，请检查手机号是否正确");
    },
    onLogin() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          if (!this.isAcceptAgreement) {
            Message.error("请勾选同意《用户协议》和《隐私协议》");
            return;
          }
          const { result, error } = await ApiPostLogin({
            ...this.form,
            clientId: 1,
            systemId: 1,
          });
          if (error !== null) {
            Message.error(
              error.message || "登录失败，请检查手机号或验证码是否正确"
            );
            return;
          }
          if (result) {
            this.dialogVisible = false;
            this.$store.commit("setToken", result.token);
            this.$store.dispatch("getUserInfo");
            // this.$startWebSockets()
            // 初始化IM
            ImInit().then(() => {
              // 获取到会话列表
              Im.getSessionList();
            });
          }
        }
      });
    },
    onClose() {
      this.dialogVisible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.bs-login {
  /deep/.el-dialog {
    border-radius: 4px;
    .el-dialog__header {
      display: none;
    }
    .el-dialog__body {
      padding: 38px 30px;
    }
    .bs-login-wrap {
      .bs-login-wrap__logo {
        width: 198px;
        height: 32px;
        margin-bottom: 44px;
      }
      .bs-login-wrap__content {
        .el-form {
          .el-form-item {
            margin-bottom: 24px;
            .input-code {
              .el-input__inner {
                padding-right: 100px;
              }
            }
            .el-input {
              .el-input__suffix {
                padding-right: 16px;
                .el-button {
                  color: #ff512b;
                }
              }
              .el-input__inner {
                border-style: none;
                background: #f8f8f8;
                border-radius: 4px 4px 4px 4px;
              }
            }
          }
          .login-wrap-content__login-btn {
            width: 100%;
            height: 42px;
            border-style: none;
            color: #ffffff;
            font-size: 16px;
            margin-top: 14px;
            background: linear-gradient(270deg, #ffa25a 0%, #ff7f39 100%);
            border-radius: 4px 4px 4px 4px;
          }
        }
        .login-wrap-content__agreement {
          padding: 0 33px;
          color: #999999;
          font-size: 12px;
          margin-top: 25px;
          cursor: pointer;
          .wrap-content-agreement-icons {
            cursor: pointer;
            .icon-unchoose {
              display: block;
              width: 16px;
              height: 16px;
              border: 1px solid #cccccc;
              border-radius: 50%;
            }
            .icon-choose {
              width: 16px;
              height: 16px;
            }
          }
          .wrap-content-agreement__text {
            display: block;
            text-align: center;
            margin-left: 8px;
          }
        }
      }
      .bs-login-wrap__btn--close {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        bottom: -60px;
        cursor: pointer;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>
