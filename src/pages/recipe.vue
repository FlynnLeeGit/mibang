<template>
    <div class="container jumbotron">
        <router-link class="btn btn-outline-primary btn-lg" to='/'>返回</router-link>
    
        <form class="mt-5" @submit.prevent>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">饭团名称</label>
                <div class="col-sm-10">
                    {{question.name}} {{answer}}
                </div>
            </div>
            <fieldset class="form-group">
                <div class="row">
                    <legend class="col-form-legend col-sm-2">请选择配料</legend>
                    <div class="col-sm-10">
                        <select v-model='answer' multiple class="form-control" style="height:700px">
                            <option v-for='(m,mId) in materials' :value="mId">{{m}}</option>
                        </select>
                    </div>
                </div>
            </fieldset>
    
        </form>
    
        <div class="text-center">
            <button @click='next' class="btn btn-outline-info">下一题</button>
            <p class="text-success" v-if='showSuccess'>回答正确,进入下一题</p>
            <p class="text-danger" v-if='showError'>回答错误,请纠正答案</p>
        </div>
    
    </div>
</template>
<script>
import { items, materials } from './recipe.js'
export default {
    data() {
        return {
            items,
            materials,
            answer: [],
            qIdx: 0,
            showSuccess: false,
            showError: false
        }
    },
    methods: {
        updateQidx() {
            this.qIdx = parseInt(Math.random() * this.items.length)
        },
        next() {
            const myAnswer = this.answer.map(n => +n).sort((n1, n2) => n1 - n2)
            const rightAnswer = this.question.answer.sort((n1, n2) => n1 - n2)
            if (JSON.stringify(myAnswer) === JSON.stringify(rightAnswer)) {
                this.showSuccess = true
                setTimeout(() => {
                    this.updateQidx()
                    this.answer = []
                    this.showSuccess = false
                    this.showError = false
                }, 500)
            } else {
                this.showError = true
            }
        }
    },
    computed: {
        question() {
            return this.items[this.qIdx]
        }
    },
    created() {
        this.updateQidx()
    },

}
</script>

