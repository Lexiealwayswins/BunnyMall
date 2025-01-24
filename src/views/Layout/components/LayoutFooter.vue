<template>
  <footer class="app-footer">
    <div class="contact">
      <div class="container">
        <dl>
          <dt>Customer Services</dt>
          <dd><i class="iconfont icon-a-kefukefuzhongxin"></i>Online Chat</dd>
          <dd><i class="iconfont icon-gengduo-wentifankui"></i>Your Feedback</dd>
        </dl>
        <dl>
          <dt>Follow Us</dt>
          <dd><i class="iconfont icon-ins"></i>Instagrm</dd>
          <dd><i class="iconfont icon-facebook-fill"></i>Facebook</dd>
        </dl>
        <dl>
          <dt>Download App</dt>
          <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" alt=""></dd>
          <dd class="download">
            <span>Scan QRcode</span>
            <span>Download Now</span>
            <a href="">Download Page</a>
          </dd>
        </dl>
        <dl>
          <dt>Hotline Service</dt>
          <dd class="hotline">400-0000-000 <small>Monday-Friday 9:00-17:00</small></dd>
        </dl>
      </div>
    </div>
    <div class="extra">
      <div class="container">
        <div class="slogan">
          <a href="">
            <i class="iconfont icon-footer-"></i>
            <span>Good Price</span>
          </a>
          <a href="">
            <i class="iconfont icon-good"></i>
            <span>Quick Delivery</span>
          </a>
          <a href="">
            <i class="iconfont icon-footer-combo"></i>
            <span>Solid Quality</span>
          </a>
        </div>
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
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  padding-top: 20px;
  background-color: f5f5f5;
  overflow: hidden;

  .contact {
    background-color: #fff;

    .container {
      display: flex;
      padding: 60px 0 40px 25px;

      dl {
        height: 190px;
        text-align: center;
        padding: 0 70px;
        border-right: solid 1px #f2f2f2;
        color: #999;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          border-right: none;
          padding-right: 0;
        }

        dt {
          line-height: 1;
          font-size: 18px;
        }

        dd {
          float: left;
          margin: 36px 12px 0 0;
          padding-top: 10px;
          width: 92px;
          height: 92px;
          border: solid 1px #ededed;
          font-size: 12px;

          .iconfont {
            display: block;
            font-size: 36px;
            color: #666;
          }

          &:hover {
            .iconfont {
              color: $xtxColor;
            }
          }

          &:last-child {
            margin-right: 0
          }
        }
        .qrcode {
          width: 92px;
          height: 92px;
          padding: 7px;
          border: 1px solid #ededed;
        }

        .download {
          padding-top: 5px;
          border: none;
          font-size: 14px;
          width: auto;
          height: auto;

          span {
            display: block;
          }

          a {
            display: block;
            line-height: 1;
            margin-top: 5px;
            padding: 10px 15px;
            background-color: $xtxColor;
            border-radius: 2px;
            color: #fff;
          }
        }

        .hotline {
          padding-top: 20px;
          width: auto;
          height: auto;
          border: none;
          font-size: 20px;
          color: #666;

          small {
            display: block;
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }

  .extra {  
    background-color: #333;
    text-align: center;
    color: #fff;

    .slogan {
      display: flex;
      justify-content: space-between;
      padding: 60px 100px;
      // height: 178px;
      // line-height: 58px;
      border-bottom: 1px solid #434343;

      a {
        height: 58px;
        line-height: 58px;
        color: #fff;
        font-size: 28px;

        i {
          font-size: 50px;
          vertical-align: middle;
          margin-right: 10px;
          font-weight: 100;
        }

        span {
          vertical-align: middle;
          text-shadow: 0 0 1px #333;
        }
      }
    }

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