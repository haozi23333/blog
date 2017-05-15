<template>
    <div class="header">
        <nav class="blogNav">
            <div class="logoDiv">
                <a class="logo" href="https://hao-zi.com"><img src="../assets/image/ph.png" width="80" height="80" alt="haozi's faceImage"></a>
            </div>
            <div class="nav">
                <ul>
                    <li role="presentation"><a href="https://hao-zi.com/tag/1s/">+1s</a></li>
                    <li role="presentation"><a href="https://hao-zi.com/tag/daynote/">日记</a></li>
                    <li role="presentation"><a href="https://hao-zi.com/tag/ri-chang/">= =</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
</script>
<style scoped lang="scss">
    /*@import "../assets/css/global";*/

    .blogNav {
        height: 80px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: flex-start;
    }
    ul {
        float: left;
        list-style-type: none;

        li {
            list-style-type: none;
            float: left;
        }
    }

    .logoDiv {
        width: 150px;
        height: 80px;
        flex: 80px ;
    }
    .logo {
        height: 80px;
        width: 80px;
    }
    .nav {
        flex: 1;
    }
</style>
