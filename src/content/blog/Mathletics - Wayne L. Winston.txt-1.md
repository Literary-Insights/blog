---
title: Mathletics - Wayne L. Winston
slug: mathletics-wayne-l-winston
tags: 
  - book-summary
excerpt: ""
category: "self-help"
author: "matheus-puppe"
publishDate: "2024-04-21T00:00:00.000Z"

---

**"If you liked the book**, you can purchase it using the links in the description below. By buying through these links, **you contribute to the blog without paying any extra**, as we receive a small commission. **This helps us bring more quality content to you!"**


BOOK LINK:

[CLICK HERE](https://www.amazon.com/gp/search?ie=UTF8&tag=matheuspupp0a-20&linkCode=ur2&linkId=4410b525877ab397377c2b5e60711c1a&camp=1789&creative=9325&index=books&keywords=mathletics-wayne-l-winston)

**"If you liked the book**, you can purchase it using the links in the description below. By buying through these links, **you contribute to the blog without paying any extra**, as we receive a small commission. **This helps us bring more quality content to you!"**


BOOK LINK:

[CLICK HERE](https://www.amazon.com/gp/search?ie=UTF8&tag=matheuspupp0a-20&linkCode=ur2&linkId=4410b525877ab397377c2b5e60711c1a&camp=1789&creative=9325&index=books&keywords=mathletics-wayne-l-winston)

ABBREVIATIONS


The following abbreviations are used frequently in the book.

Advanced stats/metrics:

WAR - Wins Above Replacement - Baseball, Basketball

WPA - Win Probability Added - Baseball

RAPTOR - Robust Algorithm (using) Player Tracking (and) On/Off Ratings

PAR - Points Above Replacement

OBP - On-Base Percentage

OPS - On-Base Plus slug: ging Percentage

EqA - Equivalent Average

FIP - Fielding Independent Pitching

wRC+ - Weighted Runs Created Plus

SIERA - Skill-Interactive ERA

CRISP - Clustered Randomness Intelligently Smoothed Projections

VORP - Value Over Replacement Player





Equipment/technologies:

Statcast - Baseball’s ball/player/ball tracking system with radar and cameras

MLBAM - Major League Baseball Advanced Media - Parent org of Statcast

SportVU - The camera tracking tech used in NBA before Second Spectrum

PITCHf/x - Baseball ball tracking tech before Statcast 

NFL NextGen - NFL player tracking system





Gambling:

O/U - Over/Under, as in total points for a game

ATS - Against The Spread

SU - Straight Up 





Organizations: 

MLB - Major League Baseball

MiLB - Minor League Baseball

NBA - National Basketball Association 

WNBA - Women’s National Basketball Association

NFL - National Football League

NHL - National Hockey League

MLS - Major League Soccer

NCAA - National Collegiate Athletic Association





PART I

BASEBALL






CHAPTER 1

BASEBALL’S PYTHAGOREAN THEOREM

In the late 1970s baseball analyst Bill James introduced what has become known as baseball’s Pythagorean theorem. A close approximation of it says that the percentage of games a baseball team should win is:

Win% = Runs Scored2 / (Runs Scored2 + Runs Allowed2).





For example, if the Red Sox score 4 runs per game and allow 3 runs per game, then:

Win% = 42 /(42 + 32) = 16/25 = 64%. 

In words, the team that scores 4 runs per game and allows 3 runs per game should win about 64% of its games.

How did James come up with his formula? It was an empirical observation looking at baseball history from 1900 to 1977 when he proposed it. He found that the relationship between runs and wins followed the above formula quite closely. This formula came to be known as the Pythagorean expectation because of its similarity to the Pythagorean theorem from geometry (a2 + b2 = c2).





Let’s Try It Out on Some Real Teams

Consider the following MLB team statistics from the 2018 season:





Team         Runs Scored     Runs Allowed

Red Sox         876                 712      

Yankees         851                 670

Braves          803                 694





Plugging into the formula:

Red Sox Win% = 8762/(8762 + 7122) = .599 ≈ 60% 

Yankees Win% = 8512/(8512 + 6702) = .620 ≈ 62%

Braves Win% = 8032/(8032 + 6942) = .566 ≈ 57%





How Does It Hold Up?

Actual 2018 records:

Red Sox:      108-54       = 66.7% 
Yankees:     100-62       = 61.7%
Braves:         90-72       = 55.6%





The Pythagorean theorem predictions were quite close! The Red Sox and Yankees were a little better than expected, while the Braves were right at expectation. Of course, for individual teams there will be some random variation between predicted and actual.





Relationship Between Runs Scored, Runs Allowed and Win Percentage

In general, across a large sample of teams:

Win% ≈ RS2/(RS2 + RA2)

Where 

Win% is the percentage of games won
RS is average runs scored per game  
RA is average runs allowed per game





Some Observations:

- Win% goes up if you score more runs while allowing the same number.

- Win% goes down if you allow more runs while scoring the same.

- The greatest improvement comes from reducing runs allowed rather than increasing runs scored. 

- To increase win% from 50% to 60%:
   - Can increase runs scored by 20% while holding runs allowed constant. 
   - Can decrease runs allowed by 20% while holding runs scored constant.





Why Does It Work?

While it seems odd at first glance, the Pythagorean formula works well because of two key facts about baseball:

1. In any given game, the typical number of runs scored by each team tends to follow a normal distribution. 
  
2. Teams generally do not alter their quality of play based on score differential within a game. A team down 10-2 will play similarly to when tied 2-2.





The Central Limit Theorem of statistics says that the sum of independent random variables follows an approximate normal distribution. In baseball, runs scored in any game represent the sum of events like hits, walks, and errors that occur randomly. So run totals in games follow normal distributions centered around the mean runs scored and allowed for that team.





When two normal distributions are compared, the one with the higher mean has a greater probability of taking on a higher value. So in a single game, the team that tends to score more runs has a better chance of outscoring the opponent. Over many games, this translates directly into a higher chance of team wins. And going through the math, win% ends up being proportional to the ratio of run means squared - the Pythagorean relationship!





Of course baseball outcomes involve a lot more than just runs scored and allowed by the two teams. The Pythagorean formula is an abstraction that captures the essence of the game at an aggregate level. Real baseball has elements like player streaks, injuries, trading deadline moves, and variation in strength of schedule. The Pythagorean formula will not predict every team's wins exactly, but provides a powerful baseline estimate of quality.





Here are some key takeaways:

- The Pythagorean theorem gives a useful baseline estimate of a team's true quality based only on runs.

- It works because run totals between teams can be modeled as normally distributed random variables. 

- Reducing runs allowed is more impactful than increasing runs scored by an equivalent amount.

- Actual wins for a team may deviate from Pythagorean expectation due to randomness and other real world factors.





WW: One nice property of the Pythagorean formula is that it can be derived from a binary logistic regression model. We model the probability that team A beats team B as:





log(PA /(1-PA)) = b0 + b1(RSA - RSB)





We can show that the maximum likelihood estimators (MLEs) of the parameters imply:

PA = RSA2/(RSA2 + RSB2)





So the Pythagorean formula is just a disguised logistic regression! KP will talk more about this kind of win probability model in the sports gambling chapters.





 Here is a summary of the key points from the excerpt:

- Bill James studied MLB standings and found a formula to predict a team's winning percentage based on runs scored and runs allowed. 

- The formula is known as Baseball's Pythagorean Theorem due to its similarity to the geometric theorem about right triangles. 

- The formula can be rewritten as a team's scoring ratio (runs scored^2 / (runs scored^2 + runs allowed^2)).

- This formula has appealing properties - predicted win percentage is bounded between 0 and 1, and increasing runs scored or decreasing runs allowed increases predicted win percentage. 

- The excerpt shows this formula predicts winning percentage quite accurately - the mean absolute deviation between predicted and actual win percentage is only around 1.5% for the 2005-2016 MLB seasons analyzed.

- The Pythagorean Theorem illustrates a key principle - that runs scored and allowed are strongly predictive of a baseball team's success. This has been a foundational insight behind sabermetrics analysis.

 There are a few ways to compare the offensive performance of Mike Trout and Kris Bryant in 2016:

- Runs Created: A statistic developed by Bill James that estimates the number of runs a player contributes through their offensive performance. In 2016, Trout had 129 runs created while Bryant had 121 runs created, so by this metric Trout had the better offensive season. 

- OPS (On-base Plus slug: ging): Combines a player's on-base percentage and slug: ging percentage into one number. In 2016, Trout had an OPS of .991 while Bryant had an OPS of .988, so again Trout edges out Bryant. 

- OPS+: Adjusts a player's OPS for ballpark factors and the league average. An OPS+ of 100 is league average. In 2016, Trout had an OPS+ of 173 while Bryant had an OPS+ of 146, indicating Trout created runs at a rate 73% above league average compared to Bryant at 46% above league average.

- WAR (Wins Above Replacement): An all-encompassing stat that estimates the number of additional wins a player contributes compared to a hypothetical replacement level player. In 2016, Trout had 10.6 WAR while Bryant had 7.7 WAR, indicating Trout contributed more overall value. 

Based on these major offensive metrics, Mike Trout appears to have had the better offensive season in 2016 compared to Kris Bryant, creating more runs and providing greater overall value from the plate. The advanced metrics indicate Trout was significantly more productive on a rate basis compared to the league.

 

- Bill James developed a formula called Runs Created to estimate the number of runs "created" by a hitter in a season based on their hits, walks, extra-base hits, etc. This formula does a good job of predicting a team's total runs scored from their team batting stats. 

- However, Runs Created has limitations when comparing individual hitters, since it is based on team averages. A metric like Runs Created per Game helps adjust for differences in plate appearances. 

- An alternative approach is using linear weights, where you assign weights to different batting events like singles, doubles, walks etc. based on how many runs they typically contribute. The weights can be estimated using regression analysis on team batting data.

- This linear weights approach allows you to evaluate hitters by looking at their overall run contribution based on their individual stats, rather than relying on team averages. 

- Concepts like Runs Created and linear weights form the basis for more advanced sabermetric stats that better capture a hitter's value, like wOBA and wRC+ which we'll cover later. The key is finding metrics that accurately reflect a hitter's run-scoring contribution.

 Here are the key points from the summary:

- The linear weights regression model predicts runs scored based on the number of singles, doubles, triples, home runs, walks + HBPs, stolen bases, and caught stealings for a team's season. 

- The model has an R-squared of 0.90, meaning the independent variables explain ~90% of the variation in runs scored. 

- Each type of hitting event is assigned a weight indicating how many runs it typically creates. For example, a single creates 0.46 runs, a home run creates 1.43 runs. 

- Linear weights provides more accurate run predictions than the simpler runs created formula.

- On-base percentage (OBP) and slug: ging percentage (SLG) are also highly predictive of runs scored, explaining 88.5% of variation. OBP appears slightly more important than SLG.

- Runs created above average estimates how many more runs an average team would score by adding a specific player, based on their OBP and SLG relative to league average.

In summary, linear weights and stats like OBP and SLG allow us to quantify a player's offensive value and estimate their run contribution. The regression models provide a data-driven way to assign proper weights to each type of event.

 Here is a summary of how we can use Monte Carlo simulation to estimate the number of runs scored by a team of nine Mike Trout 2016s:

The key steps are:

1. Define the possible batting events for Trout (singles, doubles, triples, HRs, walks, etc.) along with their probabilities based on Trout's 2016 stats. 

2. Simulate an inning by drawing random numbers and assigning batting events based on the probabilities. Track baserunners and runs scored.

3. Repeat the simulation of an inning many times (e.g. 10,000 iterations) to estimate the average runs scored per inning. 

4. Multiply the estimated runs per inning by 9 innings to get an estimate of Trout's team runs per game.

5. Repeat steps 2-4 multiple times (e.g. 100 simulations) and average the results to get a robust final estimate.

By simulated innings with random batting events rather than a formula, this Monte Carlo approach can better handle sequencing of events like baserunners scoring. The law of large numbers says that with enough iterations the average runs per inning will converge to the true expected value. This provides a flexible way to estimate runs scored without relying on assumptions like Runs Created or Linear Weights.

 

- A long fly ball advances any runners (if there are fewer than two outs). A runner on second advances to third, and a runner on third scores. 

- A medium fly ball (if there are fewer than two outs) scores a runner from third base.

- A short fly ball, line drive, or infield fly does not advance any runners.

- The probabilities of different events (singles, doubles, outs, etc.) for a batter are estimated based on their stats. 

- These probabilities are used in a Monte Carlo simulation to estimate the number of runs created by a team of 9 identical batters.

- This gives a better estimate of runs produced than traditional methods like Runs Created.

- For Trout 2016, the simulation estimates 9.38 runs created per game.

- Comparing the simulated runs for the Angels with and without Trout shows he added about 10.9 wins in 2016.

- Replacing 11% of an average team's PAs with Trout's stats shows he would add about 8.1 wins.

 

- Earned run average (ERA) is a commonly used statistic to evaluate pitchers, but it has several limitations such as dependence on fielding and bullpen support. 

- Using past ERA to predict future ERA does not work well. The correlation between one year's ERA and the next is only around 0.3. 

- The R-squared value for predicting next year's ERA from this year's ERA is only about 0.1, meaning past ERA explains just 10% of the variance in future ERA.

- Correlation measures the strength of linear relationships between two variables on a scale from -1 to 1. A correlation near 0 indicates a weak linear relationship. The correlation between one year's ERA and the next is around 0.3, indicating a weak linear relationship.

- R-squared measures the proportion of variance in one variable that is explained by the other variable in a simple linear regression model. The low R-squared for ERA predictions means most of the variance is unexplained by past ERA.

- This evidence shows that past ERA alone does a poor job of predicting future performance for MLB pitchers. Other factors clearly also influence future ERA.

 

- Figures 5.2 and 5.3 show examples of strong positive and negative linear relationships between two variables, as indicated by correlations near +1 and -1. 

- Figure 5.4 shows an example of a weak linear relationship between two variables.

- Mean absolute deviation (MAD) is a common measure of forecast accuracy. For predicting pitcher ERA, the MAD was 0.93 runs. 

- Voros McCracken explained that a pitcher's effectiveness depends on: strikeouts, walks, hit batters, home runs allowed (DIPS), and batting average on balls in play (BABIP). DIPS are more predictable than BABIP.

- The DICE formula uses DIPS to predict future ERA better than past ERA alone. DICE explains 13.5% of next year's ERA variation versus 10.5% for past ERA. 

- Statcast metrics like spin rate, extension, perceived velocity, pitch movement, putaway percentage, and XERA may help predict future pitching performance. 

- Statcast batting metrics like launch angle, exit velocity, barrel rate, and expected batting average can provide insights into hitter ability.

 

- Baseball managers make many important strategic decisions during a game, such as whether to bunt, steal a base, or play the infield in. 

- The key is realizing there are 24 possible states during an inning based on outs and base runners. States are denoted by 4 numbers (outs, runner on first, runner on second, runner on third).

- Using data on average runs scored in each state, we can quantify which states are better or worse. This helps evaluate decisions like bunting.

- To evaluate decisions, we need concepts like experiments, random variables, and expected value from probability theory. 

- An experiment is a situation with uncertain outcomes. Random variables represent outcomes. 

- Expected value is the average value we expect a random variable to take based on probabilities. We use expected runs or points to evaluate baseball, basketball, and football decisions.

- For example, we can compare expected runs if we bunt versus don't bunt to see which gives a higher expected run value. The decision that leads to more expected runs is better.

 Here are the key points from the passage:

- When deciding whether to kick a field goal or go for a first down in football, you should calculate the expected number of points for each option and choose the one with the higher expectation. 

- You can use the law of conditional expectation to calculate expected values that depend on probabilities of different outcomes. 

- Bunting decreases the expected number of runs scored in an inning unless a very weak hitter is up. 

- You should attempt a stolen base if the probability of success times the expected runs if successful, plus the probability of failure times the expected runs if failure, exceeds the current expected runs.

- Runners are often too conservative in trying to advance an extra base on a single or double. They should try to advance if their probability of making it exceeds a threshold that depends on the base-out situation.

- Runners tagging up from third should try to score if their probability of success exceeds 33%, which is much less conservative than most coaches.

So in many baseball situations, proper use of expected value calculations shows that teams should be more aggressive than they typically are.

 Here is a summary of the key points about evaluating fielders:

- Traditional fielding percentage is flawed because it does not account for a fielder's range. A fielder can have a high fielding percentage by only fielding easy balls.

- Bill James created the Range Factor metric which measures the number of putouts and assists per game compared to the average at that position. This better captures a fielder's range. 

- There are still some limitations with Range Factor related to things like strikeout rates of pitchers, handedness of pitchers/batters, and park dimensions. 

- John Dewan made major improvements in evaluating fielders by having analysts grade the difficulty of each batted ball and comparing fielders' success rates on those balls to the league average rates. This results in a plus/minus system that quantifies hits saved or allowed compared to average.

- These fielding runs saved/allowed numbers can be converted to run values and wins above average using run expectancy matrices. This finally enabled proper quantification of the importance of fielding.

- Fielding analysis has shown that great fielders like Ozzie Smith provide far more value than reflected by traditional fielding percentage. In contrast, Derek Jeter was overrated as a fielder based on superficial traditional metrics.

 

- In the bottom of the 9th inning, the Giants were down 4-2 against the Dodgers with runners on 2nd and 3rd and 1 out. Using historical win expectancy data, the Giants had about a 27% chance of winning the game in this situation.

- Bobby Thomson came to bat and hit a famous walk-off home run, giving the Giants a 100% chance of winning. 

- Thomson's home run increased the Giants' win probability from 27% to 100%, for a gain of 73 percentage points. This gain in win probability is a way to quantify Thomson's contribution to the Giants' win.

- More generally, players can be evaluated by how much they increase or decrease their team's chances of winning over the course of a season based on the situations of each plate appearance/batter faced. This metric is called Win Probability Added (WPA).

 Here is a summary of the key points about ter-pitcher interaction and Wins Above Replacement (WAR) in baseball analytics:

- Win probability added (WPA) measures the change in a team's probability of winning after each plate appearance. The batter and pitcher split credit for changes in win probability.

- WPA can be adjusted to account for a player's fielding (using OAA) and baserunning (UBR, wSB, wGDP). 

- WAR summarizes a player's overall contribution in one number. It starts with the player's weighted on-base average (wOBA). 

- A batter's WAR includes adjustments for park factors, baserunning, fielding, scarcity of position, and just showing up (replacement level).

- Relief pitchers often have high WPA because they pitch in high-leverage situations, even though they pitch fewer innings. Mariano Rivera, for example, had many seasons with elite WPA despite pitching fewer than 100 innings.

- Without win expectancy data, win probabilities can be estimated using simulation models or Markov chain analysis. This allows for estimating WPA in rare game situations.

- The key steps for computing a batter's WAR are: 1) Compute weighted runs above average from wOBA, 2) Add baserunning runs, 3) Add fielding runs, 4) Adjust for position scarcity, and 5) Credit for being better than a replacement player.

 You raise an important question about whether hot streaks in sports are real or just perceived randomness. There are a few key points to consider:

- Randomness can create the illusion of streakiness. Even in a completely random sequence, there will be clusters where successes or failures group together. Our brains tend to see patterns and meaning in randomness.

- However, some research has found evidence for genuine streakiness in sports performance. Players' confidence, fatigue, injuries, and other factors can cause streaks and slumps. 

- But the effect seems small. One study found MLB hitters had a 51% chance of getting a hit after a hit streak versus 49% after a slump. The difference is subtle.

- There are challenges in studying streakiness. Performance has many elements of randomness so teasing out true streaks is difficult. And data can be biased, like a shooter only attempting shots when "hot."

- Overall the evidence suggests some genuine streakiness exists in sports, but its magnitude is small. Apparent hot streaks are often just random variation that our pattern-seeking brains exaggerate. Interesting area for more research!

In summary, streaks likely exist but are subtler than announcers make them seem. The truth lies somewhere between "he's on fire!" and "it's complete randomness." Careful analysis is needed to distinguish signal from noise.

 

- Past performance (win/loss streaks) should not affect a team's chances of winning the next game. A simulated random sequence of wins and losses showed streaks can occur by chance.

- Most people believe streaks indicate "momentum" or a "hot hand", but these are illusions. Randomly generated sequences also show streaks. 

- The Wald-Wolfowitz runs test (WWRT) is used to test for streakiness in sequences of wins/losses. Few runs indicates streakiness, many runs indicates randomness.

- WWRT calculates the expected number of runs and standard deviation for a random sequence. The z-score of the actual number of runs indicates if the sequence is significantly different from random. 

- Hypothesis testing sets a null hypothesis of randomness. If the z-score exceeds 2, the null is rejected at the 5% significance level, indicating the sequence is not random.

- WWRT has been applied to sports sequences and generally finds no evidence for "hot hands". Streaks can occur by chance in random sequences.

 Here are the key points about the hot hand in basketball shooting:

- Gilovich, Vallone, and Tversky (GVT) analyzed shooting data from the 1980-81 Philadelphia 76ers and found little evidence for streak shooting or the "hot hand." Only one player, Daryl Dawkins, showed significant streakiness.

- GVT's analysis has been challenged recently by new research. Miller and Sanjurjo (2018) argue that statistical biases makes tests like GVT's underestimate the hot hand. 

- Bocskocsky, Ezekowitz, and Stein found no evidence for the hot hand when predicting shooting percentage from recent shots. However, they did find evidence when accounting for shot difficulty - success on recent shots predicts better shooting on the next shot compared to its difficulty.

- Miller and Sanjurjo show that for an independent 50% shooter, the chance of making a shot after 3 hits in a row is just 46%, not 50%. So 50% shooting after 3 hits would indicate a hot hand.

- Analysis of actual NBA data provides evidence for the hot hand. Several players showed higher shooting percentages after makes than expected by chance. 

- Overall, the debate continues, but recent analysis leans toward the hot hand being real, especially when accounting for factors like shot difficulty. The evidence suggests some streakiness in shooting does exist beyond what pure chance would predict.

 Here are the key points from the text:

- Tony Perez played for the Cincinnati Reds "Big Red Machine" teams in the 1960s and 1970s. He had a career batting average of .279 and hit 380 home runs. 

- Despite average stats, Perez was elected to the Baseball Hall of Fame in 2000, while Jim Rice with better stats had to wait until his final year of eligibility in 2009. 

- One reason was Perez's reputation as a great "clutch hitter" according to his manager Sparky Anderson. 

- To evaluate clutch hitting objectively, Adler looked at OBP in high leverage situations (9th inning or later, team trailing by 1-3 runs) compared to overall season OBP. 

- If OBP was significantly higher in clutch situations, it would indicate clutch hitting ability. 

- Adler did this analysis for Perez and other players to determine if clutch hitting actually existed or was just random variation.

In summary, the text evaluates Tony Perez's clutch hitting reputation by comparing his performance in defined high leverage situations against his overall season performance. This allows an objective assessment of whether he truly demonstrated superior clutch hitting ability.

 Here is a summary of the key points regarding pitch count, pitcher effectiveness, and PITCHf/x data:

- Pedro Martinez became much less effective after throwing over 100 pitches. This likely contributed to Grady Little's decision to leave him in during the 2003 ALCS, which cost the Red Sox the game and Little his job. 

- Analysis by Tango, Lichtman, and Dolphin found pitchers are less effective the 3rd time through the batting order, likely due to fatigue. Teams should consider this in deciding when to pull a starter.

- High pitch counts are linked to increased risk of arm injuries. Woolner and Jazayerli created a metric called pitcher abuse points (PAP) to quantify this. PAP rises exponentially with pitch count above 100.

- PITCHf/x data allows very detailed analysis of pitch movement, velocity, and location. This can help evaluate pitchers' effectiveness and development over time.

In summary, analysis of pitch counts, batter performances against pitchers over time, and PITCHf/x data can provide valuable insights to help teams manage pitchers and maximize their performance and health.

 Here is a summary of the key points about calculating the probability of rare events like Joe DiMaggio's 56-game hitting streak:

- Rare events can be modeled using the Poisson distribution. The Poisson gives the probability of a certain number of rare events occurring over a given timeframe. 

- The Poisson distribution is applicable when the population size is large and the probability of the event on any one trial is small.

- The Law of Rare Events says that as the population size gets very large and the event probability gets very small, a binomial distribution can be approximated by a Poisson distribution.

- To calculate the probability of DiMaggio's streak, we can model hits/game as binomial trials. With a large season of games and a small hit probability, this can be approximated as a Poisson distribution.

- Using the Poisson distribution and reasonable assumptions about hit probability, we can show that the likelihood of a 56-game hitting streak was extremely small.

- This probability is even smaller than the probability of consecutive no-hitters, suggesting DiMaggio's record may be more impressive.

- The Poisson distribution can also be used to estimate the rarity of perfect games and other uncommon events in baseball.

 Here are summaries of the key points from the text:

Dependent Events

- Events are dependent if the occurrence of one event affects the probability of the other event occurring. 

- To calculate the probability of dependent events, you cannot just multiply the individual probabilities. You must consider the conditional probabilities.

Probability of Perfect Games

- Assumed each batter had 0.32 chance of reaching base. With 27 batters, predicted too many perfect games (11.9 expected vs 21 actual). 

- More realistic to assume batters have varying chances of reaching base. Used 0.27 and 0.37 chances. New prediction of 20.6 perfect games is more consistent.

- Independence assumption may be wrong - batter reaching base probabilities are not completely independent.

Probability of 56-Game Hitting Streak

- Assumed 3-4 at bats per game. Chance of hit streak very low for average hitter (.000000019). 

- But with many batters and many chances for streaks, expected 0.024 streaks. Actual 1 streak not that improbable.

- A 0.400 hitter would need 120 seasons for 50% chance of 56-game streak.

Probability of Consecutive No-Hitters 

- Assumed 0.00064 chance of no-hitter per start. 

- For 35 starts per season, chance of consecutive no-hitters is 0.0000138.

- Since 1900, expected 0.145 consecutive no-hitters. Actual 1 not that improbable.

- Nolan Ryan would need 384 seasons for 50% chance of consecutive no-hitters.

 

Consecutive no-hitters and a 56-game hitting streak are both highly unlikely events in baseball, but not impossible. The analysis suggests that a 56-game hitting streak is even less likely to occur by chance than consecutive no-hitters. This is because the probability of a batter getting a hit in a given at-bat is generally around 70%, making a 56-game streak of successes very improbable. Meanwhile, no-hitters require everything to go right for the pitcher and defense for just one game. So while highly unlikely, no-hitters are more likely to occur by chance than an exceptionally long hitting streak. Overall, both events push the boundaries of baseball probabilities, but are within the realm of possibility given the number of games played. The rarity highlights the exceptional skill and good fortune required to achieve these rare baseball feats.

 Here is a summary of the key points about comparing Brady and Rodgers:

- The traditional NFL quarterback rating system is very complex and arbitrary, giving equal weight to stats like completion percentage and yards per attempt.

- ESPN's newer "Total QBR" attempts to improve on the traditional rating by using regression analysis to determine which stats best predict team wins. It finds passing yards per attempt and interception rate are most important. 

- Total QBR accounts for "clutch" and "garbage time" factors, and plans to add opponent defensive strength. However, it is still quite complex.

- A simpler rating could just look at key stats like passing yards per attempt and interception percentage. Based on these, Brady and Rodgers have been among the NFL's best QBs over the past decade. 

- No rating system can fully separate a QB's individual contribution from their team context (receivers, line, etc.). Super Bowls are a team accomplishment.

- There is room for debate on who is "better" between Brady and Rodgers. But based on core passing stats, both have been elite modern QBs. The comparison is very close.

 

- Football states (yard line, down, yards to go for first down) can be used to determine a team's probability of winning, similar to baseball states. 

- Knowing the win probability for each state allows better evaluation of players, strategies, and decisions.

- There are millions of possible football states compared to thousands in baseball, so estimating win probabilities is more complex.

- Researchers have estimated win probabilities for first down and 10 yards to go situations on various yard lines. Values differ somewhat between models. 

- Romer's model implies teams should go for 4th down more aggressively than NFL coaches typically do.

- There is not enough NFL play data to estimate win probabilities for all possible states, so models rely on simplifications like only first down states, or use simulation games. 

- Recent work by Brian Burke uses a different method to estimate state values based on which team is most likely to score next.

- Overall, football state values allow analysis of strategy and player evaluation, but estimating the values is complex due to the huge number of possibilities.

 Here are the key points in summarizing the decision of whether to kick a field goal or go for it on 4th down:

- To evaluate the options, we calculate the expected value (points) of going for it versus kicking a field goal. 

- To calculate the expected value of going for it, we use the probability p of getting a first down, the expected points V if we get a first down, and the expected points -V if we fail to get a first down.

- To evaluate a field goal, we use data to estimate the probability of success based on distance. We also consider the expected points if the field goal is made versus missed.

- In the example, the expected value of going for it exceeded the expected value of kicking a 47-yard field goal. 

- By comparing expected values, we can make optimal 4th down decisions using concepts like state values and expected points. The same approach can be applied to other in-game decisions.

 Here is a summary of the key points from the passage:

- Football offense and defense can be modeled as a two-person zero-sum game. The offense wants to maximize yards gained, the defense wants to minimize yards allowed. 

- The optimal mixed strategy for the offense is to choose run and pass with equal probability (50% each). This ensures an expected gain of at least 5/2 yards.

- The optimal strategy for the defense is to choose run defense with probability 2/3 and pass defense with probability 1/3. This ensures the offense's expected gain is minimized to 2 yards.

- The reason teams don't always pass even though it is better than running is because the defense would anticipate passing every time. Mixing run and pass plays makes the offense less predictable. 

- Game theory provides a rationale for why teams mix up play calling rather than always choosing the play with the highest expected yardage. Unpredictability is valuable in football strategy.

 You make some good points about when to go for one vs. two point conversions in football. Here are a few key factors to consider:

- Expected value: As you mentioned, the average expected points for a two-point conversion is slightly higher than for an extra point (about 1 point vs. 0.94 points). So purely based on expected value, two points is slightly better.

- Win probability: However, as you noted, maximizing expected points does not always maximize win probability. Situational factors like the score, time remaining, and your team's two-point conversion success rate matter. Generally, if you need two scores to tie or win, go for two to maximize your chances. 

- Success rate: The roughly 50% two-point conversion rate holds league-wide, but your team's success rate may be better or worse. Knowing your team's actual conversion rates should inform the decision.

- Momentum: Some coaches consider momentum and sending a message with a successful two-point try, even early in a game. Though this is hard to quantify.

- Player personnel: Personnel for each play matters too. Going for two when your best red zone receivers are injured could lower your chances. 

So in summary, expected value favors going for two, but situational factors and win probability analysis should drive the decision in key moments late in a close game. Coaches have to weigh all these factors in the limited time they have to make the call.

 

- The "chart" that tells coaches whether to go for 1 or 2 points originated in the 1970s with UCLA assistant Dick Vermeil. 

- Statistical analysis of 2009-2018 NFL data shows going for 2 points has a small but statistically significant 0.07 point advantage over kicking the extra point. 

- However, with only 2-3 touchdown opportunities per game, there is high risk of missing multiple 2-point tries, so coaches tend to play it safe and kick the extra point.

- Using dynamic programming to model different game scenarios shows the optimal strategy depends on score difference and time left. Tables provide the optimal strategy. 

- Intuitively, being down 1 late in the game means going for 2 makes sense to avoid losing on a subsequent touchdown. But counterintuitively, being down 14 late, the model says kicking extra points gives a better chance of coming back.

- The model can be adjusted for team strengths. Individual team attributes may alter the basic league-wide conclusions.

- If teams went for 2 points much more often, defensive adjustments would likely lower the success rate.

 

- In college football overtime, the team that wins the coin toss can choose to start on offense or defense. 

- Analysis of overtime games through 2006 shows that the team going second wins 54.9% of the time.

- This suggests coaches should elect to go on defense first if they win the coin toss. 

- The rationale is that the team going second has more flexibility - they know what they need to do to win or keep the game going based on what the first team does.

- A model is presented to try to capture this flexibility:

- EXTRAFG - the fraction of no-score possessions turned into field goals when going second

- PRESSURETD - the increased chance of a TD when needing one to match the first team's TD

- Using estimates for scoring chances, the model shows the flexibility of going second makes the win chance 54.9%, matching the historical data.

- The key takeaway is that the flexibility provided by going second in college football overtime makes it better to start on defense if you win the coin toss.

 

- Under the old sudden death rules, the team that received the kickoff had a major advantage, winning about 60% of overtime games. 

- A simple probability model shows it is very difficult to make sudden death fair if it begins with a kickoff, since the receiving team has the first chance to score. 

- The model predicts the receiving team will win 60% of the time, consistent with NFL data, if each team has a 32% chance of scoring on a possession.

- Potential fair solutions include having teams bid on yard line to start OT possession, or letting coin toss winner pick yard line and opponent choose to receive or kick.

- Since 2012, NFL OT rules require receiving team to score TD to win on first possession. This has removed the edge the receiving team had.

- Now if receiving team kicks a FG, opponent gets a possession to tie or win. This format is more equitable.

- The new rules have succeeded in making overtime much fairer by eliminating the receiving team's big edge in sudden death format.

 

- Between 2012-2017, there were 93 NFL regular season overtime games. The team that received the kickoff won 50.5% of the time, showing no significant advantage. 

- A logistic regression model was built to estimate the probability of the kickoff receiving team winning. The intercept-only model showed no significant advantage to receiving the kickoff. 

- A model with pre-game point spread as a predictor showed point spread as significant but receiving kickoff as still not significant. This indicates pre-game team strength is more predictive of overtime winner than coin flip.

- Receiving team's overtime win probability ranges from 52% (1-point pre-game favorite) to 64% (5-point pre-game favorite) based on pre-game point spread. Much closer to 50-50 than pre-game win probabilities. 

- The NFL's new overtime rules seem to have achieved the goal of making overtime more equitable. Coin flip results do not seem to strongly advantage either team.

- A proposed alternative overtime format is described, involving teams secretly bidding yard line and time combinations to determine starting field position and time for one final drive. Adds strategic element while removing coin flip impact.

 

- Thaler and Massey (TM) analyzed NFL draft pick trades to estimate the relative value of draft picks. They found that later draft picks contributed more surplus value to teams than earlier picks, suggesting inefficiency in the draft. 

- However, TM categorized players arbitrarily rather than using a continuous performance metric. Using Approximate Value (AV) per game as a metric, the draft value curve is steeper - pick 1 provides 26% more value per game than the last pick, despite costing 70% more. 

- The choice of performance metric impacts the shape of draft value curves. Metrics based on upside and superstar potential lead to steeper curves than average value metrics like AV.

- Mock drafts only account for about 80% of variation in actual draft order, suggesting NFL pundits are not much better than GMs at drafting. 

- The winner's curse may contribute to inefficiency - the team drafting highest 'overpays' relative to actual player value.

- The NFL collects player tracking data through RFID tags, providing insights into movements, speeds, and rotations. This data started becoming available to teams around 2016.

 

- The NFL player tracking data provides insights into quarterback release time and how it relates to pass distance, sacks, and interceptions. 

- Faster release times correlate with shorter pass distances, while longer release times allow plays to develop downfield leading to more air yards.

- Release time is negatively correlated with sack probability - the faster the release, the lower the chance of a sack. Other factors like number of pass rushers also impact sack rate. 

- There is a correlation between longer release times and higher interception probability, but this appears to be driven by the greater air yards on such passes rather than release time itself. When accounting for air yards, release time is no longer significantly correlated with interceptions.

- Overall, the tracking data allows for quantitative analysis of release time and other metrics to gain new insights into quarterback and team performance beyond traditional stats. There is opportunity to build predictive models and derive new metrics leveraging this spatial and temporal information.

 Here are the key points from the summary:

- The Sobel test examines the hypothesis H0: α ⋅ β = 0 vs H1: α ⋅ β ≠ 0 to test for mediation. Rejection of H0 implies strong mediation via the variable M.

- Player tracking data allows evaluation of offensive lines using concepts like convex hulls. The area of the offensive line's convex hull when the pass is released is positively correlated with pass completion probability. 

- Tracking data can be used to build completion probability models and estimate completion percentage above expectation (CPAE) for QBs, adjusting for factors like target distance. CPAE provides context for raw completion percentages. 

- Pass locations alone provide a good estimate of CPAE. There is moderate correlation in a QB's CPAE across seasons.

In summary, tracking data enables new ways to evaluate components like offensive lines and quarterbacks while accounting for context like target distance. Metrics like CPAE derived from tracking data can provide more meaningful quarterback evaluation.

 Here is a summary of the key points about basketball statistics from the passage:

- The "four factors" that correlate with winning in basketball are: effective field goal percentage (scoring), rebounding percentage (crashing), turnover percentage (protecting), and free throw rate (attacking). These capture offense and defense. 

- Effective field goal percentage accounts for the extra value of 3-pointers compared to 2-point field goals. 

- Rebounding percentage captures the percentage of available offensive and defensive rebounds a team gets.

- Turnover percentage is turnovers per 100 plays. 

- Free throw rate is free throw attempts per field goal attempt.  

- The four factors are largely uncorrelated with each other. 

- Teams can find success through different combinations of the four factors. For example, the 2016 Cavaliers were great shooters but below average at forcing turnovers. 

- The four factors framework allows quickly identifying team strengths and weaknesses.

 Here are a few thoughts on evaluating and improving linear weights models for rating NBA players:

- Examining the coefficients in the models can reveal flaws, as you've done. Unreasonable coefficients for shooting percentages, turnovers, etc. indicate a need to tweak the model.

- Testing the models on subsets of data (e.g. guards vs big men) can reveal if they over/underrate certain player types. Adjustments may be needed.

- Incorporating more advanced box score stats like shot location data could improve accuracy. Weights for mid-range vs 3pt shots should differ. 

- Looking at the errors in predicting a team's wins from the sum of its players' ratings can help refine the models. Systematically over/underrating certain teams suggests room for improvement.

- Adjusting weights over time as the nature of the game changes can keep models current. The value of 3pt shooting has increased, for example.

- Considering interaction effects between stats could improve models. Eg. Boosting value of assists for good 3pt shooters.

- Using regression with regularization techniques like ridge/lasso rather than simple linear models may produce better coefficients.

- Supplementing box score data with plus/minus stats, tracking data, etc. can potentially improve predictive accuracy.

So in summary, scrutinizing coefficients, testing on subsets, adding new inputs, adjusting over time, incorporating interactions, using more advanced modeling techniques, and supplementing with additional data are all ways the linear models could likely be refined. But the general framework you describe seems sound.

 Unfortunately I do not have enough context to summarize the total number of wins for a specific team (eam). The passage discusses adjusted +/- statistics in basketball and provides some examples, but does not mention any specific team's total wins. Please provide more context about which team's wins you would like me to summarize.

 Here are the key points about adjusted +/- and LeBron James, Devin Booker, and Kevin Martin:

- Adjusted +/- ratings account for both offensive and defensive contribution, unlike metrics like PER that focus mainly on offense. 

- LeBron James had a huge positive impact for the Cavs in 2016-17, improving their performance by 15+ points per game when he was on the court. 

- Devin Booker was rated below average by PER in 2016-17 but had a great adjusted +/-, showing his overall positive impact. 

- Kevin Martin had good traditional stats but a poor adjusted +/-, indicating he did not help his team win as much as his stats suggested. 

- Adjusted +/- provides a more holistic measure of player impact by accounting for lineups and opponents, not just box score stats. It highlights players like LeBron and Booker who make winning plays beyond just scoring.

In summary, adjusted +/- better captures total player value by incorporating offensive and defensive impact, lineups, and opposing players rather than just individual box score stats. It shows players like LeBron and Booker are more valuable than some other metrics suggest.

 Here are a few key points about ESPN's RPM and FiveThirtyEight's RAPTOR player rating systems:

- RPM (Real Plus-Minus) was developed by Jeremias Engelmann and Steve Ilardi. It uses a form of regularized adjusted plus/minus that shrinks ratings toward a player's box plus/minus. This helps avoid overfitting and improves predictiveness. 

- RAPTOR (Robust Algorithm using Player Tracking and On/off Ratings) was created by FiveThirtyEight. It combines a player's on-off differential with player tracking data like speed and distance traveled. It also incorporates priors from box score stats.

- Both systems aim to estimate a player's future impact, not just evaluate past performance. Regularization and including box score priors help achieve this. 

- RPM and RAPTOR produce per-possession ratings, unlike raw plus/minus which is per game. This aids comparability across players with different minutes.

- The ratings can identify players with high real impact that basic stats miss, like Khris Middleton. But they still have significant uncertainty and should be viewed in context.

- Overall, these advanced systems represent a major step forward in statistically rating players. But judgment is still needed in using them properly to make decisions.

 Here is a summary of key points about NBA lineup analysis:

- Lineup analysis involves assessing the effectiveness of different 5-player lineups a team uses during games. This can help coaches determine which lineups to play more minutes.

- Lineup ratings can be calculated by taking the adjusted +/- ratings for each player in the lineup and averaging them. This gives an estimate of how many points per game better or worse that lineup is compared to an average NBA lineup.

- Many teams play inferior lineups substantially more minutes than better lineups. For example, the 2016-17 Hawks' most used lineup was below average, while a lineup that simply replaced one player was far better but was hardly used.

- There is variability in lineup ratings since most lineups are not used extensively. But statistical methods can estimate the probability that one lineup is truly better than another based on minutes played and observed lineup ratings.

- Lineup analysis was used by the successful Dallas Mavericks and New York Knicks teams in the 2000s. The Knicks specifically credited lineup data with helping spark a long winning streak in 2013 after a poor stretch of play.

- Overall, lineup analysis is a useful tool for coaches to optimize their rotations and give their team the best chance to win games. But it requires accurately rating each player first via adjusted +/- or a similar metric.

 Here are the key points about analyzing team and individual matchups:

- Coaches can utilize adjusted +/- ratings broken down by opponent to determine optimal matchups against opposing teams. An example is the Mavericks' decision to start Devin Harris over Adrian Griffin against the Spurs in the 2006 playoffs.

- Matchup data showed Harris performed much better against Tony Parker than Griffin. In the playoff series, the Mavericks outscored the Spurs when Harris was on the court against Parker. 

- The analysis also revealed Marquis Daniels struggled guarding Manu Ginobili, leading to Daniels not playing in the decisive Game 7.

- Tracking lineup data during a playoff series provides insights into which lineups are most effective. The Mavericks utilized this data to adjust their rotations.

- NBA matchups exhibit non-transitivity - if Player A outplays Player B, and Player B outplays Player C, it does not necessarily mean Player A will outplay Player C. The relation "outplays" is not a transitive relation.

- Analyzing adjusted +/- ratings and lineup data on a matchup basis provides key insights that can lead to better coaching decisions and optimal lineup choices. This showcases the value of analytics in gaining a competitive advantage.

 Unfortunately the ideal dataset you describe does not actually exist. The key challenges in testing for referee racial bias are:

- Lack of data on the race of officials for each game. The race of officials is not tracked in official game data.

- Lack of data attributing each foul call to a specific official. Foul calls are not tracked by individual officials.

- Difficulty controlling for all factors that legitimately influence foul calls (e.g. playing style, aggressiveness, defensive ability of players).

The Wolfers and Price study attempted to overcome these limitations by using player-level foul data and making assumptions about the likely race of officiating crews based on geographic region. But their approach still has shortcomings. The cleanest analysis would require individual foul call data with referee race identified, which does not exist. Any study will be estimating referee demographics and making challenging assumptions. More data would help strengthen future analysis, but the inherent limitations likely preclude definitive conclusions.

 Here is a summary of the key points regarding the rise of the pick-and-roll play in the NBA:

- The pick-and-roll has become one of the most frequently used offensive plays in the NBA, increasing from around 20% of possessions in 2006 to over 30% in 2018-19. 

- This increase coincided with big men becoming more versatile and skilled at handling the ball. The pick-and-roll takes advantage of these skills.

- In 2018-19, almost two-thirds of pick-and-rolls ended with an action from the ball-handler, despite roll men being more efficient in terms of points per possession (1.03 PPP vs 0.87 PPP for ball-handlers).

- Overall, the pick-and-roll generated 0.97 points per possession in 2018-19, making it one of the most efficient plays. 

- At the same time, isolation plays and post-ups have declined significantly. In 2018-19, they accounted for just 13.4% and 7.5% of possessions respectively.

- The rise of the pick-and-roll and decline of isos/post-ups illustrates how the NBA has moved away from a one-on-one style to an emphasis on team play, ball movement, and taking advantage of mismatches created by screens.

 Here is a summary of the key points about SportVU, Second Spectrum, and spatial basketball data:

- SportVU optical tracking system installed in all NBA arenas in 2013 to collect player tracking data. Acquired by STATS Inc. 

- Second Spectrum replaced SportVU in 2017-18 season as official provider of tracking data.

- Tracking data collected from cameras in rafters at 25 frames per second. Provides X,Y coords for players, X,Y,Z for ball.

- Second Spectrum adds metadata like play types, shot quality etc. 

- Allows analysis of spatial aspects like floor spacing, defense - things not in box score.

- Can replay whole games just from data. Know location of each player at all times.

- Has enabled new stats and analysis around spacing, defense, shot quality. 

- Teams use data for strategy, lineup decisions, player development.

- Public data allows for new analytics and fan engagement opportunities.

- Still early days in terms of public availability and full potential of spatial data.

The key innovation is granular spatial data that opens up new avenues for analysis and strategy beyond traditional stats. While not yet widely available publicly, spatial tracking data has huge potential for teams, analysts, and fans.

 

- Player tracking data allows for more objective and consistent quantification of spacing on the court. For example, the area of the convex hull defined by player locations can measure how much a player like Steph Curry stretches the defense compared to Giannis. 

- Teams have developed systems to evaluate defense using tracking data. This includes identifying optimal defensive positioning to minimize expected points against, and defining metrics like disruption scores to measure defender impact.

- DeepHoops uses deep learning to estimate the probability of terminal actions (shot, turnover, etc) at each moment of a possession. This allows an expected possession value to be calculated and used to evaluate actions like screens and passes. 

- Corner threes are very efficient partly due to the shorter distance. League average 3P% is higher from the corners. Overall, 3s average more points per shot than 2s from midrange due to the extra point. Teams have shifted away from midrange 2s as a result.

 

- Midrange shots per game have decreased dramatically in recent years, from around 30 per game down to less than 10. This does not mean the midrange game is dead, but it is now primarily left to elite players like Durant and Leonard. 

- Three-point shots have a lower field goal percentage than midrange shots, but provide more points per shot on average. Corner threes are particularly efficient, with a 38.8% field goal percentage compared to 34.7% for above the break threes. 

- The higher efficiency of corner threes is not solely due to the shorter distance. Corner threes are also more likely to be assisted and more open on average compared to above the break threes.

- Analysis of shooter-defender choreography shows half of corner threes involve a stationary shooter waiting for a pass while the defender is caught between helping on penetration or guarding the shooter. 

- A game theory model suggests defenders should commit to either guarding the corner or helping on penetration rather than being indecisive in between. Data shows defenders are often caught in between, presenting an opportunity to improve defensive strategies.

 Here is a summary of the key points regarding whether a team trailing by 2 points late in a game should attempt a 2-point shot to tie or a 3-pointer to win:

- To maximize the chance of winning, the team should attempt the shot that gives the highest probability of winning. This depends on the team's 2-point and 3-point shooting percentages and their estimated probability of winning in overtime. 

- Based on league-wide shooting percentages, going for the 3-pointer gives a higher chance of winning (.36) than going for 2 (.52 x .5 = .26). 

- However, a sensitivity analysis shows the decision depends on the specific parameter values. If the 2-point percentage is above .72 or the 3-point percentage is below .26, going for 2 is better. 

- The overtime winning probability also matters - if it is estimated to be lower than .72, the 3-pointer gives a better chance of winning. An underdog may have a lower overtime winning probability, favoring the 3, while a favorite may favor going for 2.

- Each situation is unique, so while the math provides a general framework, the specific circumstances should determine the decision. The parameters, especially the overtime winning probability, need to be estimated appropriately.

 

- Whether to foul up 3 points in the closing seconds is a complex question. Studies show fouling reduces the chance of the opponent tying from ~10% to ~3%, but there are risks if the game continues. 

- Empirical studies of college and NBA games show little difference in winning percentage between fouling and not fouling up 3 with <10 seconds left. 

- Simulations assuming multiple possessions show the trailing team wins ~7% of the time when fouled up 3. This is better than the 18% win rate if the defense does not foul. However, assumptions matter.

- The 2-for-1 strategy aims to get a shot around 32 seconds left in a quarter to potentially get another possession. But the first shot must still be a good one. Forcing a bad shot defeats the purpose. 

- Whether to foul at the end of a quarter depends on the expected points scored by each team in the remaining time. This varies by matchup and game situation. There is no universal rule.

 Here is a summary of the key points about soccer analytics from the passage:

- Shots on goal and other basic box score statistics like possession time are weakly correlated with winning in soccer. More advanced metrics like expected goals (xG) are needed. 

- xG models estimate the probability a shot will result in a goal based on factors like distance, angle, etc. These models can be evaluated using calibration curves. 

- xG can be used to calculate expected goals for a team. This can be compared to actual goals scored/allowed to evaluate team efficiency.

- Player tracking data has recently become available and allowed more advanced soccer analytics. Areas of focus include measuring spacing, passing networks, and expected possession value.

- There are still challenges in soccer analytics like accounting for defense, combining stats and video, and dealing with low-scoring games. But the field has advanced rapidly in recent years with new data.

 

- Tracking data can provide contextual information like defensive formations, distance to closest defender, etc. This can improve expected goals models. 

- Possession-based models can assign value to actions like passes during a possession, not just the shot. This credits players beyond just the shooter. 

- Markov chain models discretize the soccer pitch into zones and model state transitions when possession changes zones. This can estimate the value of moving the ball to different zones. 

- Game theory has been used to analyze penalty kicks, helping explain why kicks are predictable. Goalies guess the direction but stay centered to optimize chances of saving kicks to their left or right.

 

- Expected goals (xG) models estimate the likelihood of a shot resulting in a goal based on attributes like shot location, angle, distance, etc. However, xG models have limitations, like not accounting for defensive pressure. 

- Other advanced metrics like parking the bus index and spatial entropy help capture team style and formation. But they still focus on on-ball events. 

- Player tracking data allows analyzing off-ball movement and space creation. Metrics like off-ball scoring opportunities (OBSO) can identify good off-ball movement. 

- Models using tracking data can also quantify risk and reward of passes based on completion probability and likelihood of resulting in a shot.

- In soccer penalty kicks, game theory principles like Nash equilibrium help model kicker and goalie strategies. Studies show goalies exhibit biases like "action bias" where they tend to jump rather than staying put.

- Overall, soccer analytics is moving beyond just goals and shots to incorporate more context like defense pressure, off-ball movement, space creation using advanced metrics and tracking data. There is still much scope for new insights.

 Unfortunately I am unable to provide a full summary of the chapter as I do not have access to the full text. However, based on the excerpts provided, it seems the chapter discusses analytics in hockey, specifically focusing on metrics like Corsi and Fenwick statistics. These metrics count shot attempts as a way to evaluate players and teams, as opposed to just looking at goals scored. The chapter also discusses how and when teams decide to pull their goalie earlier than in previous years based on analytics. Without access to the full text, I cannot provide a complete summary, but I hope these highlights provide an overview of the key points covered in the chapter. Please let me know if you need any clarification or have additional questions!

 

- To determine the optimal time for a trailing team to pull its goalie, a Poisson process model can be used to estimate the expected number of goals scored by each team. Based on some sample calculations, pulling the goalie around 5 minutes before the end of regulation maximizes the trailing team's chances.

- An analysis of face-off win percentages shows that about 67% can be attributed to a player's skill, while 33% is due to luck. This was determined by comparing the observed variance in win percentages to the variance expected under a model of pure randomness. 

- Carry over power play penalties, that span multiple periods, tend to have a lower power play percentage than penalties contained within a single period. This is likely because the intermission break disrupts the continuous puck possession and passing that leads to power play success.

- The difference in power play percentage between carry over and non-carry over penalties does not appear to be explained by differences in man advantage.

In summary, advanced analytics can provide insights into optimal strategy, the role of skill versus luck, and differences in special teams performance based on context. Careful statistical modeling reveals subtle effects not apparent from traditional analysis.

 Here are the key points from the volleyball analytics section:

- Pythagorean Theorem can be applied to volleyball using either total points or sets won/lost. The sets-based version performed slightly better on Greek league data. 

- In-season Pythagorean predictions improve as more games are played. Late season projections are more accurate.

- The Bradley-Terry model can be used to estimate team abilities and win probabilities at the set level. It showed decent accuracy (72.5%) on Greek league data. 

- The reliability curve confirmed the Bradley-Terry model outputs well-calibrated probabilistic predictions. 

- More advanced methods like Bayesian inference on point distributions within sets could further improve modeling. Overall, volleyball appears amenable to analytics despite limited public datasets.

 Here is a summary of the key points from the provided text on analytics and cyber athletes:

- eSports (competitive gaming) is the fastest growing sport globally with rapidly increasing revenues. Major events like the League of Legends World Championship draw huge audiences comparable to traditional major sporting events. 

- There are different genres of eSports including real-time strategy, multiplayer battle arena, and sports video games that require different skills. 

- eSports can help develop soft skills in education settings.

- eSports produces abundant data through game logging that enables analytics. 

- Player training focuses more on mental coaching rather than physical conditioning. 

- If there were an eSports combine like the NFL combine, it would test reaction time, strategic thinking, teamwork, stress management, and other cognitive skills.

- Traditional sports analytics techniques can be applied to eSports to analyze team compositions, optimize strategies, and evaluate players.

- eSports analytics is still a nascent field with great potential for growth as the popularity of competitive gaming continues rising.

 Here is a summary of the key points from the passage:

- DotA 2 is a popular multiplayer online battle arena (MOBA) game with two competing teams trying to destroy each other's base. Various statistics like win rate and KDA ratio are tracked for each hero character. 

- Analysis of a DotA 2 dataset shows a "home field advantage" - the Radiant team wins 52.5% of games on average. This may be due to map imbalance favoring Radiant.

- Looking at the hero Pudge, the win rate is higher when played on Radiant compared to Dire, even when controlling for player level. This suggests heroes may have inherent advantages on one side.

- Adjusted +/- analysis ranks heroes by their contribution to win probability. The top heroes like Riki provide the biggest boosts. A simple hero-based model can predict match outcomes at 58.5% accuracy.

- The NBA2K League is an official NBA e-sports league with teams and players. Combine data like scoring and passing is used to evaluate draft prospects. Analysis revealed skill biases like male players not passing to females. 

- E-sports generate large amounts of in-game data and provide opportunities for advanced analytics, though public data access is currently limited. As e-sports grow, so will their use of data.

 Here are the key points on sports gambling basics:

- Point spreads allow you to bet on which team will win against the spread (cover the spread). If the Patriots are -3, they must win by more than 3 points for a Patriots bet to win. 

- To make money gambling long-term, you need to win over 52.4% of bets. At 57% win rate, expected profit is 8.8% per dollar bet.

- Bookmakers profit from the vig - around 4.8% of money bet. They don't need the money split evenly on both sides.

- Moneyline bets allow you to bet on who wins the game straight up, without a points spread. Favorite has a negative moneyline, underdog positive.

- In baseball, the starting pitchers must start for the betting line to be valid. You can bet moneyline, total runs, or run line (similar to point spread). 

- Arbitrage opportunities allow guaranteed profit by betting different lines at different sportsbooks. But they are very rare.

 Here are the key points from Levitt's analysis on how bookmakers can exploit bettor biases:

- Bettors tend to bet more money on favorites than underdogs. For home favorites, 56.1% of bets were on the favorite vs 43.9% on the underdog. For road favorites, 68.2% of bets were on the favorite vs 31.8% on the underdog.

- This imbalance allows bookmakers to shade lines in favor of underdogs to encourage more underdog betting. 

- By shading lines, bookmakers can increase their expected profit per dollar bet from the baseline 4.8% with balanced betting up to 5.5% (for home favorites) or 7.1% (for road favorites).

- Bookmakers aim to set lines to maximize overall profit, not balance betting. The imbalance in betting on favorites allows them to shade lines while still getting sufficient betting volume.

- Bettors tend to bet more on home underdogs than road underdogs. Bookmakers can exploit this by shading home underdog lines more than road underdog lines.

- Sophisticated bookmakers use data on historical betting percentages by each customer to set personalized lines that maximize expected profit per bettor.

In summary, bookmakers can exploit known bettor biases like favoring favorites and home teams to shade lines and increase profit margins beyond the balanced book benchmark. Setting lines is more nuanced than just splitting bets 50/50.

 

- Power ratings can be used by bookmakers to set point spreads so that favorites and underdogs have an approximately equal chance of covering the spread. 

- The author determines NFL power ratings and home edge for 2016 by finding the ratings and home edge that minimize the sum of squared errors between actual and predicted game margins.

- Predictions are made by taking the home team's rating, subtracting the away team's rating, and adding the home edge. 

- The author uses Excel's Solver to find the optimal power ratings and home edge that minimize total squared error. 

- Positive errors mean the home team did better than predicted, while negative errors mean they did worse. 

- Minimizing squared errors ensures positive and negative errors don't cancel out.

- The resulting power ratings and home edge best fit the actual game results compared to any other ratings and home edge.

 

- The Patriots and Falcons were the top ranked teams, while the 49ers, Rams, and Browns were the worst teams in 2016. 

- The Broncos faced the toughest schedule, while the Patriots faced the easiest schedule.

- An alternative to squared error is to minimize the sum of absolute errors (MAD), which gives less weight to outliers. This results in some differences in team rankings, such as the Panthers moving up significantly. 

- Offensive and defensive ratings for each team can be calculated to predict total points scored. The Falcons had the best offense and the Broncos the best defense. 

- Teams can also be ranked based solely on wins and losses using logistic regression. This aims to avoid incentivizing teams to run up the score.

 Here are the key points from the passage:

- The passage discusses different methods for rating sports teams, like using points scored/allowed or wins/losses. A key challenge is accounting for strength of schedule. 

- The author demonstrates rating NFL teams using points scored/allowed. Adjustments are made to account for home field advantage. 

- For rating based on wins/losses, a challenge arises when a team has a perfect record against weak opponents. The author suggests introducing a "fictitious" team that all real teams are assumed to have a 1-1 record against.

- The author notes the ratings can be modified to give more weight to recent games. This helps with predictive accuracy.

- For predicting low-scoring games like soccer, a multiplicative model works better than an additive model to avoid predicting negative scores. 

- To predict match outcomes from predicted scores, a Poisson distribution can model rare events like goals scored. The probabilities of a win/loss/tie can then be estimated.

- To overcome the underestimation of ties, the difference in goals can be modeled as a Skellam distribution rather than using two independent Poisson distributions.

 Here are the key points from the summary:

- Power ratings can be used to calculate the probability a team wins a game, covers a spread, or wins a playoff series. 

- For the NFL, the home team's margin of victory follows a normal distribution with mean = home edge + home rating - away rating, and standard deviation around 14 points. 

- Excel's NORM.DIST function can calculate probabilities like the chance of covering a spread.

- For the NBA, simulate playoff series by generating normal random margins for each game based on the teams' power ratings, and track wins across iterations. 

- For March Madness, simulate each game through the tournament bracket based on power ratings, track wins, and calculate each team's probability of winning the tournament.

- NFL playoffs can be simulated by playing out games based on power ratings and tracking wins across iterations.

Key takeaway: Power ratings can be translated into objective probabilistic predictions for game, series, and tournament outcomes.

 Here are the key points from the text:

- They simulate NBA finals games using Excel and normal random variables based on team ratings. They found the Warriors had a 95% chance of beating the Cavs in the 2017 finals based on simulating the series 1,000 times. 

- They simulate the NCAA tournament using Sagarin ratings. They play out each game as a normal random variable based on the rating differential between the teams. They simulated the 2017 tournament 1,000 times to estimate each team's probability of winning the championship. 

- They provide a template to simulate the NFL playoffs in Excel, accounting for home field advantage by reseeding after each round. For 2017 they gave the Patriots a 61% chance to win the AFC and 35% chance to win the Super Bowl.

- They discuss evaluating win probability models using calibration curves rather than just accuracy. Poor calibration can be improved using Platt scaling, which fits a logistic regression to the original probabilities.

 Here is a summary of the key points about the NCAA Evaluation Tool (NET):

- NET replaced the RPI in 2018 as the tool used by the NCAA tournament selection committee to evaluate and rank college basketball teams. 

- NET considers five factors:
    - Team Value Index (TVI): a rating based on game results, adjusting for opponent and location
    - Net Efficiency: points scored minus allowed per 100 possessions  
    - Winning Percentage: simple winning percentage
    - Adjusted Win Percentage: weights home/away/neutral wins and losses
    - Scoring Margin: points scored minus allowed, capped at 10 points per game

- The exact calculation used to combine these factors is not publicly known. 

- NET and RPI rankings are highly correlated overall (0.95), but less correlated at the very top rankings.

- The goal of NET is to provide predictive rankings to forecast future game results. The model was likely cross-validated on past data.

- Key differences from RPI: incorporates game margins/efficiency, adjusts for location, caps blowouts at 10 points to prevent running up score.

In summary, NET is an improved, more predictive ranking system than RPI, but still shows moderately high correlation with the flawed RPI rankings. The exact calculation is proprietary to the NCAA selection committee.

 Here are the key points on collecting and visualizing sports data:

- Data sources include APIs provided by sports leagues/entities and scraping data from websites. APIs provide hooks to access allowed data while scraping extracts data from HTML files.

- APIs may have rate limits on number of requests. Scraping may be hindered by anti-scraping mechanisms.

- Python libraries like BeautifulSoup, Selenium, Requests can be used for scraping. APIs may have official Python libraries or can be accessed through Requests.

- JSON and XML are common structured data formats that can be parsed in Python. 

- Pandas is a useful Python library for loading, cleaning and analyzing data. Matplotlib and Seaborn provide visualization capabilities.

- Key steps include collecting raw data, cleaning/preprocessing, analyzing with models/statistics, and visualizing results.

- Examples of analyses include predictive modeling, statistical testing, and data visualizations to find insights.

The goal is to obtain quality datasets, prepare them for analysis, apply analytical techniques, and clearly communicate results through visuals. The Python data science stack provides a powerful platform for sports analytics.

 Here are a few key points on effective data visualization:

- Focus on communicating the key insights clearly and accurately. Avoid clutter and unnecessary embellishments. 

- Choose appropriate chart types based on the type of data and what you want to highlight. For example, time-series data is best shown with line charts.

- Use color thoughtfully - be mindful of colorblindness. Use color to highlight or categorize, not just for decoration.

- Avoid distorting the data through truncated axes, unusual scales, or misleading labels. 

- Design for your audience - consider their background and what they need to understand. Avoid overly technical terms if not needed.

- Allow interactivity if possible - let users filter, highlight, and drill down into the data. But don't let it become a distraction.

- Tell a story - use visualization to lead your audience through a narrative about the data.

- Test and iterate - get feedback from others on what is working or not working. Refine the charts to increase clarity.

- Leverage tools like Tableau, R Shiny, Python Bokeh that aid visualization design and interactivity. But focus on the visualization first, tools second.

The key is balancing between aesthetics, functionality and storytelling. Following core data visualization principles will lead to more impactful and persuasive visuals.

 Here is a summary of the key points about assessing players with limited data:

- Bayes' theorem allows us to update our beliefs about a hypothesis as we collect more data. We start with a prior belief, observe new data, and update to a posterior belief.

- For players with limited data (e.g. only 30 pass attempts), we can use Bayes' theorem to estimate a probability distribution for a metric like yards/attempt. 

- Similarly for a kicker with only 5 long field goal attempts, we can estimate his field goal percentage.

- Bayes requires knowing the prior distribution before observing data. For player metrics, we can use league averages as the prior.

- As we observe more from a player, our posterior estimate will rely more on the player's data and less on the prior league average.

- Bayes' theorem allows us to make probabilistic assessments of players using limited data and league averages as a reasonable prior.

 Here is a summary of the key points about Bayes' theorem and evaluating kickers:

- Bayes' theorem allows us to update our beliefs about the probability of an event as we get new evidence. It gives a formula for calculating the posterior probability P(A|B) of event A happening given evidence B, based on the prior probability P(A), the likelihood P(B|A), and the marginal probability of the evidence P(B). 

- We can apply Bayes' theorem to probability distributions as well as point estimates. The posterior distribution is proportional to the prior times the likelihood. 

- As an example, we evaluate a kicker's success rate at 50-yard field goals. Based on NFL kickers overall, we choose a beta prior distribution with mean around 70%. 

- After observing the kicker make 16 of 20 attempts, we update to a posterior distribution. This gives a 42% chance he is an 80%+ kicker, versus 34% chance for a generic kicker.

- More observations further update the posterior. The key is accumulating evidence moves the posterior probability toward the truth.

- Choosing a good prior is important when lacking data. But as we gather evidence, the choice of prior becomes less important. The posterior beliefs converge toward the truth.

 

- Sports data like shooting patterns or player tracking data can be represented as matrices, with rows representing entities (e.g. players) and columns representing features (e.g. court locations). 

- Matrix factorization aims to decompose the original matrix into two or more matrices whose product approximates the original matrix. This can reveal latent patterns and provide a more compact representation. 

- Nonnegative matrix factorization (NMF) is a technique for matrix factorization that constrains the factor matrices to have nonnegative elements. It is useful for count data like shooting data.

- NMF was applied to NBA shooting data from 2014-2015 to identify latent shooting pattern concepts. The concepts correspond to combinations of shooting frequencies from different court zones. 

- Determining the number of concepts k is more art than science. k should be less than the smallest matrix dimension for a more compact representation. Approximation error alone is not sufficient, as it decreases monotonically with k.

- Analysis revealed 4 shooting pattern concepts for the NBA data. Concepts represented midrange shooting, restricted area shooting, perimeter shooting, and corner 3 shooting.

- NMF provides a data-driven way to identify latent patterns like shooting tendencies in a low-dimensional representation. This can enable analysis and comparisons.

 Here are the key points about using network analysis in sports:

- Passing networks can be constructed to study interactions between players on a team. Edges represent passes between players (nodes), and can be weighted by frequency. Thresholds are often used to eliminate infrequent edges.

- Passing networks reveal roles and leadership within a team. More centralized networks indicate defined roles, while decentralized networks suggest shared leadership. 

- Network connectivity patterns, rather than just the individual nodes, determine overall value. Teams with good "chemistry" are like diamonds - the value comes from how the nodes/players interconnect.

- Networks can quantify intangibles like chemistry by looking at connectivity patterns. The same nodes/players can create teams of varying value based on how they connect.

- Other sports networks include win-loss networks between teams, showing competitive relationships. Coaching networks trace coach lineages through their own coaches.

- Overall, network analysis provides a useful toolset to study relationships and interactions in sports beyond just individual player or team analysis. Patterns of connections reveal deeper insights.

 

- Team performance is often greater than the sum of individual performances, which can be quantified using metrics like adjusted +/- ratings. 

- Network science provides tools to analyze team connectivity, such as the algebraic connectivity (second-smallest eigenvalue of the Laplacian matrix). Higher values indicate better team connectivity.

- Passing network motifs can reveal unique team strategies. FC Barcelona's tiki-taka style stands out in motif analysis (e.g. more ABAC, less ABCD motifs). 

- Clustering teams by motif signatures shows Barcelona forms its own cluster, distinct from other teams.

- The Ewing Theory states teams can play better without their superstar. This is plausible based on skill curves (efficiency vs usage) and Braess's paradox in networks. Removing a high-usage player can improve overall team efficiency.

- Skill curves suggest player efficiency decreases with higher usage. This creates estimation issues since players have narrow utilization ranges. 

In summary, network science offers powerful and underutilized techniques to quantify team chemistry and other intangibles through connectivity metrics and motif analysis. The Ewing Theory is also plausible based on skill curves and network theory.

 

- Skill curves show that player efficiency typically declines as usage increases. This is because higher usage leads to more difficult shots. 

- When playing according to Nash equilibrium, teams optimize each possession individually rather than overall team efficiency. This can sometimes exclude the most efficient players.

- An example is shown where removing the most efficient player and splitting possessions between two less efficient players actually improves overall team efficiency. This demonstrates the shortcomings of Nash equilibrium.

- PageRank can be used to rank teams based on a network of wins and losses. Teams are ranked higher if they beat teams that themselves beat other good teams. 

- PageRank-based ranking (SportsNetRank) achieves 61% accuracy in predicting NFL games, better than just using win percentage (52% accuracy).

- Network analysis beyond win-loss networks could provide additional insights into teams and players, for example substitution networks, screening networks, etc. Advanced network analysis techniques like network embeddings could help in this context.

 Here is a summary of the key points about Elo ratings:

- Elo ratings were developed by physicist Arpad Elo to rate chess players. The main idea is exchanging rating points between players after a matchup - the winner gains points while the loser loses points.

- The number of points exchanged depends on the expected outcome based on the players' ratings before the match. If an upset occurs, more points are exchanged compared to an expected outcome. 

- Elo ratings can be adapted to other sports by tweaking factors like the home advantage and choice of K which controls how quickly ratings react to new results.

- Challenges in implementing Elo include: choosing appropriate initial ratings, transferring ratings between seasons, dealing with expansion teams, and tuning parameters like K.

- Initial Elo ratings can be set using betting market data on expected team wins. Optimization can find initial ratings that best match market win totals. 

- Historic ratings can also be calculated but may need adjustment between seasons (e.g. regression to the mean) to account for roster changes.

 

- The authors used NBA player WINVAL ratings from 2000-2007 to estimate changes in average player ability over those seasons relative to 2006-2007. 

- They found player strength declined from 2000 to 2003, improved from 2003 to 2005, and was nearly equal in 2005-2006 compared to 2006-2007. 

- Berry, Reese, and Larkey (1999) did a similar analysis for MLB, NHL, and golf to compare player abilities across eras. 

- They found hockey scoring peaks at age 27, golf at 30-34, and baseball batting at 27. Home run hitting peaks at 29.

- They concluded Mario Lemieux and Wayne Gretzky were the greatest NHL players ever, with Lemieux having a slight edge at peak.

- Peterson, Penner, and Stanley (2011) proposed a simpler approach to compare baseball players across eras by adjusting for average runs scored in each era.

 

- The authors investigated whether NBA teams perform worse in the second game of back-to-back games. Using data from the 2018-2019 season, they found that teams playing back-to-back games performed 1.89 points worse on average than expected based on team ratings and home court advantage. This suggests back-to-backs do negatively impact performance.

- The authors also looked at whether NFL teams perform better after a bye week. Using data from 2014-2018, they found no evidence that teams perform significantly better than expected after a bye week. The average residual (actual margin versus predicted margin) for teams after a bye week was very close to zero. 

- The findings suggest that while back-to-back games negatively impact NBA team performance, bye weeks do not provide a significant performance boost for NFL teams. Fatigue from back-to-back games hurts NBA teams but the extra rest from a bye week does not significantly help NFL teams.

- The authors used a similar methodology for the NBA and NFL analysis. They predicted game margins based on team ratings and home advantage, then compared actual margins to predicted margins to test for deviations and fatigue/rest effects. A hypothesis testing approach was utilized.

In summary, the evidence indicates back-to-backs hurt NBA team performance but bye weeks do not significantly help NFL teams, contrary to popular belief. The adage "fatigue makes cowards of us all" held true for NBA back-to-backs but not for NFL bye weeks.

 

- The BCS (Bowl Championship Series) system relied on polls, computer rankings, strength of schedule, and team records to determine the top two teams who would play in the championship game. 

- In 2014, it was replaced by the CFP (College Football Playoff) system, where a selection committee subjectively chooses the top 4 teams to compete in a playoff.

- Some issues with the current CFP system are that worthy teams are sometimes left out of the 4-team playoff, leading many to suggest expanding to 8 teams. 

- Regression analysis found offensive stats like points scored and turnovers lost, along with defensive stats like points allowed, significantly predict a team's AP ranking. 

- An ordinal logistic regression model was built using offensive and defensive stats to predict a team's AP rank. It had moderate success, predicting the correct rank within the top 3 ranks 14% of the time.

 

- The Warriors had a 3.5% chance of losing the 2016 NBA Finals after going up 3-1 based on betting odds and assuming game independence. 

- The Patriots had a 0.15% chance (1 in 666) of coming back from a 28-3 deficit with 8:31 left in Super Bowl LI based on betting odds and adjusting the standard deviation for the remaining game time.

- The Mavericks had a 0.0004% chance (1 in 2,500) of losing a 30-point lead with 14.5 minutes left against the Raptors in 2019-2020 based on betting odds. 

- In-game win probability models gave the Patriots between a 1 in 20 to 1 in 1,000 chance of coming back in Super Bowl LI, showing a wide range of estimates.

- The Mets had a 1.4% chance of winning Game 6 of the 1986 World Series before Buckner's error based on win expectancy.

- The Athletics had a 0.25% chance of coming back from down 8-0 against the Cubs in Game 4 of the 1929 World Series based on win expectancy.

 Here is a summary of the key points about building an optimal daily fantasy sports team:

- DFS contests involve selecting a team of professional athletes under a salary cap to maximize fantasy points. Players have a "cost" and projected fantasy points.

- This optimization problem is similar to the knapsack problem in mathematical programming. The goal is to maximize total fantasy points while staying under the salary cap. 

- For each player there is a binary decision variable indicating whether they are selected or not. The total cost and number of players constraints ensure the roster rules are followed.

- Additional constraints are needed to enforce position requirements (e.g. 1 PG, 1 SG, etc). Synthetic "flex" positions (G, F, U) require additional variables and constraints.

- An example dataset with 97 players is provided. The optimization model is set up in Excel using player data, decision variables, and constraints. Solver can then be used to find the optimal roster.

- The key is formulating the problem correctly with binary decision variables, an objective function to maximize points, and constraints to enforce roster rules and salary cap. Excel and Solver provide a convenient way to find the optimal lineup.

 Here is a summary of the key points from the passage:

- A model was created to select an optimal fantasy basketball team by maximizing expected fantasy points (FPs) subject to constraints like salary cap. 

- The model uses data on expected FPs, cost, and positions for each player. Binary decision variables indicate which players are selected. Constraints ensure roster requirements are met. 

- The optimal solution maximizes expected FPs but may not actually win DFS contests due to variability in performance. More advanced models could maximize ceiling FPs, floor FPs, a combination, or probability of a positive payout.

- To model the probability of a positive payout, assumptions can be made about the distribution of competitors' scores. Then the minimum score for a payout can be calculated and maximized.

- More complex formulations require add-in solvers beyond Excel's default solver due to limits on variables and constraints. The example shows how optimization models can be used for sports analytics problems like DFS lineup optimization.

 Here is a summary of the key points from the rom-brendan-donohue/ conversation:

- Discussed advanced sports analytics concepts like expected goals, possession statistics, player tracking data, and network analysis. 

- Covered metrics like Approximate Value, Points Over Replacement, Win Shares, Player Efficiency Rating, and Plus/Minus. 

- Talked about data sources like play-by-play data, tracking data, and sports APIs. 

- Mentioned influential books like Moneyball, Scorecasting, and The Hidden Game of Baseball.

- Discussed insights from analytics on topics like the hot hand fallacy, intentionally fouling, NFL draft pick value, and optimal strategies in end game scenarios. 

- Shared examples applying techniques like Markov chains, machine learning, spatial analysis, and network science to sports.

- Covered analytics usage across sports like football, basketball, baseball, soccer, and more.

- Referenced major events where analytics impacted games like Greece's upset of Team USA basketball in the 2006 FIBA World Cup.

- Mentioned the increasing adoption of analytics across professional sports teams and leagues.

 autoregression model and, 159–162; NBA simulation and, 159–162; uncover facts using the data and, 144–146; estimate offensive efficiency and, 142–144; estimate team talent level from season data and, 151–158; record team stats and convert into stats per 100 possessions, 146–147; retrieve team stats, standings and schedule data, 140–142; stimulation of college basketball tournament and, 158–159, 163–166; summary and deep dive of college basketball data and, 147–151; summary statistics and histogram and, 136–140; uncover correlation using, 135–136

expected goals, soccer, 385–388; comparing models and, 393–394; shot location and, 389

expected value, 63–65, 294–295, 474; maximizing and, 430–43; mean, median, mode and, 63; of random variable and decision-making and, 63–65

expected wins: fundamental attribution error and, 168; luck vs skill and, 156–158, 215–216



Falkenberg, Karl, 77

fielding Bible, 76–77

fielding runs, 76

football: calculating win probability changes and, 174; defensive pressure and, 234–235; fourth down decisions and, 212–215; implied draft position value and, 222–226; mock drafts and, 227; roster construction and, 236–239; salary cap and, 229–232; stopping kickoffs and, 228–229; talent, luck and wins and, 215–222; two-point conversions and, 204–206; winning the turnover battle and, 232–234

forecasting, 449; calibration curve and, 356–359; NCAA tournament bracket and, 409–411; NFL team strength and, 539; playoff and, 411–415; projecting league leaders and, 426; regression toward the mean and, 359–361; simple ranking systems and, 405–408; simulation and, 362–364; skill and luck in sports outcomes and, 366–369; sports projection systems and, 415–426; teams controlling their own destiny and, 365–366; updating predictions and, 361–365; weighted ranking systems and, 408–409; wisdom of crowds and, 459–460

football machine learning competition, 420–425; Hinton’s Rule and, 423–425; More Complete Table and, 420–422; passing success rate and, 422–423

fouling when ahead (NBA), 344–347

Francis, Bill 269, 274–276

FXFL, 432

game theory, 335–338, 497; BCS rankings and, 433; college football overtime and, 427–430; economics of college football and, 430–433; matching pennies and, 336, 338; mixed strategy and minority games and, 338–339; NFL overtime and, 433; payoff matrix and, 186–193; prisoner’s dilemma and, 337; pure strategy and, 336–338; strategic voting in Heisman trophy and, 347–348; two-person zero sum game theory (TPZSG), 186–193, 302, 337–339; voting theory for selecting a champion and, 434

Goldsberry, Kirk, 54, 242, 305, 312, 335–336

Goldsman, Dan, 242–243

Gupta, Ankit, 316

Guttag, John 65–66



Harris, Benjamin “Coach Tube,” 210–211

Heisman Trophy strategic voting and, 347–348

Hendricks sports, 349–350

hidden layers (neural network), 371

Hinton, Geoff, 423

Hockey Abstract (Vollman), 66

Horowitz, Ira, 217



Information theory, 508–509, 525

innovator’s bias, 467

Intrade, 469; belief markets and, 469; contracts and arbitrage

and, 467–472; liquid markets and, 471; sensitivity to information and, 471–472

Iowa Electronic Markets (IEM), 459

Iyengar, Gurinder S. 107–108

James, Jill, 125

James, Bill 10–11; Pythagorean Expectation and, 10–12, 165

Jamesian win score, 259–260

Jensen, Shane T., 392

Joramo, Michael, 246



Kahneman, Daniel, 182, 360, 492

Kaplan, Edward H., 107–108

K-means clustering, 513

Konik, Michael, 217

Kubatko, Justin, 157

Kubrick, Stanley, 107



ladder attacks, 474

Lahman, Sean 33–34; Baseball Archive, 7–8, 33–34; retrosheet.org and, 33–35

Las Vegas betting lines, 456–458, 490

Levitt, Steven, 165

Lewis, Michael, 106, 497; Moneyball, 45, 106, 128

luck vs skill, 156–158, 215–222, 366–369

Lucey, Patrick, 385, 388, 397



machine learning: back propagation and, 376–382; feature selection and, 374–375; football competition and, 420–425; gradient descent and, 377–378; hidden layers and, 371; logistic regression and, 368–370; neural networks and, 369–382; non-linear transformations and, 372–374; overfitting and, 380–382; PCR and PLS regression and, 376; supervised learning vs unsupervised learning and, 370–371

Major League Baseball, 134–135, 431; co-payoff matrix, draft position value chart and, 224–226; steroid era and, 252–253

Marr, Dave, 242–243

matching pennies, 336, 338

Matuszewski, Erik, 244, 254, 292

Mazer, Arturo, 284

Mets, collapsing against the Red Sox (1986 World Series), 556

Moneyball (Lewis), 45, 106, 128

Monty Hall problem, 492–493

Morris, Benjamin, 229

Mosteller, Frederick, 107–108

Murray, Jim, 50



Nash equilibrium, 338–339

National Basketball Association (NBA), 248; adjusted plus/minus (APM), 269–273; analytics movement and, 253–255; back-to-back scheduling and, 538–540; betting forecast and, 456; clutch performance and, 340; corner three-point defense and, 335–339; draft efficiency and, 305–306; end game strategy and, 342–348; fouling with three-point lead and, 344–348; free throw shooting and, 309–311; measuring defensive skill and, 315–317; minutes distribution and, 306–309; PER and, 257–260; plus/minus metrics and, 264–269; points per shot trends and, 255–257; position-by- position analysis and, 317–324; projection and prediction systems and, 415–416; shooting at the buzzer and, 348–350; substitution strategy and, 295–305; talent levels by position and, 281–289; trading up in the draft and, 306; transition from college to pros and, 324–326; valuable rebounding and, 311–315; wages-of-wins and, 257–260; weak and strong eras and, 249–253

National Football League (NFL), 282; adjusted games lost (AGL) and, 220; compensatory draft picks and, 217–222; convex hull and, 239; draft pick value chart and, 225–226; dynamic programming and fourth down, 212–215; Elo preseason team ratings and, 526–528; escalating team ages in playoffs and, 540–542; fantasy football and, 243–249; Hinton’s Rule and, 423–425; implied draft position value curve and, 222–226; kickoff ban and, 228–229; More Complete Table and, 420–422; passing success rate and, 422–423; roster construction and, 236–239; run-pass indicator (RPI) and, 198–20; salary cap management and, 229–232; strength of schedule adjustments and, 215–216; talent, luck and wins and, 215–222; trade value chart and, 223; two-point conversion strategy and, 204–206; winning the turnover battle and, 232–234

Neft, David S., 33

Nevitt, Barrington, 129–130

NFL Championship Game, 1950, 517–518. See also New York Giants; Cleveland Browns

NFL Win Probability Calculator (Brian Burke), 174

normal distribution, 135–136

NYT 4th Down Bot, 210–211



Patriots, collapsing against the Giants (Super Bowl XLII), 552–555

Peebles, Jack, 124–125

Pelton, Kevin, 262–263

percentage baseball (PCT), 37–43

Peterson, Dick, 39

pitch sequencing, 398–399

playcalling, NFL, 188–189

play-by-play data: basketball value and, 242; collecting, organizing and understanding, 15–18; hockey analytics and, 17; library for baseball research and retrosheet.org, 17, 33–35; parsing, 18–22; Soccermetrics and, 18; transforming into usable data and derived metrics, 22–25

Pluto, Terry, 124–125

points per possession (PPP), 23

points per shot, NBA eras and trends, 255–257

Poisson distribution, 71, 72, 492

position-by-position analysis, basketball, 317–324; fantasy basketball and, 349–350; talent required by position and, 281–289

Poundstone, William, 107–108

principal component analysis (PCA), 512–515

Prisoner’s Dilemma, 336–337

probability, basic, 60–65

Pythagorean Expectation, 10–12, 165

Pythagorean Wins, 143, 165–166



QuesTec Umpire Information System, 128–129

Quinnipiac University Poll, 167



randomness, human perception of, 550–558

random variable, 60; decision-making and expected value of, 63–65

RAPTOR metric (FiveThirtyEight), 262

Rasmussen, Nick, 168

regression: toward mean and forecasting, 359–360; logistic, 368–369; PCR and PLS, 376; ridge, 534; simple and multiple linear, 93–102

replacement level, 79–83

Retrosheet 33–35

risk management, 463

Robinson, Benjamin https://benjaminrobinson.github.io/ 391

Romer, David, 163–164



Sagarin, Jeff, 46–47

Sample space, 63

Schuckers, Michael, 106–107

Shannon, Claude, 508

shooting at buzzer (NBA), 348–350

Silver, Nate (538) 46–47, 262

Simple Rating System (SRS), 46, 142–143, 149

simulation, 159–165, 362–364; sports prediction and, 415–426

Sloan Sports Analytics Conference (MIT), 233, 390–391

soccer: corner kicks and, 388–389; expected goals and, 385–388; pitch control and, 398; predicting substitution impacts and, 397–404; strategic skills and in-game win probability (iWPR), 387

Spanning Tree Protocol (STP), 464

Spearman, William 388, 392

Sports Reference, LLC, 6–7

Stoll, Greg, win expectancy finder, https://gregstoll.com/~gregstoll/baseball/stats.html#V.0.1.0.1.0.0 

streakiness in sports, 544; hot hand in basketball and, 544

streaks: in successful free throw shooting, 310; in winning and losing, 543–544

student t-test, 117–120, 253

substitution strategy (NBA), 295–305



Tangotiger (Tom Tango) 81; Marcel projections and, 81–83

Tango, Tom, 90, 134

team rankings, 406; weighted ranking systems and, 408–409

The Book: Playing the Percentages in Baseball (Tango, Lichtman, Dolphin), 90, 134

Thomas, Andrew C., 83

Thorn, John, 107–108

tipping pitches, 398–399

total player rating (TPR), 259–260

TPZSG. See two-person zero sum game theory 
trades, evaluating, 125–132

trailing stop orders, 463–464

transition from college to pros, basketball, 325–326

Treadway, John 221

Tversky, Amos, 182, 360, 492

two-person zero sum game theory (TPZSG), 186–200, 302, 337–339



umpires and referees: adjustment ratings for (NBA), 315–317; automated ball and strike calls and QuesTec, 128–129; bias and discrimination claims vs MLB umpires, 123–125; optimal number of officials and, 325; racial bias and (NBA), 316–317; reverse engineering optimal strategy and count manipulation, 125–128; significance of basketball refs, 317; strike zone size and QuesTec, 129–132; systematic bias and, 123–124

underdogs: betting on NCAA tournament, 455; real point spread and, 454–456; taking points and beating closing spread, 453–454

uniform distribution, 64–65



validation curve. See calibration curve

value over replacement player (VORP), 81–83

variance, binomial distribution and, 66–67

voter learning, 460

Vollman, Rob, 66



Wages of Wins (Berri, et al.), 164, 259

weighted on-base average (wOBA), 91–92

win probability, 61, 174–175, 208; bunting and, 67; NFL fourth down decisions and, 212–215; simulation and estimating, 414–415; trailing in volleyball and, 558–560

winner’s curse, NFL draft and, 227–228

win shares, 259–260



XFL (2020 league), 432



Yards per Attempt Index (YPA Index), 143



Zermelo, Ernst, 198







 Here is a summary of the key points from the book Moneyball: The Art of Winning an Unfair Game by Michael Lewis:

- Introduced the concepts of sabermetrics and analytics being applied to baseball player evaluation and team strategy. Main focus is the Oakland A's and GM Billy Beane.

- Discussed stats like on-base percentage and slug: ging percentage as better evaluators of offensive performance than traditional stats like batting average. 

- Showed how the A's used analytics to identify undervalued players based on their skills rather than subjective assessments. This allowed them to compete with big-budget teams.

- Examined the drafting and development of players, arguing that high draft picks are overvalued. The A's focused on later round picks with solid fundamentals and skills.

- Looked at defensive evaluation using range factor, zone rating, and other metrics versus subjective scouting assessments. Showed the benefit of statistical analysis.

- Overall, made the case that objective data and analysis could allow small budget teams to compete by finding hidden value in players that traditional scouting approaches overlooked. Emphasized importance of walks, power, and defense.