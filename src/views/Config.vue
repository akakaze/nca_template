<template>
  <b-container>
    <h2>設定</h2>
    <b-form-group
      v-for="(item, index) in configItems"
      label-cols-sm="3"
      label-cols-lg="2"
      :key="index"
      :label="item.title"
      :label-for="item.id"
      :description="item.description"
    >
      <b-form-select
        v-if="item.enum"
        :id="item.id"
        :value="getConfigValue(item.id)"
        :options="item.enum"
        @change="updateConfig"
      />
      <b-checkbox-group
        v-else-if="item.type === 'array'"
        :id="item.id"
        :options="item.items.enum"
        @change="updateConfig"
      />
      <b-checkbox
        v-else-if="item.type === 'boolean'"
        :id="item.id"
        :value="getConfigValue(item.id)"
        @change="updateConfig"
      />
      <b-input
        v-else-if="item.type === 'string'"
        type="text"
        :id="item.id"
        :value="getConfigValue(item.id)"
        :placeholder="item.default"
        :pattern="item.pattern"
        @change="updateConfig"
      />
      <b-input
        v-else-if="item.type === 'number'"
        type="number"
        number
        :id="item.id"
        :value="getConfigValue(item.id)"
        :max="item.maximum"
        :min="item.minimum"
        :step="item.multipleOf"
        @change="updateConfig"
      />
    </b-form-group>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import ElectronStore from "electron-store";
import schema from "@/config/index";

const config = new ElectronStore({ schema: schema.properties });

export default Vue.extend({
  data() {
    return {
      configStore: config
    };
  },
  computed: {
    configItems() {
      return Object.keys(schema.properties).map(key => {
        return {
          id: key,
          ...schema.properties[key]
        };
      });
    }
  },
  created() {
    console.log(this.configStore.path);
    console.log(schema);
  },
  methods: {
    getConfigValue(key: string | number) {
      return this.configStore.get(key);
    },
    getCheckboxGroupEnum(options: any[]) {
      return options.map(v => {
        return {
          text: v,
          value: v
        };
      });
    },
    updateConfig(t: any) {
      console.log(t);
    }
  }
});
</script>
