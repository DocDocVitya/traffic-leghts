<template>
  <sector active-color="green" :seconds="g_second"/>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex";
import sector from "@/components/sector";

export default {
  name: "green",
  components: {
    sector
  },
  data: () => ({
    timer: false,
    startSeconds: 15
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

    this.a_prevUrl('/green')
    this.startLogic()
  },
  computed: {
    ...mapGetters({
      g_second: 'logic/g_second',
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
          th.$router.replace('/yellow')
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
