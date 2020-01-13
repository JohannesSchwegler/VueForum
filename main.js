import submissions from './seed.js'

const submissionComponent = {
    template: `
<div style="display: flex; width: 100%">
<div class="columns">
    <figure class="media-left">
        <img style="object-fit:cover;" class="image is-128x128" v-bind:src="submission.submissionImage">
    </figure>
    <div class="media-content">
        <div class="content">
            <p>
                <strong>
<a v-bind:href="submission.url" class="has-text-info">
{{ submission.title }}
</a>
<span class="tag is-small">#{{ submission.id }}</span>
</strong>
                <br> {{ submission.description }}
                <br>
                <small class="is-size-7">
Submitted by:
<img class="image is-24x24"
v-bind:src="submission.avatar">
</small>
            </p>
        </div>
    </div>
 </div>   
    <div class="media-right is-1">
        <span class="icon is-small" v-on:click="upvote(submission.id)">
<i class="fa fa-chevron-up"></i>
<strong class="has-text-info">{{ submission.votes }}</strong>
</span>
    </div>
</div>`,

    props: ['submission', 'submissions'],


    methods: {
        upvote(submissionId) {
            const submission = this.submissions.find(
                submission => submission.id === submissionId
            );
            submission.votes++;
        }
    }
};






new Vue({
    el: '#app',
    data: {
        submissions: submissions
    },
    computed: {
        sortedSubmissions() {
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes
            });
        }
    },
    components: {
        'submission-component': submissionComponent
    }
});
