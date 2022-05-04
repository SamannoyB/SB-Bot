const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const facts =[
"Space smells like a combination of diesel fuel and barbecue, according to astronauts. The smell is caused by dying stars.",
"The chills you get when listening to music are caused by your brain releasing dopamine, a neurotransmitter that causes pleasure.",
"Globally, only 2 percent of the population has green eyes.",
"Cornell University scientists have created a functioning guitar the size of a human blood cell.",
"Dean Kamen, the inventor of the Segway, owns an island off the coast of Connecticut called North Dumpling Island. The island has its own constitution, flag, currency and even navy (though the navy is made up of just one boat). It also has a replica of Stonehenge. Kamen refers to himself as Lord Dumpling, though the island is not technically recognized as separate from the U.S.",
"The top speed of the first American car race in 1895 for 7 mph.",
"Charles Dickens had bookbinders print up a number of fake books for his library. Titles included Drowsy’s Recollections of Nothing (3 volumes), Hansard’s Guide to Refreshing Sleep (as many volumes as possible), and Bowwowdom: A Poem.",
"Ernest Wright’s 1939 novel Gadsby does not contain the letter “e.”",
"Artist Ivan Albright was so meticulous, he often worked with a single-haired brush and would spend whole days working on 1 square inch of canvas.",
"Bananas are more effective in replenishing electrolytes than Gatorade. They also have serotonin and dopamine—chemicals that help you feel happy.",
"An 8-week meditation course will cause the amygdala, associated with fear and other emotions, to shrink while the prefrontal cortex, associated with awareness, concentration and decision-making, will thicken.",
"Phobophobia is the fear of having a phobia. Symptoms include dizziness, excessive sweating, increased heart rate, and faintness.",
"ry time you lick a USPS stamp, you ingest about 10 percent of a calorie. British stamps, however, contain about 5.9 calories. Israeli stamps are kosher.",
"Green tea contains catechins, which have been shown to stabilize blood sugar levels and curb appetite.",
"Google processed 11.382 billion searches in September 2015.",
"People are more likely to agree with a statement written in Baskerville than any other font.",
"56 percent of internet users have googled themselves.",
"Talking to yourself makes your brain work more efficiently.",
"Talking to yourself makes your brain work more efficiently.",
"The world’s oldest socks were in fact designed to be worn with sandals. Made in Egypt sometime in the fourth or fifth century, the wool socks have two toes.",
"In 1939, The New York Times predicted that the television would fail because the average American family would not have enough time to sit around watching it.",
"Contrary to its portrayal in Jurassic Park, the Tyrannosaurus rex probably didn’t roar. Instead, scientists believe it either hissed or rattled, like a rattlesnake.",
"The microwave was invented by accident when engineer Percy Spencer walked by a radar set and the candy bar in his pocket melted. The first food cooked by a microwave on purpose was popcorn.",
"Due to a genetic defect, cats can’t taste sweet things."
];


const fact = facts[Math.floor(Math.random()*facts.length)];

let factVal = fact;


if(context.params.event.content == `${process.env.PREFIX}fact`){
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: factVal
  })
}
