<template>
  <div>
    <li v-for="m in messageList" :key="m.id">
      <!-- 跳转路由并携带query参数，to的字符串写法 -->
      <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

      <!-- 跳转路由并携带query参数，to的对象写法 -->
      <router-link
        :to="{
          name: 'xiangqing',
          params: {
            id: m.id,
            title: m.title,
          },
        }"
      >
        {{ m.title }}
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: "MessageView",
  // data
  data() {
    return {
      messageList: [
        { id: 1, title: "消息1" },
        { id: 2, title: "消息2" },
        { id: 3, title: "消息3" },
        { id: 4, title: "消息4" },
      ],
    };
  },
};
</script>

<style scoped></style>
