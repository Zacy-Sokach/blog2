<template>
  <div>
    <header>
      <h1>欢迎来到我的博客</h1>
      <nav>
        <ul>
          <li><a href="/">首页</a></li>
          <li><a href="/posts">文章</a></li>
          <li><a href="/about">关于我</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <h2>最新文章</h2>
        <article v-for="post in posts" :key="post.id">
          <h3><a :href="`/posts/${post.id}`">{{ post.title }}</a></h3>
          <p>{{ post.summary }}</p>
        </article>
      </section>
    </main>
    <footer>
      <p>&copy; 2025 我的博客. 保留所有权利.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 'my-first-post', title: '我的第一篇文章', summary: '这是我的第一篇博客文章的简介...' },
        // 可以在这里添加更多文章
      ],
    };
  },
};
</script>

<style scoped>
/* 可以在这里添加组件作用域的样式 */
</style>