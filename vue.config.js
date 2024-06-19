module.exports = defineConfig({
    //可使用 **process.env.NODE_ENV** 來判斷是否為發布而修改發佈位置
    publicPath: process.env.NODE_ENV === 'production'
      ? '/data_add_serial_number/'
      : '/'
  })