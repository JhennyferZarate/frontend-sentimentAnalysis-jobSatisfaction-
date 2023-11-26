<template>
  <div class="container mt-5">
    <div class="justify-content-between align-items-center mb-3">
      <h2 class="mb-3">Análisis de sentimientos de Slack</h2>
      <div>
        <div class="input-group mb-4">
          <label class="input-group-text" for="channel">Canal:</label>
          <select v-model="selectedChannel" @change="fetchUsers" class="form-select">
            <option v-for="(channel, key) in channels" :key="key" :value="key">
              {{ key }}
            </option>
          </select> 
          <label class="input-group-text" for="user">Usuario:</label>
          <select v-model="selectedUser" :disabled="!selectedChannel" class="form-select">
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.username }}
            </option>
          </select>
          <button class="btn btn-primary" @click="analyze" :disabled="!selectedChannel || !selectedUser">Procesar</button>
        </div>
        <div v-if="analysisResult">
          <template v-if="analysisResult.messages.length > 0">
            <DetailTable class="mb-3" :analysisResult="analysisResult" />
            <SummaryTable :analysisResult="analysisResult" />
          </template>
          <template v-else>
            <h5>No hay mensajes para analizar</h5>
          </template>
        </div>
        <div v-else>
          <h5>Aún no se realiza análisis</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import SummaryTable from '@/components/analysis/SummaryTable.vue';
import DetailTable from '@/components/analysis/DetailTable.vue';

const baseURL = 'https://6f29-35-196-141-115.ngrok.io'

interface Channel {
  channel_id: string;
  members: { id: string; username: string }[];
}

interface AnalysisResult {
  channel_id: string;
  user_id: string;
  channel_name: string;
  user_name: string;
  messages: { message: string; sentiment: string }[];
  positives: number;
  negatives: number;
  average_satisfaction: number;
}

export default defineComponent({
  data() {
    return {
      selectedChannel: null as string | null,
      selectedUser: null as string | null,
      channels: null as Record<string, Channel> | null,
      users: null as { id: string; username: string }[] | null,
      analysisResult: null as AnalysisResult | null,
    };
  },
  mounted() {
    this.fetchChannels();
  },
  methods: {
    async fetchChannels() {
      try {
        const response = await axios.get<Record<string, Channel>>(
          `${baseURL}/slackInfo`
        );
        this.channels = response.data;
      } catch (error) {
        console.error('Error fetching channels:', error);
      }
    },
    fetchUsers() {
      if (this.selectedChannel) {
        this.users = this.channels![this.selectedChannel].members;
      } else {
        this.users = null;
      }
    },
    async analyze() {
      if (this.selectedChannel && this.selectedUser) {
        const requestData = {
          channel_id: this.channels![this.selectedChannel].channel_id,
          user_id: this.selectedUser,
        };
        try {
          const response = await axios.post<AnalysisResult>(
            `${baseURL}/consultAnalysis`,
            requestData
          );
          this.analysisResult = response.data;
        } catch (error) {
          console.error('Error analyzing:', error);
          console.log('Response status:', error.response.status);
          console.log('Response data:', error.response.data);
        }
      }
    },
  },
  components: {
    SummaryTable,
    DetailTable
  },
});
</script>
