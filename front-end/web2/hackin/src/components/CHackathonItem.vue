<template>
   <MdCard
   >
        <MdCardHeader>
            <MdAvatar>
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

        <MdCardMedia>
            <img 
                :src="hackathon.bgImgUrl" 
                :alt="hackathon.name"
            >
        </MdCardMedia>

        <MdCardContent>
            {{ hackathon.description }}
        </MdCardContent>

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
            console.log(event.currentTarget.id);
        }
    }
}
</script>

<style scoped>
</style>