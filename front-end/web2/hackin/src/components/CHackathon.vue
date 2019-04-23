<template>
    <div>
        <MdCard class="card">

            <MdCardHeader>
                <MdAvatar class="md-large">
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

            <MdCardMedia>
                <img 
                    :src="hackathonBgImgUrl" 
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, 
                        sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, 
                        sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
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
                        {{ coordinates }}
                    </p>
                </div>

            </MdCardContent>

            <MdDivider></MdDivider>
        </MdCard>
    </div>
</template>

<script>

    import utils from "../utils";

    export default {
        name: "CHackathon",
        props: ["hackathon", "coordinates"],
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
            }
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
</style>
