<template>
    <Layout>
        <Footer slot="page-bottom" />
    </Layout>
</template>

<script>
import Layout from "@default-theme/Layout.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Layout,
    Footer
  },
  mounted () {
    let hr
    if (this.$sr) {
      const sr = this.$sr;
      sr.reveal(".feature", { scale: 1.0, duration: 1000 }, 300)
      sr.reveal(".slide-illustration", {
        scale: 1.0,
        direction: 'up',
        distance: 130,
        duration: 2000
      })
      sr.reveal('.content img:not(.openhab-header)', { scale: 1.0 })
      sr.reveal('h1', { scale: 1.0 })
      sr.reveal('h2', { scale: 1.0, delay: 300 })
      sr.reveal('h3', { scale: 1.0 })
    }

    const header = document.getElementsByTagName("header")[0]
    debugger
    if (this.Headroom) {
      hr = new this.Headroom(header)
      hr.init()
      setTimeout(() => {
        header.classList.remove('homepage')
      }, 1500)
    }
  }
};
</script>
