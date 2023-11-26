<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Resultados del Análisis</h3>
        <table class="table">
          <tbody>
            <tr>
              <th scope="row"><b>Total de mensajes positivos 😄</b></th>
              <td>{{ analysisResult.positives }}</td>
            </tr>
            <tr>
              <th scope="row"><b>Total de mensajes negativos 😞</b></th>
              <td>{{ analysisResult.negatives }}</td>
            </tr>
            <tr>
              <th scope="row"><b>Porcentaje de satisfacción</b></th>
              <td :class="satisfactionClass"><b>{{ analysisResult.average_satisfaction * 100 }}%</b></td>
            </tr>
          </tbody>
        </table>        
      </div>
    </div>
  </div>
</template>



<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  interface Message {
    message: string;
    sentiment: string;
  }

  interface AnalysisResult {
    messages: Message[];
    positives: number;
    negatives: number;
    average_satisfaction: number;
  }

  export default defineComponent({
    props: {
      analysisResult: {
        type: Object as PropType<AnalysisResult>,
        required: true,
      },
    },
    computed:{
      satisfactionClass(): string {
        const satisfactionPercentage = this.analysisResult.average_satisfaction * 100;

        if (satisfactionPercentage > 85) {
          return 'text-success'; // Verde
        } else if (satisfactionPercentage >= 75 && satisfactionPercentage <= 85) {
          return 'text-warning'; // Amarillo poco oscuro
        } else {
          return 'text-danger'; // Rojo
        }
      }
    },
  });
</script>

<style scoped>
</style>
