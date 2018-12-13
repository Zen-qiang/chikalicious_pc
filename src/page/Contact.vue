<template>
  <div class="c-contact">
    <div class="aboutus">
      <div>
        <h1>CONTACT US</h1>
        <div>
          <p class="email">susie.gu@chikalicious.cn</p>
          <p class="tel">021 - 60759833</p>
          <p><img src="../assets/image/qrcode.png"></p>
        </div>
      </div>
    </div>
    <div class="sendemail">
      <section>
        <div class="lt">
          <div>
            <p>LEAVE A REPLY<br>Your email address will not be published.</p>
            <p>Comments? Questions? Requests?<br>Do not hesitate to get in touch with us.</p>
          </div>
          <div><button @click="sendEmail">SEND</button></div>
        </div>
        <div class="rt">
          <ul>
            <li>
              <span>COMMENT</span>
              <textarea placeholder="chikalicious……" rows="8" v-model="context"></textarea>
            </li>
            <li>
              <span>NAME</span>
              <input type="text" v-model="userName">
            </li>
            <li>
              <span>E-MAIL</span>
              <input type="email" v-model="emailName">
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Contact',
  data () {
    return {
      context: '',
      emailName: '',
      userName: ''
    }
  },
  methods: {
    sendEmail () {
      if (!this.context) {
        alert('请输入意见')
        return
      }
      if (!this.userName) {
        alert('请输入用户名')
        return
      }
      var regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      if (this.emailName === '') {
        alert('请输入邮箱')
        return
      } else if (!regEmail.test(this.emailName)) {
        alert('邮箱格式不正确')
        return
      }
      this.$axios.post('/sendEmail', {
        comment: this.context,
        sendName: this.userName,
        emailAddress: this.emailName
      }).then(({data}) => {
        if (data.code === 666) {
          alert('发送成功')
        } else {
          alert(data.message)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.c-contact {
  padding-top: rem(50);
  color: $color;
  .aboutus {
    max-width: 960px;
    margin: 0 auto;
    background: url('../assets/image/home_case_1_1.png') no-repeat center;
    background-size: cover;
    padding: rem(50) 0;
    text-align: center;
    font-size: 0;
    > div {
      display: inline-block;
      width: rem(500);
      background: #fff;
      border: 1px solid currentColor;
      h1 {
        line-height: rem(80);
        font-size: rem(32);
        text-align: center;
        font-family: 'GreyLight';
        font-weight: normal;
        border-bottom: 1px solid currentColor;
        background: #eee repeating-linear-gradient(-45deg, transparent, transparent 2px, #fff 2px, #fff 6px);
      }
      > div {
        padding: rem(80) 0;
        p {
          font-size: rem(18);
          line-height: rem(24);
          font-family: 'GreyBold';
          line-height: rem(30);
        }
        img {
          vertical-align: middle;
          margin: rem(10) 0;
          max-width: rem(120);
        }
      }
    }
  }
  .sendemail {
    background: #947555;
    margin-top: rem(190);
    font-family: 'GrayLight';
    section {
      max-width: 960px;
      margin: 0 auto;
      padding: rem(50) 0;
      display: flex;
      > div {
        flex: 0 0 50%;
      }
      .lt {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        font-size: rem(16);
        p {
          margin-bottom: rem(40);
        }
        button {
          font-size: rem(18);
          border: none;
          cursor: pointer;
          color: $activeColor;
          background: #0c0c0c;
          line-height: rem(34);
          padding: 0 rem(60);
        }
      }
      .rt {
        ul {
          margin-bottom: rem(-15);
          li {
            display: flex;
            margin-bottom: rem(15);
            span {
              width: rem(100);
              text-align: right;
              font-size: rem(16);
              margin-right: rem(10);
              line-height: rem(30);
            }
            input, textarea {
              flex: 1;
              font-size: rem(16);
              border: 1px solid currentColor;
              padding: 0 rem(8);
              line-height: rem(30);
            }
            textarea {
              resize: none;
            }
          }
        }
      }
    }
  }
}
</style>
