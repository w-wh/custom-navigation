// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        title: "左右渐变",
        path: "../left-right/left-right",
      },
      {
        title: "多色渐变",
        path: "../multicolor/multicolor",
      },
      {
        title: "纯色不渐变",
        path: "../not-linear-gradient/not-linear-gradient",
      },
      {
        title: "自定义导航栏（下拉刷新时，动画被遮挡）",
        path: "../custom-nav/custom-nav",
      },
      {
        title: "默认导航栏（下拉刷新时正常）",
        path: "../default-nav/default-nav",
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})