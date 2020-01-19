<template>
  <div id="app">
    <b-navbar variant="light">
      <b-navbar-brand to="/">
        <img
          src="@/assets/icon.svg"
          alt="內政部役政署"
          width="32"
          height="32"
        />
        <span class="h4 ml-1 align-middle font-weight-bold">內政部役政署</span>
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/about" link-classes="text-primary">
          <information-outline/>
          關於
        </b-nav-item>
        <b-nav-item to="/config" link-classes="text-primary">
          <settings/>
          設定
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InformationOutline from "vue-material-design-icons/InformationOutline.vue";
import Settings from "vue-material-design-icons/Settings.vue";

export default Vue.extend({
  components: {
    InformationOutline,
    Settings
  }
});
</script>

<style lang="scss">
body {
  min-height: 100vh;
}

$content-height: calc(100vh - 60px);

#content {
  min-height: $content-height;
  max-height: $content-height;
  height: $content-height;
  overflow: auto;
}

.material-design-icon > .material-design-icon__svg {
  height: 1.125rem;
  width: 1.125rem;
  vertical-align: text-bottom;
}
</style>
