<template>
  <BContainer class="my-5">
    <BRow>
      <BCol cols="12" xl="10" xxl="8">
        <div class="module-list-intro">
          <p>Dear Educator,</p>
          <p>
            Welcome to DIY Planet Search! Get ready to engage your students in one of the most
            exciting and cutting-edge areas of science – the search for other worlds in solar
            systems beyond our own!
          </p>
          <p>
            DIY Planet Search typically takes 4 to 6 instructional hours, and includes 6 core
            activities. During the project students will gather and analyze real astronomical data
            from the MicroObservatory telescopes — built and maintained by the Center for
            Astrophysics | Harvard & Smithsonian — to see if they can detect actual alien worlds
            orbiting distant stars. Educators can extend the experience by having students
            investigate multiple target stars, deepening their understanding of exoplanet detection
            and stellar systems.
          </p>
          <ul class="list-unstyled">
            <ResourceItem
              href="https://datalabs.cfa.harvard.edu/large_files/DIY/DIYPlanetSearch_CurriculumOverview.pdf"
              always-allowed
              >Curriculum Overview</ResourceItem
            >
            <ResourceItem
              href="https://datalabs.cfa.harvard.edu/large_files/DIY/How%20to%20Use%20DIY%20Planet%20Search%20With%20A%20Group.pdf"
              always-allowed
              >Using DIY Planet Search with a Group</ResourceItem
            >
          </ul>
        </div>
        <ModuleRow
          title="1. Introduction &amp; Welcome to Do It Yourself Planet Search"
          default-open
        >
          Students are welcomed to the global community of planet hunters. They explore the DIY
          Planet Search website and share their thoughts on the possibility of extraterrestrial life
          and the search for other worlds.
          <template #resource-list>
            <ResourceList
              has-notebook
              educator-guide="https://datalabs.cfa.harvard.edu/large_files/DIY/DIYPlanetSearch_A1_%20EducatorGuide.pdf"
              notebook-pdf="https://datalabs.cfa.harvard.edu/large_files/DIY/DIYPlanetSearch_A1_StudentNotebook.pdf"
              notebook="https://docs.google.com/document/d/1mi1LeZv5eWfWC9I84RnEsTYfe6DSr1jE1SPxPi-xi-0/edit?usp=sharing"
              notebook-word="https://datalabs.cfa.harvard.edu/large_files/DIY/DIY%20Planet%20Search%20-%20A1_%20Introduction%20-%20Student%20Notebook.docx"
            />
          </template>
        </ModuleRow>
        <ModuleRow title="2. Modeling A Transit">
          Using both physical and computer models, students predict the light curve of a star with
          an orbiting planet. They consider how this model might inform their interpretation of real
          observational data.

          <template #resource-list>
            <ResourceList
              has-notebook
              educator-guide="https://datalabs.cfa.harvard.edu/large_files/DIY/DIYPlanetSearch_A2_%20EducatorGuide.pdf"
              notebook-pdf="https://datalabs.cfa.harvard.edu/large_files/DIY/DIYPlanetSearch_A2_StudentNotebook.pdf"
              notebook="https://docs.google.com/document/d/1Q5liG9o7UJ6j0Dh4jQE-dx1Vgi4JfFzmLVlLvoLSP_A/edit?usp=sharing"
              notebook-word="https://datalabs.cfa.harvard.edu/large_files/DIY/DIY%20Planet%20Search%20-%20A2_%20Modeling%20A%20Transit%20-%20Student%20Notebook.docx"
            />
          </template>
        </ModuleRow>
        <ModuleRow title="3. Scheduling Telescope Observations">
          Students use the MicroObservatory telescopes to take images of stars known to have
          transiting exoplanets. Observation requests should be made during the day before the
          scheduled Exoplanet target observations (you can go back and acquire data from past
          observations as well).

          <template #resource-list>
            <ResourceList
              has-notebook
              educator-guide="https://datalabs.cfa.harvard.edu/large_files/DIY/DIYPlanetSearch_A3_%20EducatorGuide.pdf"
              notebook-pdf="https://datalabs.cfa.harvard.edu/large_files/DIY/DIYPlanetSearch_A3_StudentNotebook.pdf"
              notebook="https://docs.google.com/document/d/1spNu0nw7wCPlEOrZk6709Ha0dj2TVCF9jiaB199qmp8/edit?usp=sharing"
              notebook-word="https://datalabs.cfa.harvard.edu/large_files/DIY/DIY%20Planet%20Search%20-%20A3_%20Scheduling%20Telescope%20Observations%20-%20Student%20Notebook.docx"
            />
          </template>
        </ModuleRow>
        <ModuleRow title="4. Image Analysis: Measuring and Graphing Brightness">
          Students examine their telescope images, learn how to identify their target star, and take
          measurements of the relative brightness of their star to collaboratively create a light
          curve.

          <template #resource-list>
            <ResourceList
              has-notebook
              educator-guide="https://datalabs.cfa.harvard.edu/large_files/DIY/DIYPlanetSearch_A4_%20EducatorGuide.pdf"
              notebook-pdf="https://datalabs.cfa.harvard.edu/large_files/DIY/DIYPlanetSearch_A4%265_StudentNotebook.pdf"
              notebook="https://docs.google.com/document/d/1-gbtsHRubYJphdPVZTQNgGjiyp5mKDONtOxwNgymwl8/edit?usp=sharing"
              notebook-word="https://datalabs.cfa.harvard.edu/large_files/DIY/DIY%20Planet%20Search%20-%20A4%265_%20Making%20Observations%20-%20Student%20Notebook.docx"
            />
          </template>
        </ModuleRow>
        <ModuleRow title="5. Data Quality Analysis">
          Students inspect their light curve to determine if they think they see evidence for an
          exoplanet Transit. They evaluate the factors that may affect the quality of their
          telescope image data, such as atmospheric conditions, image clarity, and observational
          timing.

          <template #resource-list>
            <ResourceList
              educator-guide="https://datalabs.cfa.harvard.edu/large_files/DIY/DIYPlanetSearch_A5_EducatorGuide.pdf"
            />
          </template>
        </ModuleRow>
        <ModuleRow title="6. Data Interpretation">
          Students analyze the light curve and apply a “best fit” model to estimate the size of the
          planet and understand the nature of its orbit. Along the way they use methods for
          identifying a signal within noisy data, and explore how to use statistics and a modeling
          tool to draw evidence-based conclusions from a light curve with considerable scatter.

          <template #resource-list>
            <ResourceList
              has-notebook
              educator-guide="https://datalabs.cfa.harvard.edu/large_files/DIY/DIYPlanetSearch_A6_%20EducatorGuide.pdf"
              notebook-pdf="https://datalabs.cfa.harvard.edu/large_files/DIY/DIYPlanetSearch_A6_StudentNotebook.pdf"
              notebook="https://docs.google.com/document/d/1hyLGIbad9QuF3hBUOQH5oGtZJv90e8CCRJlivhmAP80/edit?usp=sharing"
              notebook-word="https://datalabs.cfa.harvard.edu/large_files/DIY/DIY%20Planet%20Search%20-%20A6_%20Data%20Interpretation%20-%20Student%20Notebook.docx"
            />
          </template>
        </ModuleRow>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts"></script>

<style>
.module-list-intro {
  margin-bottom: 3rem;
}
</style>
