<template>
    <div>
        <MdCard class="card">

            <MdCardHeader>
                <MdAvatar 
                    class="md-large"
                    v-show="hackathonLogoUrl"
                >
                    <img 
                        :src="hackathonLogoUrl" 
                        :alt="hackathonName"
                    >
                </MdAvatar>
                <div class="md-title">
                    <h1>
                        {{ hackathonName }}
                    </h1>
                </div>
            </MdCardHeader>

            <MdDivider></MdDivider>

            <MdCardMedia v-show="hackathonBgImgUrl">
                <img 
                    :src="hackathonBgImgUrl"
                    class="bg-image" 
                />
            </MdCardMedia>

            <MdDivider></MdDivider>

            <MdCardContent class="card-content">

                <div>
                    <h4>
                        <MdIcon>
                            description
                        </MdIcon>
                        Description
                    </h4>
                    <p>
                        {{ hackathonDescription }}
                    </p>
                </div>

                <div>
                    <h4>
                        <MdIcon>
                            access_time
                        </MdIcon>
                        Time
                    </h4>
                    <p>
                        {{ hackathonDuration }}
                    </p>
                </div>

                <div>
                    <h4>
                        <MdIcon>
                            place
                        </MdIcon>
                        Venue
                    </h4>
                    <p>
                        {{ hackathonAddress }}
                    </p>
                    <CGoogleMap 
                        :coordinates="coordinates"
                        v-if="coordinates"
                    />
                </div>

            </MdCardContent>

            <MdDivider></MdDivider>

            <CApplyBtn 
                :hackathonId="hackathonId"
                v-if="hackathonOwner != usrname"
            />
            <CAdminBtn v-else />
        </MdCard>
    </div>
</template>

<script>

    import CGoogleMap from "./CGoogleMap.vue";
    import CApplyBtn from "./CApplyBtn.vue";
    import CAdminBtn from "./CAdminBtn.vue";

    import utils from "../utils";

    export default {
        name: "CHackathon",
        props: [
            "hackathon", 
            "coordinates",
            "hackathonId",
            "usrname"
        ],
        computed: {
            hackathonName() {
                return (!this.hackathon)?  "N/A" : this.hackathon.name;
            },
            hackathonBgImgUrl() {
                return (!this.hackathon)? "" : this.hackathon.bgImgUrl;
            },
            hackathonLogoUrl() {
                return (!this.hackathon)? "" : this.hackathon.logoUrl;
            },
            hackathonAddress() {

                const address = (!this.hackathon)? "" : this.hackathon.address;

                utils.EventBus.$emit("getCoordinatesByAddress", address);

                return address;
            },
            hackathonDuration() {

                if (!this.hackathon) {
                    return "";
                }

                const { startDate, endDate } = this.hackathon;

                const sDate = new Date(startDate);
                const eDate = new Date(endDate);

                return sDate.toLocaleString() + 
                    " - " + 
                    eDate.toLocaleString();
            },
            hackathonDescription() {
                return (!this.hackathon)?  "N/A" : this.hackathon.description;
            },
            hackathonOwner() {
                return (!this.hackathon)? null : this.hackathon.usrname;
            }
        },
        components: {
            CGoogleMap,
            CApplyBtn,
            CAdminBtn
        }
    }
</script>

<style scoped>

    .card {
        width: 100%;
        min-height: 40vh;
    }

    .card-content {
        margin: 3vh 4vw;
    }

    .bg-image {
        max-height: 50vh;
        background-size: 100%;
    }
</style>
