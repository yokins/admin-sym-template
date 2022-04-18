import { h } from "vue";
import { NIcon } from "naive-ui";
import { RouterLink } from "vue-router";

export const renderIcon = icon => {
    return () => {
        return h(NIcon, null, {
            default: () => h(icon)
        });
    };
};

export const renderRouterLink = (routeName, params, label) => {
    return () =>
        h(
            RouterLink,
            {
                to: {
                    name: routeName,
                    params: params
                }
            },
            { default: () => label }
        );
};
