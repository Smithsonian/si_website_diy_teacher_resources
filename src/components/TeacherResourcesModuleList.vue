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
            Astrophysics | Harvard & Smithsonian— to see if they can detect actual alien worlds
            orbiting distant stars. Educators can extend the experience by having students
            investigate multiple target stars, deepening their understanding of exoplanet detection
            and stellar systems.
          </p>
          <ul class="list-unstyled">
            <ResourceItem
              href="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/SpectrumLab%20Curriculum%20Overview.pdf"
              >Curriculum Overview</ResourceItem
            >
            <ResourceItem
              href="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/How%20to%20use%20the%20Spectrum%20Lab.pdf"
              >How to use the Spectrum Lab</ResourceItem
            >
          </ul>
        </div>
        <ModuleRow
          title="1. Light"
          :icon-source="lightIcon"
          icon-alt="Light module icon"
          href="https://smithsonian.github.io/si_website_spectrum_lab/light"
          tagline="How does the interaction of light and matter affect the colors we see?"
          default-open
        >
          Students make predictions as they explore light and color with hands-on materials
          including colored filters, and with the PhET color vision simulation. The Photon Model is
          introduced to explain emission, reflection, absorption, transmission. Students are asked
          to make sense of phenomena they observe with the colored filters using these concepts.
          <template #resource-list>
            <ResourceList
              teacher-guide="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Module%201%20(Light)%20Teacher%20Guide.pdf"
              slides="https://docs.google.com/presentation/d/14N4v2-SpHKoffbHwUIwHWJkZ50xPdV019D2BObWWBr8/edit?usp=sharing"
              slides-pdf="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Module%201%20(Light)%20Teacher%20Slides.pdf"
              slides-ppt="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Module%201%20(Light)%20Teacher%20Slides.pptx"
              notebook="https://docs.google.com/document/d/1V2VWiEBpkkbPLmYkpyVWORhxNeYpCeI1Kxbont7jO14/edit?usp=sharing"
              notebook-pdf="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Module%201%20(Light)%20Student%20Notebook.pdf"
              notebook-word="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Module%201%20(Light)%20Student%20Notebook.docx"
              answers="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Module%201%20(Light)%20ANSWER%20KEY.pdf"
            />
          </template>
        </ModuleRow>
        <ModuleRow
          title="2. Spectra"
          :icon-source="spectraIcon"
          icon-alt="Spectra module icon"
          href="https://smithsonian.github.io/si_website_spectrum_lab/spectra"
          tagline="How can a spectrum tell us more than our eyes can perceive?"
        >
          Students make their own spectroscopes using diffraction gratings and paper towel tubes,
          and are introduced to the online Spectrum Lab visualization tool to explore how spectrum
          graphs relate to what they see through their spectroscopes. The session focuses mostly on
          learning and practicing how to interpret spectrum graphical plot representations and how
          they relate to measured quantities such as wavelength, energy, and brightness.

          <template #resource-list>
            <ResourceList />
          </template>
        </ModuleRow>
        <ModuleRow
          title="3. Color"
          :icon-source="colorIcon"
          icon-alt="Color module icon"
          href="https://smithsonian.github.io/si_website_spectrum_lab/color"
          tagline="How can spectra tell us what color things are?"
        >
          Human eyes (and brains) perceive an object to be a certain color based on the specific
          combination of visible wavelengths and energies that the object emits, reflects, absorbs,
          and transmits. A spectrum can tell you whether that banana is yellow because it only
          reflects yellow light, or because it reflects a combination of green and red light.
          <template #resource-list>
            <ResourceList />
          </template>
        </ModuleRow>
        <ModuleRow
          title="4. Temperature"
          :icon-source="temperatureIcon"
          icon-alt="Temperature module icon"
          href="https://smithsonian.github.io/si_website_spectrum_lab/temperature"
          tagline="What can spectra tell us about an object’s temperature?"
        >
          Students explore the features of thermal emission spectra - both theoretical models
          (so-called blackbody radiation curves), and actual spectra coming from stars of different
          temperature, from light bulbs, and the infrared emission spectra of the Earth as acquired
          from a space telescope.
          <template #resource-list>
            <ResourceList />
          </template>
        </ModuleRow>
        <ModuleRow
          title="5. Composition"
          :icon-source="compositionIcon"
          icon-alt="Composition module icon"
          href="https://smithsonian.github.io/si_website_spectrum_lab/composition"
          tagline="How can spectra tell us what things are made of?"
        >
          Students examine real emission and absorption line spectra of different gases and are
          introduced to the Bohr model of quantized atomic energy levels as a way to make sense of
          how these kinds of spectra can be used to identify particular atoms. This module ends with
          an activity in which students can explore real spectral data (reflection, emission, and
          atmospheric transmission spectra) from multiple solar system planets and practice
          interpreting what these spectra tell them about the color, temperature, and atmospheric
          composition of these planets.
          <template #resource-list>
            <ResourceList />
          </template>
        </ModuleRow>
        <ModuleRow
          title="Final projects"
          :icon-source="finalProjectsIcon"
          icon-alt="Final projects icon"
          href="https://smithsonian.github.io/si_website_spectrum_lab/final-projects"
        >
          The Spectrum Lab Module includes a choice of 3 Final Projects that serve as authentic
          performance assessments for students to synthesize and apply the concepts and skills
          learned during the unit. Each project can be completed by students using the Claim,
          Evidence, and Reasoning framework.
        </ModuleRow>
        <ModuleRow
          title="Fishtank"
          :icon-source="fishtankIcon"
          icon-alt="Fishtank project icon"
          href="https://smithsonian.github.io/si_website_spectrum_lab/final-projects/fishtank"
          indent
        >
          Students synthesize information about the reflection spectra of colorful fish; the
          lighting needs of chlorophyll-containing algae and coral; and the emission spectra of fish
          tank LEDs. Their task: Design a healthy and eye-pleasing aquarium, choosing a lighting
          scheme and using spectral data to explain their choices.
          <template #resource-list>
            <ResourceList
              slides="https://docs.google.com/presentation/d/1FB_vo2rYrSiNWPGeIjJJLSdE-5WNf-Siro7ee0StLM8/edit?usp=sharing"
              slides-pdf="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Fishtank%20Teacher%20Slides.pdf"
              slides-ppt="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Fishtank%20Teacher%20Slides.pptx"
              notebook="https://docs.google.com/document/d/12xds0lAumVzMdsvFP1Okw7J9Q8QdT2Xp4fUom2MOsiI/edit?usp=sharing"
              notebook-pdf="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Fish%20Tank%20Student%20Notebook.pdf"
              notebook-word="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Fish%20Tank%20Student%20Notebook.docx"
              answers="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Fish%20Tank%20ANSWER%20KEY.pdf"
            >
              <ResourceSubList header="Extras">
                <ResourceItem
                  href="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Fish%20Tank%20Project%20Data%20Charts.pdf"
                  >Fish Tank Data Table (PDF)</ResourceItem
                >
              </ResourceSubList>
            </ResourceList>
          </template>
        </ModuleRow>
        <ModuleRow
          title="Exoplanets"
          :icon-source="exoplanetsIcon"
          icon-alt="Exoplanets project icon"
          href="https://smithsonian.github.io/si_website_spectrum_lab/final-projects/exoplanets"
          indent
        >
          Students analyze published low-resolution spectra of real exoplanets and compare them to
          hi-res solar system and theoretical model spectra to determine the atmospheric composition
          of alien worlds trillions of miles away. Their task: Create a winning proposal for the
          IR-observing James Webb Space Telescope to obtain spectra from an exoplanet target of
          their choice.
          <template #resource-list>
            <ResourceList is-final-project />
          </template>
        </ModuleRow>
        <ModuleRow
          title="Museum conservation"
          :icon-source="museumIcon"
          icon-alt="Museum conservation project icon"
          href="https://smithsonian.github.io/si_website_spectrum_lab/final-projects/museum"
          indent
        >
          Students investigate how paint pigments reflect light at different wavelengths and learn
          how museum conservators use spectroscopy to identify materials and make decisions about
          how to best care for and restore the artwork. Their task: Create a museum display that
          conveys how spectra are used in art conservation.
          <template #resource-list>
            <ResourceList
              notebook="https://docs.google.com/document/d/1YOy7qTdmpTLjND65mImiAiUIRlwk3afIMqyvCT0a2Ac/edit?usp=sharing"
              notebook-pdf="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Museum%20Conservation%20Student%20Notebook.pdf"
              notebook-word="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Museum%20Conservation%20Student%20Notebook.docx"
              is-final-project
              datasheet=""
            >
              <ResourceSubList header="Extras">
                <ResourceItem
                  href="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Museum%20Conservation%20Pigments%20Data%20Table.pdf"
                  >Pigment Data Table (PDF)</ResourceItem
                >
                <ResourceItem
                  href="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Museum%20Conservation%20Technique%20Description.pdf"
                  >Technique Descriptions (PDF)</ResourceItem
                >
              </ResourceSubList>
            </ResourceList>
          </template>
        </ModuleRow>
        <ModuleRow
          title="Playground"
          :icon-source="playgroundIcon"
          icon-alt="Playground icon"
          href="https://smithsonian.github.io/si_website_spectrum_lab/playground"
        >
          This feature of the Spectrum Lab allows teachers and students to flexibly access, analyze,
          and compare data from a curated database of over 100 spectra in multiple categories
          (Stars, Planets, Lamps, Nature, Atoms & Molecules, Thermal Emission). It also features the
          capability to upload new data, allowing teachers to design their own projects, and
          students to investigate questions of personal interest.
        </ModuleRow>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import lightIcon from '@/assets/SVG/lightbulb-regular.svg?set-current-color';
import spectraIcon from '@/assets/SVG/spectra_icon.svg?set-current-color';
import colorIcon from '@/assets/SVG/color_icon.svg?set-current-color';
import temperatureIcon from '@/assets/SVG/temperature_icon.svg?set-current-color';
import compositionIcon from '@/assets/SVG/composition_icon.svg?set-current-color';
import finalProjectsIcon from '@/assets/SVG/final_projects_icon.svg?set-current-color';
import fishtankIcon from '@/assets/SVG/fish_tank_icon.svg?set-current-color';
import exoplanetsIcon from '@/assets/SVG/modelTransit1.svg?set-current-color';
import museumIcon from '@/assets/SVG/museum_conservation_icon.svg?set-current-color';
import playgroundIcon from '@/assets/SVG/playground_icon.svg?set-current-color';
</script>

<style>
.module-list-intro {
  margin-bottom: 3rem;
}
</style>
