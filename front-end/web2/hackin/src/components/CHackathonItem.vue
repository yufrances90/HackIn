<template>
   <MdCard class="card"
   >
        <MdCardHeader>
            <MdAvatar v-show="hackathon.logoUrl">
                <img 
                    :src="hackathon.logoUrl" 
                    :alt="hackathon.name"
                >
            </MdAvatar>

            <div class="md-title">
                {{ hackathon.name }}
            </div>
            <div class="md-subhead">
                {{ formatDateRange(hackathon) }}
            </div>
        </MdCardHeader>

        <MdCardMedia v-show="hackathon.bgImgUrl">
            <img 
                :src="hackathon.bgImgUrl" 
                :alt="hackathon.name"
                class="bg-image"
            >
        </MdCardMedia>

        <MdCardActions>
            <MdButton 
                class="md-icon-button"
                :id="hackathon._id"
                @click="showHackathon"
            >
                <md-icon>
                    more_vert
                </md-icon>
            </MdButton>
        </MdCardActions>
    </MdCard>
</template>

<script>
    export default {
        name: "CHackathonItem",
        props: ["hackathon"],
        methods: {
            formatDateRange(hackathon) {
                
                const { startDate, endDate } = hackathon;

                if (!startDate || !endDate) {
                    return "-";
                } else {

                    const startDate1 = new Date(startDate);
                    const endDate1 = new Date(endDate);

                    return `${startDate1.toLocaleDateString()} - ${endDate1.toLocaleDateString()}`
                }
            },
            showHackathon(event) {

                const hackathonId = event.currentTarget.id;
                
                this.$router.push(`/hackathon/${hackathonId}`);
            }
        }
    }
</script>

<style scoped>

    .bg-image {
        max-height: 150px;
        background-size: 100%;
    }
    
    .card {
        margin: 2vh 0;
    }
</style>