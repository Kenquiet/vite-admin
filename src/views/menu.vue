<template>
  <div>
    <a-menu
      mode="inline"
      :openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      @openChange="onOpenChange"
    >
      <a-sub-menu v-for="menu in menus" :key="menu.id">
        <template #title>
          <span>
            <MailOutlined /><span>{{ menu.title }}</span>
          </span>
        </template>
        <template v-if="menu.children.length > 0">
            <a-menu-item v-for="child in children" :key="child.id">
              {{ child.title }}
            </a-menu-item>
        </template>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  components: {

  },
  setup() {
    return {
      
    }
  }
})
</script>