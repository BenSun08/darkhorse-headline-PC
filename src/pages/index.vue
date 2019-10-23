<template>
  <div class="index">

  </div>
</template>

<script>
export default {
  mounted () {
    let userId = localStorage.getItem('dh_user_id_PC')
    if (!userId) {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
