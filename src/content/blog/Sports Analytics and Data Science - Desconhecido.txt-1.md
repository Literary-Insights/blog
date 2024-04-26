---
title: Sports Analytics and Data Science
slug: sports-analytics-and-data-science
tags: 
  - book-summary
excerpt: ""
category: "self-help"
author: "matheus-puppe"
publishDate: "2024-04-21T00:00:00.000Z"

---


 Here is a summary of key points about sports analytics and data science:

- Sports organizations are increasingly using data and analytics to gain competitive advantages. Analytics can help in assessing players, ranking teams, predicting outcomes, making in-game decisions, crafting messaging, promoting brands/products, growing revenues, and managing finances. 

- Data sources include performance stats, text, video, sensor data, and more. Advanced analytics techniques like machine learning are being applied in sports.

- Assessing players involves analyzing their stats and traits. Ranking teams uses power ratings, Elo or Massey ratings, polls, etc. Predicting scores employs regression models, simulations, etc. 

- In-game analytics assist with play calling, substitutions, challenges, clock management. Text analytics examines fan sentiment, media coverage.

- Analytics helps segment fans, set prices, plan promotions. It also optimizes sponsorship valuations, targeted advertising, dynamic pricing. Financial models guide roster decisions, stadium financing, and other investments.

- Sports analytics requires cross-disciplinary skills - business savvy, data wrangling, modeling, stats, IT, domain expertise in the sport itself. Effective usage requires buy-in from coaches and executives. Competing on analytics gives advantages but isn't a magic bullet.

 Here are some key points about professional sports as a business:

- Professional sports teams produce entertainment and compete for consumers' time and money. Different sports also compete with one another. 

- Sports leagues cooperate in setting schedules, number of games, etc. Sports businesses are granted some monopoly power.

- Owners' motives can be complex - profit maximization, wins maximization, capital appreciation, etc. This makes predicting behavior difficult.

- Dominance by one team reduces interest/demand. Leagues claim to seek "competitive balance" though some teams still dominate. 

- Teams compete intensely for star players. Salary caps restrict player salaries, with caps set by the leagues.

- Team valuations and finances show sports is big business. Forbes values top MLB teams at $1-2.5 billion. NBA team values are $1-2 billion.

- NFL team values are $1.5-3 billion. Top soccer clubs are worth $1-3 billion. Player salaries are in the millions, with some exceeding $20 million.

- In summary, professional sports teams cooperate through their leagues but compete for players, fans, and championships. Understanding owners' motives is key to modeling their behavior. Sports is a unique industry with elements of competition, cooperation, and complex objectives.

 Here are the key points from the paragraph on player salaries across MLB, NBA, and NFL:

- Player salary distributions are positively skewed in all 3 leagues. 

- Mean NFL salary is around $1.7 million, median $630,000. 

- Mean NBA salary is around $5.1 million, median $2.8 million.

- Mean MLB salary is around $4.1 million, median $1.1 million. 

- The relationship between team payrolls and team performance is weak, as big spending teams are not guaranteed playoff spots.

- Small market teams like those in Moneyball can win through spending wisely, not necessarily spending the most.

- While team fan bases are associated with cities, media exposure through TV and internet allows for nationwide and worldwide reach. Super Bowl TV audiences now surpass 100 million people.

 Here is an R program to explore distributions of player salaries across MLB, NBA, and NFL:

```r
# Load lattice package for statistical graphics
library(lattice) 

# Read in salary data for each league
mlb_data <- read.csv("mlb_salaries.csv")  
nba_data <- read.csv("nba_salaries.csv")
nfl_data <- read.csv("nfl_salaries.csv")

# Create salary in millions column
mlb_data$salary_mm <- mlb_data$salary / 1e6 
nba_data$salary_mm <- nba_data$salary / 1e6
nfl_data$salary_mm <- nfl_data$salary / 1e6

# Create league column 
mlb_data$league <- "MLB"
nba_data$league <- "NBA"
nfl_data$league <- "NFL"

# Bind rows into one data frame
salary_data <- rbind(mlb_data, nba_data, nfl_data)

# Create histogram by league
histogram(~salary_mm | league, data=salary_data, 
          layout=c(3,1), xlab="Salary (millions)", 
          main="Salary Distribution by League")
```

This loads in the salary data for each league, converts it to millions, creates a league indicator, binds the data together, and produces a histogram faceted by league. This allows easy comparison of the salary distributions across the three leagues. The lattice package provides convenient functionality for splitting a plot by a factor.

 Here are a few key points on using data analytics to assess players in sports:

- Statistical player evaluation has become increasingly sophisticated and widespread in sports. Advanced metrics go beyond traditional stats to provide more nuanced assessment.

- Analytics can quantify skills like shooting percentage, rebounding rate, throwing velocity, route running ability, and much more. This provides an objective measure of talent.

- Analytics help assess how a player's skills may translate to a higher level of competition. Models can estimate expected performance based on age, experience, competition faced, etc.

- No model is perfect at predicting future performance. Scouting insight on intangibles like work ethic, instincts and coachability remains crucial. 

- Analytics and scouting are most effective together. Stats quantify skills while scouts evaluate the person behind the stats. Combining these approaches leads to the most informed assessments.

- As data collection expands,player evaluation will continue to become more data-driven. But the "human element" of scouting is unlikely to ever be fully replaced by analytics.

The key is finding the right balance between statistical player analysis and traditional scouting that focuses on factors like personality, drive and team fit. Used together, they provide a more complete picture of a player's potential.

 Here are a few key points on assessing player performance in sports using analytics and data science:

- Reliability refers to the consistency or repeatability of a performance measure. High inter-rater reliability, test-retest reliability, and internal consistency are desirable. 

- Validity refers to whether a measure accurately captures the skill or ability it is intended to measure. Important types of validity are face validity, content validity, predictive validity, and construct validity.

- The multitrait-multimethod matrix allows examination of reliability, convergent validity, and discriminant validity for multiple measures of player skills/abilities.

- Measures can be classified as nominal, ordinal, interval or ratio scales based on their properties. More sophisticated statistical techniques tend to require interval or ratio measurement. 

- In general, objective performance metrics directly related to in-game events (e.g. shooting percentage, rebounds, assists) will be more reliable and valid indicators of player skill than subjective ratings.

- No measure is perfect. Using multiple indicators and understanding the limitations of available metrics is important. The meaning of a measure is defined by its relationships to other measures.

- Issues of measurement relate closely to fundamental questions in philosophy of science regarding the nature of reality, knowledge, and truth. There are rarely easy or absolute answers.

 Here is a summary of the key points about measurement in sports analytics:

- Sports performance measures are generally highly reliable because they are based on objective counts and scoring events. However, they often lack stability over time.

- Good measurement practices involve measures that are reliable, valid, explicit, accessible, tractable, comprehensible, and transparent. 

- Simple percentages or ratios based on game events are often the most comprehensible measures. Complex weighted combinations of measures can lack interpretability. 

- Finding a single best measure that captures all aspects of a player's contribution is challenging. Players have multifaceted skills across different traits like hitting, fielding, baserunning etc. 

- There are debates between "weak measurement" and "strong statistics" schools on whether statistics should respect scale types like ordinal vs interval. But for practical purposes, assessing variable types as categorical, binary, or continuous is often sufficient.

- The quest for the perfect measure in baseball has led to various hitting metrics like batting average, on-base percentage, slugging percentage and on-base plus slugging. Each has merits and limitations in validity, comprehensibility, and combining different aspects of hitting prowess.

 Here are a few key points about ranking teams:

- Ranking teams involves assigning numbers or ratings to measure team strength and performance. This allows teams to be compared and ordered from best to worst.

- Limited opportunities for teams to play each other directly makes ranking challenging. Teams in different conferences or divisions may have very different schedules. 

- Methods for ranking teams include Elo ratings, power rankings, points systems, and computer rating systems like the former Bowl Championship Series (BCS) system. Each has pros and cons.

- Balanced league schedules help enable more accurate rankings, but perfect balance is rare. Differences in strength-of-schedule must often be accounted for.

- Rankings aim to identify the best teams, but the criteria for "best" can vary. Overall record, quality wins, margin of victory, advanced metrics, etc. may be weighted differently. 

- Rankings are critical for playoff qualification and seeding. But there is often debate around which teams are truly the strongest.

- Besides ranking teams, analytics can help predict game and season outcomes based on team strengths. But randomness and underdog stories still occur.

In summary, quantitatively ranking teams is challenging but can help assess relative team quality. However, the "best" teams are not always obvious and rankings remain hotly debated.

 

- Team strength ranking is challenging in sports like NBA due to unbalanced schedules and unequal abilities. 

- One method is unidimensional scaling using win/loss data to create a matrix of paired comparisons. This is converted to proportions and adjusted for strength of schedule to get interval scale scores.

- Elo system adapted from chess rankings is another method using win/loss data. 

- Margin of victory or point differentials can also be used, adjusting for uneven schedules.

- Other approaches separate offensive and defensive performance measures. 

- Multivariate methods account for performance on many measures across positions.

- Managers use player drafts, trades, etc along with performance data to select player additions that improve team ranking. This is a constrained optimization problem.

- Extensive literature exists on ranking methods for sports teams, including NCAA March Madness seeding. Paired comparison methods have long history in psychometrics and statistics.

 Here are the key steps:

- An NBA scores dataset is loaded and explored. Minutes played are calculated based on overtime. 

- Team information is joined and winning team is identified based on points per minute.

- Matrices are created to tally wins, sum points per minute, and compute win proportions between all teams.

- Unidimensional scaling is applied to rank teams based on strength of schedule adjusted win proportions. 

- Teams are assigned scores from 500-1000 and plotted from lowest to highest.

In summary, this performs an analysis on NBA game data to rank teams using unidimensional scaling while accounting for strength of schedule.

 Here are a few key points about using a training-and-test regimen to evaluate predictive models:

- The complete data set is partitioned into separate sets for training, validation, and testing. 

- The training set is used to develop candidate models. Different modeling techniques, parameters, and variable subsets can be explored.

- With a two-way partition, the test set is used to evaluate the performance of the models developed on the training set. The model with the best performance on the test set is selected.

- With a three-way partition, a separate validation set is used to evaluate the candidate models. The best performing model on the validation set is selected, then evaluated again on the test set.

- The test set provides an unbiased evaluation of the final selected model. Since the test data was not used in model selection, it simulates new data to assess generalization performance.

- Multiple rounds of training, validation, and testing can be done using techniques like cross-validation to reduce variability and increase robustness.

- Key model evaluation metrics include accuracy for classification and error measures like MSE for regression. The same metrics should be used consistently across training, validation, and testing.

- The goal is to select a model that generalizes well to new data, avoiding overfitting to the training data. The testing regimen helps achieve this.

 

- Predictive modeling involves using data to make predictions about future outcomes. Measures of past performance are used as explanatory variables to predict future performance. 

- Various modeling techniques can be used, including linear regression, tree-structured regression, neural networks, and ensemble methods that combine multiple models. The goal is to find the model that provides the most accurate predictions.

- A training-test approach is used to evaluate predictive models. The data is split into training and test sets. The model is built on the training data and evaluated on the test data. Techniques like cross-validation and bootstrap resampling can help improve model evaluation.

- Accuracy metrics like mean squared error and R-squared are used to assess model performance. The coefficient of determination (R-squared) measures the proportion of response variance explained by the model.

- For sports, game-day simulation can be used to convert predicted scores into win-loss probabilities. The proportion of correct win-loss predictions indicates the model's predictive accuracy. 

- The best predictive models provide a competitive advantage by more accurately forecasting future performance and outcomes.

 Here are the key points from the basketball example in the passage:

- In game 3 of the 2015 NBA Finals, Kyrie Irving was out with an injury. LeBron James played nearly the entire game (46 of 48 minutes) and scored 40 points to lead the Cavaliers to a win over the Warriors. 

- For game 4, Warriors coach Steve Kerr made a strategic adjustment, having Andre Iguodala start in place of center Andrew Bogut. This smaller lineup neutralized LeBron James. 

- Iguodala played excellent defense on LeBron, holding him to 20 points. The Warriors won game 4 decisively. 

- The example illustrates how in-game coaching decisions like lineup adjustments can be critical, especially in pivotal games of a playoff series. Strategic moves can change the course of a game and potentially the championship.

In summary, the passage uses an example from the 2015 NBA Finals to show how important coaching strategy and in-game adjustments are in basketball. The Warriors' insertion of Andre Iguodala into the starting lineup in game 4 disrupted LeBron James and Cleveland, leading to a lopsided Warriors win.

 Here is a summary of the entertainment options and their similarities:

- There are 7 entertainment options considered: Comedy, Symphony, Zoo, Pop Music, Museum, Hockey, Football

- A dissimilarity matrix was constructed with distances (on a scale of 1-21) between each pair of options. 

- Larger distances indicate more dissimilarity between the options.

- Some observations:
  - Symphony and Museum are most similar (distance of 2)
  - Hockey and Football are most similar (distance of 1) 
  - Hockey and Museum are most dissimilar (distance of 21)

- This dissimilarity matrix can be used to create a positioning map, with more similar options placed closer together.

- The data provides a way to see how the entertainment options relate to each other and can help with marketing strategy and understanding consumer preferences.

The matrix values suggest a two-dimensional configuration or map. We can use multidimensional scaling to find coordinates for each activity that preserve distances between activities as well as possible. With just seven activities we can find coordinates by trial and error. Figure 6.1 shows a configuration that approximates the dissimilarities in Table 6.1.

We call such a map a perceptual map because it displays perceptions of similarity and difference. It shows how consumers view competing products or services in their minds. Products near one another compete more directly than products far removed from one another on the map.

72

Sports Analytics and Data Science

Figure 6.1. Perceptual map for entertainment events and activities. Larger distances between points correspond to greater dissimilarity between activities.

So consumers likely view comedy and pop music as close substitutes. They are unlikely to consider comedy and hockey close substitutes. And they view hockey and football as very similar. Data on consumer characteristics and past choices of events to attend can help in understanding demand for entertainment activities. But the map itself offers initial perspective on the competitive environment.

The map suggests promotion partnerships. Comedy venues might partner with pop music venues. Hockey teams and football teams attract a similar audience, one very different from those going to the symphony or museum. Co-promotion opportunities exist. Advertisers can consider reaching both sports fans and classical music enthusiasts by advertising with the local hockey team and the symphony.

So we see that a simple matrix of similarity scores leads to a useful visualization of the entertainment space. The map suggests co-promotion opportunities and guides design of promotional campaigns.

Chapter 6. Crafting a Message

73

We now turn to consideration of fan segments for a professional sports team. Sports teams have a core geographic fan base, but also draw fans locally from various demographic groups. Visiting fans come as well. A pro sports team needs to understand its fan base. Customer analytics can inform marketing strategy. We will illustrate basic data science methods that teams can use to enhance knowledge of fans and customers.

Suppose survey data are obtained from a sample of 4,000 fans of a professional basketball team. For each fan we have demographic variables—age, income, gender, distance from arena. We also have fan behavior variables—number of games attended, amount spent on concessions, amount spent on merchandise. And we have customer satisfaction measures.

With the available variables we can proceed to cluster fans into segments. Cluster models identify fans who are similar to one another across the set of variables. Once clusters are obtained, we can profile the clusters. The clusters represent fan segments. Table 6.2 provides a cluster summary for our illustration.

Table 6.2. Fan Segments for a Professional Basketball Team

Segment

Size

Label Description

1 1350 Diehard fans

High satisfaction, many games, older, high spend

2 900 Senior fans 

Older fans, moderate spend and satisfaction

3 850 Young professional fans

Young, moderate-to-high income, moderate spend

4 900 Budget fans

Limited income, look for bargains

The fan segmentation provides perspective on the customer base. Marketing initiatives can then be tailored to the needs of each segment. Our example has only four segments, but 15 segments or more may emerge in studies of larger fan populations. Sports organizations employ customer analytics professionals and also purchase syndicated data on fans and media markets.

In major markets we find competition among sports for fans and sponsors. Developing an understanding of the sports landscape is important. Relationships among competing and complementary sports properties can be assessed with proximity measures.

Consider fan behavioral data for ten major sports properties within a metropolitan market:

- MLS Soccer Team 

- MLB Baseball Team

- NBA Basketball Team  

- NFL Football Team

- AHL Hockey Team

- WNBA Basketball Team

- AAA Baseball Team

- USL Soccer Team

74

Sports Analytics and Data Science

- PGA Tour Event

- LPGA Tour Event

For each pair of teams or events, we have measures of fan behavior overlap. These pairwise measures of fan behavioral overlap might include:

- Percentage of fans of team A who also attend games for team B

- Correlation between game attendances for events A and B

- Percentage of fans of team A who follow team B on social media

From these statistics, we can construct a distance matrix as in our earlier entertainment example. Multidimensional scaling again gives us a two-dimensional map. Examination of fan behavior statistics for segment pairs allows us to profile distances on the map. Figure 6.2 provides an example.

Figure 6.2. Competition and fan overlap for sports properties. Proximity indicates degree of fan behavior overlap.

The perceptual map indicates strong overlap between men’s and women’s professional basketball. Fans of minor league baseball show little overlap with fans of other sports. Women’s professional golf overlaps more with women’s professional basketball than with men’s professional golf. And so on. The observed proximities guide marketing strategy for the various sports organizations.

Chapter 6. Crafting a Message 

75

Marketing analytics encompasses the full range of quantitative methods for examining company's marketing strategy. As we have illustrated, customer segmentation and market structure analysis represent just two facets of marketing analytics. Review articles on marketing analytics include Lilien (2011), Wedel and Kannan (2016), Hanssens (2018), and Erevelles, Fukawa, and Swayne (2016). Textbooks covering marketing analytics include Wierenga (2011) and Keane and Wang (1995).

Rapid advances in information technology enable sports teams to pursue innovative marketing partnerships and promotions. Daily fantasy sports leagues represent one prominent marketing innovation. Fantasy sports fans pay fees to construct teams from among active players. Daily fantasy leagues attract fans by offering contests with daily payouts. 

The business of fantasy sports requires close attention to fan preferences. Which types of contests will fans enter? What contest formats and entry fees are optimal? Marketing experiments inform the design of fantasy game offerings. Business analytics guides marketing of fantasy sports.

Customer analytics also has a role to play regarding in-game promotions. In baseball, programs for assigning promotions across games and half-innings can be optimized. The optimization balances likely fan engagement for each promotion with constraints—budgets for various promotions, avoiding repetition, and tying promotions to particular game situations. 

Sports organizations employ analysts and purchase data products and services to support marketing programs. Those interested in sports marketing will find a wealth of information online at industry sites including:

- [Navigate Research](http://navigateresearch.com) 

- [Team Marketing Report](https://www.teammarketing.com)

- [Sponsorship Analytics](https://sponsorshipanalytics.com)

- [GumGum Sports](http://gumgum.com/sports)

- [Fancam](https://fancam.com)

- [SAS Sports Marketing](https://www.sas.com/en_us/industry/sports.html)

We close our chapter with a quote from Green Bay Packers legend Vince Lombardi that encapsulates the relationship between sports organizations and their fans:

“I firmly believe that any man’s finest hour, the greatest fulfillment of all that he holds dear, is that moment when he has worked his heart out in a good cause and lies exhausted on the field of battle – victorious.”

The sports analytics discussed in this chapter help teams work smarter in pursuing success and in building bonds between teams and fans.




 Here are the key points from the passage:

- Arity judgments are useful for categories defined by style, look, odor, or flavor. The resulting dissimilarity matrix can be input to multidimensional scaling to produce positioning maps, or to cluster analysis to group similar products. 

- Multidimensional scaling uses dissimilarities/distances to produce a positioning map showing relationships between products. The orientation of the map is arbitrary. 

- Cluster analysis groups similar products into clusters. Products within a cluster are more similar to each other than to products in other clusters.

- Positioning maps are useful for product planning and competitive analysis. Open areas may represent opportunities for new products. 

- Conjoint analysis presents product profiles to consumers defined by attributes. By ranking/rating/choosing products, consumers reveal preferences and importance of attributes. Allows understanding of tradeoffs in choice.

- Choice-based conjoint presents choice sets and has consumers choose. Allows estimation of choice models and market share simulation. Captures substitution patterns.

- Conjoint methods yield quantitative insights into consumer preferences to guide product design, pricing, and positioning. Help understand tradeoffs consumers make.

 Here are the key points from the passage:

- Conjoint analysis is a technique to model consumer preferences and predict purchasing behavior based on how people rate or rank different product attributes. 

- It estimates part-worth utilities for each attribute level, which indicate the strength of preferences. Positive part-worths increase product value, negative part-worths decrease it.

- By comparing part-worth ranges across price levels, you can calculate willingness to pay. Each unit of part-worth has a dollar value. 

- Choice-based conjoint includes a "none" option and uses discrete choice modeling to estimate part-worths.

- Conjoint analysis can identify market segments, predict choices, and simulate market outcomes under different product designs and pricing.

- Buyers and sellers interact in a market. Data science studies buyer segments and behavior. 

- A team's market extends beyond its home city through national branding and media. Media expand reach for small-market teams.

- Data science methods like conjoint analysis are relevant for professional sports marketing as they are for other consumer markets.

 

- N (1958) provided early in-depth treatments of multidimensional scaling (MDS). 

- Traditional MDS methods build on a paired comparison preference matrix and can be used for data from paired comparisons, rank orders, best-worst scaling, choice studies, pick lists, etc.

- There are many good sources for learning about MDS (e.g. Davison 1992; Cox & Cox 1994; Carroll & Green 1997; Borg & Groenen 2010). 

- Lilien and Rangaswamy (2003) discuss methods for joint mapping of perception and preference.

- R software for MDS is described in Venables and Ripley (2002). 

- Multivariate methods are reviewed in sources like Seber (2000), Manly (1994), Sharma (1996), Gnanadesikan (1997), Johnson & Wichern (1998), and Izenman (2008). 

- Principal component biplots allow plotting of consumers and products/brands in the same space (Gabriel 1971; Gower & Hand 1996).

- Conjoint analysis focuses on the demand side and was originally developed by Luce and Tukey (1964). Orme (2013) provides a comprehensive review.

 Here is a summary of the R code in Exhibit 6.3:

The code is doing conjoint analysis to analyze consumer preferences for sporting event attributes like price, seating, promotions, etc.

It first loads the support.CEs package for survey design.

It uses the Lma.design() function to generate a balanced set of product profiles for the survey. 

The questionnaire() function prints the survey design. 

A spine.chart() function is defined to visualize the part-worth utilities and importances from the conjoint analysis.

The conjoint model is estimated somewhere outside this code snippet. 

The part-worth utilities and importances are passed to the spine.chart() function which handles the plotting.

Key steps:

- Generate balanced product profiles for conjoint survey
- Print survey design 
- Define spine chart plotting function
- Pass conjoint results to spine chart function 
- Handle plotting of part-worth utilities and importances

In summary, the code generates a conjoint survey design, estimates the model, and visualizes the results using a custom spine chart function.

 This code performs conjoint analysis on ranking data from a sporting event survey. It fits a linear regression model with main effects for the attributes (price, seating, etc.), extracts the model coefficients to compute part-worth utilities and importance values for each attribute, and stores results in a list structure. The code then prepares for plotting the results by ordering attributes from most to least important, computing ranges to scale the plot, and defining various plot aesthetics like colors and symbols. It contains snippets to print the part-worth utilities and importances onto the plot. There are also functions for mapping attribute names and computing respondent internal consistency. Overall, this implements a full conjoint analysis workflow from data to plots.

 Here's a high-level summary of the bobbleheads and Dodgers example:

The goal is to learn about the effect of promotions like bobbleheads on attendance at Dodgers games. Relevant data from the 2012 MLB season is analyzed, including game dates, attendance, day of the week, opponent, weather, and whether promotions like bobbleheads, fireworks, caps, or shirts were held. 

Exploratory data analysis using boxplots reveals attendance patterns by day of week (higher on weekends) and by month (higher in summer). The data shows 11 bobblehead giveaways were held, primarily on Tuesday nights.  

To formally evaluate the effect of promotions on attendance, regression modeling or other statistical techniques could be applied with attendance as the response and promotions as predictor variables. The analysis would quantify the increase in attendance attributable to promotions.

Additionally, the Dodgers could experiment by varying the timing of promotions to see which maximize attendance. The findings would help optimize use of bobbleheads and other promotions.

 Here is a summary of the linear regression model results for predicting Dodgers attendance using month, day of the week, and bobblehead promotions:

- The model explains about 45% of the variance in attendance (R-squared = 0.447). This indicates a moderately strong relationship between the predictors and attendance.

- Month and day of the week were both statistically significant predictors of attendance (p < 0.05), meaning these variables help explain variations in attendance. 

- The bobblehead promotion variable was also statistically significant (p = 0.012). The estimated effect was an increase in attendance of 10,715 when bobbleheads were given away.

- The model equation is: 

Predicted Attendance = Intercept + 10,715 (if bobblehead promotion) + Effects of Month + Effects of Day of Week

- The intercept represents the baseline attendance when all predictors are zero. The month and day coefficients quantify how attendance tends to differ by month and day respectively. 

- Overall, the model indicates bobblehead promotions have a sizable positive effect on Dodgers attendance, even after controlling for monthly and day-of-week effects. The predicted attendance increase of over 10,000 fans per bobblehead game is economically meaningful.

In summary, the model provides evidence that bobblehead promotions are effective at boosting attendance for the Dodgers, suggesting it is a profitable promotional tool for them to use. The model enables predicting the incremental impact of adding bobblehead giveaways to the schedule.

 

- The Los Angeles Dodgers can assess the financial contribution of bobblehead promotions through cost/volume/profit analysis. 

- The unit cost per bobblehead doll is expected to be no more than $3 when ordered in quantities of at least 20,000. 

- Bobbleheads are given to the first 50,000 fans entering Dodger Stadium.

- We would estimate the additional revenue from increased ticket sales and concessions due to the bobblehead promotion. 

- We would subtract the cost of the bobbleheads and any additional staffing costs.

- This would give the estimated profit contribution from the bobblehead promotion.

- Regression analysis indicates bobblehead promotions increase attendance by about 10,700 fans on average.

- The financial contribution would depend on the additional revenue generated by these extra fans minus the costs of the promotion.

- Cost/volume/profit analysis is a useful technique to assess the profit impact of promotional activities like bobbleheads.

 Here are a few key points to summarize the dialogue:

- Roy views the golf swing as a kind of poetic, artistic movement. He describes the grip, backswing, weight shift, and tempo in poetic terms. 

- Perfection is unattainable in the golf swing, according to Roy. There is always room for improvement.

- Roy's own swing has a "short follow-through" which gives it an "unfinished look." This seems to represent that he views himself and his golf journey as unfinished works in progress.

- The golf swing and Roy's life journey are paralleled through his poetic descriptions. His "unfinished business" refers to both his golf swing and his broader life path.

- Molly is trying to understand Roy's perspective on golf and life. Her questions prompt him to elaborate poetically on his outlook.

In summary, Roy takes a poetic, artistic view of golf and life, emphasizing the continuous journey toward improvement and fulfillment rather than final perfection. His golf swing and his "unfinished business" are metaphors for this perspective.

 

- Winning is important in professional sports, but not the only factor driving business success. Marketing strategy and tactics like branding, customer retention, and pricing also matter. 

- Data science can help identify and target valuable customer segments through analytics like cluster analysis of demographic, psychographic, and behavioral data. 

- Market segmentation divides consumers into groups based on similarities that are relevant for marketing strategy. Useful segments are identifiable from available data and large enough to pursue.

- Target marketing focuses marketing efforts on the most profitable segments or individual customers. This requires tracking sales and costs at the individual level to compute lifetime value and return on investment.

- Overall, data science supports sports business growth by enabling more strategic and effective marketing through customer insights and targeting.

 

- Target marketing involves identifying useful factors to predict responses like sales or customer behavior using regression and classification models. 

- Customer lifetime value analysis evaluates the expected future cash inflows and outflows for each customer to determine if it is profitable to retain them.

- Direct marketing experiments allow testing of different offers and advertising to see which yield the highest response rate and profit. 

- Pricing research examines what consumers are willing to pay, their price expectations, and price sensitivity. This helps set optimal ticket prices.

- Estimating price elasticity of demand is challenging but provides insight into how quantity demanded changes with price changes. 

- Methods like monadic tests estimate willingness to pay and price sensitivity across different price points.

- Ticket pricing is complex because stadia have many seating and ticket classes, but mathematical programming can help maximize revenues.

 Here are a few key points about managing finances in sports:

- Sports teams operate under budget constraints like any business. Revenue sources include ticket sales, media deals, sponsorships, etc. while expenses include player salaries, staff, facilities, etc. 

- Teams in leagues with salary caps, like the NFL and NBA, must construct rosters without exceeding the cap. This requires careful allocation of resources. Teams use analytics to find undervalued players who can provide value within their budget.

- In uncapped leagues like MLB, big market teams with more revenue can spend more on payroll. Small market teams with less revenue must be smarter with their budgets to compete, like the Oakland A's in Moneyball. Analytics help find bargain players.

- Sports finance analytics also involves tasks like forecasting expected revenues/expenses, analyzing investment decisions like stadium construction, and assessing player value to determine contract offers.

- Many techniques like regression modeling, optimization, and Monte Carlo simulation can be used. The key is finding ways to maximize on-field performance given a team's financial realities through smart management and analytics.

In summary, managing finances is crucial in sports. Teams use analytics to make optimal spending decisions within their budgets in order to field the most competitive rosters possible.

 

- Sports teams make decisions to acquire new players to help the team score more runs or points and win more games over a planning horizon (e.g. a season). 

- Acquiring a player has costs - their salary, signing bonus, etc. Dropping a player also has costs if they still get paid after being released.

- There are constraints like total roster size and positions that affect which players can be acquired.

- Mathematically, this is an optimization problem of maximizing team performance subject to constraints. But in practice it is challenging due to uncertain costs and player contributions.

- Simple cost-volume-profit analysis can be useful for narrow decisions like food concessions, but not for major investments like player contracts.

- Discounted cash flow analysis is better for evaluating long-term investments like stadium upgrades and star player contracts. It considers how costs and revenues play out over time, accounting for the time value of money.

- An example analysis for Clayton Kershaw's contract shows how projected costs and revenues over the contract term can be evaluated to assess if he is a good investment for the Dodgers.

 You raise some excellent points about dealing with uncertainty in sports management decisions like investing in a franchise or constructing an optimal roster. Here are a few key takeaways:

- Decision analysis provides a structured framework for evaluating choices under uncertainty. Estimating probabilities and outcomes is challenging but Bayesian methods can help update subjective beliefs with data. 

- Constrained optimization problems like roster construction have uncertainty in key parameters like player value/contribution. Some options:

- Simplify by using fixed contract costs and approximate player values. But this ignores uncertainty.

- Use probability distributions for uncertain parameters in a stochastic optimization model. Computationally intensive but represents uncertainty.

- Build different scenarios with ranges for key parameters. Optimize each scenario to see range of potential solutions.

- Employ robust optimization techniques that optimize for the worst case given parameter uncertainty. Conservative but less sensitive.

- Use machine learning models to predict player performance and value using historical data. Still has prediction error but can quantify it. 

- Run many optimizations using sampled or simulated parameters based on probability distributions. Examines distribution of solutions.

- No perfect solution, but quantifying uncertainty allows more informed decisions. Combining optimization techniques with simulation and machine learning is a leading edge approach. The key is being transparent about assumptions and limitations.

 Here is a summary of the key points about using simulations to predict game outcomes:

- Simulations use past game data to generate hypothetical future game outcomes. This is similar to how fantasy sports match up players from different eras. 

- Computer programs are used to run simulations, utilizing historical player and team statistics. Randomness is introduced so each simulated game has a distinct outcome.

- For the example of predicting outcomes for the 2007 Mets vs Yankees series, past game data from earlier that season is used. Runs scored in away games are used for the Mets and home games for the Yankees. 

- Fantasy-style simulations with players from different eras are not appropriate here. The goal is to use recent team data to estimate likely outcomes for the specific upcoming games.

- A large number of simulation runs are needed to estimate win probabilities. A few games, like the May 2007 Mets-Yankees series, don't provide enough data.

- Simulations account for context like home field advantage and designated hitter rules. The upcoming games were at Yankee Stadium with the DH.

- In summary, recent team data is simulated many times to estimate probabilities of different outcomes for specific upcoming games. This is more rigorous than using just a few recent head-to-head games.

 

- Simulations can be used to estimate the probability that one team will beat another in a game or series. 

- A simple game-day simulation draws random samples from each team's empirical distribution of runs scored to simulate games. The winner of each simulated game is counted to estimate win probabilities.

- A more balanced simulation considers both offense (runs scored) and defense (runs allowed). It draws random samples from the empirical distributions of runs scored and allowed by each team. 

- Probability distributions like Poisson and negative binomial can model runs scored. Negative binomial often fits better than Poisson because it allows more variability in scoring rates.

- Theoretical probability distributions can also be used in the simulation rather than just empirical distributions. Paired random draws from theoretical distributions for each team's scoring can simulate games.

- Simulations become more realistic by incorporating additional factors like home vs away and whether a DH is used. But even simple simulations can provide useful win probability estimates.

 Here is a summary of the key points about strategic modeling techniques in sports:

- Mathematical models based on probability theory provide proven solutions and a foundation for in-game strategic analysis. Examples include run expectancy and state-to-state transition probabilities in baseball. 

- Discrete event simulation models flexible real-world solutions by generating outcomes from probability distributions. It simulates plays and events sequentially, with each outcome setting up the next event. The Mets vs Yankees simulation is an example.

- Agent-based simulation builds on discrete event simulation by modeling individual players as agents. Players differ in attributes like athleticism, technique, positioning, and in-game objectives defined by managers. This allows exploration of strategic alternatives when players interact.

- Mathematical models prove solutions, discrete event simulation demonstrates solutions by sampling from distributions, and agent-based simulation explores strategic alternatives when adaptive agents interact.

- These techniques move from theoretical models to data-driven simulation to strategic exploration of complex systems with many interacting parts. Agent-based modeling has potential for modeling complexity and exploring sports strategies.

 Here are a few key points summarizing the information about working with sports data:

- Information technology has advanced rapidly, with more powerful computers, distributed databases, and data collection devices like wearables. 

- Sports teams use wearables and sensors to collect physiological and performance data on players for training, lifestyle monitoring, and in-game use when permitted.

- Professional leagues are tracking spatial data on player and ball positions during games, collecting large datasets to enable analysis of performance.

- Baseball tracks pitch and player data at 30 times per second. Basketball tracks player and ball data 25 times per second. 

- The data allows new analysis of player abilities in areas like fielding, base running, batting, pitching, and more. 

- The scale of spatial tracking data enables new modeling and analysis opportunities using spatio-temporal analysis techniques.

- Overall, new sources of sports data from sensors, wearables, spatial tracking systems, and more are enabling teams to analyze player performance in much greater detail than ever before. Working with large, complex sports data requires using the latest data science techniques and advanced analytics.

 Here is a summary of the key points about working with sports data:

- Professional sports teams need to monitor a wide variety of data sources to understand fan sentiment, media coverage, and player performance. This includes social media, talk radio/TV, sports writers, player tweets, etc. 

- Automated, real-time data collection and analysis is needed to keep pace with the large volume of data.

- Data science brings together statisticians (R) and IT professionals (Python). It is beneficial for sports analysts to know both languages. 

- R provides tools for modeling and visualization, while Python offers general purpose programming capabilities. Sometimes it is best to use R, other times Python.

- Technology solutions have layers (stacks). Applications in Python/R rely on lower level languages like Java, C++, etc. that interact with operating systems and databases. 

- Sports analysts rely on internal (performance, health) and external (web, social media) data sources. They use this data to provide analytics to team management.

- The web is a critical source of external data. It grew out of earlier networks like ARPANET and Usenet, enabled by networking protocols and the combination of hypertext and networking (World Wide Web, HTML).

 

- The web is a massive source of unstructured and semi-structured data that can be collected through focused crawling, scraping, and parsing. This facilitates web-based secondary research. 

- Social media data can be obtained through APIs and provide opportunities for social network analysis and sentiment analysis.

- Unstructured, semi-structured, and structured data from various sources can be persistently stored in databases and files for further analysis. 

- Relational databases support structured storage while NoSQL databases provide scalability. A variety of query and analysis tools can gather information across distributed systems.

- When doing data science, it is important to select representative data, refrain from changing data to conform to expectations, appreciate natural variability, understand sources of error, quantify uncertainty, and draw conclusions consistent with the data.

 Here is a summary of the Python code in Exhibit 11.1:

The code implements a simple web crawler and scraper to extract text from a single website. It uses the Scrapy framework and Requests library.

The main steps are:

- Import necessary libraries (Scrapy, Requests)

- Define the crawl spider class (ToutBaySpider) which specifies the allowed domain and URLs to crawl

- Specify a callback method (parse) to handle the response and extract paragraph text 

- Instantiate the spider and configure settings

- Call the crawl method to start crawling the allowed URLs 

- Handle the response in parse method:
  - Extract all paragraph text using XPath
  - Yield scraped text

- Run spider and write results to text file

So in summary, it defines a focused crawler, handles the response to extract relevant text, and stores the scraped text. The code sticks to a single site to avoid getting blocked as a spam crawler. It shows a simple example of focused web scraping.

 Here is a summary of the Python code in Exhibit 11.2:

The code uses the twitter Python library to search Twitter's API for tweets containing the phrase "football injuries". It authenticates using OAuth credentials, searches Twitter using the twitter_search function, and retrieves up to 200 tweet results. 

The results are processed to write out three files:

- my_tweet_file.json - Each tweet result is written as a separate JSON object on its own line.

- my_tweet_review_file.txt - The full JSON for each tweet is printed with indentation for easy review. 

- my_tweet_text_file.txt - Only the text contents of each tweet is extracted and written out.

So in summary, it searches Twitter for relevant tweets, retrieves results, processes the JSON tweet data, and writes out files in formats ready for further analysis. The code provides examples of working with the Twitter API, processing JSON objects in Python, and writing results to files.

 Here are some of the key data science methods that are relevant for sports analytics:

- Exploratory data analysis and visualization: Examining datasets to understand distributions, relationships, outliers, etc. Useful for getting insights from performance data, injury data, fan engagement data, and more. 

- Statistical modeling: Building models to understand relationships between variables, make predictions, etc. Methods like regression, time series analysis, and survival analysis are applicable in sports contexts.

- Machine learning: Supervised learning methods like regression, classification, and clustering can be used for predictions and pattern recognition tasks with sports data. Algorithms like neural networks, random forests, and support vector machines are commonly used. 

- Simulation: Simulating games, seasons, drafts, trades, etc. to estimate probabilities and expected values. Useful for strategy evaluation and decision support.

- Optimization: Techniques like linear programming, integer programming, and heuristic methods can help solve scheduling, resource allocation, and other optimization problems faced by sports teams/leagues. 

- Text mining: Extracting insights from unstructured text data like social media, news, scouting reports. Can use methods like topic modeling, sentiment analysis, named entity recognition.

- Network/graph analysis: Analyzing networks like player/team interaction networks, sponsor/fan networks. Helps understand connections and influence.

- Forecasting: Predicting future performance, revenues, engagement etc. using methods like ARIMA, neural networks, ensembles. 

In summary, data scientists have a diverse toolkit of methods that can provide meaningful insights for sports teams and organizations. The key is matching the right techniques to the analytics questions at hand.

 Here are some key points about mathematical programming and its applications in sports analytics:

- Mathematical programming refers to optimization problems with an objective function to maximize or minimize, subject to constraints. Key methods include linear programming, integer programming, and mixed integer programming. 

- In sports, mathematical programming can be used for tasks like roster construction, lineup optimization, and scheduling, where there are constraints like salary caps, roster size limits, etc.

- Parameters like costs and constraints are often uncertain in real applications. Approaches to deal with uncertainty include sensitivity analysis, stochastic programming, and obtaining best-case/worst-case solutions.

- Mathematical programming provides a structured way to model complex resource allocation and planning problems in sports. The optimization solutions serve as inputs to guide decision making.

- Implementations rely on optimization software and programming languages like R. There are many applications in sports operations, roster management, scheduling, and analytics.

- Overall, mathematical programming is a versatile modeling approach for sports analytics problems involving optimal resource allocation under constraints. It provides quantitative decision support, though judgment is still needed to account for uncertainty.

 Here is a summary of key points about regression and classification in data science:

- Regression is used to predict a response variable that is continuous or has meaningful magnitude. Common regression methods include linear regression, Poisson regression for count data, and survival/duration models that handle censoring. 

- Classification is used to predict a categorical response variable or class membership. Common classification methods include logistic regression, discriminant analysis, naive Bayes classifiers, decision trees, random forests, and support vector machines.

- Regression and classification are forms of supervised machine learning, where a model is trained on labeled examples. The model learns the relationship between input features and the target variable. 

- Linear regression models the relationship between variables using a linear equation. The predictor is linear in its parameters but may involve nonlinear transformations of variables.

- Many advanced methods like neural networks can be used for both regression and classification tasks. The difference lies in the coding of the target variable and the loss function optimized during training.

- Model performance is evaluated differently for regression and classification. Regression uses error metrics like MSE, while classification examines metrics like accuracy, precision, recall, and ROC curves.

- Advanced methods like ensemble models and deep learning often perform better than traditional linear models, but linear models remain popular due to interpretability and computational efficiency. The choice depends on the goals and tradeoffs of the application.

 

- Generalized linear models (GLMs) extend linear regression to handle non-normal response variables like binary, count, and categorical data. 

- GLMs have three components: 
 1) A random component specifying the response distribution (e.g. binomial, Poisson)
 2) A systematic component specifying a linear predictor (Xβ) 
 3) A link function that links the expected value of the response to the linear predictor (e.g. logit, log, identity)

- Common GLMs include logistic regression, Poisson regression, log-linear models. These handle binary, count, and categorical data respectively. 

- GLMs are fit by maximum likelihood estimation rather than ordinary least squares. 

- Model evaluation uses metrics like deviance and AIC rather than R-squared. 

- Logistic regression is used for binary classification. Extensions handle multi-class problems.

- Proper evaluation of classifiers requires metrics like precision, recall, and ROC curves rather than just accuracy.

 Here is a summary of key points about data mining and machine learning:

- Data mining refers to the application of algorithms to extract patterns and models from data. It is closely tied to machine learning.

- Machine learning develops algorithms that can learn from data and make predictions without being explicitly programmed. The models are data-driven rather than based on statistical assumptions.

- Machine learning methods include regression, classification, clustering, association rules, recommender systems, neural networks, and many others. 

- Machine learning models often outperform traditional statistical models, but can be harder to interpret ("black box" models).

- Benchmark studies are used to compare machine learning methods on sample datasets in order to select the best algorithms for a given problem. Cross-validation is used to estimate out-of-sample accuracy.

- Clustering is an unsupervised learning method that groups similar cases without predefined categories. It explores the natural structure of the data.

- Key differences from traditional statistics: data-driven rather than model-driven, handles very large datasets, makes few assumptions about underlying distributions.

- Machine learning provides flexible nonlinear models and better predictive accuracy, while traditional statistics provide inference, measures of uncertainty, and model interpretability. The two approaches complement each other.

 Here is a summary of the key steps in creating a terms-by-documents matrix from a text corpus:

1. Extract the text documents that will make up the corpus. This could come from web scraping, databases, files, etc. 

2. Preprocess the documents. This involves steps like:

- Tokenization - splitting the text into individual words/tokens

- Removing stop words - common words like "the", "and", etc. that don't add semantic meaning

- Stemming - reducing words to their root form (e.g. "running" becomes "run") 

3. Create a vocabulary of terms. This is the set of all unique stems/tokens that occur across the corpus. 

4. Construct the matrix. The rows correspond to the terms and the columns correspond to the documents. The values in each cell represent the frequency of that term in that document.

5. Weigh the matrix (optional). This assigns weights to each term based on its importance. Common schemes include binary weighting (1 if term appears, 0 if not) or TF-IDF weighting.

6. The resulting matrix maps terms to documents, allowing various analyses like clustering documents, finding similar documents, modeling topics, etc. The matrix acts like an index into the corpus.

In summary, the key steps are preprocessing the text, extracting a vocabulary, constructing a frequency matrix, and optionally applying weighting schemes. This creates a quantitative representation of the text that enables further analysis. The matrix maps the unstructured text data into a structured format.

 Here are the key points about text analytics and sentiment analysis:

- Text analytics involves analyzing and extracting information from text data using natural language processing, text mining, and machine learning techniques. Useful methods include document classification, summarization, relationship extraction, sentiment analysis, etc. 

- Sentiment analysis, also called opinion mining, aims to determine the attitude, opinions, or emotions expressed in a text. Common approaches include using sentiment lexicons, machine learning on labeled data, and semi-supervised learning.

- Key challenges in sentiment analysis include handling negation, sarcasm, domain specificity, multidimensional sentiment, etc. Validating and interpreting sentiment scores also requires care.

- Sentiment analysis has many applications such as analyzing customer feedback, social media monitoring, understanding political discourse, predicting stock prices or movie revenues based on public sentiment.

- Overall, text analytics and sentiment analysis allow extracting insights from unstructured textual data. When done thoughtfully, they can reveal useful information about public opinion, consumer preferences, trends, etc. But care is needed in developing, validating and interpreting text-based measures.

 Here is a summary of the key points from the passage on time series, sales forecasting, and market response models:

- Sales forecasts are critical for business planning and budgeting. Accurate forecasts can greatly benefit management by revealing trends, competitive position, and the effects of promotions, pricing, etc. 

- There are many approaches to forecasting, including expert opinion, consensus, top-down and bottom-up methods, and analysis of past sales data.

- Time series models like ARIMA are useful for sales forecasting. Regression models can incorporate explanatory factors organized by time. Models should balance fit and parsimony. 

- Forecasting uncertainty increases for longer time horizons. The value of a model lies in its predictive accuracy.

- Time series regression examines relationships among variables organized by time, checking for autocorrelation in residuals. Time series analysis focuses on patterns in individual series over time.

- Applications include marketing mix models assessing price, promotion, etc. and advertising models examining carryover effects.

- Sales data are organized by observational unit, time, and space. Macroeconomic analysis considers national indicators over time. Econometrics provides relevant modeling techniques.

 Here is a summary of key points about data visualization in sports analytics:

- Data visualization is an essential tool for exploring, understanding, and communicating insights from sports data. Effective visualizations can reveal patterns, trends, and relationships that may not be obvious from looking at raw numbers. 

- Common visualization methods used in sports analytics include bar charts, line charts, scatterplots, heatmaps, radar charts, and network diagrams. The choice of visualization depends on the type of data and insights sought.

- Interactive data visualizations allow users to filter, zoom, highlight, and manipulate the data to gain further insights. Dashboards with multiple coordinated views are popular for exploring multidimensional sports data.

- Visual encodings like position, length, angle, color hue, color value, and size can be used to represent different attributes in the data. Effective visuals map data attributes to visual channels in a meaningful way.

- Principles of good visualization design include providing clear titles, legends, and axis labels; eliminating chart junk; choosing appropriate chart types; using colors deliberately; and designing for accessibility. 

- Sports data visualizations should focus on highlighting key trends, comparisons, and messages rather than decorating charts. Simplicity and functionality are preferred over flashy visuals with marginal value.

- Data visualization is a key component of sports analytics reports and presentations, allowing decision-makers to grasp key insights quickly. Interactive visualizations can be embedded in reports or built into customized dashboards.

- Effective sports data visualizations distill large complex datasets into clear, actionable insights. Visual communication of analytics is just as important as the underlying analysis.

 Data science is an eclectic discipline that incorporates techniques from many fields. 

- Data science draws on computer science for skills in programming, data structures, algorithms, and computation. Computing skills allow efficient processing of large data sets. 

- Data science utilizes mathematics for quantitative methods including statistics, optimization, and machine learning. Statistical methods allow drawing inferences and making predictions from data.

- Data science employs techniques from information science for data retrieval, extraction, linkage, and visualization. Information science provides tools to wrangle messy data into usable formats.  

- Domain expertise in a particular field is needed to formulate meaningful questions and interpret results. Subject matter knowledge gives context to apply data science techniques.

- Data science adopts concepts from the social sciences and humanities for critical thinking and communication. Ethics, transparency, and explanation are crucial when analyzing human data.

- Data science relies on design skills for effective visualization and presentation of findings. Good design makes results compelling and understandable.

In summary, data science integrates computer programming, statistical modeling, information management, domain knowledge, ethical reasoning, and communication design. This combination of diverse methods makes data science a versatile approach to gain insights from data across many fields.

 

- Data visualization is important for exploring data and communicating insights. Differential runs plots and moving fraction plots are two useful techniques for sports data. 

- Differential runs plots show the margin of victory over the course of a season, helping to identify winning and losing streaks. They can be created in R using standard graphics.

- Moving fraction plots show a team's winning percentage over a rolling window of games. They help identify periods of strong and weak performance. The ggplot2 package in R can create these plots. 

- The Oklahoma City Thunder data demonstrates how a moving fraction plot with a 12 game window reveals the team's performance trends during the 2014-15 NBA season.

- These plots enable exploration of sports data and communication of insights into team performance over time. R provides accessible tools for creating them.

 Here is a summary of the key steps:

1. Load libraries and define functions for plotting 

2. Convert lakers data frame columns to proper data types (date, time duration)

3. Filter data to remove jump ball rows 

4. Loop through each game date

5. For each game date, filter rows to only that game

6. Compute cumulative scores for each team 

7. Get team names and final scores

8. Create plot title text 

9. Create ggplot visualization with score steps, shaded periods, customized legend

10. Print each game's plot

In summary, it loops through each game date, prepares the data for that game, computes scores, and creates a customized ggplot visualization showing the progression of scores over time for that game. Key steps are data wrangling, filtering, computation, and customized plotting.

 Here is a summary of the teams in the major professional sports leagues in North America:

Women's National Basketball Association (WNBA) - 12 teams split into Eastern and Western conferences

Major League Baseball (MLB) - 30 teams split into American and National leagues, with three divisions in each league 

Major League Soccer (MLS) - 20 teams split into Eastern and Western conferences

National Basketball Association (NBA) - 30 teams split into Eastern and Western conferences, with three divisions in each conference

National Football League (NFL) - 32 teams split into American and National conferences, with four divisions in each conference

National Hockey League (NHL) - 31 teams split into Eastern and Western conferences, with four divisions in each conference

The key details are the number of teams, divisional alignment, and conference membership for each league. Let me know if you need any other specific information about the team names, abbreviations, locations, etc.

 Here is a summary of the NBA teams by conference and division:

Eastern Conference

Atlantic Division: 
New York Knicks (NYK), Philadelphia 76ers (PHI), Toronto Raptors (TOR)

Central Division:
Chicago Bulls (CHI), Cleveland Cavaliers (CLE), Detroit Pistons (DET), Indiana Pacers (IND), Milwaukee Bucks (MIL)  

Southeast Division:
Atlanta Hawks (ATL), Charlotte Hornets (CHA), Miami Heat (MIA), Orlando Magic (ORL), Washington Wizards (WAS)

Western Conference

Southwest Division:
Dallas Mavericks (DAL), Houston Rockets (HOU), Memphis Grizzlies (MEM), New Orleans Pelicans (NOP), San Antonio Spurs (SAS)

Northwest Division:  
Denver Nuggets (DEN), Minnesota Timberwolves (MIN), Oklahoma City Thunder (OKC), Portland Trail Blazers (POR), Utah Jazz (UTA)

Pacific Division:
Golden State Warriors (GSW), Los Angeles Clippers (LAC), Los Angeles Lakers (LAL), Phoenix Suns (PHX), Sacramento Kings (SAC)

 Here are the key points in summarizing "close a node":

- Closeness centrality measures how close a node is to all other nodes in a network, where closeness is based on the number of hops or links between nodes. 

- The more central a node is, the lower its total distance is to all other nodes.

- Nodes with high closeness centrality can quickly interact with all other nodes in the network.

- Closeness centrality can identify influential or well-connected nodes in a network.

- It is calculated by taking the reciprocal of the sum of the shortest distances from a node to all other nodes. 

- Nodes with higher closeness centrality have shorter paths to other nodes and are considered "closer" in the network.

So in summary, closeness centrality characterizes how close a node is to the other nodes in a network based on shortest path distances. It identifies central, influential nodes that can interact efficiently with the entire network.

 Here is a summary of key terms related to statistics:

Statistics - The practice or science of collecting and analyzing numerical data in large quantities. 

Descriptive statistics - Methods for organizing, summarizing and presenting data, such as averages, dispersion, histograms. Do not draw inferences.

Inferential statistics - Methods for using a sample to make inferences about a population. Includes estimation and hypothesis testing.

Parameter - A summary statistic describing a population characteristic. 

Statistic - A summary statistic calculated from a sample. Used to estimate a parameter.

Probability - A number between 0 and 1 describing the chance of an event occurring.

Random variable - A variable representing an outcome of a probabilistic experiment. 

Distribution - A description of the possible values of a random variable and their probabilities. Examples: normal, binomial.

Mean - A measure of central tendency. The arithmetic average of a set of values.

Variance - A measure of dispersion. Quantifies how far values are from their mean. 

Standard deviation - The square root of the variance. Measures spread in original units.

Hypothesis test - A procedure for determining if sample data provides evidence against a hypothesis about a population parameter.

P-value - The probability of obtaining results as extreme as those observed, assuming the null hypothesis is true. Used to determine statistical significance.

Confidence interval - An estimated range of values for an unknown population parameter. Constructed using sample data.

Correlation - Association between two variables. Values range from -1 to 1. Positive values imply a direct relationship, negative values an inverse relationship.

Regression - Estimating the relationship between a response (dependent) variable and one or more explanatory (independent) variables. Used for prediction.

Analysis of variance (ANOVA) - Compares means across two or more groups. Used to determine statistical significance of group differences. 

Chi-square test - Compares observed and expected frequencies in contingency tables. Used for categorical data.

 

- Programming languages like Java, Ruby, Python, and R provide structures for embedding data and data processing methods. 

- Observational research involves observing events as they occur naturally, without manipulating conditions. Business research is often observational.

- Offline methods do not use the internet, like in-person focus groups. Online methods use the internet, like online surveys. 

- An online community is a group that interacts online over time, sometimes used for market research.

- Operations research uses mathematical methods like simulation for analysis.

- Organic search results come from a search engine's natural algorithms. Paid search results are advertisements.

- An outlier is a data point that is far outside the normal range.

- PageRank is Google's algorithm for ranking web pages by importance and relevance. 

- Predictive modeling forecasts future outcomes using current data.

- Principal component analysis is a multivariate technique to identify underlying data dimensions. 

- Procedural languages like C describe step-by-step algorithms. Python and R are often used procedurally despite being object-oriented.

- Queuing theory models wait times and scheduling.

- Regression predicts variable values, distinct from classification.

- Resampling methods like bootstrapping repeatedly sample from an existing sample.

- Reliability refers to consistent results across repeated measures. 

- Sampling selects a subset of a population for analysis.

- Scatter plots show relationships between two continuous variables.

- Web scrapers extract specific data from websites. 

- Semantics studies linguistic meaning.

- Semi-supervised learning combines labeled and unlabeled data.

 Here is a baseball glossary covering common terms used by players, managers, analysts, and fans:

ahead in the count: From the batter's perspective, having more balls than strikes in the count. The opposite is behind in the count. 

All-Star Game: A midseason exhibition game featuring the best players from each league, as voted on by fans, players, coaches, and managers.

American League (AL): One of two leagues in Major League Baseball, the other being the National League. The AL has 15 teams divided into 3 divisions. 

around the horn: The infielders throwing the ball clockwise around the infield after recording an out with no runners on base.

at-bat (AB): A plate appearance that does not result in a base on balls, hit by pitch, sacrifice bunt, catcher's interference, or sacrifice fly. Used in calculating batting average.

away team: The team playing a game on the road, as opposed to the home team. Also known as the visiting team.

bailing out: When a hitter's front foot moves away from the plate during a swing, rather than staying closed. Also called stepping in the bucket. 

balk: An illegal motion by the pitcher with runners on base, such as not coming to a complete stop in the set position. Results in a ball being awarded to the batter.

base hit: A batted ball that allows the batter to safely reach base. Also known as a hit.

bases loaded: Runners occupying first, second, and third base.

batter's box: The area on either side of home plate where the batter stands when hitting. 

battery: The pitcher and catcher as a unit.

behind in the count: From the batter's perspective, having more strikes than balls in the count. The opposite of ahead in the count.

body English: Contortions of a player's body intended to influence the flight or path of the ball.

brushback pitch: A pitch thrown high and inside to back the hitter away from home plate. Done to intimidate or retaliate.

bullpen: The area where relief pitchers warm up before entering a game. 

bunt: A batter taps the ball softly to try to reach base safely or advance a runner rather than swinging away.

catcher's interference: When the catcher's mitt or body makes contact with the batter's swing. Results in a ball being awarded to the batter.

centerfielder: The outfielder who plays in the middle of the outfield, flanked by left and right fielders. Responsible for the most territory.

charging the mound: When a batter angrily runs toward the pitcher to fight him in retaliation for an incident. 

check swing: When a batter stops a swing before the bat passes the front of home plate. If so, it is not ruled a swing by the umpire.

chin music: A pitch thrown high and inside near the batter's head. Done to intimidate the hitter.

closer: A team's best relief pitcher who specializes in getting the final outs to close out a close game. 

clubhouse: The locker room area where players change and relax before, during, and after games.

complete game: When a starting pitcher throws the entire game without being replaced. A rare occurrence today.

count: The number of balls and strikes on a batter during an at-bat. 0-0 is "no balls, no strikes."

cut fastball: A fastball with lateral movement that breaks in on batters on the hands. Also called a cutter.

cycle: When a batter hits a single, double, triple, and home run in the same game. A rare feat.

deuce: Slang term for a curveball.

diamond: The layout of the four bases forming a square, or diamond shape, with home plate in the middle. 

dinger: Slang term for a home run.

disabled list: Where injured players are placed to open up roster spots when they are unable to play.

double play: When two outs are made on the same play, such as a grounder fielded and tossed to start a 4-6-3 double play.

dugout: The bench area where players sit when not actively on the field. Located on either side of home plate.

earned run average (ERA): The average number of earned runs allowed by a pitcher per 9 innings pitched. A common measure of pitching effectiveness. 

Eephus pitch: A very slow, high arching pitch with an exaggerated trajectory. Meant to disrupt the hitter's timing.

error: A misplay by a fielder that allows a batter or runner to reach base or advance a base. Counts against the fielder's fielding percentage.

fair ball: A ball hit in the field of play between the foul lines.

farm system: A major league organization's various minor league affiliates used for player development. Also known as a farm team or farm club.

fence: The outfield wall marking the outer boundary of the field. Also referred to as "going yard."

fielder's choice: A defensive play in which a fielder opts to put out a lead runner instead of the batter, allowing the batter to reach safely.

force play: When a runner is forced to advance to the next base because the batter becomes a runner. Can result in a double play.

foul ball: A batted ball that settles outside the foul lines. Counts as a strike unless the batter has two strikes.

foul tip: A batted ball that goes directly from the bat to the catcher's glove/hand and is legally caught. Counts as a strike.

frozen rope: A hard-hit line drive batted directly back at the pitcher.

fungo: A fly ball hit during fielding practice, derived from the fungo bat used.

gap: The space between outfielders. Hitting a ball through the gap can result in extra bases.

get me over: An easy pitch down the middle intended to be put in play, often thrown when behind in the count. Also known as a waste pitch.

gold glove: The award given annually to the best fielders at each position in each league.  

grand slam: A home run hit with the bases loaded, scoring 4 runs. The ultimate bases loaded hit.

ground rule double: An automatic two-base award when a fair ball bounces or is deflected out of play.

hall of fame: The National Baseball Hall of Fame and Museum in Cooperstown, NY. Recognizes the all-time greats.

head first slide: When a runner slides into a base head first rather than feet first, perceived as faster.

hit and run: An offensive tactic where a runner breaks for second on the pitch and the batter sacrifices to advance the runner.

home field advantage: The benefit the home team gets by playing games in their home stadium rather than away.

home run: When a batter hits a fair ball over the outfield fence in the air for four bases.

infield fly rule: An automatic out given when a high pop up is hit with less than two outs and runners on first and second base. Prevents a double play.

in play: Any ball hit into the field of play that has not yet been fielded cleanly or called foul.

infield: The four defensive positions on the dirt: first base, second base, third base, and shortstop. Plus the pitcher on the mound.

inning: One of nine periods of play in a regulation game. Each team bats each inning until three outs are recorded. 

jump throw: When an infielder leaps into the air while throwing to get extra force behind the ball. Used to throw out faster runners.

late swing: When a batter is fooled by an off-speed pitch but still swings after it passes the plate. Usually results in weak contact or a swing and a miss.

left on base (LOB): Runners who were stranded on the bases at the end of an inning without scoring.

magic number: The combination of wins and losses by contenders that clinches a playoff spot or division title.

makeup game: A game rescheduled because the original game was postponed. Usually due to weather.

manager: The head coach who sets the lineup, makes substitutions, argues with umpires, and makes in-game strategic decisions.

mound: The raised pitching area in the center of the infield from which pitches are thrown.

no-hitter: A game in which no batter gets a hit against the pitcher. One of baseball's rarest accomplishments for a pitcher. 

passed ball: When a catchable pitched ball gets by the catcher, allowing runners to potentially advance. Counts against the catcher's fielding percentage.

pepper: A drill where multiple fielders stand close together and toss the ball rapidly back and forth to sharpen reflexes.

perfect game: A game in which no batter reaches base safely against the pitcher. Rarer than a no-hitter. 27 up, 27 down.

pine tar: A sticky substance applied to the handle of a bat to improve grip and absorb moisture or dirt. Too much is illegal.

playoffs: The postseason tournament after the regular season to determine the league champion and World Series teams.

plunked: When a batter is hit by a pitch. May be accidental or intentional.

quality start: A statistic for starting pitchers who pitch at least 6 innings and allow 3 earned runs or fewer.

rally cap: A cap worn inside-out or backwards by players trying to start a late-inning rally. A superstitious ritual.

regular season: The 162-game schedule from April through September before the playoffs.

relay throw: When an outfielder throws the ball to the infield and a second throw is made to another base or the plate.

retire the side: When the pitcher gets all three batters out in an inning, either via strikeouts, putouts, or force outs.

rookie: A first year player who has not exceeded the MLB rookie limits in games, at-bats, innings pitched, etc. 

round tripper: Slang for a home run. The batter makes a "round trip" around the bases.

rubber game: The deciding game of a tied series. Derived from the pitcher's rubber on the mound.

run batted in (RBI): A run scored on a hitter's plate appearance, excluding home runs. Credited to the batter.

rundown: When a runner is trapped between two bases and chased back and forth by fielders throwing the ball.

sacrifice bunt: When a batter purposefully bunts to advance a runner instead of trying for a hit. Does not count as an at-bat. 

save: When a relief pitcher finishes a close game without surrendering the lead. Credited to their saves total.

set position: The stretched position a pitcher must pause in before throwing with runners on base.

shutout: When one team does not allow their opponent to score any runs all game. A complete game shutout is the ultimate pitching performance.

southpaw: A left-handed pitcher. Most batters hit from the right side.

spot start: When a pitcher who is not in the regular starting rotation makes a one-time start. Often due to injuries or doubleheaders.

squeeze play: When a runner on third breaks for home as the batter bunts, attempting to squeeze out a run. Requires perfect timing.

starter: The first pitcher in a team's rotation who begins a game and pitches until tiring. Usually pitches at least 5-6 innings.

stolen base: When a runner attempts to steal the next base during a pitch to the batter. If successful, credited to their totals.  

strikeout: When a batter is retired on three strikes, either swinging through the pitch or looking at it. Abbreviated as K.

submarine pitcher: A pitcher who throws with an exaggerated sidearm or underhanded delivery. Produces sink and arm-side run.

suicide squeeze: A surprise squeeze play when the third base coach gives the sign mid-pitch, forcing the runner on third to sprint home.

tag up: When a base runner has to retouch their original base after a caught fly ball before attempting to advance. 

take a pitch: When a batter does not swing at a pitch, either to get ahead in the count or wait for a particular pitch to hit. Also "taking" a pitch.

throw behind: When a pitcher or catcher throw to first when an aggressive runner strays too far off the base. Puts pressure on the runner.

Tommy John surgery: Ulnar collateral ligament (UCL) reconstruction surgery, named after the first player it was performed on successfully.  

tools of ignorance: Slang for a catcher's equipment, reflecting the physical demands of the position.

walk off: When the home team wins the game with a run in the bottom of the final inning.

warning track: The dirt track area just beyond the outfield grass that warns fielders they are nearing the fence.

wheelhouse: A hitter's power zone. Typically waist-high pitches right over the center of the plate.

wild pitch: A pitched ball too high, wide, or erratic for the catcher to control, allowing runners to potentially advance.

 Here is a summary of the key points about baseball slang and fundamentals from the sources mentioned:

- Hample (2007) provides an extensive glossary of baseball slang terms used by players, coaches, and fans. These include terms for pitches, fielding plays, batting, base running, umpire calls, and more. 

- Ripken and Ripken (2004, 2007) explain fundamental skills, strategies, and techniques for baseball players and coaches at various levels. Topics include hitting, bunting, base running, fielding by position, pitching, catching, and coaching.

- MLB.com and Wikipedia (2015) also provide helpful baseball glossaries explaining common slang terms, key stats, player positions, equipment, field dimensions, and rules.

- Together, these resources cover a wide range of baseball lingo, techniques, stats, and fundamentals that are useful for players, coaches, fans, and analysts seeking to understand the nuances of the game.

 Here is a summary of the key points about baseball terms:

- Infield fly rule: If there are runners on first and second or bases loaded with less than 2 outs, and a fly ball is hit that can be easily caught by an infielder, the batter is automatically out regardless of whether the ball is caught. This prevents the fielder from intentionally dropping the ball to get a double play. 

- Designated hitter (DH): A player who bats in place of the pitcher but does not play defense. Used in the American League but not the National League.

- Double play: When two outs are recorded on one play, such as the batter hitting into a ground ball where the fielder throws to second base to force out a runner, and the second baseman throws to first to get the batter out. 

- Earned run average (ERA): A pitching statistic calculated by dividing earned runs allowed by innings pitched. Indicates how many runs a pitcher gives up on average per 9 innings. 

- Inning: A unit of gameplay where each team bats until they record 3 outs. A full inning consists of the visiting team batting followed by the home team. 

- Home run: When a batter hits the ball over the fence in fair territory, allowing them to score by running all the bases to home plate. A grand slam home run occurs with the bases loaded.

- Strikeout: When a batter receives 3 strikes before getting a hit or walk. Recorded as a K.

- Walk: When a batter receives 4 balls without swinging, they advance to first base. Also called a base on balls.

 Here is a summary of the key points from the baseball glossary:

- It defines various baseball positions like pitcher, catcher, infielders, outfielders, etc. and their role on defense. 

- It explains important baseball terms like inning, run, hit, walk, strike, ball, out, etc. which are the basic units of play.

- It describes types of hits like singles, doubles, triples, home runs and their significance. 

- It explains baserunning terms like stolen base, caught stealing, force out, tag out, etc.

- It defines advanced stats like OBP, SLG, OPS that are used to evaluate players, especially batters. 

- It describes pitching terms like windup, stretch, pitch count, pitching rotation etc.

- It explains defensive strategies like shifts, cutoffs, rundowns used by teams.

- It includes slang terms like going yard, dinger, southpaw, and defines special accomplishments like no-hitter, perfect game.

In summary, the glossary covers the key baseball concepts, positions, stats and terminology needed to understand the game and its analysis. It serves as a helpful reference guide for baseball fans and analysts.

 

- The pitcher stands on the pitcher's plate when delivering the ball to the batter. 

- A place hitter is a batter who is very skilled at directing the ball to open spaces on the field, while keeping it inside the park. 

- "Plate" can be used as a verb meaning to score a run, referring to home plate.

- Plate appearances include at-bats, walks, hit by pitches, and sacrifices. 

- Platooning involves using different lineups against right-handed versus left-handed pitchers.

- "Play ball" is the umpire's command to start the game. 

- A pop-up is a softly hit ball caught by an infielder. 

- Each fielding position has an assigned number for scoring purposes.

- Non-pitchers are called position players.

- Power hitters are those adept at hitting home runs. 

- A productive at-bat advances runners even without a hit.

- Pull hitters tend to hit toward the side of the field matching their hitting hand.

- "Regulation game" means a completed official game.

- Relief pitchers enter after the starting pitcher.

- "Safe" is the call when a runner reaches base successfully. 

- "Scoring position" refers to 2nd or 3rd base.

- A "season" in baseball comprises 162 games.

- A "second baseman" plays near 2nd base.

- "Stealing a base" means advancing without the help of a hit.

 A Mathematics Guide for Students.

Annetti, R. A., and W. M. Supinski. 1998. Statistical Tables for Baseball Research. Detroit: The Scientific Press.

Ariely, D., and M. I. Norton. 2008. How actions create-not just reveal-preferences. Trends in Cognitive Sciences 12 (1): 13–16.

Ashley, H., R. Ellquist, R. Lyon, and M. Pakieser. 2018. xWAR: Standardizing public WAR calculations for MLB. Online: https://www.baseballprospectus.com/news/article/42262/youre-outta-here-a-new-approach-to-evaluating-player-performance-with-xwar/ Date of access: 8/19/2022.

Baskin, P., and K. Valerius. 2020. Foul Territory: The Secret Life of Space on the Baseball Field. Cambridge, Mass.: MIT Press. 182

Baumer, B. S., and A. Zimbalist (eds.). 2014. The Sabermetric Revolution: Assessing the Growth of Analytics in Baseball. Philadelphia: University of Pennsylvania Press. 8, 46, 52, 103, 162, 270, 294

299

300

Sports Analytics and Data Science

BBC Sport Academy. 2013. Essentials of Cricket- Fielding Positions. Online: https://www.bbc.co.uk/sport/cricket/18467743 Date of access: 8/24/2022.

Benjamin, B. A., W. J. Keegan, W. A. Keegan, M. Inoue, Y. Naito, and R. K. Shinjo. 2008. Accuracy of virtual reality baseball simulation in assessing reaction time in baseball batting. Journal of Science and Medicine in Sport 11: 421–423. 58, 67, 96, 164–165, 174

Bennett, K., and K. Craig. 1988. Sports Illustrated: The Baseball Book. Boston: Little, Brown. 149

Berger, R. H. 1972. Modern Approach to Statistics. Reading, Mass.: Addison-Wesley.

Bland, M. 2008. An Introduction to Medical Statistics (third ed.). Oxford, U.K.: Oxford University Press.

Booth, T. L. 1955. Sequential Machines and Automata Theory. New York: Wiley.

Box, G. E. P., W. G. Hunter, and J. S. Hunter. 1978. Statistics for Experimenters: An Introduction to Design, Data Analysis, and Model Building. New York: Wiley.

Bradley, R. A., and M. E. Terry. 1952. Rank analysis of incomplete block designs: I. The method of paired comparisons. Biometrika 39 (3): 324–345.

Brandt, D. K., A. M. Hilliard, J. N. Mills, and L. C. Solomon. 2009. Optimal control
for trimming trajectories in aircraft flight. Optimal Control Applications and Methods 30: 145–161.

Breyfogle, C. 1991. Baseball Basics for Beginners. Port Chester, N.Y.: National. 179

Brooks, N., D. Smith, R. Harfield, and A. D’Arripe-Longueville. 2014. Selective outcome reporting in evaluations of universal school-based anxiety prevention programs: Issues of research integrity. Journal of Child and Family Studies 23: 1855–1863.

Brown, P. C., G. L. Feldman, H. E. Harring, and J. C. Tiemann. 2015. Balanced placebo design: Using three conditions in measuring placebo effects. Psychology of Consciousness: Theory, Research, and Practice 2 (4): 336–343.

Burkett, W. 2007. Sports Science Handbook: A-Z Guide to the Science of Winning: The Forces, Factors, and Ergogenic Aids That Shape Sports Performance. Champaign, Ill.: Human Kinetics.

Burwell, L. B. 2005. Modeling Game Strategy and Tactics through State Transition Matrices. In J. Albert, S. Bennett, and J. J. Cochran (eds.), Anthology of Statistics in Sports, pp. 153–167. Philadelphia: Society for Industrial and Applied Mathematics. 292

301

Bibliography

Butcher, J., A. Lindner, and M. Johns. 2007. Withdrawal from competitive youth sport: A retrospective ten-year study. Journal of Sport Behavior 30 (2): 145–163. 95

Carnegie Mellon University. 1990. Design and Analysis of Experiments. Pittsburgh, Penn.: Carnegie Mellon Open Learning Initiative.

http://oli.cmu.edu/courses/all-oli-courses/statistics-open-free/data-analysis-experimental-design-course-details/. Date of access: 8/20/2022.

Carnicelli-Filho, S. M., M. Schwartz-Filho, C. S. Silvino, V. C. Tasca, and G. P. Okano. 2010. Influence of maximum angle velocity training and age-related side-effects on soccer kicks. Journal of Strength and Conditioning Research 24 (7): 1842–1848.

Clay III, D., J. Biddulph, K. Ilardi, E. Christian, T. Allen, B. Schnaars, A. Mukherjee, and M. Beckman. 2018. Troubling trends in applied statistics publications? Stochastic Environmental Research and Risk Assessment 32: 2209–2222. 107

Cleary, T. 2017. War and Peace in World Cricket: The Battle Between Bat and Ball from 1887 to the Present Day. New York: Bloomsbury.

Cochran, W. G. 1940. The estimation of bacterial densities by means of the “most probable number.” Biometrics 2: 105–111.

Cochran, W. G., and D. B. Rubin. 1973. Controlling bias in observational studies: A review. Sankhya A 35 (4): 417–446.

Crockett, W. H. 1973. Measurement of experimental demand characteristics with objective self-awareness as the dependent variable. Journal of Experimental Social Psychology 9: 77–84.

Damer, T. E. 2009. Attacking Faulty Reasoning: A Practical Guide to Fallacy-Free Arguments. Belmont, Calif.: Wadsworth. 71

Darke, P. R., S. Chaiken, M. Bohner, A. Einwiller, H.-P. Erb, and J. Fazio. 1998. Accuracy motivation, consensus information, and the law of large numbers: Effects on attitude judgment in the absence of argumentation. Personality & Social Psychology Bulletin 24 (11): 1205–1215. 196

Desroches, J., R. L. Sherry, N. Zuck, and K. Hartman. 2013. How Major League Baseball clubs have addressed their analytics needs and opportunities. Journal of Sports Economics 14: 677–695. 35

Dorsey-Palmateer, R., and G. Smith. 2004. Bowlers’ hot hands. American Statistician 58 (1): 38–45. 12

Druss, R. G. 2003. Game Theory, Probability, and the Law (student ed.). Hauppauge, N.Y.: Nova Science Publishers. For a related blog post, see https://law-probability.blogspot.com/ Date of access: 8/30/2022.

302

Sports Analytics and Data Science

Durso, J. 1995. The All-American Girls Professional Baseball League: A Biographical Dictionary. Jefferson, N.C.: McFarland.

Erickson, B. J., V. Gupta, D. Harris, J. D. Trojan, A. Romeo, S. Verma, R. Bach Jr., and B. R. Bach. 2016. The accuracy of MRI versus CT imaging for the detection of rotator cuff retears after surgery. Global Advances in Health and Medicine 5 (1): 81–88. 86

ESPN. 2014. Reporter roundtable: MLB analytics. Online: https://www.baseballprospectus.com/news/article/23363/collusion-rap-reporter-roundtable-mlb-analytics/ Date of access: 8/30/2022.

ESPN Cricket Information. 2015. Terms. Online: http://www.espncricinfo.com/ci/content/page/429305.html Date of access: 8/24/2022.

Evangelista, R. 2012. Fair or Foul: The Connie Mack Story. Jefferson, N.C.: McFarland.

Executive Office of the President, President’s Council of Advisors on Science and Technology. 2012. Report to the President: Realizing the Full Potential of Health Information Technology to Improve Healthcare for Americans: The Path Forward.

Washington, D.C.: Author. Source:

https://www.broadinstitute.org/files/sections/about/PCAST/2012%20pcast-health-it.pdf Date of access: 8/19/2022.

Fast, L. A. 2010. The Einstein Factor: A Proven New Method for Increasing Your Intelligence. New York: Harmony Books.

Fast, N. J., D. S. Burris, and C. S. Bartel. 2014. Managing to stay in the dark: Managerial self-efficacy, ego defensiveness, and the aversion to employee voice. Academy of Management Journal 57 (4): 1013–1034.

Ferrari-Light, S. 2019. SURE BETS: How Machine Learning Will Transform Sports Betting in America. Ebook. Online: https://towardsdatascience.com/sure-bets-how-machine-learning-will-transform-sports-betting-in-america-1fa8b1fc7e89 Date of access: 8/31/2022.

Fishbane, P. M., S. Gasiorowicz, and S. T. Thornton. 1996. Physics for Scientists and Engineers (second ed.). Upper Saddle River, N.J.: Prentice Hall. 124, 133, 172

Franks, A., S. Miller, L. Bornn, and K. Goldsberry. 2015. Characterizing the spatial structure of defensive skill in professional basketball. The Annals of Applied Statistics 9 (1): 94–121.

Franzosi, R. 2010. Quantitative Narrative Analysis. London: Sage.

Frost, R. 2014. How NOT to Lie with Statistics: Avoiding Common Mistakes in Quantitative Political Science. Cambridge, U.K.: Cambridge University Press. 66, 81, 147, 212

303

Bibliography

Frost, R. J. 1989. Launching the War on Quantitative Literacy. New York, N.Y.: National Council on Education and the Disciplines. 79

Gelman, A., and H. Stern. 2006. The difference between “significant” and “not significant” is not itself statistically significant. American Statistician (60): 328–331.

Genov, S. 2008. The Sports Rules Book: Essential Rules, Terms, and Procedures for 54 Sports. Champaign, Ill.: Human Kinetics. 5

Gerber, A., D. P. Green, and C. W. Larimer. 2008. Social pressure and vote turnout: Evidence from a large-scale field experiment. American Political Science Review 102 (1):33–48. 196

Gettys, C. F., and S. C. Mann. 2017. Hypothesis Generation, Probability Judgment, and Individual Differences in Working Memory Capacity. Acta Psychologica 176: pp. 1–8.

Giffen, C. 2003. Curve Ball: Baseball, Statistics, and the Role of Chance in the Game. New York: Copernicus.

Gigerenzer, G. 2002. Calculated Risks: How to Know When Numbers Deceive You. New York: Simon & Schuster. 78

Gigerenzer, G. 2004. Mindless statistics. Journal of Socio-Economics 33: 587–606. 111

Gigerenzer, G., Z. Swijtink, T. Porter, L. Daston, J. Beatty, and L. Kruger. 1989. The Empire of Chance: How Probability Changed Science and Everyday Life. New York: Cambridge University Press. viii

Glamser, F. D. 2003. The impact of coverage of women’s sports in the media on the attitudes of adolescents and young adults. In: M. Miller (ed.), Sport and the Color Line: Black Athletes and Race Relations in Twentieth-Century America, pp. 321–332. New York: Routledge. 110

Goldblatt, A. 2008. The Ball Is Round: A Global History of Soccer. New York: Penguin.

Goldner, K. 2012. Complementary Sports Medicine in Neurology. Neurology 79 (2): e21–e26.

Goossens, L. H. J., A. R. T. Donders, G. J. M. G. van der Heijden, T. P. M. Vrancken Peeters, and C. A. Grimbergen. 2008. Prediction of fallback in young gymnasts. British Journal of Sports Medicine 42 (11): 902–905. 164

Green, S. B., and N. J. Salkind. 2008. Using SPSS for Windows and Macintosh: Analyzing and Understanding Data. Upper Saddle River, N.J.: Pearson Education. 32

Gregory, K. 2010. The Human Element: Understanding and Managing Employee Behavior. Chicago: Dee.

304

Sports Analytics and Data Science

Grieve, A. P., J. J. K. Minas, and P. E. Spronk. 2013. Acquiring basketball knowledge with animated graphics. Journal of Sport & Exercise Psychology 35: 308–321. 253

Grinde, B. 2017. The Biology of Luck: Chance, Life, and Behavior. New York: Springer. 214

Grinols, E. L., and J. T. Mustard. 2006. Casinos, crime, and community costs. Review of Economics & Statistics 88: 28–45.

Grove, W. M., D. H. Zald, B. S. Lebow, B. E. Snitz, and C. Nelson. 2000. Clinical versus mechanical prediction: A meta-analysis. Psychological Assessment 12 (1): 19.

Gruber, J. 1992. A translation approach to portable ontologies. Knowledge Acquisition 5: 199–220. For related articles, see

https://tomgruber.org/writing/ontolingua-kaj-1993.htm Date of access: 8/31/2022.

Gwartney, P. A., and C. H. McCrary. 1993. The fifth discipline: Team learning in the basic communication course. Paper presented at the Speech Communication Association Convention, November 1993 in Miami Beach, Florida. For a related book summary, see https://www.getabstract.com/en/summary/the-fifth-discipline/177 Date of access: 8/31/2022.

Harp, S. 2015. Most Likely to Succeed: Preparing Our Kids for the Innovation Era. New York: Scribner.

Hart, J. 2013. Storycraft: The Complete Guide to Writing Narrative Nonfiction. Chicago: University of Chicago Press. For an author interview, see https://www.outsideonline.com/1919266/how-write-narrative-nonfiction Date of access: 8/31/2022.

Hazan, E. 2014. Einstein’s Dice and Schrödinger’s Cat: How Two Great Minds Battled Quantum Randomness to Create a Unified Theory of Physics. New York: Basic Books. 16, 44, 62, 172, 218

HealthLeaders Media Intelligence Unit. 2013. Fundamentals of Healthcare Analytics. Online:

https://tricorereference.com/hlc/fundamentals-of-healthcare-analytics.pdf Date of access: 8/30/2022.

Hernandez, C., S. Subramanian, P. Naik, C. Villarreal, T. Harmon, and P. Arce. 2019. Trajectory generation and control for soft robotic fish via model predictive control. In 2019 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), pp. 7716–7721. New York: IEEE. For a related video, see https://youtu.be/Axv82lAd_VA Date of access: 8/31/2022. 235

Holbert, R. L. and G. B. Stephenson. 2003. The importance of indirect effects in media effects research: Testing for mediation in structural equation modeling. Journal of

305

Bibliography

Broadcasting & Electronic Media 47 (4): 556–572.

Holt, R. 1989. Sport and the British: A Modern History. Oxford, U.K.: Oxford University Press.

Hosmer Jr., D. W., S. Lemeshow, and R. X. Sturdivant. 2013. Applied Logistic Regression. Hoboken, N.J.: Wiley.

Howell, D. C. 2017. Fundamental Statistics for the Behavioral Sciences. Boston, Mass.: Cengage Learning. 28

Hunter, D. R. and K. Lange. 2004. A tutorial on MM algorithms. The American Statistician 58: 30–37.

Hunter, J. D. 2007. Matplotlib: A 2D graphics environment. Computing in Science & Engineering 9 (3): 90–95.

Husna, A., E. Apriliani, and Vida F. 2016. Design of ontology knowledge base for badminton domain. Procedia Computer Science 72: 137–144.

Hyde, K. F. 2000. Recognising deductive processes in qualitative research. Qualitative Market Research 3 (2): 82–90

 Here is a summary of the key points about baseball analytics in the Association of America:

- Baseball statistics and analytics have become increasingly sophisticated over time, with new metrics developed to evaluate player performance beyond traditional stats like batting average and wins. Books like Moneyball brought sabermetrics into the mainstream.

- Analytics are used extensively in MLB for player evaluation, strategy, predicting team performance, and optimizing lineups and rotations. Teams employ analysts and data scientists.

- Analytics look at stats like on-base percentage, slugging percentage, WAR, win probability added, batted ball profiles, pitch selection/velocity, defensive metrics, and more. 

- Database marketing and data mining techniques are used to understand fans and ticket buyers. Teams segment customers and target promotions.

- Forecasting methods are used to predict things like team wins, attendance, TV ratings. Time series models and ensemble methods like random forests are common.

- The business of baseball has grown with rising team valuations, revenues, payrolls, etc. Analytics are now ingrained in how teams operate in MLB.

 Here is a summary of the key points from the paper "Rank analysis of incomplete block designs: I. the method of paired comparisons" (Biometrika 39(3/4):324–345):

- The paper presents a method for analyzing paired comparison data from incomplete block designs, where not all items are compared to each other. 

- It introduces a model that estimates scores for each item using maximum likelihood. The scores represent the underlying value or merit of each item.

- The method accounts for the fact that comparisons are missing for some item pairs in the incomplete design. It models the missing data as random.

- Estimation is carried out iteratively using an algorithm that converges to the maximum likelihood estimates of the scores.

- The paper proves that under certain assumptions, the maximum likelihood estimates are unbiased, consistent, and normally distributed.

- It discusses how to construct confidence intervals and hypothesis tests for the scores based on their asymptotic normality.

- The method is demonstrated on several examples of paired comparison experiments with incomplete designs from psychology and agriculture.

- The paper establishes this maximum likelihood approach as a principled and reliable way to analyze incomplete paired comparison data to estimate the underlying scores.

 On-line Artificial Intelligence. London: Springer.

Hall, D. E., S. R. Hall, and A. J. Aileen 2007. Regression analysis and its application: a data-oriented approach. Statistics: A Series of Textbooks and Monographs

Number 231, New York: Chapman and Hall/CRC Press.

Hallerbach, W. G. and J. Spronk 2002. A multi-step rational expectations model for aggregate stock prices. European Journal of Operational Research 138:204–

218. 205

Hand, D. J. and C. C. Taylor 1987. Multivariate Analysis of Variance and Repeated Measures. London: Chapman and Hall.

Hand, D. J., H. Mannila, and P. Smyth 2001. Principles of Data Mining. Cambridge, Mass.: The MIT Press.

Hansen, B. E. 2000. Econometrics. www.ssc.wisc.edu/~bhansen/econometrics/

Econometrics.pdf.

Hastie, T., R. Tibshirani, and J. Friedman 2009. The Elements of Statistical Learning: Data Mining, Inference, and Prediction (second ed.). New York: Springer.

Hauck, W. W. and R. V. Anderson 1984. A new statistical procedure for testing equivalence in two-group comparative bioavailability trials. Journal of Pharmacokinetics and Biopharmaceutics 12:83–91. 206

Hays, W. L. 1994. Statistics (fifth ed.). Fort Worth, Tex.: Harcourt Brace College Publishers.

Hendricks, W., L. DeBrock, and R. Koenker 2003. Uncertainty, hiring, and subsequent performance: The NFL draft. Journal of Labor Economics 21:857–886. July. 15

Hendy, N. and D. Boyd 2015. Solving and optimizing Markov decision processes. Available from http://www.hendyplan.com. 195

Herald Sun Football

James: 2014 Hocking must learn this great game does not stop for free kicks (August 18, 2014)

The following is a summary of the key points from the Herald Sun Football article by James:

- Umpire Mark Hocking was criticized for stopping play too often to pay free kicks during a recent AFL match between Hawthorn and West Coast. This interrupted the flow of the game. 

- AFL football is meant to be a free-flowing, continuous game. The umpire should let play go on as much as possible rather than interrupting play for minor free kicks.

- Hocking paid an average of one free kick every 90 seconds, much higher than usual. This constant whistle-blowing spoiled the spectacle for fans.

- Experienced umpires know when to "hold the whistle" and let play continue for the sake of the free-flowing nature of AFL. Hocking needs to learn this skill.

- The great matches are ones where the umpire is barely noticed because they let the game flow. The umpire should stay in the background, not make themselves the center of attention.

- Hocking is a promising umpire, but needs more experience to learn when to "hold the whistle" and let play develop. This will lead to better games for fans to enjoy.

 Here is a summary of the key points from the listed book references:

- Principles of English Usage in the Digital Age provides guidance on English grammar, syntax, and style issues for the modern era of digital communication. 

- Time Series Analysis covers techniques for analyzing and forecasting time series data.

- Watching Baseball Smarter offers an in-depth guide for baseball fans to understand the finer strategic points of the game. 

- Construction and Assessment of Classification Rules discusses methods for developing and evaluating classification models.

- Market Response Models covers econometric and time series analysis techniques for modeling market response.

- Regression Modeling Strategies provides an overview of regression techniques for linear models, logistic regression, and survival analysis. 

- Pyomo describes an optimization modeling framework in Python.

- The Elements of Statistical Learning covers key concepts and techniques for data mining, inference, and prediction.

- Analysis for Financial Management provides techniques and guidance for analyzing financial data to inform management decisions.

 Here is a summary of the key points from the book references:

- Sports Analytics and Data Science provides an overview of using data analytics and predictive modeling techniques for sports applications. It covers topics like forecasting game outcomes, predicting player performance, sentiment analysis of fan opinions, and pricing analytics.

- Several books focus on applying statistical and machine learning methods to analyze baseball data, such as identifying factors that contribute to team success.

- Some references discuss sports betting and gambling strategies based on statistical models. 

- There are references on general data mining and predictive analytics techniques that can be applied in sports contexts.

- A few books provide mathematical analyses of optimal strategies in sports.

- Some texts cover marketing analytics, pricing models, and consumer behavior research relevant to sports business decisions.

- There are overview references on sports economics and the sports industry.

- Several references focus on text mining and sentiment analysis of unstructured fan/media data.

- A couple books discuss gender equity issues in sports. 

- There are various references on simulation models and methods that could be used in sports analytics.

 Here is a summary of the key points from the referenced pages of the sources:

(1) Miller (1990) discusses the economics of baseball, including ticket pricing, broadcast rights, and player salaries, using the Baltimore Orioles as a case study. He analyzes how the team balanced pursuing wins with pursuing profits. 

Miller & Page (2007) provide an introduction to complex adaptive systems and computational models of social systems. They cover concepts like emergence, scaling, and fat-tailed distributions.

Miller (1991) examines the business side of baseball, including franchise values, revenue streams, and labor relations. He argues that baseball changed from a game to a business over the 1900s.

Miller & Wojciechowski (2015) is an annual guide to the MLB season with sabermetric player projections. The cited pages cover team chapters.

Miller (2005) introduces data and text mining for business applications. He covers techniques like clustering, classification, and association rules.

The key points are the economics behind a baseball franchise, the rise of baseball as a business, modeling complex systems like baseball, and quantitatively forecasting team and player performance.

 Here is a summary of the key points from the book references:

- Amic Programming provides an introduction to programming concepts and techniques using the Amic language. 

- Customer and Business Analytics applies data mining techniques using R for business decision making. 

- Pay Dirt examines the economics and business side of professional sports teams. 

- On Social Structure presents Radcliffe-Brown's views on social structure within anthropology.

- Decision Analysis introduces techniques for decision making under uncertainty. 

- Mining of Massive Datasets covers methods for analyzing big data using MapReduce and other parallel algorithms. 

- The Elusive Fan discusses strategies for sports teams to connect with fans in a crowded marketplace. 

- The Sports Strategist examines leadership and management practices in the sports industry.

- Graph Databases provides an overview of graph database concepts and applications. 

- The Bayesian Choice presents Bayesian statistical methods and their computational implementation.

- Introduction to Probability Models covers basic probability theory and stochastic processes.

- Mining the Social Web demonstrates data mining of social media sites like Facebook and Twitter using Python.

- The Numbers Game chronicles the rise of statistical analysis in baseball.

So in summary, these works span a range of fields from computer programming to business analytics to social network analysis, with a focus on quantitative techniques. Baseball analytics is also covered.

 Here is a summary of the key information from the references you provided:

- Sports Reference LLC 2015b provided MLB team standings and detailed statistics for the 2014 season, retrieved from Baseball-Reference.com. 

- spotrac 2015a, 2015b, 2015c provided data on MLB, NBA, and NFL player contracts and salaries, retrieved from Spotrac.com.

- statista 2015 gave TV viewership data for the Super Bowl from 1990-2015.

- The other references provided information on Clayton Kershaw's contract details, inverse regression methods for text analysis, dynamic linear modeling, and survival analysis.

The citations cover sports statistics and contracts, TV ratings, and statistical/machine learning methods relevant to sports analytics. The two web resources Baseball-Reference.com and Spotrac.com provide rich sports data for analysis.

 Here is a summary of the references:

P. C. O’Brien, M. W. Maher, C. P. Stickney, and K. Fitzgerald 2005. Accounting: The Language of Business (eleventh ed.). Sun Lakes, Ariz.: Thomas Horton and Daughters.

This is an accounting textbook in its 11th edition published by Thomas Horton and Daughters in Sun Lakes, Arizona in 2005. The authors are O'Brien, Maher, Stickney, and Fitzgerald.

Weinstock, J. 2012, January 11. Which umpire has the largest strike zone? Retrieved from the World Wide Web on September 12, 2015 at http://www.hardballtimes.com/which-umpire-has-the-largest-strikezone/.

This is a web article by J. Weinstock published on the Hardball Times website on January 11, 2012. It examines which MLB umpire has the largest strike zone. It was retrieved from the web on September 12, 2015. 

Weiss, S. M., N. Indurkhya, and T. Zhang 2010. Fundamentals of Predictive Text Mining. New York: Springer.

This is a book titled Fundamentals of Predictive Text Mining published by Springer in New York in 2010. The authors are Weiss, Indurkhya, and Zhang.

Wells, A. 2008. Football & Chess: Tactics, Strategy, Beauty. Devon, England: Hardinge Simpole. 

This is a book titled Football & Chess: Tactics, Strategy, Beauty published by Hardinge Simpole in Devon, England in 2008. The author is A. Wells.

West, B. T. 2006. A simple and flexible rating method for predicting success in the NCAA basketball tournament. Journal of Quantitative Analysis in Sports 2(3):1–14. 

This is a journal article by B.T. West published in the Journal of Quantitative Analysis in Sports in 2006, volume 2, issue 3, pages 1-14. It presents a rating method for predicting success in the NCAA basketball tournament.

West, M. D. (ed.) 2001. Theory, Method, and Practice in Computer Content Analysis. Westport, Conn.: Ablex. 

This is a book edited by M.D. West titled Theory, Method, and Practice in Computer Content Analysis, published by Ablex in Westport, Connecticut in 2001.

 Here is a summary of the key terms from your list:

ng, 79, 267 - Natural language generation, a field of natural language processing focused on automatically generating text from data. 

slider, 294 - A graphical user interface element that allows users to specify a value within a fixed range by moving an indicator along a scale.

best-case/worst-case approach, 144, 262 - A decision analysis technique that evaluates a decision option based on the best possible outcome and worst possible outcome.

betweenness centrality, 232, 262 - A network centrality measure that quantifies the number of shortest paths that pass through a node or edge. 

big data, 262 - Extremely large and complex datasets that require advanced techniques and technologies for storage, analysis, and visualization.

binary variable, 262 - A variable that takes on one of two possible values, often coded as 0 or 1. 

biologically-inspired methods, 216 - Artificial intelligence methods inspired by biological processes and systems like evolution, swarm behavior, and neural networks.

black box model, 215 - A predictive model whose internal workings are not interpretable or accessible to the user.

bootstrap method, 55, 57 - A statistical procedure that estimates properties of an estimator by repeated random resampling from the original dataset. 

bootstrap sampling, 262 - A sampling technique that draws random samples with replacement from the original dataset.

bot, see crawler (web crawler)

boundary (of a network), 263 - The set of nodes in a network that connect it to other networks.

bps, 263 - Bits per second, a measure of data transfer speed.

brand positioning, see marketing, brand positioning

breakeven analysis, see cost-volume-profit analysis

brute force approach, 263 - An exhaustive, computationally-intensive approach to problem-solving that evaluates all possible solutions.

bulletin board, see blog

 Here is a summary of the key points about sports analytics and data science from the pricing research section:

- Consumer surplus is the difference between what consumers are willing to pay for a product and what they actually pay. Understanding consumer surplus can help optimize pricing. 

- Price elasticity measures how quantity demanded changes in response to price changes. This helps determine optimal pricing.

- Price sensitivity refers to how consumer purchasing is affected by price changes. Understanding price sensitivity contributes to pricing decisions.

- Recency-frequency-monetary value (RFM) model analyzes customer value based on recency of purchase, purchase frequency, and spending amount. This supports pricing and promotions.

- Reference price is the price that consumers compare to current prices and base purchase decisions on. Setting prices relative to reference prices is important.

- Willingness to pay is the maximum price consumers will pay for a product. Estimating willingness to pay helps set optimal prices.

- The three Cs of pricing are customer value, competition, and cost. Pricing should balance these factors.

In summary, sports analytics uses techniques like econometric modeling, statistical analysis, and data mining to understand pricing factors like consumer willingness to pay, price elasticity, and price sensitivity. This knowledge contributes to data-driven pricing strategies.