---
permalink: /
title: "Introduction"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

SelfSim treats cities as complex adaptive system, and aims to simulate how urban system evolves over time at the micro level, with a focus on the diffusion and impacts of those low-carbon technologies and services in both the mobility and residential sectors (e.g., electric vehicles and smart heating) 

SelfSim incorporates the classical concept of land use and transport interaction, and the simulation involves several urban sub-systems, including transportation, land use, energy, environment, economy and population systems. 

From a technical perspective, SelfSim is implemented in NetLogo, and the simulation results can be visualized through a set of Python libraries which generate figures and maps automatically.

Model Framework of SelfSim 
======

SelfSim considers the interactions between several typical urban sub-systems, including transportation, land use, economy, energy, environment, and population. Specifically, it is composed of a set of spatial agent-based models to simulate how urban system evolves over time at the individual level. These include a demographic evolution model, a firmographic model, a joint model of residential location choice and real estate price, a joint model of firm location choice and office building price, a social network evolution model, a land use model, an accessibility model, a transport facility model, a transport energy consumption model, a domestic energy consumption model, and an environmental impact assessment model. Some of the modules in SelfSim are still under development or being improved. 

![Model Framework of SelfSim](/images/SelfSim.png)
