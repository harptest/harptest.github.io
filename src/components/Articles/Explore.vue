<template>
  <section class="explore">
    <div class="explore-top">
      <h2 id="exploreword">Explore</h2>
      <div class="search-bar">
        <input
          type="text"
          placeholder="Browse..."
          v-model="searchQuery"
          @input="filterArticles"
        />
        <button @click="filterArticles">
          <span class="arrow">→</span>
        </button>
      </div>
    </div>
    <div class="posts">
      <PostCard
        v-for="(post, index) in displayedArticles"
        :key="index"
        v-bind="post"
      />
    </div>
    <button v-if="canLoadMore" @click="loadMore" class="load-more-btn">
      Load more
    </button>
  </section>
</template>

<script>
import PostCard from "./PostCard.vue";
import image from "../../assets/HARPResearchLockUps/Photos/vision.webp";

export default {
  components: { PostCard },
  data() {
    return {
      searchQuery: "",
      articles: [
        {
          imageUrl: image,
          date: "Jul 11, 2023",
          readTime: "3 min",
          title: "The Future of AI Isn't Large: It's Polymorphic",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        {
          imageUrl: image,
          date: "Jul 11, 2023",
          readTime: "3 min",
          title: "AI Ethics: The Future of AI Isn't Large: It's Polymorphic",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        {
          imageUrl: image,
          date: "Jul 11, 2023",
          readTime: "3 min",
          title: "Believe in AI",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        {
          imageUrl: image,
          date: "Jul 11, 2023",
          readTime: "3 min",
          title: "The Future of AI Isn't Large: It's Polymorphic",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        {
          imageUrl: image,
          date: "Jul 11, 2023",
          readTime: "3 min",
          title: "The Future of AI Isn't Large: It's Polymorphic",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        {
          imageUrl: image,
          date: "Jul 11, 2023",
          readTime: "3 min",
          title: "The Future of AI Isn't Large: It's Polymorphic",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        {
          imageUrl: image,
          date: "Jul 11, 2023",
          readTime: "3 min",
          title: "The Future of AI Isn't Large: It's Polymorphic",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        {
          imageUrl: image,
          date: "Jul 11, 2023",
          readTime: "3 min",
          title: "The Future of AI Isn't Large: It's Polymorphic",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        {
          imageUrl: image,
          date: "Jul 11, 2023",
          readTime: "3 min",
          title: "The Future of AI Isn't Large: It's Polymorphic",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        {
          imageUrl: image,
          date: "Jul 11, 2023",
          readTime: "3 min",
          title: "The Future of AI Isn't Large: It's Polymorphic",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        {
          imageUrl: image,
          date: "Jul 11, 2023",
          readTime: "3 min",
          title: "Future AI IS COOL",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        // Add additional articles here
      ],
      filteredArticles: [],
      articlesToShow: 2, // Number of articles to show initially and incrementally
    };
  },
  computed: {
    displayedArticles() {
      return this.filteredArticles.slice(0, this.articlesToShow);
    },
    canLoadMore() {
      return this.articlesToShow < this.filteredArticles.length;
    },
  },
  methods: {
    filterArticles() {
      this.filteredArticles = this.articles.filter(
        (article) =>
          article.title
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          article.intro.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.articlesToShow = 3;
    },
    loadMore() {
      this.articlesToShow += 3;
    },
  },
  mounted() {
    this.filteredArticles = this.articles;
  },
};
</script>

<style scoped>
.explore {
  text-align: left;
  padding: 2em 2em 2em 2em;
  color: #ffffff;
  margin-top: 10em;
}
#exploreword {
  font-size: 2em;
  font-weight: bold;
}
.explore-top {
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
  top: 20em;
  margin: 0vh 5vh 0vh 10vh;
}

h2 {
  font-size: 2em;
  margin-bottom: 1em;
}

.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
  border-radius: 2em;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  width: 40%;
}

.search-bar input {
  flex: 1;
  padding: 0.8em;
  border: none;
  font-size: 1em;
  outline: none;
}

.search-bar button {
  background: linear-gradient(90deg, #3a8de1, #5f76f3); /* Gradient */
  color: white;
  padding: 0.5em 2em;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1em;
}

.arrow {
  font-size: 1.5em;
  font-weight: bold;
}
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%; /* Sets max width for the container */
  margin: 0 auto; /* Centers the container */
  gap: 1.5em; /* Adds spacing between post cards */
}
.load-more-btn {
  background-color: #444; /* Change color to a neutral gray */
  color: white;
  padding: 0.8em 1.5em;
  font-size: 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 1.5em auto 0; /* Centers the button horizontally */
  display: block; /* Ensures the button takes up only its content width */
}
</style>
