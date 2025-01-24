<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const confirm = () => {
  userStore.clearUserInfo()
  router.push('/login')
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="userStore.userInfo.token"> 
          <li><a href=""><i class="iconfont icon-avatar"></i>{{ userStore.userInfo.account }}</a></li>
          <li>
            <el-popconfirm @confirm="confirm" title="Are you sure to logout?" confirm-button-text="Confirm" cancel-button-text="Cancel"
            popper-style="width: 300px;" 
            >
              <template #reference>
                <a href="#" @click.prevent>Logout</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="">My Order</a></li>
          <li><a href="">Membership</a></li>
        </template>
        <template v-else>
          <li><a href="" @click="$router.push('/login')">Login</a></li>
          <li><a href="">Help Center</a></li>
          <li><a href="">About Us</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.app-topnav {
  background-color: #333;
  height: 50px;

  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;

    li {
      a {
        display: inline-block;
        padding: 0 15px;
        line-height: 1;
        color: #cdcdcd;

        i {
          font-size: 14px;
          margin-right: 5px;
        }

        &:hover {
          color: $xtxColor;
        }
      }
      ~li {
        a {
          border-left: solid 1px #cdcdcd;
        }
      }
    }
  }
}
</style>