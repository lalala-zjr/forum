<template>
    <div id="send">
        <editor id="tinymce" v-model="value" :init="init"></editor>
    </div>
</template>
<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/plugins/image'
import 'tinymce/plugins/media'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: 'lists image media table textcolor wordcount contextmenu'
    },
    toolbar: {
      type: [String, Array],
      default: 'undo redo |  formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat'
    }
  },
  data () {
    return {
      init: {
        language_url: '/static/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/static/tinymce/skins/lightgray',
        height: 300,
        branding: false,
        menubar: false
      }
    }
  },
  components: {
    Editor,
    tinymce
  },
  mounted () {
    tinymce.init({})
  }
}
</script>
<style scoped>
#send{
    width: 80%;
    height: 700px;
    margin-left: 10%;
    margin-top: 30px;
}
/* textarea{
  display: block;
} */
.tox{
  visibility: visible;
  border: 1px solid black;
}
.tox-editor-container{
  width: 80%;
  margin-left: 10%;
  border: 1px solid red;
}
</style>
