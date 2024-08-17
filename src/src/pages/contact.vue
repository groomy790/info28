<script lang="ts">
    export default {
        data() {
            return {
                DISCORD_LINK: "https://discord.gg/TfUEGaECED"
            }
        }
    }
</script>

<template>
    <a class="btn btn-primary btn-lg center" :href="DISCORD_LINK">
        이 버튼을 <br />
        클릭하여 <br />
        Discord에서 <br />
        문의하기
    </a>
</template>
