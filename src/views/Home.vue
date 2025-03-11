<script>
import Animation from "../components/Home/Animation.vue";
import AboutUsButton from "../components/Buttons/AboutUsButton.vue";
import ProjectsButton from "../components/Buttons/ProjectsButton.vue";
import Cube from "../components/Home/Cube.vue";
import ProductsButton from "@/components/Buttons/ProductsButton.vue";
import StayInTheLoop from "@/components/General/StayInTheLoop.vue";
import Footer from "../components/General/Footer.vue";

export default {
  components: {
    Animation,
    AboutUsButton,
    ProjectsButton,
    Cube,
    ProductsButton,
    StayInTheLoop,
    Footer,
  },
};
</script>

<template>
  <div>
    <Animation />
    <div class="harpstart">
      <div class="harp">
        <h1 id="intro">HARP Research Inc.</h1>
        <div class="founderphotos">
          <img
            src="../assets/HARPResearchLockUps/TeamMember/ManagementTeam/HarperChisari/HARP Research Chisari Harper.webp"
            alt="Founder 1"
          />
          <img
            src="../assets/HARPResearchLockUps/TeamMember/ManagementTeam/KevinScott/HARP research Scott Kevin1.webp"
            alt="Founder 2"
          />
          <img
            src="../assets/HARPResearchLockUps/TeamMember/ManagementTeam/YuvalShimoni/Shimoni Yuval about.webp"
            alt="Founder 3"
          />
        </div>
        <div class="founderinfo">
          <h1>FOUNDERS OF HARP</h1>
          <h1>RESEARCH INC.</h1>
        </div>
      </div>

      <div class="harpright">
        <div class="harpinfo">
          <h1>
            At HARP Research, we're leading the way in making AI smarter and
            more accessible with our Polymorphic AI Framework—tailored solutions
            now, and the future of Artificial General Intelligence tomorrow.
          </h1>
          <AboutUsButton />
        </div>
      </div>
    </div>

    <div class="harpprojects">
      <h1 id="intro2">Projects</h1>
      <div class="harp2">
        <div class="vertical-line"></div>
        <div class="harpinfo2">
          <h1 id="projectstext">
            Transforming AI's powerful predictions into ultra-compact tools,
            small enough to fit on <br />
            <span class="gradient-text">a calculator.</span>
          </h1>
          <ProjectsButton />
        </div>
        <div>
          <img
            src="../assets/HARPResearchLockUps/Photos/HARP Research Chip.webp"
            alt=""
            id="chipimg"
          />
        </div>
      </div>
    </div>

    <div class="harpproducts">
      <div class="vertical-line"></div>
      <div class="productsinfo">
        <h1 class="harpproductsinfo">
          With 65+ years of AI expertise, we’ve created Polymorphic AI—an
          efficient, open-source framework anyone can use,<br />
          <span class="product-text">no super computer needed.</span>
        </h1>
        <ProductsButton></ProductsButton>
      </div>
      <Cube></Cube>
    </div>

    <div class="images">
      <img src="../assets/HARPResearchLockUps/Photos/Example1.webp" alt="img" />
      <img src="../assets/HARPResearchLockUps/Photos/Example2.webp" alt="img" />
    </div>

    <StayInTheLoop></StayInTheLoop>
    <Footer></Footer>
  </div>
</template>

<style lang="css" scoped>
@import "../components/Home/home.css";
</style>
