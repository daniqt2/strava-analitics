<template>
  <div class="tw-flex tw-flex-col md:tw-flex-row">
    <div
      class="tw-h-full tw-bg-gray-300 tw-w-64 tw-border tw-border-gray-300 tw-p-6"
    >
      <p class="tw-font-bold">Activities</p>
      <span v-for="type in act" :key="type.name"
        ><div
          v-if="act[type.name].act.length > 1"
          :title="type.name"
          type="primary"
          class="tw-rounded tw-p-2 tw-border tw-border-gray-400 tw-border-t-0 tw-border-r-0 tw-border-l-0 tw-cursor-pointer hover:tw-bg-gray-100"
          :color="graph == type.name ? 'primary' : ''"
          @click="selected = type.name"
        >
          <p class="tw-font-bold tw-text-sm">
            {{ type.name }}
          </p>
          <p class="tw-text-xs">Count: {{ act[type.name].act.length }}</p>
        </div></span
      >
      <p class="tw-justify-center tw-text-xs tw-mt-2 tw-text-teal-600">
        Select an activity to look at graph
      </p>
    </div>
    <div class="tw-text-center tw-justify-center tw-w-full tw-my-4 md:tw-my-1">
      <button
        v-if="selected"
        class="tw-bg-gray-800 tw-shadow-lg tw-rounded tw-text-gray-300 tw-p-2 tw-p-2  tw-mr-1 tw-my-2 md:tw-my-0 md:tw-mr-2"
        @click="selected = null"
      >
        Activity Summary
      </button>
      <button
        elevation="2"
        @click="getActivities"
        class="tw-bg-gray-800 tw-shadow-lg tw-rounded tw-text-gray-300 tw-p-2"
      >
        {{ !act || !actPercent ? 'Get you activities' : 'Reload Activities' }}
      </button>
      <div
        v-if="act && actPercent"
        class="tw-text-center md:tw-w-1/2 tw-m-auto tw-my-4"
      >
        <div>
          <div v-if="!selected">
            <p>This is your activity summary</p>
            <polar
              class="tw-bg-white"
              :chartData="actPercent"
              :label="graph"
            ></polar>
          </div>
          <activity
            v-else
            :activity="selected"
            :chartData="act[selected]"
          ></activity>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import activity from './activities/activity.vue';
// import histogram from './histogram';
import polar from './charts/polarArea';
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
    return {
      graph: null,
      options: {},
      selected: null
    };
  },
  components: { polar, activity },
  methods: {
    getActivities() {
      this.$store.dispatch('activity/getActivities');
      this.show = true;
    },

    openActivityType(actType) {
      console.log(actType);
    }
  },
  mounted() {
    var url = new URL(window.location.href);
    var c = url.searchParams.get('code');
    if (c && c.length > 0) {
      this.$store.dispatch('auth/login', c);
    }
  },
  computed: {
    ...mapGetters('activity', {
      act: 'getActivities',
      actPercent: 'activitiesPercent'
    }),
    ...mapGetters('auth', {
      isLogged: 'isLogged'
    })
  }
};
</script>
