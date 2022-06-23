<script>
import WelcomeItem from "./WelcomeItem.vue";
import { getPlanet } from "@/api/planets";

export default {
  components: { WelcomeItem },
  data() {
    return {
      planet: undefined,
    };
  },
  async created() {
    const planet = await getPlanet({ planetId: 1 });
    this.planet = planet;
  },
};
</script>

<template>
  <WelcomeItem>{{ planet?.name }}</WelcomeItem>
</template>
