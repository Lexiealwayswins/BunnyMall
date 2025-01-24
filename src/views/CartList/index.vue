<script setup>
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
const singleCheck = (item, seleted) => {
  cartStore.singleCheck(item.skuId, seleted)
}

const allCheck = (selected) => {
  cartStore.allCheck(selected)
}

const delCart = (item) => {
  cartStore.delCart(item.skuId)
}
</script>

<template>
  <div class="cart-page">
    <div class="container">
      <div class="body">
      <table>
        <thead>
          <tr>
            <th width="120">
              <el-checkbox :model-value="cartStore.isAll" @change="allCheck" />
            </th>
            <th width="400">Product Detail</th>
            <th width="220">Price</th>
            <th width="180">Count</th>
            <th width="180">Total</th>
            <th width="140">Opeartion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.cartList" :key="item.id">
            <td>
              <el-checkbox :model-value="item.selected" @change="(selected) => singleCheck(item, selected)"/>
            </td>
            <td class="goods">
              <RouterLink to="/">
                <img v-img-lazy="item.picture" alt="">
                <p class="ellipsis">{{ item.name }}</p>
              </RouterLink>
            </td>
            <td>$ {{ item.price }}</td>
            <td>
              <el-input-number v-model="item.count"/>
            </td>
            <td class="red">$ {{ (item.price * item.count).toFixed(2) }}</td>
            <td>
              <el-popconfirm 
                title="Are you sure to delete?"
                confirm-button-text="Confirm" cancel-button-text="Cancel"
                @confirm="delCart(item)"
                popper-style="width: 300px"
              >
                <template #reference>
                  <a href="#" class="operation" @click.prevent>Delete</a>
                </template>
              </el-popconfirm>
            </td>
          </tr>
          <tr v-if="cartStore.cartList.length === 0">
            <td>
              <div class="cart-none">
                <el-empty description="The cart list is empty">
                  <el-button type="primary">Browse around</el-button>
                </el-empty>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="footer">
        <div class="total">
          {{ cartStore.allCount }} items in total, selected {{ cartStore.selectedCount }} items, total price:
          <span>${{ cartStore.selectedPrice }}</span>
        </div>
        <div class="order">
          <el-button size="large" type="primary">Checkout</el-button>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.cart-page {

  .container {
    .body {
      margin-top: 20px;
      background-color: #fff;
      table {
        border-spacing: 0;
        border-collapse: collapse;
        line-height: 24px;

        th, td {
          padding: 10px;
          text-align: center;
          border-bottom: 1px solid #f5f5f5;

          &:first-child {
            text-align: left;
            padding-left: 30px;
            color: #999;
          }
        }
        .goods {
          a {
            display: flex;
            align-items: center;
            img {
              margin-right: 10px;
              width: 100px;
              height: 100px;
            }
          }
        }

        .red {
          color: $priceColor;
        }

        .operation {
          color: $xtxColor;
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      padding: 10px 30px;
      background-color: #fff;

      .total {
        span {
          color: $priceColor;
        }
      }

      .order {
        color: $priceColor;
      }
    }
  }
}
</style>