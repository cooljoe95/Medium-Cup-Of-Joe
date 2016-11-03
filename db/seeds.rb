# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Story.destroy_all
Follow.destroy_all
Like.destroy_all

users = User.create([
	{
		username: "can_this_name_BE_any_longer",
		password: "password",
		email: "chandler@co.com",
		profile_pic_url: "https://upload.wikimedia.org/wikipedia/en/6/6c/Matthew_Perry_as_Chandler_Bing.jpg"
	},
	{
		username: "smelly_cat",
		password: "password",
		email: "phoebe@co.com",
		profile_pic_url: "https://ilovefriends.files.wordpress.com/2009/12/lisa_kudrow_3001.jpg"
	},
	{
		username: "geology_rocks",
		password: "password",
		email: "ross3@co.com",
		profile_pic_url: "http://vignette3.wikia.nocookie.net/friends/images/8/89/Square_Ross.jpg/revision/20111216200027"
	},
	{
		username: "ILovePizza",
		password: "password",
		email: "joey@co.com",
		profile_pic_url: "http://www.uncleodiescollectibles.com/img_lib/Matt%20LeBlanc%20122%205-14-14.jpg"
	},
	{
		username: "Werent_on_a_Break",
		password: "password",
		email: "rachael@co.com",
		profile_pic_url: "https://65.media.tumblr.com/27b72bcf4e3ab891219bafeed4f0cf1f/tumblr_inline_n6ifsuUn561safegj.jpg"
	},
	{
		username: "secret-chef",
		password: "password",
		email: "monica@co.com",
		profile_pic_url: "http://4.bp.blogspot.com/-WCJfZteB4Ww/UCWi2_pvjaI/AAAAAAAAHjU/GkVGlZagCyE/s1600/Monica+Friends.jpg"
	},
  {
    username: "NotGunther",
    password: "password",
    email: "ms@ms.org",
		profile_pic_url: "https://img.buzzfeed.com/buzzfeed-static/static/2015-09/16/7/enhanced/webdr06/grid-cell-996-1442402630-2.jpg"
  }
])

stories = Story.create([
  {
    title: "Sherlock",
    body: '<h1>It’s a normal day at work. My boss assigned me an issue that I know nothing about. And I’m supposed to solve it as fast as possible.Somewhere in a massive project is a piece of code that keeps crashing. To me, it feels as electrifying as a murder mystery.Luckily for me, debugging and investigation go hand in hand.Welcome to the crime scene!</h1>
<p>There are clues. Some obvious suspicions. Some finger prints.But nothing definite.I track down the usual suspects, but they lead me nowhere.</p>
<blockquote><em>“There is nothing more deceptive than an obvious fact.”&nbsp;</em><br>
<em>―</em> <img target="_blank" src="https://cdn-images-1.medium.com/max/800/1*-CNoGje_a2x2Nziq0pru-w.jpeg"/><em><strong>Arthur Conan Doyle</strong></em>  <em><strong>in</strong></em><em><strong>The Boscombe Valley&nbsp;Mystery</strong></em> </blockquote>
<p>I call for the help of my equivalent of a Dr. Watson: my <img target="_blank" src="https://media.giphy.com/media/fv8KclrYGp5dK/giphy.gif">IDE .</p>
<p>I place a few breakpoints. I add a few watches.I brainstorm a little more.I play back the crime scene again and again, investigating the facts.Skimming the stack trace, I get a flash of insight that helps me narrow my search.I feel a shot of elation as I go into a function, and add a specific breakpoint.And a few moments later, I emerge from my state of concentration, having solved the bug.</p>
<p>You want to know what the problem was?If you know some basic C, take a look at this block of code, and see if you can find a clue as to what went wrong:</p>
<pre><code>FILE *fd;<br>
char *filename="models/";<br>
strcat(filename,"bullet");<br>
strcat(filename,".h3d");<br>
if( (fd = fopen(filename,"r"))==NULL )<br>
{<br>
 &nbsp;&nbsp;&nbsp;printf("\nFile or Directory not found");<br>
 &nbsp;&nbsp;&nbsp;return;<br>
}</code></pre>
<p>All right, drum roll… here’s the cause of the problem:It was a <img target="_blank" src="https://media.giphy.com/media/104VkDPOhII4I8/giphy.gif">segmentation fault . Plain and simple.</p>
<pre><code>char *filename="models/"; // This is a string literal stored in read-only memory</code></pre>
<pre><code>When we use strcat to append to "filename", it is undefined behavior because we aren\'t allowed to write to that read-only memory.</code></pre>
<p>So how did I solve it?I allocated a memory buffer big enough to store the full path of the file.</p>
<pre><code>char filename[256]; // Alternatively you can allocate dynamically <br>
strcpy(filename, "models/");<br>
strcat(filename,"bullet");<br>
strcat(filename,".h3d");</code></pre>
<p>Now you see how I can’t help being Sherlock-ed now.Stay tuned for the next mystery!</p>',
    author_id: 1,
  },
  {
    title: "There’s more to life than being famous.",
    body: '<img src="https://cdn-images-1.medium.com/max/2000/1*MdIFO-nmYEegIdkBM6g_Sg.jpeg"/><p>I’m guilty. I’m guilty of pushing the idea that the only thing worth doing with your life is being an entrepreneur. That’s this idea that I picked up because it was a driving force in my existence for a long time, and because everyone told me it was true. I learned it from quotes like this:</p>
<blockquote><em>“If you don’t build your dream someone will hire you to help build theirs.”―</em> <em><strong>Tony A. Gaskins&nbsp;Jr.</strong></em> </blockquote>
<p>It’s repeated over and again like a mantra, and we buy into it. If you want a happy life, if you want to feel fulfilled, we’re told that we have to be entrepreneurs. But you know what? There’s more to life than that. There’s more to life than being a capital-f Founder.I’ve learned that, over time. I’ve learned that buying into it is dangerous.</p>
<h4><strong>I want to tell you something crazy. There’s nothing wrong with being an employee. There’s nothing wrong with building someone else’s dream. There’s nothing wrong with having a job that you fucking&nbsp;love.</strong></h4>
<p>I don’t want to imagine a world where nobody is willing to work on someone’s idea just because they didn’t have it themselves.That’s what has been bothering me about the entrepreneur worship thing. There’s so much condescension towards employees, people who build the dreams of the Valley. It’s like they’re looked down on by the beautiful people with the big ideas.The list of products that I’d never get to enjoy, if everyone bought into this entrepreneur worship includes Netflix, my iPhone, any movie Stanley Kubrick ever made, Medium.com and the fucking Clash.None of those would have come into existence without the entrepreneurs who founded the companies that made them happen — but they also wouldn’t have existed without the programmers, factory workers, designers, administrators and troops who went into work every day and did the best damn job they could.</p>
<h4><strong>I challenge you, if you really look down on people who want to work a job they love and contribute to a bigger vision, to imagine how shitty your life would be if everyone else in the world thought like&nbsp;you.</strong></h4>
<p>There are a thousand different ways to be a human being. No, make that a million. There’s no rule for living that will make everyone fulfilled, so telling people that only being an entrepreneur will make their life worthwhile is misleading, irresponsible, and frankly pretty fuck’n dumb.</p>
<p>Me? I live in a balance. I like being an entrepreneur, and I’m always working on building side projects that I love. But I also like taking on challenging roles, joining awesome teams and collaborating. And hell, I like drawing cartoons and writing thrillers and building websites and apps, and I make it all work — more or less.But I’d never make it work if I was stuck on this idea that I had to be all one thing, or all another. I’d never make it work if I listened to the people who try and tell me that being a big important Founder is the be-all and end-all of this mortal coil.</p>',
    author_id: 1,
  },
  {
    title: "Positivity Could Revolutionize Black Mirror",
    body: "<img src='https://cdn-images-1.medium.com/max/1200/1*E09wPw_RfIDfg7V0mW7Qzg.jpeg'/><p><strong>S</strong>cience Fiction has long been known for tales of misery and woe. The message that rings loudest is that the dangers of technology are real and we should be afraid. What if instead of fearing technology we could embrace it instead? Given the joys of discovering new tech, why should it always come with a caveat? <em><strong>Black Mirror</strong></em> is at its strongest when delivering stories between lovers, but the episode <em>San Junipero</em> shows that a little bit of hope can go a long way.One does not simply binge watch <em>Black Mirror</em>. Individual stories that typically destroy the lives of the characters within them take a lot out of you. Sometimes though there can be some happiness. There are certainly many reason why <em>San Junipero</em> has been named the standout of season 3: whether it be the killer soundtrack, the adherence to a particular time, or the outstanding performances of MacKenzie Davis and Gugu Mbatha-Raw. Perhaps most of all though, it is because it gives a glimmer of some form of happiness for the two leads at the end. If the entire run was able to provide relief for the characters throughout, it would be a much easier watch.</p>
<img src='https://cdn-images-1.medium.com/max/800/1*YStKUhRlunF38mUu3-Vjaw.jpeg'/><p>Some of the standout episodes from previous seasons could’ve been given a little leeway from the dark and stormy nature of Black Mirror. Take for instance the season 1 episode, <em>The Entire History of You</em>. The episode features Liam Foxwell (Toby Kebbell) in a time when recounting your memories is a simple as pressing rewind. While it would be lovely to relive all your greatest moments, that ability also comes with the ghost of your past sins. Liam Foxwell goes down the rabbit hole of discovering his wife’s infidelity, but even after the entire mess of it all, he would’ve been able to move on with his life. <em>Black Mirror</em> highlights the negativity of the situation in great effect, but optimistically he was getting out of marriage of falsehoods.</p>
<img src='https://cdn-images-1.medium.com/max/800/1*bMo-opsB-MTilTbf0zzfTQ.jpeg'/><p>Each season seems to have a highlight of its own. For season 2, it was the episode, <em>Be Right Back</em>. Martha (Hayley Atwell) and Ash (Domhnall Gleeson) have a satisfying marriage in their remote cottage home. Tragedy left Martha a widow and she desperately misses her husband. Technology has enabled her to interact with collection of her late husband’s social media profiles. Everything he ever said or shared with the internet would be used to recreate Ash’s personality in this new A.I. Martha eventually realizes that this recreation will never truly be her husband. There is a pivotal moment she backs away from and we learn that she has accepted this A.I. into her life, no matter how artificial it might be. The pessimist perspective would say she doomed her life because now she will never be able to move forward, she will forever be attached to something artificial. Optimism would say that while she will never find complete happiness, she has found some form of peace.</p>
<p><em>San Junipero</em> decided to take that viewpoint of optimism much further. The season 3 episode, allowed viewers to witness some form of happiness which in <em>Black Mirror</em> is a rarity. When faced with death, the elderly have the opportunity to live out eternity in a virtual world. What is eternity without the one you love though. Kelly (Gugu Mbatha-Raw) lost her daughter before the technology was available and her husband refused to be there without their daughter. Why should she choose this eternity without them with her? Yorkie (Mackenzie Davis) gives her another option. Kelly shouldn’t abandon the new happiness she has found with Yorkie and there is some hope that their union will last forever in this fantasy world. There are certain to be bumps along the way due to immortality, but perhaps their happiness won’t be fleeting.Current television trends show that viewers like to be depressed and miserable. Whether it be from hit shows like <em>The Walking Dead</em> and <em>Game of Thrones</em>, to just about any show on television these days, ratings are not in happiness. Optimism and hope is decidedly not what <em>Black Mirror</em> generally goes for either. Every episode likes to boil things down to technology is bad and here’s why you should beware. The love for <em>San Junipero</em> should show the showrunners that perhaps a little optimism now and then would improve the show. If nothing else, it would inspire more people to invest in the show when they knew there was light at the end of the tunnel.</p>",
    author_id: 2,
  },
  {
    title: "Great Post",
    body: "<p><em>I'm so excited</em> for your next post!</p>",
    author_id: 3,
    original_post_id: 2
  },
  {
    title: "So Great man...",
    body: "<p><strong>Seriously...</strong>, you da bomb.</p>",
    author_id: 4,
		original_post_id: 2
  },
  {
    title: "You make me hungry",
    body: "<p>Need one of these for the next time we see each other.<br><img src='https://thumbs.dreamstime.com/z/pepperoni-pizza-thinly-sliced-popular-topping-american-style-pizzerias-30402134.jpg' /></p>",
    author_id: 4,
    response_id: 4,
    original_post_id: 2
  },
  {
    title: "You just gave me chills",
    body: "<p>You put my life in perspective</p>",
    author_id: 4,
    original_post_id: 3
  },
  {
    title: "The Principles Of Life That Everyone Knows, But Only A Few Follow",
    author_id: 7,
    body: "<img src='https://cdn-images-1.medium.com/max/2000/1*fssQFqKLWl2LAw2WT95Qsw.jpeg'/><h1>Early 2015 I was pretty frustrated with my career. Just a year earlier I said goodbye to my entrepreneurial aspirations and took a job at an IT-research firm in London.Normally, that’s a good thing. The pay was good, so were the benefits, and I had great colleagues. But it wasn’t for me — I felt like I gave up entrepreneurship.And on top of that, my personal life wasn’t great either. My girlfriend and I decided to end our relationship. And in that same week, my grandmother, who I loved dearly, passed away suddenly.I felt a lot of things. But mostly, I was felt like I didn’t understand life. Have you ever thought about it?What <em>is</em> life? What are you supposed to do? It’s not like babies are shipped with manuals that teaches them to be awesome human beings.For the first time in my life, I started looking for answers because I was tired of <em>just</em> living/existing without purpose.When I went back to Holland for the funeral, I also caught up with one of my mentors. The last time we spoke was over a year ago — before I moved to London.I told him the whole story, and he said:</h1>
<blockquote><em>“Even though there’s no right or wrong way to live your life, there are certain universal principles that lead to a happy, wealthy, and healthy&nbsp;life.”</em></blockquote>
<p>Naturally, I asked him, “what principles?”In a Mr. Miyagi way he said:</p>
<blockquote><em>“I think you know the principles. Everyone does. But 99% of all people don’t do what they&nbsp;know.”</em></blockquote>
<p>That’s about the best, and most bad-ass pieces of wisdom I’ve ever heard in my life.People hardly do what they say. That was also the story of my life.So for the next year or so I spent thinking, reading, and researching to find the principles my mentor was talking about.I asked myself: What are things that people talk about, but they never do?Here’s what I came up with until now.</p>
<h3><strong>1.No Strain, No&nbsp;Gain</strong></h3>
<p>We often talk about doing all kinds of crazy shit. Climb mountains, run marathons, skydive, start businesses, travel the world, write books, record albums, make movies, the list is endless.Just think about what’s on your bucket list for a second. Now, can I ask you one thing? Why haven’t you done those things?The answer almost always comes down to this: It’s hard.Well, I hate to break it to you, but life is SUPPOSED to be hard!That’s probably the most valuable lesson I’ve learned. Don’t shy away from hard things. Instead, train yourself to become a person that can endure difficulties. Physically <em>and</em> mentally.The cliché is 100% true: No strain, no gain. If you don’t strain your muscles, they get weak. If you don’t strain your brain, your cognitive ability will decline. If you don’t test your character, you become spineless.</p>
<blockquote><em>“If you rest, you rust.” — Helen&nbsp;Hayes</em></blockquote>
<h3><strong>2. Avoid Negativity At All&nbsp;Cost</strong></h3>
<p>Again, everybody knows this, but I almost never see people apply this in their life.They put up with negativity at work, at home, with their friends, family.And it’s not weird. Because everywhere you look, there’s negativity. In fact, people are inherently negative.  That’s how we’re hardwired.That’s why you see so much complaining, lying, blaming, backstabbing, jealousy, bullying, in the world.But here’s the thing: All those things keep you from living a healthy and wealthy life. So why do you let yourself be exposed to negativity?The problem with us, humans, is that we always see the good in people.</p>
<ul>
  <li>“He means well.”</li>
  <li>“She’ll turn around.”</li>
  <li>“He didn’t mean to hurt me.”</li>
  <li>“Things will change.”</li>
</ul>
<p>You know that you can’t change people, right? So why try? People only change when THEY decide to change.It’s best to avoid negativity. At all cost.</p>
<h3><strong>3. Give More Than You&nbsp;Take</strong></h3>
<p>As a baby, you’re taken care of. Your parents give you food, shelter, and if you’re lucky, a lot of love. Even if you had a bad childhood — you’ve been given many things like education, food, etc.Weirdly enough, that behavior of <em>taking</em> things tends to stick with us as we grow up. We think it’s normal to take, take, take. In fact, we think we SHOULD get everything we want.I was in the same boat for many years. But looking back, I was delusional. We’re not entitled to anything.Who says you SHOULD get that job you applied for? Or the promotion that you want? Or the hot girl/guy at the gym? Or widespread success?Instead of always focusing on what you want from the world, start thinking about what you have to offer.Life is not about taking. Please, do yourself a favor, and start giving more. But don’t be surprised if you also receive more.</p>
<blockquote><em>“The effect you have on others is the most valuable currency there is.” — Jim&nbsp;Carrey</em></blockquote>
<p>Helping others is the most important thing you will ever do in your life.</p>
<h3><strong>4. Time Is More Valuable Than&nbsp;Money</strong></h3>
<p>Out of all the resources in the world, time is the most valuable resource you have.<em>“Yeah dude, I know that by now.”</em>But why do we collectively spend time like we have an unlimited supply of it?Do you ever stop and think about how much time you have left on this earth? Let’s say you get to live to 80 years. Just do the math. It’s not that long if you keep wasting your time.Be more selective with your time. Don’t squander it like you can always get it back. Sure, you can always earn back the money that you’ve spent, but you can never earn back time.Once you spend time, it’s lost forever.</p>
<h3><strong>5. Create Your Own&nbsp;Path</strong></h3>
<p>We look at others and view them as examples. Fathers, mothers, brothers, sisters, friends, bosses, mentors, authors, entrepreneurs, artists.I’ve done that too. In fact, I still do it. Learning from others is one of the best things that I’ve done. Being humble is a good thing.But here’s the catch: You’re not all those people. You are you.That means one simple thing: Get off the beaten path, and create your own.Of course, traveling the road that has been paved by others is much easier. But it’s not fulfilling. And accomplishment weighs more than money, status, and even comfort.Don’t be afraid to go into an unknown direction. Go places where people never been before.How do you know you’re going somewhere new? People will likely not understand you. And that’s a good thing.</p>
<blockquote><em>“Men almost always walk in paths beaten by others and act by imitation.” — Niccolò Machiavelli</em></blockquote>
<h3><strong>6. Do Whatever Life Expects Of&nbsp;You</strong></h3>
<p>Look, life is random. Why are you born to your parents? Why do you live where you live? Why were you bullied at school? <em>Why, why, why?</em>Do you have the answers? I doubt it.Instead of wishing that things were different, accept the circumstances of your life. No matter how bad they are.Things are what they are. Look at it this way: Regardless of where you are in life, you are there for <em>some</em> reason. God, the universe, invisible forces.It doesn’t matter what it is. But when life expects something from you, show up and play your part.</p>
<h3><strong>7. Life Moves In One Direction</strong></h3>
<p>You can live in three different time dimensions in your head.</p>
<ol>
  <li>The past</li>
  <li>The future</li>
  <li>The present</li>
</ol>
<p>If you live in the past, you’re stuck in “why” mode. That means you always think about why things happened. That’s a recipe for unhappiness.If you live in the future, you live in “what if” mode. That state of mind causes anxiety about everything that MIGHT happen in the future. Again, that’s a recipe for living a timid life.You know that damned well. You also know that there’s only one ACTUAL time dimension; the present .Why don’t we live in the present? There are millions of things that prevent us from living in real time.One thing that has helped me let go of the past and future is to understand this: Life keeps moving forward — it doesn’t care what I think or do, so I might as well not waste my time on stuff I can’t control.If you look at it from a practical point of view, it doesn’t make sense to question the things that happen in our life — we just have to keep moving forward.There you have it — stuff you know, but you don’t do. I can’t guarantee a good life if you follow all principles. But when you follow these principles, you have more respect for the subtlety of life.Because these principles have one goal: Get the most out of life. And that’s the only point there is.<br>
</p>"
  }
])

follow = Follow.create([
  {
    follower_id: 1,
    followed_id: 2
  },
  {
    follower_id: 1,
    followed_id: 3
  },
  {
    follower_id: 1,
    followed_id: 4
  },
  {
    follower_id: 2,
    followed_id: 3
  }
])

like = Like.create([
  {
    author_id: 1,
    story_id: 3
  },
  {
    author_id: 1,
    story_id: 4
  },
  {
    author_id: 1,
    story_id: 5
  },
  {
    author_id: 2,
    story_id: 1
  },
  {
    author_id: 2,
    story_id: 2
  }
])
