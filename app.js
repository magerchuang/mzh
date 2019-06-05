//app.js
App({
  onLaunch: function () {
    try {
      wx.clearStorageSync()
    } catch (e) {
      // Do something when catch error
    }
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      //console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })

    })

    updateManager.onUpdateFailed(function () {
      // 新的版本下载失败
      wx.showModal({
        title: '更新提示',
        content: '新版本下载失败',
        showCancel: false
      })
    })


  },
  globalData: {
    version: 'V1.0.0',
    queryUrl: 'https://www.meizhuquan.com/xiaochengxu/',
    projectTitle: '美助圈',
    openId: '',//用户openid
    userId: 0//用户id
  }

})