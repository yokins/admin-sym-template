JavaScript
<template>
    <n-dropdown :options="options" size="small" trigger="click">
        <div class="layouts_bbs_header_avatar">
            <n-avatar
                round
                :size="30"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
        </div>
    </n-dropdown>
</template>

<script>
import { renderIcon } from "@/utils/vue.render.js";
import {
    PersonCircleOutline as UserIcon,
    Pencil as EditIcon,
    LogOutOutline as LogoutIcon
} from "@vicons/ionicons5";

export default {
    data() {
        return {
            options: [
                {
                    label: "用户资料",
                    key: "profile",
                    icon: renderIcon(UserIcon)
                },
                {
                    label: "编辑用户资料",
                    key: "editProfile",
                    icon: renderIcon(EditIcon)
                },
                {
                    label: "退出登录",
                    key: "logout",
                    icon: renderIcon(LogoutIcon)
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.layouts_bbs_header_avatar {
    display: flex;
    align-items: center;
    cursor: pointer;
}
</style>
