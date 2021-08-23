+++
title = "migrating from Notion to Obsidian"
date = 2021-08-23
+++

Earlier this year, Notion's flaws had frustrated me enough to get me to spend days moving all my stuff to a new notes application called [Obsidian](https://obsidian.md/). Unlike Notion, Obsidian is a notes system that operates on top of a simple folder of notes - notes are stored as plain .md files, organized in regular folders. All notes and attachments are local and can be regularly accessed with a file explorer. .md files can always be opened in a plain text editor as well. The rest - cross-linking, graphs, organizing tags, etc. - is handled within Obsidian and doesn't interfere with your actual notes. 

If you have used Notion you may understand the appeal of this as it makes the bold decision of, well, actually giving you access to your valuable notes offline and outside the app.

Below are my notes on my experience of the pros and cons of both Notion and Obsidian, my experience transferring Notion data to Obsidian, and some screenshots of how I worked within both. Overall, while I miss some stuff about Notion, I also definitely don't miss some other parts. Obsidian is more basic but ultimately is designed around a different agenda, and so far I enjoy it more. If you've been thinking of escaping Notion I hope this helps. 


# TLDR / pros and cons
## Notion (as of late 2020)
### Pros
- Powerful and extremely flexible, but still very easy to learn
	- Structuring my stuff around tables as databases for knowledge worked perfectly. Categorizations and tagging especially were very satisfying to use, and worked very well for search. 
	- Without plugins, it has the perfect amount of customization for people to make websites, organization systems, agendas, note-taking systems, interactive calendars, and more without being overwhelming.
	- Once you realize "everything is a page" its easy to figure out how Notion works
- Templates allow newcomers to get tons of functionality out-the-box
- web-based
- Shared workspaces and collaborating works great
- Instantly share or privatize any page
- visual, intuitive, drag-and-drop block system
	- WYSIWYG editing
- regularly updated with new (and useful) features and performance improvements
- Aesthetically pleasing
- API allows for interactions with other services (I haven't tried it though)

### Cons
- **UNUSABLE OFFLINE**
	- This is pretty much what made me switch. On trains, planes, basements with poor wifi, you are completely locked out from your stuff without a decent internet connection.
- Poor performance, even slower on mobile
	- Recent updates have apparently improved the speed
- Memory hog, which is especially bad for something you typically keep open all day
- Formatting can get weird on mobile

## Obsidian
### Pros
- Available offline
- Files are organized sanely and are accessible outside the app with no friction
- Also easy to learn; if you don't want most of the fancy stuff and just want a notes app, you can start instantly. The fancy stuff stays out of your way if you don't want it.
- Powerful search and connection features
	- In a note, hyperlinks to other notes create a connection that will be visible in search
	- Add tags to notes to search by topics; notes with the same tag also will have a visible connection
	- Connections will literally visualize via the [Graph view (Obsidian docs page)](https://help.obsidian.md/Plugins/Graph+view) - definitely a more "fancy" feature but if you're into [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten) and the idea of notes as your "second brain" it's cool seeing your notes collection interconnect as they grow over time. Check the docs page above for an example; the Obsidian docs themselves have a graph view of their structure to the right of the text.
- Themes and custom plugins built-in and can sync across devices (I think?)
	- I use the Atom theme from the theme browser
	- The good plugins feel like native features; I strongly recommend [Advanced Tables](https://github.com/tgrosinger/advanced-tables-obsidian)
- Efficient UI
- Panel splitting like VS Code: unexpectedly this is my favorite feature that Notion doesn't have. This one feature has turned Obsidian into a self-contained system for eg. referencing notes when writing a paper.
- Save panel layouts aka "workspaces": Save panel and menu configs for different contexts. Examples of this are in my workflow screenshots at the bottom of this post.
- App is lightweight and fast on all platforms (although it does use Electron)

### Cons
- (less a con than disclosure) if you were a Notion superuser, used tables, or mainly used it for purposes other than a pure notes app, you will have to adapt to a different system or be disappointed. You can probably replicate most of it, like the calendar and integrations, through custom plugins but personally I didn't want to rely too much on those and ended up simplifying a lot of my Notion stuff. Trying to 1:1 your Notion setup will probably be an uphill battle.
- you might not like Electron
- not open source! Some popular alternatives (I haven't tried these)
	- [Foam | A personal knowledge management and sharing system for VSCode](https://foambubble.github.io/foam/) 
	- [TiddlyWiki — a non-linear personal web notebook](https://tiddlywiki.com/) 
- no web app available 
- no collaboration features that I know of



# migrating my notes to obsidian
These notes are really rough, sorry. If you have any other questions check the [Obsidian forums](https://forum.obsidian.md/t/notion-2-obsidian-migration-instructions/2728) or send me a message.
## packing for the move
Notion's export options are a bit messy as the way everything is either a Page or a database of Pages doesn't perfectly translate to any common file format. There are a handful of [discussions](https://forum.obsidian.md/t/notion-2-obsidian-migration-instructions/2728) on the Obsidian forums on how to clean your Notion export as much as possible for Obsidian, but I mostly just skimmed through them and did the basics without trying to match organization perfectly. I chose the .CSV + .MD export, which is recommended as it translates your notes directly to Markdown and pretty much keeps them intact except for any included databases or internal links to other pages which won't really be usable. As far as I remember, the .CSVs don't matter too much in terms of content storage as all the Pages stored in a certain table are collected in a folder as .MD files. If you had some tables where you just stored a value or text in each cell (eg. bookmarks), however, you'll have to get it from the .CSV

![Notion dump of my bookmarks to .csv](/assets/updates/notion-to-obsidian/export-in-excel.png)
Notion dump of my bookmarks to .csv

## structure of notion workspace
![map of how my notion stuff was structured](/assets/updates/notion-to-obsidian/notion-map.png)
map of how my notion stuff was structured

- main: quick notes + link to important resources
- bookmarks - ALL web links stored here
	- all pages referenced a bookmarks listing to refer to a link
- library - list of books, with attached PDFs + notes
	- similar to bookmarks as a general database
- notes - database of misc. uncategorized notes, mostly personal or rough ideas 
- site updates - draft blog posts
- work applications - database of application links with status tracker
- resume - edit markdown of resume content to be used in resume builders
## translating tables and pages to folders and docs
### tags and mentions
- organize bookmarks by tags
	- should links be all in one file or a folder of individual files per link?
### Bookmarks
1. from notion backup used .csv of Bookmarks table
2. formatted cells into a link format + tags
![my notion bookmarks page](/assets/updates/notion-to-obsidian/notion-bookmarks.png)
![my obsidian bookmarks page](/assets/updates/notion-to-obsidian/obsidian-bookmarks-main.png)
looking at the two side-by-side makes me miss Notion more than usual. I liked having the "Date Created" attribute tell me when I added a bookmark.
### Library
similar to bookmarks
save PDFs in Library Files folder and reference
### notes
imported apple notes to markdown with [Exporter](https://apps.apple.com/us/app/exporter/id1099120373?ls=1&mt=12)  
trimmed current note titles + formatting with [Notion to Obsidian Converter](https://github.com/connertennery/Notion-to-Obsidian-Converter)
### site updates
formatted into a list of links
### work applications
formatted into a list of links separated by headers
### resume
merged MD from notion and my website
### learning + projects
- separated
- just ported over my CTCI page from learning
- project pages were ported with asset folders for screenshots
### finally... main
stripped down to just the immediate todo list; i have a directory of all my stuff right here

# Other things to consider
## what about synchronization?
I recently bought Obsidian Sync and it works well for syncing with my phone and iPad.  
Before buying it I set up a crontab job that automatically commits and pushes the notes folder on my mac; here's my note on how to get it done bc it can be a bit frustrating:
### automating git with crontab for mac
#git #cron #obsidian #mac  
for mac:  
make sure cron has path to your scripts  
GIT PUSH DOESNT WORK, you have to generate a SSH key on mac then add it to github  
https://askubuntu.com/questions/117978/script-doesnt-run-via-crontab-but-works-fine-standalone  
https://superuser.com/questions/564829/git-push-to-github-via-cron-on-mac  
## mobile app
It just came out so I haven't used it much. It's definitely a little different from the desktop app and it feels like it works best with a connected keyboard, but it seems to include everything including themes and custom plugins. For touch control you either swipe from the edges for the gray menus to navigate files, outlines, etc. or from swipe down to reveal the command palette from the top edge. I'm still getting used to it but its a clever way to find your way towards essential actions. I think the iPad version needs some formatting adjustment so the gray menus don't take up so much space when opened.
![on Obsidian mobile, my "home" workspace with my main to-do and bookmarks.](/assets/updates/notion-to-obsidian/obsidian-mobile5.png)  
my "home" workspace with my main to-do and bookmarks.
![on Obsidian mobile, swipe for the menu.](/assets/updates/notion-to-obsidian/obsidian-mobile4.png)
swipe for the menu.
![on Obsidian mobile, editing view with keyboard.](/assets/updates/notion-to-obsidian/obsidian-mobile3.png)
editing view with keyboard.
![on Obsidian mobile, full-page editing view.](/assets/updates/notion-to-obsidian/obsidian-mobile1.png)
full-page editing view.
![on Obsidian mobile, full-page reading view.](/assets/updates/notion-to-obsidian/obsidian-mobile2.png)
full-page reading view.

# more screenshots
I was going to describe my Obsidian and Notion workflows and compare them, but it's been difficult trying to put the experience into words. When revisiting my Notion workspace to take screenshots I remembered that one thing I realized when switching to Obsidian was just how over-engineered I made everything in Notion; I re-organized the Skills section of my resume into a table just so I could have it sync in both my Skills page and Resume page, and for what? I have to admit that most of my interest in Notion was spending hours reorganizing my notes to use fancy new features when I should have been doing work. Obsidian made me flatten everything down into plain Markdown, headings, tags, and cross-linking which has been sufficient. 

So, instead of describing my workflow I will show you some of the main pages I used in Notion as well as the workspace layouts I currently use in Obsidian.

## Notion screenshots
![the directory of my Notion system.](/assets/updates/notion-to-obsidian/notion-structure.png)  
the directory of my Notion system.
![my main Notion page where I would link to important stuff and to-do.](/assets/updates/notion-to-obsidian/notion-main.png) 
my main Notion page where I would link to important stuff and to-do. The top quote block would usually have the most important thing I had to do that day.
![Notion page for managing classes.](/assets/updates/notion-to-obsidian/notion-classes.png)
Notion page for managing classes.
![Notion page for managing resume.](/assets/updates/notion-to-obsidian/notion-resume.png)
Notion page for managing resume.

## Obsidian screenshots
![typical layout. current writing in the center, and bookmarks and my main to-do pinned to the right.](/assets/updates/notion-to-obsidian/obsidian-example.png)
typical layout. current writing in the center, and bookmarks and my main to-do pinned to the right. If I need to open something else I split panels horizontally and `Cmd+O` what I'm looking for.
!["bookmarks + main" layout. When I'm web browsing or not doing anything I have this layout open.](/assets/updates/notion-to-obsidian/obsidian-bookmarks-main.png)
"bookmarks + main" layout. When I'm web browsing or not doing anything I have this layout open. One of the biggest differences I've had to adjust to in Obsidian was when importing my bookmarks; you might have noticed that a lot of them remain uncategorized. In Notion, categorizing was pretty easy as I could search for the right tag and then have the bookmarks table sort by topic. I could also have multiple topics tagged for each without hassle. Since there's no such thing in stock Obsidian, I've opted for a plain-Markdown list organized by headers. This lead to a dilemma: do I have to pick just one category for each? do I add extra tags? Since I can't re-sort a plaintext list easily, I just chose to put bookmarks under one header by their most relevant topic. This has taken a bit more effort so currently I have 200 or so bookmarks just listed under "to file". Also, Obsidian's tags don't really work for this since searching through tags means going one by one through each mention of the tag instead of something like a filtered list of what you want. I think tags were designed with the assumption that you are tagging the page, not specific content. Been looking at the [dataview](https://github.com/blacksmithgu/obsidian-dataview) plugin to maybe make a better bookmarks thing; reach out if you have a solution of your own.
![save and load different "workspaces" which are saved panel configurations.](/assets/updates/notion-to-obsidian/obsidian-workspaces.png)  
save and load different "workspaces" which are saved panel configurations. 
![unlabeled graph view of all my notes.](/assets/updates/notion-to-obsidian/obsidian-graph.png)
unlabeled graph view of all my notes. yellow dots represent tags present in the notes (gray) they are connected to. bigger gray dots are notes with more text. connections between gray dots mean one note is hyperlinked to the other. Unlike the world wide web, you can see the "backlinks" of each note, or every instance of that note being hyperlinked in another note, letting you backtrack to see the context around that note.

Ultimately, Notion and Obsidian become very different beasts if you want to use them as more than a basic place to write and store your notes. For a note-taker who needs something for school, I can wholeheartedly recommend Obsidian. The context and search features help you revisit and re-contextualize your notes when it's time to review them, and otherwise it functions as a minimalist note-taking app suited for someone who, for example, might have had issues or hit roadblocks with Apple Notes or Evernote. I can only recommend Notion if you are willing to compromise basic necessities like offline access for a more complex platform that can more broadly manage various parts of your life beyond note-taking. 

I really miss that aspect of Notion where it has really gone beyond note-taking - once you discover its powers you can kind of map out your entire life on it, like a "life system" that surpasses the typical system of using your OS Desktop as a space to stuff random docs, spreadsheets, screenshots, notes, etc. I don't know how to convey the satisfaction of mapping out my mental lists of movies, books, video games, bookmarks, study areas, and more onto tables where I can store what I know, how I feel, and what I want to explore, all with very little friction. It's a shame that this amazing software had to manifest as a web-based lagfest that keeps all its data in a black box that I lose access to when my wi-fi cuts out. 

Notion's flaws have created a demand for something similar built on saner foundations. The most hyped platform I have seen so far is [Anytype.io](https://anytype.io/), which seems to be more self-aware about being an operating environment for people whose lives revolve around files and data. They promise an open-source platform that runs completely locally like Obsidian while providing the flexibility to essentially make your own apps and workflows like Notion, among many more promised features like using IPFS protocol and encrypted peer-to-peer data exchange/sync. 

Until then, I am sticking with Obsidian. I used Obsidian to write most of the stuff for this website and it's worked well for that as the Markdown transfers to Zola; I just have to redo all the image links. If you're deciding between platforms for school, work, research, anything like that I hope this helped.