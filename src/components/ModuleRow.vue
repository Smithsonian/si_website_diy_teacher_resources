<template>
  <div class="module-row" :class="{ 'module-row-indented': indent }">
    <div class="module-row-always-shown">
      <div
        class="module-row-left-column"
        :class="{ 'module-row-click-handler': $slots['resource-list'] }"
        @click="toggleExpanded"
      >
        <div class="module-row-icon-container">
          <FontAwesomeIcon
            v-if="$slots['resource-list']"
            class="d-block mx-auto mb-3 module-row-chevron"
            :icon="['fas', 'chevron-down']"
            size="xl"
            :flip="isExpanded ? 'vertical' : undefined"
          />
        </div>
      </div>
      <div>
        <h2 class="h5 text-uppercase text-primary">
          <BLink v-if="href" :href="href" class="text-decoration-none">{{ title }}</BLink>
          <template v-else>{{ title }}</template>
        </h2>
        <p>
          <strong
            ><em>{{ tagline }}</em></strong
          >
          <slot></slot>
        </p>
      </div>
    </div>
    <div v-if="$slots['resource-list']" v-show="isExpanded" class="module-row-resource-list">
      <slot name="resource-list"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isKeyTrue, removeKey, setKeyTrue } from '@/utils/storageUtils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed, onMounted, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    title: string;
    href?: string;
    tagline?: string;
    indent?: boolean;
    defaultOpen?: boolean;
  }>(),
  { defaultOpen: false },
);

const isExpanded = ref(props.defaultOpen);

const expandKey = `module_row-${props.title}`;

const expand = () => {
  isExpanded.value = true;
  setKeyTrue(expandKey);
};

const collapse = () => {
  isExpanded.value = false;
  removeKey(expandKey);
};

const toggleExpanded = computed(() => {
  if (isExpanded.value) {
    return collapse;
  } else {
    return expand;
  }
});

onMounted(() => {
  if (props.defaultOpen) {
    return;
  }
  if (isKeyTrue(expandKey)) {
    expand();
  }
});
</script>

<style>
.module-row {
  padding-top: 1rem;
  margin-bottom: 1rem;
}

.module-row-always-shown {
  display: flex;
}

.module-row-indented {
  margin-left: 100px;
}

.module-row:not(:first-child) {
  border-top: 1px solid var(--slr-dark-brown);
}

.module-row-left-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--slr-dark-grey);
  width: 145px;
}

.module-row-click-handler {
  cursor: pointer;
}

.module-row-icon-container {
  height: 50px;
  width: 145px;
}

.module-row-resource-list {
  margin-left: 145px;
}
</style>
