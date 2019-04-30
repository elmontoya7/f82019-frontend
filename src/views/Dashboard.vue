<template lang="pug">
  div
    Toolbar
    b-container
      .header
        .header-body
          h6.header-pretitle
            | Welcome back,
          h1.header-title
            | {{ user.name }}
      b-row
        b-col(md="4", order-md="2")
          b-alert(:variant="negativeCount > 15 ? 'danger' : 'warning'", :show="negativeCount > 0")
            alert-triangle-icon.icon-md.mr-1
            span There are {{ negativeCount }} negative messages this week!
          b-card
            h4
              rss-icon.mr-2
              span Send broadcast
            p.help-text Connect with all your students sending positive messages or notifications
            b-form-textarea.mb-4(rows="3", placeholder="Write message...", v-model="broadcast_message")
            b-button(variant="primary", block, :disabled="broadcast_message.length == 0") Send broadcast
        b-col(md="8")
          b-card(no-body)
            template(slot="header")
              .row.align-items-center
                .col
                  form.row.align-items-center
                    .col-auto.pr-0
                      search-icon.help-text.icon-sm
                    .col
                      input.form-control.form-control-flush.search(type='search', placeholder='Search')
                .col-auto
                  .dropdown
                    b-dropdown#dropdown-right(right='', text='Filter by:', variant='white', size="sm")
                      b-dropdown-item(href='#') Positive
                      b-dropdown-item(href='#') Negatie
                      b-dropdown-item(href='#') Neutral
            b-table.card-table(:items="negative_messages", :fields="fields", responsive)
              template(slot="index" slot-scope="data") {{ data.index + 1 }}
              template(slot="timestamp" slot-scope="data") {{ $moment(data.item.timestamp).format('DD/MM/YYYY - HH:mm') }}
</template>

<script>
import { mapActions } from 'vuex'
import Toolbar from '@/components/Toolbar.vue'

export default {
  data () {
    return {
      user: {},
      negative_messages: [],
      fields: [
        {
          key: 'index',
          label: '#'
        },
        'sentiment',
        'content',
        'timestamp'
      ],
      broadcast_message: ''
    }
  },
  computed: {
    negativeCount () {
      return this.negative_messages.filter(m => m.sentiment == 'negative').length
    }
  },
  methods: {
    ...mapActions(['auth/user', 'db/getMessages']),
    getUserData () {
      let self = this

      this['auth/user']({
        callback: res => {
          if (res.success) {
            self.user = res.resource
          }
        }
      })
    },
    getMessages () {
      let self = this

      this['db/getMessages']({
        queries: [
          {
            field: 'sentiment',
            value: 'negative',
            operator: '=='
          }
        ],
        callback: res => {
          if (res.success) {
            self.negative_messages = res.resource.slice()
          }
        }
      })
    }
  },
  mounted () {
    this.getUserData()
    this.getMessages()
  },
  components: { Toolbar }
}
</script>

<style lang="css" scoped>
</style>
