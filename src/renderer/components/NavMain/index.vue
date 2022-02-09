<template>
    <div class="nav-main">
        <div class="nav-main-logo">
            <img src="../../assets/icon.jpeg" width="100" />
        </div>
        <div class="nav-main-list">
            <div
                v-for="(item, index) in dataList"
                :key="index"
                @click="jumpPath(item.routerPath)"
            >{{ item.name }}</div>
            <div>
                <el-button icon="el-icon-plus" circle></el-button>
            </div>
        </div>
        {{ navMain }}
    </div>
</template>
  
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from 'vuex';
const dataList = [
    {
        name: "抓包管理",
        routerPath: '/requestlist'
    },
    {
        name: "规则集管理",
        routerPath: ''
    }
]
export default defineComponent({
    setup() {
        const store = useStore();
        function jumpPath(path: string) {
            console.log(path);
            // this.$router.push({ path })
        }
        return {
            dataList,
            navMain: computed(() => store.state.navMain),
            jumpPath
        }
    }
});
</script>

<style lang="scss" scoped>
.nav-main {
    position: fixed;
    top: 0px;
    left: 0px;
    min-width: 200px;
    height: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    box-sizing: border-box;
    overflow: scroll;

    .nav-main-logo {
        text-align: center;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        img {
            margin: 20px 0px;
        }
    }

    .nav-main-list {
        overflow: scroll;
        box-sizing: border-box;
        margin: 5px 0px;

        div {
            height: 50px;
            line-height: 50px;
            padding-left: 20px;
            font-size: 16px;
            box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
            cursor: pointer;

            &:hover {
                background: rgba(0, 0, 0, 0.05);
            }
            &:last-child {
                text-align: center;
                padding: 0px;
                padding-top: 10px;
                &:hover {
                    background: inherit;
                }
            }
        }
    }
}
</style>
