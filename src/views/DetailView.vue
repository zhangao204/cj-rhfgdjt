<template>
  <div class="view detail">
    <q-layout view="hHh lpR fFf">

      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img :src="baseUrl + '/images/logo.jpg'" alt="logo">
            </q-avatar>
            群刊 · {{ magazine.title }}
          </q-toolbar-title>

          <q-btn dense flat round icon="menu" @click="toggleRightDrawer"/>
        </q-toolbar>
      </q-header>

      <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
        <q-img :src="baseUrl + magazine.cover"/>

        <q-banner class="bg-primary text-white">
          <div class="text-h6">
            {{ magazine.title }}
          </div>
        </q-banner>

        <q-list class="q-mb-lg">
          <q-item-label header class="text-subtitle1">{{ magazine.subtitle }}</q-item-label>
        </q-list>

        <q-list class="q-mb-lg">
          <q-item-label header class="text-subtitle1">领衔主演</q-item-label>
          <q-item clickable v-ripple v-for="item in magazine.starring">
            <q-item-section avatar>
              <q-avatar>
                <img :src="baseUrl + item.avatar" alt="avatar">
              </q-avatar>
            </q-item-section>
            <q-item-section class="text-subtitle1">
              {{ item.user }}
            </q-item-section>
          </q-item>
        </q-list>

        <q-list class="q-mb-lg">
          <q-item-label header class="text-subtitle1">全部期刊</q-item-label>
          <q-item v-for="item in list">
            <q-item-section>
              <q-card flat bordered>
                <q-card-section horizontal>
                  <q-card-section class="q-pt-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs">{{ item.title }}</div>
                    <div class="text-caption text-grey">
                      {{ item.subtitle }}
                    </div>
                  </q-card-section>

                  <q-card-section class="col-5 flex flex-center">
                    <q-img
                        class="rounded-borders"
                        :src="baseUrl + item.cover"
                    />
                  </q-card-section>
                </q-card-section>

                <q-separator/>

                <q-card-actions>
                  <a :href="'/chat-journal/detail/' + item.id">
                    <q-btn flat color="primary">
                      阅读
                    </q-btn>
                  </a>
                </q-card-actions>
              </q-card>
            </q-item-section>
          </q-item>
        </q-list>

        <q-list>
          <q-item-label header class="text-subtitle1"></q-item-label>
          <q-item>
            <q-item-section>
              <a target="_blank" href="https://github.com/zhangao204/chat-journal">
                <q-btn round color="black">
                  <img src="@/assets/icons/github.svg" class="github" alt="github">
                </q-btn>
              </a>
            </q-item-section>
          </q-item>
        </q-list>

      </q-drawer>

      <q-page-container class="q-pa-md">
        <div v-for="item in magazine.chat">
          <ChatFrame class="chat-frame" :chat="item.session"/>
        </div>

        <StoutstormLogo class="logo"/>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import baseUrl from '@/config/base-url.js'
import list from '@/data'
import ChatFrame from '@/components/ChatFrame.vue'
import StoutstormLogo from "@/components/StoutstormLogo.vue";

const props = defineProps({
  id: String
})

const magazine = ref({})

onMounted(() => {
  switch (props.id) {
    case 'c202103':
      import('@/data/c202103').then((data) => {
        magazine.value = data.default
      })
      break
    case 'c202201':
      import('@/data/c202201').then((data) => {
        magazine.value = data.default
      })
      break
    default:
      import('@/data/c202103').then((data) => {
        magazine.value = data.default
      })
  }
})

const rightDrawerOpen = ref(false)
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>

<style scoped lang="sass">
.logo
  margin: 90px 20px 30px 20px
  justify-content: center

.github
  padding: 6px 8px 3px 6px
  width: 42px
  height: 42px
</style>