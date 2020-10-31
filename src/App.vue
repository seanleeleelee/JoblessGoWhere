<template>
  <div id="JoblessGoWhere">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>