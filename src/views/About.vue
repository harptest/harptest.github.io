<template>
  <div class="About">
    <Header
      title="About"
      subtitle="We deliver next-gen AI solutions that drive innovation and unlock new possibilities"
    />
    <div class="info-container">
      <div class="values">
        <div class="values-img">
          <img
            src="../assets/HARPResearchLockUps/Photos/orientation_2.JPG"
            alt="team photo"
          />
          <img
            src="../assets/HARPResearchLockUps/Photos/orientation_3.JPG"
            alt="team photo"
          />
        </div>
        <div class="values-text">
          <h5>Our Values</h5>
          <h2>Meet HARP Research Inc.</h2>
          <div class="gradient-text">
            <h2 class="gradient one">Pioneers.</h2>
            <h2 class="gradient two">Innovative.</h2>
            <h2 class="gradient three">Polymorphic.</h2>
          </div>
          <h6 id="valuetext">
            Join a dynamic and collaborative team where diverse talents from a
            wide range of fields converge to shape the future. From leading
            researchers and core innovators to visionaries in technology and
            beyond, we bring together expertise and passion to push the
            boundaries of what’s possible, driving innovation and creating
            meaningful impact on a global scale.
          </h6>
        </div>
      </div>
      <div class="mission">
        <div class="mission-text">
          <h5>Our Story and Mission</h5>
          <h2>
            Automation tools created for <br />
            <span class="everyone">everyone</span>
          </h2>
          <h6 id="missiontext">
            After years of developing our virtual lithography technology, we
            refocused our efforts on AI. After testing our framework developing
            software tools for the FDA's Summer Food Service Program, we began
            developing the Simplified Semantic System Synthesis Framework, or
            S4, our proprietary polymorphic AI language, built from the ground
            up for planning. From here, HARP research hopes to expand its
            capabilities, allowing anyone to create anything.
          </h6>
        </div>
        <img
          class="mission-img"
          src="../assets/HARPResearchLockUps/Photos/orientation_1.JPG"
          alt="team photo"
        />
      </div>
    </div>
    <div class="team">
      <h1 class="team-header">Meet the team</h1>
      <h2 class="team-foundersHeader">Founders & Management</h2>
      <div class="team-foundersCards">
        <TeamMember
          v-for="member in TeamMembers.filter((member) => member.founder)"
          :key="member.id"
          :member="member"
        />
      </div>
      <h2 class="team-membersHeader">Team Members</h2>
      <div class="team-buttons">
        <GeneralButton label="View All" @click="updateFilter('all')" />
        <GeneralButton label="Developers" @click="updateFilter('Developer')" />
        <GeneralButton
          label="Researchers"
          @click="updateFilter('Researcher')"
        />
      </div>
      <div class="team-membersCards">
        <TeamMember
          v-for="member in filteredTeamMembers"
          :key="member.id"
          :member="member"
        />
      </div>
    </div>

    <!-- <div class="join">
      <div class="join-text">
        <h2>Join our team</h2>
        <p>
          After years of developing our virtual lithography technology, we
          refocused our efforts on AI. After testing our framework developing
          software  tools for the FDA's Summer Food Service Program, we began
          developing the Simplified Semantic System Syn
        </p>
        <div class="button-wrapper">
          <CareersButton label="Careers" />
        </div>
      </div>
    </div> -->
    <Footer />
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import TeamMember from "@/components/About/TeamMemberCard.vue";
import Header from "../components/General/Header.vue";
import GeneralButton from "@/components/About/GeneralButton.vue";
import CareersButton from "@/components/About/CareersButton.vue";
import Footer from "@/components/General/Footer.vue";
import TeamMembers from "@/components/About/teamMembers.json";

const selectedFilter = ref("all");
const filteredTeamMembers = computed(() => {
  if (selectedFilter.value === "all") {
    return TeamMembers.filter((member) => !member.founder);
  }
  return TeamMembers.filter(
    (member) => !member.founder && member.type === selectedFilter.value
  );
});

function updateFilter(filter) {
  selectedFilter.value = filter;
}
</script>

<style scoped>
@import "../components/About/about.css";
</style>
