<script lang="ts">
    import { RouterLink } from 'vue-router'

    interface Link {
        name: string
        url: string
    }

    const links: Array<Link> = [
        { name: "수행 평가", url: "/suhang" },
        { name: "교내 행사", url: "/internal" },
        { name: "비상", url: "/emergency" },
        { name: "문의", url: "/contact" }
    ]

    export default {
        data() {
            return {
                links: links
            }
        }
    }
</script>

<template>
    <nav class="navbar navbar-light bg-light"   >
        <div class="container-fluid">
            <a class="navbar-brand" href="/">🏫 Info 2학년 8반</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="offcanvas offcanvas-end text-bg-light" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title fw-bold" id="offcanvasDarkNavbarLabel">Tabs</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item" data-bs-dismiss="offcanvas" v-for="(item) in links">
                            <RouterLink class="nav-link" :to="item.url">{{ item.name }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
