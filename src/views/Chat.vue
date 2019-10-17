<template>
  <v-container style="max-width: 600px;">
    <router-link to="/" tag="button">
      <v-btn class="mx-0" @click="logOut">Sair</v-btn>
    </router-link>
    <v-timeline dense clipped>
      <v-timeline-item fill-dot class="white--text mb-12" color="blue" large>
        <template v-slot:icon>
          <span>{{nickname}}</span>
        </template>
        <v-text-field
          v-model="input"
          hide-details
          flat
          label="Leave a comment..."
          solo
          @keydown.enter="comment"
        >
          <template v-slot:append>
            <v-btn class="mx-0" depressed @click="comment">Post</v-btn>
          </template>
        </v-text-field>
      </v-timeline-item>

      <v-slide-x-transition group>
        <v-timeline-item v-for="item in list" :key="item._id" class="mb-4" color="gray" large>
          <template v-slot:icon>
            <span>{{item.nickname}}</span>
          </template>
          <v-row justify="space-between">
            <v-col cols="7" v-text="item.message"></v-col>
            <v-col class="text-right" cols="5" v-text="item.date"></v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>
    </v-timeline>
  </v-container>
</template>

<script>
import moment from "moment";
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    post: [],
    input: null,
    count: 0
    // timeline: this.list.slice().reverse()
  }),
  watch: {},
  computed: {
    ...mapState({
      list: state => state.chatModule.list.slice().reverse(),
      nickname: state => state.chatModule.nickname
    })
  },

  methods: {
    comment() {
      const time = new Date();
      let _post = {
        nickname: this.nickname,
        message: this.input,
        date: new Date()
      };

      this.savePost(_post);
      this.input = null;
    },
    logOut() {
      let _post = {
        nickname: "CHAT",
        message: this.nickname + " saiu.",
        date: new Date()
      };

      this.savePost(_post);
    },
    ...mapActions({
      getAll: "chatModule/getAll",
      savePost: "chatModule/save"
    })
  },
  mounted() {
    let _post = {
      nickname: "CHAT",
      message: this.nickname + " entrou.",
      date: new Date()
    };

    this.savePost(_post);
  }
};
</script>

<style>
</style>