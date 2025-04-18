<!--
 * @Author: ch
 * @Date: 2022-05-20 09:59:05
 * @LastEditors: ch
 * @LastEditTime: 2022-06-25 15:40:05
 * @Description: file content
-->
<!--
 * @Author: ch
 * @Date: 2022-05-04 17:52:50
 * @LastEditors: ch
 * @LastEditTime: 2022-05-04 17:52:59
 * @Description: file content
-->

<template>
  <div class="account-user-info">
    <div class="account-user-info__label">个人资料</div>
    <div class="account-user-info__content">
      <el-form
        ref="ruleForm"
        :model="form"
        :rules="rules"
        @submit.native.prevent
      >
        <el-form-item label="头像">
          <div class="user-info-content__avatar flex flex-middle">
            <el-image
              v-loading="uploadLoading"
              fit="cover"
              :src="form.avatar"
              :preview-src-list="[form.avatar]"
            >
            </el-image>
            <el-upload
              :action="ossUploadUrl"
              :data="uploadData"
              :show-file-list="false"
              :on-success="handleUploadSuccess"
              :before-upload="handleBeforeUpload"
              :on-error="handleUploadError"
            >
              <el-button>修改头像</el-button>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname" class="form-item__nickname">
          <el-input
            class="user-info-content__nickname"
            placeholder="请输入昵称"
            v-model="form.nickname"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="form.gender" :label="SEX_TYPE.MALE">男</el-radio>
          <el-radio v-model="form.gender" :label="SEX_TYPE.FEMALE">女</el-radio>
        </el-form-item>
        <el-form-item>
          <UiButton type="yellow_gradual" :radius="true" @click="onSubmit"
            >确认保存</UiButton
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Message } from "element-ui";
import UiButton from "@/components/UiButton";
import { SEX_TYPE } from "@/constants";
import { ApiPutUser } from "@/plugins/api/account";
import { ApiPostGetOssConfig } from "@/plugins/api/oss";

export default {
  name: "AccountUserInfo",
  components: { UiButton },
  data() {
    return {
      SEX_TYPE,
      form: {
        nickname: "",
        gender: SEX_TYPE.MALE,
        avatar: "",
      },
      rules: {
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 1, max: 10, message: "请输入1-10个字符", trigger: "blur" },
        ],
      },
      ossUploadUrl: "",
      ossDirName: "", // oss路径名
      fileName: "", // 图片文件名
      uploadData: {}, // oss上传图片参数
      uploadLoading: false,
    };
  },
  computed: {
    ...mapState(["userInfo", "token"]),
  },
  watch: {
    userInfo: {
      deep: true,
      handler(val) {
        if (val && Object.keys(val).length > 0) {
          this.initData();
        }
      },
    },
  },
  created() {
    this.getOssConfig();
    if (this.userInfo && Object.keys(this.userInfo).length > 0) {
      this.initData();
    }
  },
  methods: {
    initData() {
      if (this.token) {
        const { nickname, gender, avatar } = this.userInfo;
        Object.assign(this.form, {
          nickname,
          gender: gender === SEX_TYPE.UNKNOW ? SEX_TYPE.MALE : gender, // 默认性别显示男
          avatar,
        });
      }
    },
    async getOssConfig() {
      const { result } = await ApiPostGetOssConfig({
        configId: "account-avatar/",
        serviceName: "uc",
      });
      if (result) {
        const { dir, host, policy, accessId, signature } = result;
        this.ossUploadUrl = host;
        this.ossDirName = dir;
        Object.assign(this.uploadData, {
          policy,
          OSSAccessKeyId: accessId,
          success_action_status: 200,
          signature,
        });
      }
    },

    // 获取文件名
    handleBeforeUpload(file) {
      this.uploadLoading = true;
      this.fileName = file.name;
      Object.assign(this.uploadData, {
        key: `${this.ossDirName}${"${filename}"}`,
        name: file.name,
      });
    },
    handleUploadSuccess() {
      this.uploadLoading = false;
      this.form.avatar = `${this.ossUploadUrl}/${this.ossDirName}${this.fileName}`;
    },
    handleUploadError() {
      this.uploadLoading = false;
    },
    onSubmit() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          const { result } = await ApiPutUser({ ...this.form });
          if (result) {
            Message.success("修改成功");
            this.$store.dispatch("getUserInfo");
          }
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.account-user-info {
  width: 1000px;
  border: 1px solid #dddddd;
  font-size: 14px;
  color: #333333;
  .account-user-info__label {
    height: 42px;
    line-height: 42px;
    padding-left: 24px;
    border-bottom: 1px solid #dddddd;
    background: #f8f8f8;
  }
  .account-user-info__content {
    padding: 44px 69px;
    background: #ffffff;
    /deep/.el-form {
      .el-form-item__label {
        margin-right: 40px;
        color: #333333;
      }
      .user-info-content__avatar {
        margin-top: -13px;
        .el-image {
          width: 70px;
          height: 70px;
          margin-right: 30px;
          border-radius: 50%;
        }
        .el-button {
          width: 89px;
          height: 30px;
          border-radius: 15px 15px 15px 15px;
          border: 1px solid #eeeeee;
        }
      }
      .form-item__nickname {
        margin-left: -10px;
      }
      .user-info-content__nickname {
        height: 35px;
        width: 210px;
        .el-input__inner {
          border: 1px solid #eeeeee;
        }
      }
      .ui-button {
        width: 136px;
        height: 36px;
      }
    }
  }
}
</style>
