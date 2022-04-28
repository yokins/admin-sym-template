<template>
    <div style="border: 1px solid #ccc">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editor"
            :defaultConfig="toolbarConfig"
            :mode="mode"
        />
        <Editor
            style="height: 54vh; overflow-y: hidden"
            v-model="content"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="handleCreated"
        />
    </div>
</template>

<script>
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

export default {
    components: { Editor, Toolbar },

    props: {
        modelValue: {}
    },

    emits: ["update:modelValue"],

    data() {
        return {
            editor: null,
            mode: "default",
            toolbarConfig: {},
            editorConfig: {
                placeholder: "请输入内容......"
            },
            // content: ""
        };
    },

    computed: {
        content: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit("update:modelValue", value);
            }
        }
    },

    beforeUnmount() {
        if (this.editor == null) return;
        this.editor.destroy();
    },

    methods: {
        handleCreated(editor) {
            this.editor = editor;
        }
    }
};
</script>
