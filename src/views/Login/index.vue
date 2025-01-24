<script setup>
  import { useUserStore } from '@/stores/userStore';
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

  const form = ref({
    username: '13012345683',
    password: '123456',
    agree: true
  })

  const rules = {
    username: [
      { required: true, message: 'Please input username', trigger: 'blur'}
    ],
    password: [
      {required: true, message: 'Please input password', trigger: 'blur'},
      { min: 6, max: 14, message:'The length of username must between 6 and 14', trigger: 'blur'},
    ],
    agree: [
      {
        validator: (rule, val, callback) => {
          return val ? callback() : new Error('Please agree first')
        },
        trigger: 'blur'
      }
    ]
  }

  const router = useRouter()
  const userStore = useUserStore()
  const formRef = ref(null)
  const handleLogin = () => {
    const { username, password } = form.value
    formRef.value.validate(async(valid) => {
      // console.log('看看valid')
      // console.log(valid)
      if (valid) {
        await userStore.getUserInfo({ username, password })
        ElMessage.success('Successfully logged in')
        router.replace({ path:'/' })
      }
    })
  }

</script>

<template>
  <div class="container">
    <div class="head">
      <h1 class="logo">
        <a href="" @click="$router.push('/login')">Bunny Mall</a>
      </h1>
      <div class="enter-home">
        <RouterLink to="/">
          <p>Home<i class="iconfont icon-double-right-arrows"></i>
          </p>
        </RouterLink>
      </div>
    </div>
    <div class="main-body">
      <div class="login">
        <el-form
          ref="formRef"
          :rules="rules"
          class="form"
          :model="form"
          style="max-width: 600px"
          label-width="60px"
          label-position="right"
          status-icon
        >
          <h2>Account Login</h2>
          <el-form-item class="username" label="Username" prop="username">
            <el-input v-model="form.username"/>
          </el-form-item>
          <el-form-item class="password" label="Password" prop="password">
            <el-input v-model="form.password"/>
          </el-form-item>
          <el-form-item prop="agree">
            <el-checkbox v-model="form.agree" class="agree" value="Online activities" name="type">
              I agree all agreements of privacy and service
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleLogin" class="btn">
              Login
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="footer">
      <div class="copyright">
        <p>
          <a href="">About Us</a>
          <a href="">Help Center</a>
          <a href="">Customer Service</a>
          <a href="">Shipping & Delivery</a>
          <a href="">Business Cooperation</a>
          <a href="">Work with Us</a>
        </p>
        <p>CopyRight © Bunny Mall</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 200px;

      a {
        display: block;
        height: 132px;
        width: 100%;
        text-indent: -9999px;
        background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
      }
    }
    .enter-home {
      padding: 20px;
      p {
        display: block;
        height: 20px;
        line-height: 20px;
      }
      .iconfont {
        margin-left: 5px;
        color: $xtxColor;
      }
    }
  }

  .main-body {
    position: relative;
    background: url('@/assets/images/login-bg.png') no-repeat center;
    height: 488px;

    .login {
      position: absolute;
      top: 54px;
      left: 50%;
      padding: 20px 50px;
      background-color: #fff;

      .form {
        h2 {
          margin-bottom: 30px;
          text-align: center;
        }
        .username,
        .password {
          :deep(.el-input)
          {
            --el-input-focus-border-color: #{$xtxColor};
          }
        }
        .agree {
          :deep(.el-checkbox__input.is-checked+.el-checkbox__label) {
            --el-checkbox-checked-text-color: #{$xtxColor};
          }
          :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
            --el-checkbox-checked-bg-color: #{$xtxColor};
            --el-checkbox-checked-input-border-color: #{$xtxColor}; 
          }
          :deep(.el-checkbox__inner:hover) {
            --el-checkbox-input-border-color-hover:#{$xtxColor}; 
          }
        }

      }

      .btn {
        width: 100%;
        border: none;
        background: $xtxColor;
        color: #fff;
      }
    }
  }
  .footer {
    margin-top: 20px;

    .copyright {
      padding-top: 40px;
      height: 170px;
      text-align: center;
      color: #999;
      font-size: 15px;

      p {
        line-height: 1;
        margin-bottom: 20px;

        a {
          padding: 0 10px;
          border-right: 1px solid #999;
          line-height: 1;
          color: #999;

          &:last-child {
            border: none;
          }
        }
      }
    }
  }



}
</style>