permalink: /
title: "Introduction"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

SelfSim treats cities as complex adaptive systems. It incorporates the classical concept of land use and transport interaction, and the simulation involves several urban sub-systems, including transportation, land use, energy, environment, economy and population systems. 

Different form many other urban micro-simulation models, SelfSim is focused on sustainable technologies, infrastructures and policies in smart cities. Specifically, it can simulate how sustainable technologies (e.g., automation technologies in the mobility sector, and smart heating/cooling technologies in the residential sector) may diffuse over time and across space in the context of urban evolution at the individual level. Based on the simulation, we can further conduct various impact assessments, including infrastructural, societal, economic, energy and environmental impact assessments. In particular, we can set up various future “what-if” scenarios with SelfSim, for example, to explore how different sustainable technology, infrastructure and policy scenarios may influence urban evolution and the development of smart cities.

Model Framework of SelfSim 
======

SelfSim considers the interactions between several typical urban sub-systems, including transportation, land use, economy, energy, environment, and population. Specifically, it is composed of two modules, i.e., Initialization and Simulation modules. The Initialization module is used to initialize SelfSim by generating a virtual city primarily using open urban datasets; the Simulation module comprises a set of spatial agent-based models which form a loop (in general representing one year) to simulate how urban system evolves over time at the individual level. Some of the modules in SelfSim (e.g., environmental impact assessment) are still under development or being improved. 

From a technical perspective, SelfSim is implemented in NetLogo, and the simulation results can be visualized through a set of Python libraries which generate figures and maps automatically.

![Model Framework of SelfSim](/images/SelfSim.png)
