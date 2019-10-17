<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-card-title>{{title}}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-text-field label="Nickname" v-model="nickname" maxlength="5" ></v-text-field>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <router-link to="/chat" tag="button" > 
      <v-btn color="primary" text @click="setNickname(nickname)">{{btnText}}</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  data: () => ({
    title: "CHAT",
    btnText: "ENTRAR",
    nickname: ""
  }),
  methods: {
    ...mapActions({
      setNickname: "chatModule/setNickname",
    })
  },
  mounted() {
    
  }
};
</script>