<template>
  <div class="component chat-frame">
    <q-chat-message
        class="message text-body1"
        v-for="item in chat"
        :key="item.message"
        :name="item.user"
        :avatar="item.avatar"
        :sent="item.isSent"
    >

      <div v-if="item.message !== ''">
        {{ item.message }}
      </div>
      <div v-if="item.image !== ''">
        <img class="chat-image" :src="item.image" alt="image">
      </div>
    </q-chat-message>
  </div>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
  chat: {
    type: Array,
    required: true
  }
})

const chat = computed(() => {
  let _isSent = false
  let author = ''
  let message = props.chat

  message.map((data) => {
    if (author !== data.user) {
      _isSent = !_isSent
      author = data.user
    }

    data['isSent'] = _isSent
  })

  return message
})
</script>

<style scoped lang="sass">
.chat-frame
  padding: 20px
  max-width: 680px
  background-color: #f6f6f6
  border-radius: 10px
  margin: 30px auto

.message
  margin-bottom: 20px

.chat-image
  width: 100%
</style>