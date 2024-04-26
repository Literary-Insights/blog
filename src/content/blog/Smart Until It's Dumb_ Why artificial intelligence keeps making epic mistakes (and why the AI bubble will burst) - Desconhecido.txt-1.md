---
title: Smart Until It's Dumb_ Why artificial intelligence keeps making epic mistakes (and why the AI bubble will burst)
slug: smart-until-it-s-dumb_-why-artificial-intelligence-keeps-making-epic-mistakes-and-why-the-ai-bubble-will-burst
tags: 
  - book-summary
excerpt: ""
category: "self-help"
author: "matheus-puppe"
publishDate: "2024-04-21T00:00:00.000Z"

---

BOOK LINK:

[CLICK HERE](https://www.amazon.com/gp/search?ie=UTF8&tag=matheuspupp0a-20&linkCode=ur2&linkId=4410b525877ab397377c2b5e60711c1a&camp=1789&creative=9325&index=books&keywords=smart-until-it-s-dumb_-why-artificial-intelligence-keeps-making-epic-mistakes-and-why-the-ai-bubble-will-burst)



 

- This book provides an overview of AI in its current state, and aims to cut through the hype by examining what AI can and can't do. 

- It discusses machine learning, deep learning, high-profile AI systems like AlphaGo and ChatGPT, and debates topics like consciousness and artificial general intelligence. 

- Chapters 4 and 5 share stories from the author's experience in corporate and academic AI, highlighting how unrealistic expectations are perpetuated. 

- It is organized with the first two chapters covering machine learning and its dangers, chapter 3 examining AI capabilities and limitations, chapters 4-5 discussing issues in business and research, and chapter 6 taking a philosophical look at consciousness and intelligence.

- The introduction sets up explaining how ubiquitous yet misunderstood AI has become, and the need to separate fact from hype. 

- It will analyze both the real progress of AI and the overpromising that generates unreasonable expectations around its capabilities.

So in summary, the book aims to provide an informed overview of AI's current state and capabilities while critiquing the hype and unrealistic views perpetuated in some business and research spheres.

 

- The first AI winter occurred in the 1970s after initial promises of autonomous vehicles, useful translation systems, etc. failed to materialize. Major funding cuts occurred in both the US and UK. 

- A second AI boom and subsequent winter occurred in the 1980s based on the methodology of "expert systems" which encoded human expertise into rules for computers. However, writing thousands of rules manually proved impractical. Promises of natural language processing and AI assistants also went unfulfilled. 

- This led to another period of stagnation and a negative stigma around AI research. Research continued cautiously with no major breakthroughs until Deep Blue's chess victory in 1997.

- Since the 2010s, machine learning has driven a new AI boom through automatically learning from vast amounts of data. It has enabled many commercial applications like recommendations, search, and improved tasks like image recognition. 

- However, there has also been hype, exaggeration of capabilities, and promises of autonomous vehicles that may not be fulfilled. The sentiment is this boom will be different, but past experience shows promise does not always match reality. Understanding how machine learning works is key to navigating the situation.

 

- Early approaches to artificial intelligence required explicitly programming rules for tasks like road crossing, which was difficult, impractical, and arbitrary. Experts found it hard to describe their intuition as rigid rules. 

- Machine learning overcomes this by using templates for programs rather than writing every detail. The computer fills in the blanks in the templates using data to determine the optimal values. 

- For example, a template for road crossing could be "If input < number, then recommendation." The computer finds the best inputs, numbers, and recommendations to fill in based on real-world data of outcomes. 

- Machine learning is successful because it can generate complex programs with many rules from data with little human effort. The rules are evidence-driven rather than arbitrary. It can find patterns humans may miss.

- However, computers do not truly learn autonomously. They are constrained to filling in templates provided by programmers. More expressive templates do not mean the computer can freely learn or go rogue, as correlations in data do not imply causation. Programmers still guide the learning process.

 

- Machine learning relies on human assumptions and domain knowledge to identify meaningful patterns and avoid spurious correlations. If the model is given too much flexibility, it may extract rules from random chance correlations in the data. 

- Data scientists tailor machine learning models narrowly for specific tasks rather than trying to build highly generalized models. Each task requires its own data, template, and domain knowledge guidance.

- Acquiring high-quality labeled training data is often one of the most challenging aspects, as it usually requires manual human labeling. This labeling effort is needed so models can learn from examples of correct inputs and outputs.

- Even reinforcement learning requires human guidance in the form of defining the set of actions a model is allowed to try. Without limits, models may explore useless or dangerous actions rather than learning the intended task.

So in summary, machine learning benefits from human input and oversight to focus models on meaningful patterns, avoid random correlations, acquire proper training data, and safely constrain model behavior. General artificial intelligence has not been achieved and machine learning remains narrowly applied based on task-specific data and assumptions.

 

- Deep learning is a type of machine learning that uses neural networks to learn complex patterns in large amounts of data. It has achieved great success in areas like image recognition, speech recognition, and natural language processing. 

- Key milestones included a deep learning model winning an image classification competition in 2012, and AlphaGo defeating top human players at the game of Go in 2015. These demonstrated deep learning's power for tackling difficult problems.

- Since then, deep learning has become prevalent for computer vision, video analysis, and natural language tasks. It drives technologies like image generation, artistic style transfer, and chatbots like ChatGPT. 

- However, the rapid progress also led to speculation about deep learning's capabilities. Some inaccurately compared it to the human brain or claimed it can learn without supervision. In reality, deep learning still requires large labeled datasets to train on, like the 1.2 million images used to train the winning image classifier.

So in summary, deep learning has achieved major successes but still relies on massive amounts of labeled data, contrary to some overblown claims about its abilities.

 

- Some tasks like image classification are inherently difficult for computers because images are just pixel data without meaningful semantic information. Traditional machine learning templates don't work well on raw data. 

- Deep learning uses the idea of applying multiple filtering operations to an input like an image in order to extract hierarchical representations. Basic filters detect low-level patterns which are then combined and used as input to more complex filters. 

- A convolutional neural network (CNN) model architecture applies multiple filter layers in succession to produce a hierarchical representation. Filters are learned from data rather than predefined.

- In CNNs for images, each layer applies filters to detect more complex patterns, and the image is downsampled to lose details. This produces an encoded "funnel" representation highlighting key features.

- CNN models can be adapted for other data types like audio by performing filtering and downsampling over sequences rather than 2D images. The key idea is extracting hierarchical representations from raw input through learned transformations.

So in summary, deep learning tackles difficult raw data tasks by learning multi-stage hierarchical representations through repeated filtering and feature extraction trained end-to-end on large datasets.

 

- CNNs (convolutional neural networks) are very effective for tasks like image classification where the input is a 2D image grid. However, they are not well-suited for all problems. 

- For tasks like machine translation, where the input is text represented as numbers, CNNs are ineffective. Instead, the text is first processed using a word embedding model to map words to numeric vectors where similar words have similar embeddings. 

- This embedded text is then analyzed using an LSTM (long short-term memory) model, which is better suited than CNNs for sequential data like text. The LSTM processes words one by one while retaining information from previous words. 

- In summary, different deep learning architectures like CNNs and LSTMs are designed for different types of data and problems. The key is choosing the right model and representation for each specific task, rather than trying to apply a single approach universally.

 Here are the key points about the nature and limitations of artificial intelligence models according to the passage:

- AI models, like neural networks, are configured automatically through machine learning rather than being explicitly programmed. This makes them difficult to interpret and explain. 

- AI models, such as CNN image classifiers, contain hundreds of filters and layers selected through learning, but it's unclear how exactly they arrive at outputs. We can understand early layers but not later complex logic.

- AI models lack a comprehensive understanding of concepts and context in the same way humans do. For example, they may incorrectly interpret ambiguous words like "pen" out of context. 

- Humans have a rich mental model of the world that includes detailed knowledge about objects, their properties, typical uses, relationships, etc. This allows us to intuitively understand language and scenarios. 

- Current AI models do not model or represent the world in as comprehensive or human-like a way. They are narrow in scope and can be easily fooled in ways humans would not. So they lack true intelligence or common sense.

In summary, while AI has advanced in narrow tasks, its models do not capture the broad, contextual understanding of the real world that humans possess through our rich internal mental models. This limits AI and causes it to make mistakes a person would not.

 

Machine learning models are currently limited in that they require large amounts of training data to learn tasks, unlike humans who can learn from just one or a few examples. This is because humans employ various learning shortcuts and techniques that machines do not, such as process of elimination and focusing attention on salient objects. For example, a toddler can learn a new word when a parent points out an object once and names it, while current AI needs thousands of labeled images to recognize everyday objects like cats. Humans are also able to apply their knowledge flexibly to new, unfamiliar situations, whereas machine learning systems trained on typical examples may fail on outlier cases they were not exposed to during training. The strengths of human learning point to areas where AI still needs to progress to attain a deeper, more flexible understanding akin to human intelligence.

 

- Current machine learning systems can produce "epic fails" like mistranslating sentences or identifying people as the wrong race/object. Fixing one issue often leads to another one popping up, as there are endless ways to confuse AI systems. 

- Even very advanced models like GPT-3 can be tricked by posing ambiguous, nonsensical, or knowledge-based questions they cannot handle. Their knowledge comes only from training data.

- ChatGPT, an improved version of GPT-3, provides more nuanced responses but still struggles with some questions requiring real-world or current event knowledge it does not have access to. 

- While AI performance is steadily improving, the number of problematic cases never seems to disappear completely. Each step requires an increasingly complicated solution. 

- Some AI proponents argue issues are due to lack of data, but fixing one problem often leaves room for new ones. Achieving true artificial general intelligence that matches human abilities remains an open challenge.

 

- Reaching AGI requires developing a new, unprecedented methodology that enables human-level performance across all tasks, not just building humanoid robots. Current machine learning approaches fall short of this. 

- Proponents of AGI argue it will be achieved soon based on the "law of accelerating returns" which says technological progress speeds up over time. However, this law is based on anecdotal evidence and its predictions assume exponential growth will continue indefinitely, which cannot be guaranteed. 

- Accurately predicting innovations is impossible as they are, by definition, unpredictable. While we may be positively surprised, AGI may not be achieved in the near future and could require prolonged breakthroughs, similar to nuclear fusion.

- Self-driving cars were touted as an imminent achievement, but building truly autonomous vehicles that can handle any situation has proven far more challenging than expected. Even systems operating in limited, controlled environments still require human oversight. Fully autonomous vehicles may remain elusive without major advances in AI.

So in summary, while AGI is possible in theory, claims it will be achieved soon based on accelerating progress cannot be reliably substantiated given the unpredictability of innovation. Reaching true AGI will most likely require unprecedented methodological discoveries, not just incremental engineering improvements.

 

The chapter discusses how many AI projects in business fail due to putting the "cart before the horse" - focusing on the AI solution before identifying the problem to solve. The author provides examples of companies rushing to use AI without a clear use case, just because it could get them funding, tax credits, or attract talent. One common pattern is teams being created solely to "promote AI" within an organization, pushing AI solutions without due diligence. Projects fail when the AI methodology is decided before the problem, as the AI may not be well-suited. While funding sources require little accountability, rushing AI projects often leads to wasted time and money. The chapter argues problems should be identified first before determining the best technical solution.

 

- Companies are often overzealous in their belief that AI can solve any problem, even impossible tasks. An example given is the self-driving car industry which underestimated the challenges. 

- When first building AI prototypes, errors commonly go unnoticed. Minor errors in AI can make results seem better than they are since AI finds patterns in data whether real or illusory. An example of "data leakage" is given where an AI wrongly predicted cable installation outcomes based on missing data rather than real patterns. 

- Even large, careful companies can validate AI prototypes improperly for years by introducing bias into testing. One company assigned different geographic regions to test and control groups, but the regions differed in wealth skewering the results. 

- After an initial AI prototype seems successful due to unnoticed errors or improper validation, companies tend to rapidly expand their AI teams and take on new projects before ensuring the initial results are real. This can waste resources if the initial success was misleading.

In summary, the key risks outlined are overly optimistic expectations of AI, unnoticed errors, improper validation techniques, and prematurely expanding AI initiatives before ensuring initial results are valid. Careful testing and evaluation is advocated to avoid these pitfalls.

 

- It's common for companies to rapidly scale up AI teams after only minor successes or questionable validation of an AI concept. This is driven by confirmation bias and the assumption that AI will work.

- The author describes experiences where companies built up large AI teams and budgets based on prototypes or experiments that were technically infeasible or had methodological flaws. The initial results did not merit such major investments. 

- To avoid admitting failure, some companies resort to fabricating or tampering with AI outputs so they appear to work as intended, even if the underlying AI is not truly being used. The author provides an example where they were directed to customize outputs to please executives. 

- Teams continue growing despite known weaknesses in the AI in order to avoid risking the team's future. Admitting problems could reveal past promises were overblown. 

- Outcomes often involve quietly scaling back AI efforts by halting new work, letting resources dwindle, or pivoting away from the original AI concept without acknowledgment of past issues. This allows companies to back away silently instead of publicly admitting failure.

 

- The story discusses issues with how AI research is sometimes conducted, focusing on machine learning model evaluation. 

- Researchers often share datasets publicly to build and evaluate models, but sometimes secretly reserve a portion to independently assess reported results. However, cherry-picking results can inflate performance. 

- The author recounts organizing an AI contest where researchers could submit multiple model results to be scored on a leaderboard. This allowed cherry-picking the best-performing models to claim inflated performance gains. 

- Repeated cherry-picking and tweaking models based on private evaluation data feedback can further exaggerate apparent performance beyond what would be achieved on truly new data, similar to taking an exam multiple times and reporting only the highest score. 

- The story highlights how commonly used practices like open-ended contests and cherry-picking results can distort reported AI performance in research if not conducted rigorously with proper blind evaluation on held-out data.

 

- Cherry-picking results, like repeatedly testing models on the same dataset and only reporting the best performances, can give a misleading impression of how well a model actually works. It may perform very well on seen data but poorly on new, unseen data. 

- Researchers sometimes cherry-pick datasets and comparisons to other models to make their own model look best. They may conceal cases where their model did not perform as well. 

- This prevalence of cherry-picking has created an artificial sense that AI is advancing rapidly, when improvements may not be as great as reported. Real-world performance could be lower.

- Researchers have incentives like grants and publicity that encourage promoting their work in the best possible light. Some even teach tricks for subtle cherry-picking. 

- Publicity around things like passing a Turing test challenge has been exaggerated at times by only reporting favorable results and using lenient evaluation criteria. 

- Accuracy numbers reported for tasks like dementia detection may be misleading if they don't account for biases in the evaluation data. Cherry-picking can distort perceived progress and capabilities.

The overall point is that cherry-picking and other selective reporting practices are common issues that can artificially inflate perceived AI abilities and distort understanding of real technology capabilities and limitations. More rigorous and unbiased evaluation is important.

 Here are the key points about our understanding of the brain and neurons based on the passage:

- Our understanding of how individual neurons work is still limited. The common model of neurons summing inputs and firing if the sum exceeds a threshold is an oversimplification. Real neurons are much more complex. 

- We don't fully understand how neurons produce outputs from their inputs or how learning occurs through changing neuronal connections. 

- Scientists are still discovering new things about neuronal behavior, like dendrites performing complex computations, that contradict previous models. 

- Factors like neuromodulators in the surrounding fluid that affect neurons are not fully understood.

- Attempts to map and simulate the entire human brain, like Henry Markram's project, have not succeeded due to the immense complexity of the brain far beyond simplistic models. 

- Even the complete neural wiring diagram (connectome) of a tiny worm has not enabled scientists to simulate or fully explain its behavior, showing our limited understanding. 

- While progress is being made through research, our overall understanding of how brains and individual neurons work is still quite limited, contrary to impressions from popular science coverage. Much remains unknown.

In summary, the passage indicates that while neuroscience has advanced our knowledge, scientists still do not have a comprehensive and accurate model or understanding of how individual neurons function and how their interactions give rise to things like learning and behavior in the brain. More research is needed.

 Here are the key points about what we know and don't know about consciousness:

- Consciousness refers to our subjective experience and awareness of the world around us and our own thoughts. But we don't fully understand how consciousness emerges from physical processes in the brain. 

- We know some brain regions are involved in conscious perceptions and thoughts, while others control unconscious functions. But we don't understand why some brain areas give rise to conscious experience and others don't.

- The "hard problem" of consciousness is explaining how consciousness arises from physical matter at a fundamental level. We don't have a satisfying theory for this yet. 

- Some argue building an artificial system with human-level performance doesn't require understanding consciousness. Others think creating conscious AI raises important ethical questions we need to address.

- Under the computational theory of mind, it's theoretically possible an artificial brain running the same computations as a human brain could be conscious. However, we're still a long way from having the technology or understanding to build such a system.

- Thought experiments about gradually replacing a person's neurons with artificial equivalents illustrate our lack of clarity on what physical substrate is required for consciousness. But they don't resolve the hard problem.

In summary, while we've made progress on some questions, fully explaining the emergence of consciousness from physical processes remains one of the biggest unanswered questions in science. More research is needed to advance our understanding.

 

- The computational theory of mind claims that the brain is like a computer, and the mind/consciousness arises from computations performed by the brain. 

- Some implications of this theory include that:
  - Scanning someone's brain and recording their "mental program" could allow recreating their consciousness by running the program elsewhere (e.g. in a book).
  - Backups of one's brain could be made as backups of their consciousness. 
  - All decisions would be fully predictable since they arise from computational processes. This implies there is no free will.

- It's debated whether other software/systems besides full brain simulations could give rise to consciousness just by executing a computer program. Things like thermostats or billiard balls follow programs too. 

- The theory raises philosophical questions about scenarios like killing the original copy if a mind is duplicated. It also implies many views of consciousness and self may be illusions.

- While some find the theory and implications acceptable, others see scenarios like conscious thermostats as too absurd. This calls into question the underlying assumption that the brain/mind is equivalent to a computer program.

So in summary, the computational theory enables interesting speculation but also controversial implications that challenge common notions of consciousness, identity and free will. This leads to open philosophical and scientific debates.

 

- The computational theory of mind argues that the human mind is equivalent to a computer - the brain functions by computing information just like a computer. 

- This view provides strong support for the idea that artificial general intelligence is possible, since if the mind is just a computer, then a sufficiently powerful artificial system could theoretically replicate human-level intelligence. 

- However, some argue that if the mind is not simply a computer, then it may not be possible to build artificial systems that can match human intelligence using just computational methods. 

- There is an ongoing debate about whether the human brain is fundamentally more intelligent than computers due to possible differences like the brain's ability to generate true randomness, represent information with greater precision than digital computers, inability to perfectly copy brain states, or capability to solve problems that are computationally unsolvable. 

- While these are potential differences between brains and current computers, it is unclear if any of them truly enable human-level intelligence or problem-solving abilities that could not in principle be replicated in an artificial system. The debate around this question of comparative intelligence remains ongoing.

 

- The problem of determining if a floor can be tiled with a given set of tile shapes is computationally unsolvable, meaning no program can give the correct answer for all possible tile shapes. Our minds seem able to solve these types of problems in a way that computers cannot. 

- Some argue this could be due to yet undiscovered physical processes in the brain. Roger Penrose believes new physics will be needed to understand these processes that give humans more intelligence than computers. 

- Current physics is incomplete. Quantum theory has issues accounting for observation and gravity. General relativity doesn't fully match observations at large scales. Our understanding will likely change fundamentally at some point. 

- These unknowns leave open the possibility that future physics could reveal brain processes allowing humans to solve computationally unsolvable problems that computers cannot. This could give humans more intelligence than any artificial system. But currently there is no proof this is the case.

 

- The author critiques overly optimistic views of AI from some researchers and commentators. When AI fails or makes mistakes, they often blame issues like lack of data rather than considering flaws in the machine learning approach. 

- Feedback on the author's book from some AI researchers showed confirmation bias. They downplayed examples of AI mistakes or suggested more data would solve all problems. 

- A survey example highlighted tasks AI has helped with but presented them as "problems solved" rather than partial progress, avoiding uncertainties. 

- The author believes machine learning alone may not be enough for human-level intelligence in complex domains. Major innovations may be needed. Progress is not guaranteed to happen quickly. 

- Autonomous vehicles and translation still have major limits and safety issues compared to claims of some in the field. Large models or data may not solve the core challenges. 

- The author is not afraid of violent robot risks but of over-optimism leading to unsafe AI deployment before capabilities are proven. 

- The author predicts continued cautious, supportive use of AI rather than as sole decision-makers in critical domains like healthcare or self-driving. An 'AI winter' of reduced enthusiasm may be beginning.

 

- Grant applications are becoming more sensitive to buzzwords like "machine learning" and "AI" and now require more detailed explanations of how those technologies will be applied. This slowdown in funding due to increased scrutiny could impact companies that have invested billions in AI. 

- The main concern is that some may overhype AI's capabilities and consider it infallible when it has clear limitations. Critical tasks may end up being performed by AI before it is ready, like fully autonomous buses in busy streets. AI makes surprisingly silly mistakes that could be devastating. 

- To become a machine learning practitioner, resources recommended include ComputingSchool.com courses, the book Neural Networks and Deep Learning, and An Introduction to Statistical Learning textbook. 

- On AI limitations, recommended blogs are Scott Aaronson's and Filip Piekniewski's which discuss topics like self-driving cars. The blog mybrainsthoughts.com analyzes models like GPT-3. 

- On consciousness, recommended books are The Conscious Mind on the hard problem, Shadows of the Mind which defends a controversial viewpoint, and Conversations on Consciousness with different thinkers' views.

 Here is a summary of the article "is smart until it’s dumb,” Knowable Magazine, 27 August:

- Artificial intelligence systems today demonstrate impressive performance on narrowly defined tasks, but often fail on problems requiring a more human-like common sense or flexibility. 

- AI tends to excel at tasks it was designed and trained for, but can struggle with open-ended problems, generalization to new situations, understanding ambiguous context or flexible reasoning. 

- Examples are given of AI assistants like Alexa and Siri that struggle with ambiguous questions or tasks outside a narrow scope, and self-driving cars that have trouble with unusual road conditions.

- The article discusses the limitations of today's machine learning techniques like deep learning which rely heavily on massive datasets for training instead of a deeper understanding. 

- Researchers are working on approaches like symbolic AI, probabilistic programming and conceptual representation to help AI systems demonstrate more flexible, human-like thinking. But fully achieving human-level AI remains a grand challenge.

In summary, the article explores why today's AI can seem impressively smart in limited domains but often fails when faced with open-ended, ambiguous or unfamiliar problems - a phenomenon of AI being "smart until it's dumb." Researchers are pursuing new techniques to help systems demonstrate more flexible, general intelligence.

 Here is a summary of the key points from the article:

- Superintelligent AI refers to an AI system that surpasses human intelligence across most or all domains. There is no consensus on when such a system may be developed. 

- An AI's abilities would depend on its goals and training. A superintelligent language model focused on conversational abilities may be helpful, harmless, and honest. One focused on other objectives could behave differently.

- Predicting a superintelligent AI's abilities is difficult as we don't fully understand human intelligence. It may outperform humans on most tasks due to greater processing power and efficiency. 

- It could solve complex scientific and medical problems, optimize resources and systems, replicate any human skill or expertise, design new technologies, and combine capabilities in unforeseen ways. 

- However, successfully developing human-level or superhuman AI is challenging. Current AI techniques like deep learning are narrow and don't achieve general problem-solving abilities. Accurate brain simulations or new paradigms may be needed.

- Ensuring superintelligent AI is beneficial to humanity is a major open challenge. Researchers debate whether alignment is possible and how to develop AI that shares human values and priorities. Strict oversight will likely be needed.

In summary, the article discusses predictions and unknowns around the potentials and challenges of developing superintelligent AI that surpasses human abilities in most or all domains. The priorities of safety, oversight and ensuring AI benefits humanity are emphasized.