---
title: Delayed Open Source Publication - Desconhecido
slug: deep-summary-delayed-open-source-publication-desconhecido
tags: 
  - book-summary
excerpt: ""
category: "self-help"
author: "matheus-puppe"
publishDate: "2024-04-21T00:00:00.000Z"

---

BOOK LINK:

[CLICK HERE](https://www.amazon.com/gp/search?ie=UTF8&tag=matheuspupp0a-20&linkCode=ur2&linkId=4410b525877ab397377c2b5e60711c1a&camp=1789&creative=9325&index=books&keywords=delayed-open-source-publication-desconhecido)



- Delayed Open Source Publication (DOSP) refers to distributing software under a proprietary license initially, then releasing the source code under an open source license later according to a planned schedule. 

- Early examples include Aladdin GhostScript (released proprietary versions then older GPL versions) and Qt (committed to eventually releasing under open source).

- Common models of DOSP include unconditional scheduled relicensing, event-driven relicensing, and conditional relicensing. 

- The Business Source License (BUSL) that allows commercial use for a fee is growing in popularity as a DOSP license.

- Recently, some DOSP licenses are adding anti-competition terms beyond just commercial use, aiming to prevent competing products/services.

- Key questions for future research include why organizations choose DOSP/BUSL over AGPL, contribution dynamics of BUSL projects, and fork likelihoods when open source projects switch to DOSP.

- DOSP licensing models may continue experimenting but eventually converge on a standard set like traditional open source licenses have.

In summary, the paper provides a survey of the history and examples of Delayed Open Source Publication licensing strategies, outlines common models, and identifies trends and open questions for further exploration.

 Here is a summary:

- Qt and Ghostscript were early projects that used Delayed Open Source Publication (DOSP) to balance commercial and open source interests. Qt maintained separate proprietary and open source editions for a time. 

- KDE had agreements with Qt copyright holders requiring open source releases within 12 months of any proprietary release. There is no evidence of significant delays between releases. 

- DOSP in these early cases served as a fallback if upstream development stopped for over a year or completely discontinued. Qt licensors generally exceeded the minimum standards in the agreements.

- Today, Qt is released simultaneously under proprietary and open source licenses, with some exceptions. 

- More recently, Onivim 2 used DOSP, maintaining a MIT-licensed version delayed 18 months after the proprietary release. 

- DOSP is commonly used as an ongoing commercial strategy to provide a window of exclusivity for proprietary sales before features become open. It is less common as a one-time delay at the start of a project before committing to open source.

- Some projects delay opening source due to code quality concerns, security issues, license choice uncertainty, or need for permissions. They intend to eventually become fully open source.

- Other models involve sponsor/bounty delays, making features available first to sponsors before the general public after a fixed time delay.

 Here is a summary:

- The Business Source License (BUSL) is a delayed open source license created by MariaDB that initially restricts commercial use but requires the code to be released under an open source license after a set "Change Date". 

- Several prominent projects like CockroachDB, Couchbase, Terraform, and ArangoDB have adopted BUSL in recent years. BUSL is intended to allow commercial sponsors more control over commercialization while still providing an open source option later.

- Critics argue BUSL is meant to discourage competition with the developers' own commercial offerings. However, BUSL licenses often include additional use grants permitting non-competitive commercial uses before the Change Date. 

- Adopting BUSL has attracted some criticism from users and led to competitive open source forks in at least one case (OpenTofu fork of Terraform). Long-term consequences of this licensing model are still unfolding.

In summary, BUSL is a delayed open source license that initially restricts commercial use but requires later open sourcing, adopted by several prominent projects to balance open source and commercial interests but also attracting some criticism from open source advocates.

 Here is a summary:

- BUSL and other projects like it adopt licenses with non-competition clauses that restrict commercial use of the software, especially providing competing services, for a set period of time (e.g. 2 years for the Functional Source License). 

- This aims to allow the original developers to commercialize the software first before it becomes fully open source, as a compromise between proprietary and open source licensing. 

- The Bootstrap Open Source License (BOSL) takes a different approach by making the license initially non-reciprocal (allowing use in proprietary software) but then becoming reciprocal (requiring derived works be open source) after a grace period, as a compromise between non-copyleft and copyleft open source licenses.

- Unlike BUSL and other delayed open source licenses, BOSL's start and end states are both considered open source licenses, so it is not truly a form of delayed open source publication but rather open source licensing with time-varying terms.

- The key distinction is that delayed open source licenses aim to balance proprietary and open source rights, while BOSL balances non-reciprocal and reciprocal open source licensing models.

 Here is a summary:

The passage discusses future research questions around delayed open source publication (DOSP) licensing models. It proposes studying the differences between using the AGPL versus DOSP licenses, the impact of DOSP on outside contributions, taxonomy of additional use grants in the Business Source License (BUSL), and relicensing projects under DOSP after initial open source publication. It also questions why a fork of the Terraform project called OpenTofu attracted significant interest and contributions compared to forks of other projects. Overall, the questions aim to better understand the tradeoffs, effects, and adoption of DOSP licensing over time compared to traditional open source licensing.

 Here are some key points that could explain the differences in outcomes between OpenTofu and other relicensing events:

- Terraform's large market share and indispensable nature for its users likely contributed significantly. It was highly adopted for its niche, so developers had strong reasons to participate in forks to continue using/contributing to the code. 

- The Terraform community may have been particularly engaged/vocal, increasing interest and participation in OpenTofu. Other projects may have had less involved communities. 

- OpenTofu benefited from HashiCorp's endorsement and participation early on, providing resources and legitimacy that alternative forks lacked. This helped garner additional sponsorships/commitments.

- The timing of Terraform's relicensing may have been opportune, coinciding with growing frustration over the changes. Other events did not have the same aligned timing/sentiment among users. 

- Terraform's infrastructure as code domain was quickly growing at the time, increasing relevance and interest in the project generally. Other relicensed projects did not have the same industry momentum. 

- OpenTofu organizers actively publicized and marketed the fork, helping build awareness and engagement that languished fork efforts elsewhere did not match.

So in summary, factors like Terraform's large user base, engaged community, HashiCorp's involvement, fortuitous timing, and domain growth all likely contributed to OpenTofu's success over other Open Source forks following relicensing events. The combined impact of these project-specific qualities set it apart.