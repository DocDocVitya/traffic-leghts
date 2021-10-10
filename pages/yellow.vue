<template>
  <sector active-color="yellow" :seconds="g_second"/>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex";
import sector from "@/components/sector";

export default {
  name: "yellow",
  components: {
    sector
  },
  data: () => ({
    timer: false,
    startSeconds: 3
  }),
  mounted() {
    if (this.g_actionRedirect) {
      this.m_second(this.startSeconds)
    } else {
      if (this.$route.path !== localStorage.getItem('rememberUrl')) {
        this.m_second(this.startSeconds)
      } else {
        this.m_second(parseInt(localStorage.getItem('second')))
      }
    }

    localStorage.setItem('rememberUrl', this.$route.path)

    this.startLogic()
  },
  computed: {
    ...mapGetters({
      g_second: 'logic/g_second',
      g_prevUrl: 'logic/g_prevUrl',
      g_actionRedirect: 'logic/g_actionRedirect',
    })
  },
  methods: {
    ...mapMutations({
      m_second: 'logic/m_second',
    }),
    ...mapActions({
      a_prevUrl: 'logic/a_prevUrl',
    }),
    startLogic() {
      clearTimeout(this.timer);
      let th = this;
      this.timer = setTimeout(function step() {
        if (th.g_second > 0) {
          th.m_second(th.g_second - 1)
          th.timer = setTimeout(step, 1000)
        } else {

          switch (th.g_prevUrl) {
            case '/red':
              th.a_prevUrl('/yellow')
              th.$router.replace('/green')
              break;
            case '/green':
              th.a_prevUrl('/yellow')
              th.$router.replace('/red')
              break;
            default:
              th.a_prevUrl('/yellow')
              th.$router.replace('/green')
          }
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
