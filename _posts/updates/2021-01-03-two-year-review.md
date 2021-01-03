---
title: two years of CS - a review of 2019-2020
categories: updates
layout: post

published: true
---

It's been two years since I started programming.

I keep a tracker of how many days it's been since my first program on [repl.it](https://repl.it/~) - its first revision being dated Feb 27, 2019.

![edit history of my first program](/assets/updates/2020-01-03/robotrat.png)

*Edit history of RobotRat.cs*

It's when I started the book "C# for Artists" by Rick Miller, and the first assignment I completed when deciding to pick up programming seriously. "RobotRat" doesn't even compile and the indentation speaks for itself:

```csharp
// Chunk from after defining RobotRat class
public void Run() {

  while (keep_going){

  PrintMenu();
  ProcessMenuChoice();
  }
 }

  public static void Main (string[] args) {
   RobotRat rr = new RobotRat(10,10);
   rr.Run();
  }
```

Regardless, it was the first step in an ongoing journey to become a 'good' programmer - someone capable of building their many ideas into high-quality projects and holding a conversation with a FAANG intern at a party. Since then, I've learned enough to start a couple projects, actually [read documentation](https://devdocs.io) and even indent properly. There's still a lot of work to be done, but looking back has shown me how much I've learned.

Since this first program, the upcoming two-year anniversary since its inception - and the beginning of my pursuit of programming - has encouraged me to evaluate my overall progress. The following is a brief overview of my first year of dedicated coding (2019), and then I will more closely review the past year (2020) and what I've learned + done.

* TOC
{:toc}

# 2019: Resolution and Starting

I had always wanted to be a coder since childhood, to the extent that my parents graciously paid for two years of summer camp at ID Tech to see if I'd pick it up. Vague memories of C++ "Hello World!" programs and asterisk pyramids, 2008 Minecraft Alpha and Team Fortress 2 tournaments make up my recollection of one of those years, the other which is somehow completely absent from my memory save for a Battlefield 2142 giveaway. As it turned out, my fourth-grade self hardly resembled any sort of coding genius and none of it really stuck. Despite my overbearing enthusiasm for computers and video game hardware trivia, I struggled to focus on even the most basic programming concepts. This, plus another significant time investment in classical violin, as well as a teacher who humiliated me for my shameless over-enthusiasm, convinced me and my parents to drop the path altogether and instead expand on my demonstrated talent for the violin. 

Ten years later, the winter break of 2018-2019 was a period of significant self-reflection. I had finished freshman year at Fordham University as a music major, only to realize (or honestly, to admit to myself) that the major had nothing to do with my actual interests. Expanding on my initial college pursuit of producing electronic pop music, and with a growing fascination for VR, I decided to switch over to the school's New Media and Digital Design major that fall to explore computer science and design courses. During the winter break, I had become so invested in exploring new ideas for VR user interaction that I resolved to learn enough C# to use the Unity game engine. As I considered myself an artist, it seemed that Rick Miller's "C# for Artists" textbook would be a good start alongside some Unity tutorials on YouTube. (I honestly can't recommend the textbook, and if you want to learn Unity, use the official tutorials then read the documentation)

With every course I took both in school and online, it became very apparent that I had to grasp some universal concepts of programming first. My resolution snowballed into a greater mission to become an adept programmer capable of developing new ideas with little friction. The first course to "click" the ideas and flow of programming for me was [Harvard CS50x](https://www.edx.org/course/cs50s-introduction-to-computer-science), which I started that spring and wrapped up by the next winter. It taught me proper formatting and syntax and how to play with data structures - namely hash tables - to make real-world tools and solutions. I would recommend the course to any beginner as it gets real low-level with its C assignments, although I would still have a very fuzzy grasp of data structures by the end of the course.

With CS50x, some volunteer work at tech conventions and a handful of Comp Sci courses peppered throughout my resume, I was happy to find that I had been approved for interview testing for an SDE internship at Amazon. With that, I would begin investing more time into interview coding and Cracking the Coding Interview throughout the finals period of the fall semester.

# amazon interview

I had learned a lot about my programming 'comfort level' during the SDE interview process, and I have to give credit to Amazon for giving me a path through skill-based testing compared to the dozens of smaller companies who understandably ignored my non-CS, niche and amateur resume (most of the internships I applied to had no form option for a "New Media" major on their application page). The first couple rounds of AI-based testing were a breeze, given that they were mostly a filter to see if you could use bare-minimum programming principles such as conditional and iterative logic. The in-person coding interview was where I visibly struggled, and not solely due to my insufficient technical knowledge.

The question was simply how to move a binary tree to an array, then restore the tree from said array. It was a question that with a clearer mindset (and admittedly a little more practice with binary trees) I would have been able to dig into my understanding of a binary tree and make an array that could easily find a node's children using its index positions. Instead, I was helplessly running myself into an over-complicated wall of nonsense and couldn't figure to take a step back amidst my stress. I mumbled and spouted randomly about depth-first search, and even as the interviewer helped guide me along a possible solution with my existing knowledge I only got more lost. 

For a first tech interview it certainly could have gone worse. My interviewer was incredibly friendly even after the awkward technical portion and went into a lot of detail about life at Amazon. Most importantly, it served as a wake-up call and the start of an ongoing goal to improve both my comfort level with interview-type questions and my ability to think clearly under pressure. I've found that improving myself in one of those areas also benefits the other.

# global game jam

I went to the NYC Playcrafting Global Game Jam in February of this year per the recommendation of my professor from Intro to Game Narrative and had the incredibly valuable experience of working on a real project, with a team of fellow programmers and artists, for the first time. My comfort level with Unity was not sufficient enough to do significant work, and the senior programmer handled most of the game's logic and asset management, so I helped fix some bugs and worked closely with the music person to make a dynamic soundtrack using AudioMixer.

[play the game on itch.io](https://idkwhojamesis.itch.io/fix-the-penguin-gamejam)

# brokebook

A startup pitch challenge was held at my college during the spring, so I decided that it would be a good opportunity to practice web development. My idea, a campus-bound textbook exchange, turned into a database-driven craigslist clone using Django + Bootstrap.  

[source code](https://github.com/idkwhojamesis/brokebook_web)

```python
# models.py had only one model - the Book object designed for
# posting an offer or a request for a textbook.
from django.db import models

class Book(models.Model):
    CAMPUS_CHOICES = [
        ('LC', 'Lincoln Center'),
        ('RH', 'Rose Hill'),
        ('LR', 'Both'),
    ]
    SEMESTER_CHOICES = [
        ('F', 'Fall'),
        ('S', 'Spring'),
        ('U', 'Summer'),
    ]
    CONDITION_CHOICES = [
        (1, 'New'),
        (2, 'Mint'),
        (3, 'Used'),
        (4, 'Bad'),
        (5, 'Unusable/Missing Parts'),
    ]
    # Add email EmailField (adds validation)
    # (?) Change class fields to subj(options) + class number
    date_created= models.DateTimeField(auto_now=True, editable=False)
    post_type= models.BooleanField('Offer(T)/Ask(F)')
    book_title= models.CharField(max_length=150)
    book_author= models.CharField(max_length=150, null=True, blank=True)
    campus= models.CharField(max_length=2, choices=CAMPUS_CHOICES)
    professor= models.CharField(max_length=20)
    class_subject= models.CharField(max_length=8)
    class_section= models.CharField(max_length=3, null=True, blank=True)
    semester= models.CharField(max_length=1, choices=SEMESTER_CHOICES)
    year= models.SmallIntegerField(choices=YEAR_CHOICES)
    online_code= models.BooleanField(null=True, blank=True)
    edition= models.CharField(max_length=20, null=True, blank=True)
    condition= models.SmallIntegerField(choices=CONDITION_CHOICES)
    contact_info = models.TextField(max_length=200, default="Contact info not provided.")

    def get_absolute_url(self):
        return "detail/%i" % self.pk

    def __str__(self):
        return self.book_title
```

# traces of poison

RPGMaker game for Intro to Game Narrative final project. I didn't realize how useful RPGMaker could be for implementing plot structure, dialogue, characters, locations, etc. in exponentially shorter time than any other game engine. It was so easy to just go in and start making a game that I'll definitely use it again if I ever have a good story or setting idea. 

I used Twine to organize the plot, since it had multiple branches and endings. I may use it again for this purpose, but it's clearly a tool for making text-focused games such as visual novels.

[play on itch.io](https://idkwhojamesis.itch.io/traces-of-poison)

![Twine map of plot](/assets/updates/2020-01-03/twine-rpg.jpeg)

*Twine map of plot*

# visualizer for 100 gecs - xXXi_wud_nvrstøp_ÜXXx

p5.js sketch for Creative Coding final project. The lyrics are stored in a JSON file in key-value (timestamp, lyric line) pairs, and the sketch updates the displayed lyric line when a timestamp from lyrics.json matches the song time. The inner sphere inside the larger sphere + tree reacts to the song's amplitude and slowly increases in size as the song progresses.

[video of sketch](https://www.youtube.com/watch?v=Dk0ctImbsMk)

[link to sketch](https://editor.p5js.org/jamesparknmdd/sketches/zRbPJcqZa)

# half-life: alyx modding

(spoilers for Half-Life: Alyx)

Following the release of the Half-Life: Alyx Workshop Tools, I wanted to see how the later anti-gravity levels worked and see if I could make my own. I had thought that maybe the gravity of parts of the level had actually changed and affected which direction the player would stand. 

The actual implementation is a bit more hacky than that: rooms were rotated so its "floor" would be a wall/ceiling, giving the illusion of anti-gravity, and forces would be applied to parts of the level so that objects would "fall" in ways that would disobey gravity.

I played around with this a little bit with a custom level, throwing shopping carts at walls and using force points to make them stick. Once I rebuild my PC maybe I'll include some footage.

![Half-Life: Alyx hallway level](/assets/updates/2020-01-03/hla.png)

*One of the Half-Life Alyx's trippiest rooms exposed: forces are added at different parts of the hallway to make some objects "fall" towards the upper "flipped" hallway's floor.*

# twitter crop tool

Web project for my senior capstone project. Started with React for the site but scrapped that for HTML + Bootstrap CSS. The interactive part uses Konva.

[site on codepen](https://codepen.io/idkwhojamesis/full/mdEYxwM)

![mobile view of twitter crop tool](/assets/updates/2020-01-03/twitter-crop-tool.gif)

*The final result, in mobile view*

# other things

- A data structures class that really helped me; I recommend the textbook we used, "C++ Plus Data Structures" by Neil Dale
- Notion - this is the greatest organization tool I've ever used. After many hours re-organizing all my notes I've slowly moved all my web resources there, from essays to assignment calendars to bookmarks etc. My only major gripe is that it takes forever to load.

# wins:

I'm glad that I have some projects that I can show on a website, portfolio, etc. It was nice for some of my classes to have their finals be in project form; it gave me a deadline to push more stuff out and the extra time given during school to work on these projects made the workload more bearable.

# things i wish i did:

One interview I did had me explaining the more technical parts of the brokebook website, specifically about some Python-specific syntax within Django. My answers were vague due to both not having a full grasp of Python or Django, and just being bad at explaining things under pressure. This encapsulates what I need to work on in 2021:

- Communicating clearly - this also includes having clearer thoughts and ideas
- Grokking any topics relevant to a project or an interview to a level that I can talk comfortably about them
- Making projects that I am passionate to talk about

All my projects this year never went past the "workable prototype/demo" stage - I wish that I had spent some time polishing a couple of these and showing them off.

# plans for 2021

- Full grasp of basic data structures + (sorting/search) algorithms - I also want to make a project(s) that demonstrates effective uses of these structures
- Pass a coding interview
- Read more source code - I don't do this nearly enough, to the point where I can't clearly tell you what a well-written program or a well-organized project looks like.
- Finish and polish one project - that includes designing and planning for long-term development and maintenance.

It's been a *very* interesting year, for me and the rest of the world. I'm keeping realistic expectations for 2021, but I aim to spend most of my time on becoming a kinder, more helpful, more active person than I am today.

Thanks for reading through this with me, and I wish you a great year full of love, self-care, good food, goals met, and many more good things. - James