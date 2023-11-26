<template>
    <div>
        <div class="card">
            <div class="card-body">
            <h3 class="card-title">Listado de mensajes</h3>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col"><b>Comentario</b></th>
                    <th scope="col"><b>Sentimiento</b></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(message, index) in paginatedMessages" :key="index">
                    <td>{{ message.message }}</td>
                    <td>{{ message.sentiment }}</td>
                </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                    <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPage">
                    <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-for="page in pages" :key="page" :class="{ 'active': currentPage === page }">
                    <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                    <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
                    <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
                </ul>
            </nav>
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
    }

    export default defineComponent({
        props: {
            analysisResult: {
                type: Object as PropType<AnalysisResult>,
                required: true,
            },
        },
        data() {
            return {
                itemsPerPage: 10,
                currentPage: 1,
            };
        },
        computed: {
            paginatedMessages(): Message[] {
                const startIndex = (this.currentPage - 1) * this.itemsPerPage;
                const endIndex = startIndex + this.itemsPerPage;
                return this.analysisResult.messages.slice(startIndex, endIndex);
            },
            totalPages(): number {
                return Math.ceil(this.analysisResult.messages.length / this.itemsPerPage);
            },
            pages(): number[] {
                return Array.from({ length: this.totalPages }, (_, index) => index + 1);
            },
        },
        methods: {
            changePage(page: number): void {
                this.currentPage = page;
            },
            prevPage(): void {
                if (this.currentPage > 1) {
                this.currentPage--;
                }
            },
            nextPage(): void {
                if (this.currentPage < this.totalPages) {
                this.currentPage++;
                }
            },
        },
    });
</script>

<style scoped>
</style>
  