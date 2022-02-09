<template>
    <div class="main">
        <nav-main />
        <router-view></router-view>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import NavMain from "@/components/NavMain/index.vue";

export default defineComponent({
  components: {
    NavMain
  },
  setup() {
    return {
      
    }
  }
});
</script>

<style lang="scss">
body {
    margin: 0px;
    overflow: scroll;
    height: 100%;
}
.main {
    min-width: 1100px;
    height: 100%;
    position: relative;
}
</style>
