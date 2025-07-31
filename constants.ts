
export const TRANSCRIPT_TEXT = `
Class Transcript - Session 91493
Recorded on 2025-01-30

Time | Speaker | Contribution
--- | --- | ---
00:03 | Professor | Hey guys.
00:10 | Professor | Is Seoul getting warmer?
00:16 | Professor | No.
00:18 | Marina Levay | I feel like it's getting colder even.
00:22 | Professor | It looks, it doesn't look too cold to me.
00:27 | Marina Levay | No, not right now. But it was like snowing for the past two days. Oh really? Yeah, like the whole day snowing.
00:42 | Professor | But isn't it something you kind of like?
00:47 | Marina Levay | Yes. As a person who doesn't see snow that much, I kind of like it. Yeah, it's amazing to see snow fall. I can't get bored of it.
00:58 | Professor | Yeah, I think it just like kind of making, you know, just staying in the rest hall probably makes it a little more depressing.
01:12 | Professor | Okay. Welcome everybody.
01:18 | Professor | I would assume that that's a fake background, Maria, right?
01:23 | Maria Dumitrescu | That's not where you are. Yeah. It's too good to be true.
01:31 | Maria Dumitrescu | Okay. It's actually from Japan. I mean, it's really too good. Oh, it is from Japan?
01:36 | Professor | Do you know where?
01:38 | Maria Dumitrescu | Yeah, it's a bamboo forest near Kyoto.
01:40 | Professor | Oh, cool.
01:54 | Professor | Alright, is everybody here? Yeah, almost. So let's get started.
02:04 | Professor | How was it? How was preparation for this class? Did it seem a little bit harder or easier than like what you've been reading the past couple of sessions, like the probability, the pure probability one? Any thoughts? Artem, what do you say?
02:26 | Artem Zhuravel | I would say it was easier. It was easier? More, a clearer way to apply formulas, I would say. Okay, yeah, yeah, yeah.
02:35 | Professor | I have probably more structure. Did you, have you seen this stuff in FA? Because I don't, never taught CS51. So you've seen some of this in FA. Okay, that's good. Alright, let's get started. So we're going to be, basically you're in unit two, I think. We're in unit two, we're going to spend some time today and next week on conditional probability.
03:06 | Professor | Let's just jump right into it. I have a bunch of questions I'd like to ask you and then, oh no, and then we can maybe get started on the breakouts. Okay. So, good. I was going to ask Ahmed. He's here. How are you doing, Ahmed? Good, alright. So, what is the conditional probability?
03:40 | Ahmed Ibrahim | So describe it, I think it would be a probability of something happening, giving that another event, yeah, a probability of event happening, giving that another event. Okay.
03:50 | Professor | Exactly. So, probably an event given that we, and we show the given that part with a vertical line, another event. This is usually the case. And we say an event given another event because we don't say an event based on itself, because we're going to talk about that, like what's so weird about just saying what's the probability of an event given that that same event happening. Okay. So, then given what Ahmed said, and we all agree with this is conditional probability, right? Can I call them event A and B? Here's a question I have. Does event B, or I should say should event B always happen before event A? Because we're saying A, what's the probability of A given that B happened? So, my question is should event B always happen before, like there's, you know, temporally does happen before. So, excellent. Checks, give me checks, give me Xs. Sounds like most people didn't understand the reading.
05:19 | Professor | Nice. I could convert one vote based on just that trick.
05:28 | Professor | That's correct. They don't have to. Let's hear from Ransit, what do you say?
05:35 | Ransith Weerasinghe | Yeah, I think what I was thinking was like, if we say like, if something happens, like, we can always say like something like, even that something happens after. That could be.
05:49 | Professor | Maybe I should ask like, can you come up with an example that is totally meaningful conditional probability, but, you know, B happens after A. This is for everybody. If you can think of an example that basically B happens after A happens, but we can't, but we write it as, you know, we calculate probability of A given B.
06:18 | Professor | Yeah, Alexia.
06:20 | Alexia Moreanu | It was the example from the professor with the marbles, the green and blue marble. We were asking what's the probability that my friend has a green or a blue marble given that I took, I have this green marble. And the event being that I have the green marble happened after my friend took that marble out of the box.
06:41 | Professor | That's a good one. And maybe like something that's more kind of day to day example, anybody?
06:51 | Professor | Like something that's, you know, not dice and coins and marbles.
07:00 | Professor | Artyom?
07:01 | Artem Zhuravel | Yes, so it was also in pre-classwork. So what's the probability that a person smoked given the diet of lung cancer? Well, let me write it and then we can talk about it.
07:11 | Professor | The person smokes given they got cancer. Oh, yeah, this is great because cancer doesn't happen before the smoke, right? Cancer usually happens after the person smokes. Exactly. That's a good one. Well, what's the probability of the person being sick given that they tested positive?
07:33 | Professor | You usually are sick first and then you go take a test. Right. So these are examples when B actually, you know, B doesn't have to happen before A. Carolina, does that make sense? Or you just got tricked by my stinkiness.
07:50 | Karolina K dzia | Oh, now it makes sense. That makes sense. With a concern smoke especially.
07:55 | Professor | Yeah. Not my example, but Artyom's example.
08:01 | Karolina K dzia | Like both.
08:03 | Professor | Note it. Okay. All right. So then I'm going to add my next question is.
08:14 | Professor | Oh, yeah. So what is, how do we calculate this? What's the probability of A given B?
08:24 | Professor | Tell me the conditional probability formula.
08:32 | Professor | Rollins?
08:36 | Rolands (he/him) Barkans | Oh, yeah. What the probability of A intersection B over the probability of B.
08:45 | Professor | Exactly. Intersection, you mean and or intersection or no, that's pretty much all we say over probability B. So then I would add, I would like to ask Nori to explain why is it that if I use a defend diagram, like, can you explain this formula using a Venn diagram? So this is A, this is B. Tell me what this means in this Venn diagram.
09:25 | Noriaki Kishida | So first the condition is PB. So it's only in the B. Okay. So we're talking about inside this.
09:35 | Professor | We're talking about everything inside. Yes, because the condition says B has happened. There's no world where B didn't happen. Where are the condition under?
09:48 | Noriaki Kishida | Okay. And P and B is the intersection of A and B. So the conditional probability is the sound like the entire is B and then A and B. Okay.
10:09 | Professor | So you mean what's this out of the entire B, which is this, right? What is this intersection that Roland was talking about out of entire B, this whole circle. This is going to be giving us probability of A conditioning on B. Right. In fact, you know how we say probability of A? It's just probability of A. Probability of A given B. This is basically probability of A given over 1, the entire sample space S. Basically this is over probability of S. Here we say probability of A and B. We normalize the sample space. We no longer use the entire sample space. We say out of B because B happened. So now we're limiting the sample space to just B. That's why what Nori was saying about. All B, what is this share out of all B? And so we no longer say out of all S. We say out of all B. So we're kind of just changing perspective in conditional probability. Questions?
11:37 | Fortune Declan | Yeah, Fortuna. I just wanted to ask if the women that like put events are dependent on each other?
11:45 | Professor | Oh, yeah. I was going to actually ask that question and then I saw that next session that there is a focus question about it. And I was like, should I spoil it or should I not spoil it? Now that you already asked it, so I'm going to just ask it. I'm going to go over it. So Fortuna is saying what if A and B are independent?
12:09 | Professor | I want to ask you to think about this mathematically and intuitively. Two ways. What would happen to P A given B? There is an intuition, intuitive way, and there's a mathematical way.
12:26 | Professor | OK, I want one more hand because I can't just ask. All right, Maria, which one do you want to answer? Intuitive. OK, intuitive is good.
12:39 | Maria Dumitrescu | So I'm thinking because B doesn't give any information or like A because they're two different events. So it doesn't give any information about A itself. So they're separate circles. So that means it's B.
12:53 | Professor | Exactly. So probably if A given B will be what?
12:59 | Maria Dumitrescu | Probably B.
13:00 | Professor | Probability of A. A, exactly. Very good. So and I think I forgot to ask. Maybe Maria can tell us what do we mean when A and B are independent intuitively?
13:13 | Maya Naizabayeva | So it means that the events are not dependent on each other. They happen separately and we multiply them.
13:21 | Professor | Maybe like a little bit more intuition for us. Like you kind of repeated the definition.
13:31 | Professor | I said what do we mean by A and B are independent? You said they're not dependent.
13:40 | Maya Naizabayeva | I know what it is.
13:43 | Professor | It's like it's a very easy way of thinking about two independent events. You know, lay layperson's words. Pedro.
13:56 | Pedro Goncalves de Paiva | If we think intuitively, we can also think about before. We know that before it's dependent. So B has to happen. So one is dependent on the other. And when you say independently, you can think about it. So if they're independent, the probability of B happening or not doesn't really change the probability of A happening. So that's why they're independent.
14:15 | Professor | Good. Good. We're getting close again. Like all you're saying is correct, but it's not super. It's not the most intuitive way of saying it. So let's go to Ahmed.
14:26 | Ahmed Ibrahim | Oh, I didn't know my hands up. So from what I understand, independent is that if one event happened, that doesn't affect the probability of the other event happening. Or the other event. Like with replacement and without replacement. If I took someone with replacement, it's independent. So the probability of taking another person is not affected. But without replacement, it's affected.
14:50 | Professor | That's a good one. So you're saying A and B are independent if A has nothing to do with B. A happening has nothing to do with B happening. Or the opposite. And it's symmetric, right? So when you say A and B are independent, that means like B and A are independent. But even more intuitive, you could say A and B are independent if A has nothing to do with B.
15:19 | Professor | Like for example, the chances that
15:34 | Professor | Carolina will eat ramen sometimes next week has nothing to do with the chances that Ahmed is going to miss a class next week.
15:46 | Professor | I mean, you could imagine a world where it has something to do. Maybe you guys are going for the same dinner together or maybe miss the same class. But you know, technique has nothing to do. So basically that's the definition. If that happens, then I agree with what Maria said that A condition on B. If B happens, has nothing to do, doesn't do anything, doesn't change anything. P of A given B is going to be P. Ulliana, is that question?
16:23 | Uliana Zavalova | I don't hear you.
16:31 | Uliana Zavalova | Do you hear me?
16:33 | Professor | Yes.
16:35 | Uliana Zavalova | I wanted to talk about the mathematical part.
16:39 | Professor | Oh, yeah, please.
16:41 | Uliana Zavalova | So if we just follow the definition above where P of A given B is P of A and B divided by P of B. And we know that for independent events, P of A and B is P A multiplied by P B. And then P A multiplied by P B and divided by P B is just P of A.
17:02 | Professor | Exactly. Thank you.
17:05 | Professor | And that's why I said mathematical. Actually, it's very easy to understand the mathematical part. And intuitive part is like, you know, once you know, if B and A have nothing to do with each other, knowing that B happened will not going to change anything about the probability of A.
17:24 | Professor | Well, somebody had their Alex, were you going to answer a question or you want to ask a question?
17:32 | Alex Korablev | I wanted to ask. So we were to create a graph for that. The events would just not intersect, right? If they're independent.
17:43 | Professor | That's a good question.
17:48 | Professor | If the events don't intersect, that's something else.
17:53 | Professor | Marina.
17:56 | Marina Levay | If the events don't intersect, they will be disjoint. Disjoint doesn't imply independence.
18:03 | Professor | Exactly. So in disjoint, if you have like this, something like this, you know, A and B don't intersect each other, then the disjoint because P A and B in this case is zero. And I thought actually that's another interesting case that we can talk about. Maybe, shall I get rid of this, clean this document up? I'm just going to go ahead and do it in three, two, one. So let's quickly just talk about this. If A and B, so Alex brought up something interesting. If A and B are disjoint.
18:51 | Professor | What is probability of A given B? Raise your hand.
19:02 | Professor | One more hand and we're good to go. All right, Pran.
19:08 | Ransith Weerasinghe | Yes, so like in the top of A and B, but like probability of A and B, that's like an offset, so like probability of A and B. Exactly. Okay, probability of A and B, if they're disjoint, is going to be zero.
19:25 | Professor | So probability of A given B is going to be zero. Intuitively though, Nii, do you want to tell us the intuition behind why is it that if A and B are disjoint, probability of A given B is going to be zero?
19:41 | Nhi Pham Le Tinh | I think because then A has nothing to do with B. That would be more like independence.
19:51 | Professor | A has nothing to do with B, basically you're saying that A and B are independent from each other.
19:56 | Nhi Pham Le Tinh | Here they're disjoint. Because they cannot happen together. Exactly. So if B happens, then A cannot happen.
20:04 | Professor | A cannot happen. So if given that B happened, then it should tell you that A didn't happen because A and B cannot happen together.
20:22 | Professor | So that's very good. So that's kind of special about disjoints. And let me see, what is P of A given A?
20:34 | Professor | Intuition and like the answer. I would like to bring in Karolina. I'd like to bring in Marina.
20:45 | Professor | And yeah, why not Alexia? So Karolina, what do you think is the answer? Probability of A given A.
20:52 | Karolina K dzia | I think it's one.
20:54 | Professor | Okay, correct. I agree with you. So now the harder part, Marina, what do you think, what's intuition behind it?
21:03 | Marina Levay | Because if the event A given A, the event has already happened. So there's no other outcome that's possible.
21:11 | Professor | Exactly. A happens. So it says basically, what's the chance that A happens given that A happened? Well, A happened. Then it should be 100% chance.
21:23 | Professor | And we know the probability of the empty set. The event nothing given like anything else like A or B or C. That's always going to be zero.
21:40 | Professor | Just because, you know, this doesn't have any chance of happening. To figure out this stuff, whether it's conditioned on A or B or C or nothing. This is not going to happen. Conditioning on different things is not going to change the fact that that thing is not going to happen. Then I would like to say, all right, so now we're going to get into the business of Bayes theorem. Which I think is very intuitive. I don't know. I don't think Bayes should get too much credit because it's like super easy. I could have come up with this. You said P A given B.
22:19 | Professor | P A and B divided by P B.
22:25 | Professor | How do we go from here to Bayes theorem? Walk me step by step. Volunteers, non-volunteers.
22:38 | Professor | Okay. Awesome. First step.
22:42 | Artem Zhuravel | Yes, so we need to describe P A and B as P and B. PA and B. We write it in terms of these two. Yes.
22:58 | Professor | Very good. I'm just going to stop you there. I'm going to say the next step would be to say that P A and B is symmetric. I can just write it as it's the same as P B and A. Right? So the intersection of A and B, this intersection is the same as if I said B and A. So then if I write it as B and A, how can I rearrange this part?
23:28 | Professor | Alexia.
23:33 | Professor | Or you know what you can do? You can also tell me, like if I ask you what is the probability of B given A based on this definition, like the conditional probability, like how do you write this?
23:46 | Alexia Moreanu | Yeah, it would be the intersection, like probability of B intersecting with A over the probability of A.
23:54 | Professor | Exactly. Very good. And so I can do the same thing as what Artem said. So I can write B and A as probability of B given A and times P A. And so again, these two are the same. So then I'm just going to write P A given B is distinct.
24:27 | Professor | Now I can even read my handwriting. This was P A. And then divide it by distinct because, you know, it's basically P B times this and then I could bring it here, P B. So this is Bayes theorem. If there is one thing in probability you should remember is this theorem. It's very useful. It's very important. Not just in this course, you're going to see this thing haunting you in your dreams. And when you take other courses in CS, like CS 160, 46, CS 130, you know, like course econometrics, Bayes theorem is quite useful. When it comes to the loss of things, like honestly, it makes you at least just knowing this one line will make you 10 percent smarter than the rest of the world. Just just knowing this one line. There's so many things you can explain with this. So many fallacies you can explain. Actually, do you remember the fallacies? There's two major fallacies associated with Bayes theorem. Like they're called fallacies because if you know them again, if you know the Bayes theorem, you shouldn't be confused about them. Anybody remembers what the fallacies were from FA? Because I remember them from when I taught FA.
25:51 | Professor | There's two fallacies we talked about in relation to not understanding Bayes theorem or Bayes rule. Pedro?
26:01 | Pedro Goncalves de Paiva | I'm not sure if that's it. But we were seeing that like the probability of A intersection of B and B intersection of A is the same. But usually people might think that the probability of A given B is the same as the probability of B given A. And that's one.
26:18 | Professor | But it's not the same. Yeah. And you can prove this using the Bayes theorem. You can say probability of A given B is not obviously equal to this. Like there's all these two terms too. And this is called what? Anybody remembers? This fallacy. Alexia?
26:39 | Alexia Moreanu | Prosecutors fallacy?
26:41 | Professor | Prosecutor fallacy. And then there's Bayes theorem. Bayes rate.
26:51 | Professor | It's confusing because it's about Bayes theorem, but it's not Bayes rate. It's Bayes rate fallacy.
26:58 | Professor | And that one is basically just not understanding. It's like it's basically people would equalize like P A given B with P B. But this is not the same as this. Or this is not the same as this. Oh, sorry. They equalize P A given B with P B. So this and this. They think these two are the same thing. They're not. But anyway, so it's very important. I'm just trying to prove to you that Bayes theorem is very important in many ways, but it's also in life. I honestly think it's one of the things that when it comes to racial discrimination, and I'm talking about like a statistical discrimination, so economists talk about discrimination in terms of pure bias, negative biases, but also statistical discrimination. When it comes to that, Bayes theorem plays a big role. I was going to come up with a formula, an example, but I probably need to talk about Bayes theorem. So we said Bayes theorem one more time. P A given B is what Pedro?
28:08 | Pedro Goncalves de Paiva | It's going to be P of B given A multiplied by the probability of A divided by the probability of B.
28:19 | Professor | Exactly. I remember always like this A repeats here and this P repeats here. So that's a Bayes theorem. We can write it in terms of hypothesis and evidence. So I can say probability of the hypothesis or model given data or evidence. So this is hypothesis or model given data or evidence is probability of Carolina.
28:57 | Professor | If you just want to follow this formula, but replace A and B.
29:01 | Karolina K dzia | So this is probability of data given the hypothesis and the hypothesis divided by data.
29:10 | Professor | Exactly. Divided by probability of data. So this is a fancy version of, I mean, the same thing, which has changed A and B with purpose data. But intuitively it says what's the probability that this hypothesis, this specific hypothesis, let me call this hypothesis A, is true given the evidence you have.
29:38 | Professor | For example, what is the chance that my coin is fair given that I flipped it 10 times and it came heads, always heads, 10 heads. Right. So I'm trying to being fair unfair is the model of the system. What's the probability that the system explaining the coin given the evidence I have, it would be equal to this. Right. That's very useful in different contexts. Day to day life. Like we even do, I think, as humans, like we use Bayesian statistics more or less in daily life. Like, for example, let's say.
30:23 | Professor | Let's say this. I'm at, I'm, you know, walking in the streets and just accidentally run into, see this person, random person. I don't know that person. And that person's name is.
30:45 | Professor | Artem. That's the random person I meet on the street. His name is Artem. And I'm like, OK, I mean, people do it all the time again. Like, you kind of think about it like, Artem, are you, you know, my question is like the next question I have from this person. Artem, are you from Ukraine? Right. So that's my hypothesis. I'm like, are you from Ukraine based on the evidence that I am, only evidence I have. That you are from Ukraine. OK, so what is the chance that.
31:21 | Professor | What's the chance of Artem being Ukrainian?
31:26 | Professor | Maybe we can calculate that. Like we can see like. What percentage of people with that name are from Ukraine, right? When I hear more information from Artem and I hear that he speaks Ukrainian. And he doesn't say he's from Ukraine, but he says I'm from this town called Lviv. So I'm getting more information. Then I update my beliefs. I update my hypothesis. I have the initial hypothesis that he's from Ukraine. So what do you think? Like, let's say the initial hypothesis was like, you know, the chances that he's from Ukraine was 0.3. Given that I hear now he speaks Ukrainian, do you think that probability of him being from Ukraine, giving evidence is going to go up or down? Artem, maybe yourself.
32:18 | Artem Zhuravel | Well, it's a tough question.
32:21 | Artem Zhuravel | Probably, probably go up.
32:24 | Professor | It goes up. If I get evidence in favor of my hypothesis. But for example, if I this Artem on the street. He says, I'm like, oh, what's your name? He's like, my name is Artem. And then and he's on the phone is like start speaking Spanish. So my evidence is that Artem is speaking Spanish. Then this is evidence against my hypothesis, right? So that probability from point three now should go down. We kind of do this calculation. That's basically what I'm trying to say is that you kind of use this logic, this way of thinking all the time without really putting the numbers in this formula. You always update your priors. Based on evidence. So now it's not that I mentioned the word priors. I want to ask this question.
33:15 | Professor | These Bayes theorem pieces of it, they have names. They're not nameless.
33:26 | Professor | I would like to know what they are called. So one more time, probability of hypothesis.
33:35 | Professor | Given evidence. And again, I could write this in terms of A and B, but I think it's more interesting when I write it like this. Evidence given hypothesis. And you're supposed to read my writing here, but let me know if you cannot.
33:55 | Professor | What do we call this? And let me just actually change color.
34:07 | Professor | What do we call this one?
34:12 | Professor | What do we call this one? What do we call this one? Let me tell you, this one is nameless. Nobody cared about it. Therefore, it didn't have a name. Well, Liana, do you want to tell us what do we call? What's the most interesting one? What do we call this one?
34:34 | Uliana Zavalova | I believe that would be the prior. Priors.
34:38 | Professor | Yeah. This one is the prior probability. It's just because without any, this is when I said I met Artem and I said, are you from Ukraine? Without any evidence. That's my priors. Then Maya, what is this one?
34:58 | Maya Naizabayeva | It's the posterior probability.
35:06 | Professor | The posterior, I think it's a Roman word, right? Posterior is a post-pre, right? The hypothesis is after you're now faced with evidence and some data. Then, Rolens, what is this one then?
35:28 | Rolands (he/him) Barkans | I don't know.
35:31 | Professor | That's a tricky one that most people don't know. Marina, do you know?
35:37 | Marina Levay | It's the likelihood. The likelihood that the evidence will happen given that there is a world where your hypothesis is true.
35:45 | Professor | Exactly. People call it likelihood. Therefore, we identified all these components, except again this one. This one doesn't have a name. It's also the one that gives us trouble. This is the one that usually in most problems we don't know what it is. We don't know the value of it.
36:10 | Professor | Let me write this one more time. This is useful. Just going over this 10 times does help. I'm going to write it one more time. I'm going to ask Maria this time to tell me. Actually, Fortune, can you tell me the base theorem one more time based on... Actually, let's just write it now instead of A and B.
36:41 | Professor | No, actually it's more interesting. Just keep writing in terms of hypothesis. Probability of hypothesis given data. Guess what?
36:56 | Fortune Declan | Probability of data given hypothesis times the probability of data.
37:07 | Fortune Declan | Oh, that's right. Sorry.
37:13 | Fortune Declan | No, wait.
37:14 | Professor | That's not... That's hypothesis.
37:19 | Professor | Then divide the probability of data. That's why it's important because both of us were making mistakes. It's good to go over this. This one, as I said, is a trouble. This one is hard to calculate. There's two ways that we can deal with it. One is that we could say that if you're talking about this hypothesis A, specifically we're saying what is the chance that given the evidence, hypothesis A rules this world. Hypothesis A explains this world we're talking about. Then we can write P data in terms of the total products. What was it called? Do you remember? Do you want to tell me and expand this for me?
38:07 | Professor | How do I write this P of data in terms of expanding it into multiple hypothesis?
38:21 | Professor | Anybody?
38:27 | Professor | Yeah, that's it.
38:30 | Ransith Weerasinghe | I'm not 100% sure, but if we have multiple hypothesis, maybe we could say that if we have data given hypothesis A plus P of data given hypothesis A. Basically, this top part, we're going to repeat that.
38:43 | Professor | Data given hypothesis A and multiplied by probability of hypothesis A plus then...
38:57 | Ransith Weerasinghe | Yeah, probability of data given hypothesis B times probability of hypothesis B and so on. Like, for a given number of... Exactly. We could redo it as many times as we have to.
39:12 | Professor | And this is under an assumption that all these A's, like let's say there's four of them, A1, A2, A3, A4, together they make up S, the sample space, and they're also disjoint. They don't overlap. Like you can't have A1 and A2 overlapping with each other. So if that's the case, then we can break down data like this denominator into this. So like, for example, if you only have two hypothesis, so if your whole sample space is A, A1 and A2, or we call it A and A what?
39:55 | Professor | Jump in and say it.
39:58 | Marina Levay | Compliment.
39:59 | Professor | Compliment, exactly. So then I can write this P of data as P data given A probability of A plus probability of data given A compliment probability of A compliment. So then my problem is solved. I know this, I know this, I know usually, I know this, I usually know this, and we can solve this one. I don't think this was in the reading. This is what I'm just about to say, but this is another way of solving that problem. This, that this is hard to calculate. I'm going to write it another call. These are important, but it's, you know, just needs to give it some time or settle in your mind. So we said that probability of hypothesis A given data is probability of data. Given hypothesis A, one more time, probability of hypothesis A divided by probability of data. Another way of getting rid of this is if I introduce another alternative hypothesis. I want to say what is the chance that probability of hypothesis A is true as opposed to hypothesis P being true, given the same data, given the same evidence. So I basically just divide this whole thing by probability of data given B. I'm going to say hypothesis B, probability of hypothesis B divided by probability of data. And this data, this is the cancel. Here I'm just saying the relative importance. So for example, if I find things are getting a little bit, I think, more challenging, but oh no, what did you do? You did something.
42:05 | Professor | OK, so now I'm just going to wrap up with this. So in the last example, when you get the relative probability, what if you get this? Probability of hypothesis A given the evidence you got over probability of hypothesis. I'm writing on top, by the way. B given data you got. What if you find it to be 1.5? What does it tell you?
42:43 | Professor | What do you deduct from this? So let's say again that this usually in this approach of using Bayes' theorem, you're not going to find this exact number for example probability of hypothesis A given data. You're going to get a relative ratio of hypothesis A versus a competing hypothesis. And in this case, A and B don't have to be complement of each other. They can, you know, A could be like, you know, something and B could be something and there could be a C, but we don't care about it. So let's go to Maria. What does it tell you? 1.5.
43:16 | Maria Dumitrescu | That the first probability is 1.5 more likely. Exactly. To the other one.
43:26 | Professor | Exactly. It's 50% more likely. It's 1.5 the other probability. So this one, if you only care about which model is better, which model is given the data, which model explains this world you're thinking about. Then this is enough for you. You just say that A, I'm going to favor A as opposed to B. Like an example would be probability of
43:56 | Professor | Maya.
44:00 | Professor | I'm not asking you. Majoring in Arts and Humanities. Oh, no. By the way, my majoring in Arts and Humanities, given the data that I've noticed about her, given the evidence I have, relative to probability of her majoring in natural sciences, given the evidence I've had. If it's like 0.5, then it's more, I have more evidence in terms of Wait, it is 0.5.
44:29 | Professor | Which one would it be? So it would be like, yeah, I have more evidence in favor of her majoring in NS than her majoring in Arts and Humanities.
44:41 | Professor | So I don't know exactly the chances that she's going to major in Arts and Humanities or in natural sciences, but I know comparatively which one is more likely to happen. Anyway, so that's good. Let's have a quick eye-wrestle and come back and continue with the breakout.
45:10 | Professor | Okay.
45:56 | Professor | All right.
46:03 | Professor | Let's come back. This is probably like one of the classes that I've talked the most in the class, but I think this is quite important.
46:13 | Professor | So maybe before we go to breakout, is there any questions that we should address before? It's a good time to talk about your questions.
46:25 | Professor | Yes, Ron.
46:27 | Rolands (he/him) Barkans | So we just talked about the probabilities, like one over the other, like what is more likely. Is this something that relates to odds or is that something else? Yeah, yeah, I actually should have talked about it, but probability of A given evidence, which is we wrote it as, you know, an over probability of, let's say, you know, A1, A2 given same evidence.
46:58 | Professor | We wrote it as probability of evidence given A1, probability of A1 divided by probability of evidence given A2, probability of A2. So we call this, I want to ask you actually, if anybody knows. Now we have names for all of these related to the previous names, but slightly different. Anybody?
47:30 | Professor | What did we call this time before, Alexia?
47:37 | Alexia Moreanu | The prior?
47:39 | Professor | Prior. So now we call them prior ratio. So with that same logic, Nii, what do you think this is called?
47:51 | Nhi Pham Le Tinh | I don't remember the name. It was...
48:00 | Nhi Pham Le Tinh | Posterior. Posterior ratio. Posterior ratio, yeah. And then this one, Nii, what would this one be then?
48:09 | Noriaki Kishida | Likelihood ratio.
48:11 | Professor | Exactly. Roland, I'm glad that you brought this up. In that, in this context, we call them ratios because now they're ratios. This is technically called an odds ratio because if it's about, if A1, if A2 is A1 complement, like basically talking about an event and its complements, then it's called an odds ratio.
48:41 | Professor | Okay, let's get started. I'm going to say to break out. First question, part A and B. Just get that one done. If you have more time, you can continue to the next question. But in the next seven, eight minutes, just focus on the first question, part A and B. And see you, Roland.
... The transcript continues with many blank or irrelevant entries which have been omitted for clarity. The analysis will be based on the provided text up to this point and through the final relevant entry. ...
83:02 | Professor | All right. Welcome back. I think I just spent some time on going over this together. That's why I could have added a little bit more time to. The breakout, but I think we can do it better as a class. So. One group, I think, got it, but I'm not sure if more than one got it. Okay. So let's write down the information. We know that. It was. You know, let's just write the notation. Seven heads. I want to write. Use this as, you know, notation. Meaning that probability. Of. Getting.
83:44 | Professor | Seven. Heads.
83:48 | Professor | Okay. Then I want to use D as. The probability of.
83:58 | Professor | Having.
84:01 | Professor | The double headed.
84:05 | Professor | Coin. In the hat.
84:09 | Professor | I'm going to set the stage. So that we're all clear on the notation and then. You let's say is the probability of. Unfair coin. So I'm just going to say actually, you know. So. Fair and unfair. So probability of having.
84:29 | Professor | Of. Of picking. A fair coin. And this one is basically the same thing for. Unfair coin. All right. So I want to ask you in order. So we are interested in probability of D. Having. Seven heads. What's the fair step? How do we write the base. Rule. Well.
84:59 | Uliana Zavalova | We need to calculate the probability of seven heads. Given. D. I mean, double sided. Slide by the probability of getting double sided coin. And divided by the probability of having seven heads in a row.
85:13 | Professor | Exactly. And if I want to write this as expand as you know. The. The loft to a probability. Then how do I write this? I want to start it by writing this so that you don't have to say it again. But plus what.
85:29 | Professor | Maybe we'll go to Alexia.
85:41 | Alexia Moreanu | Yeah. So plus the probability of. Getting seven heads.
85:49 | Alexia Moreanu | Given the compliment of. Times probability of the compliment.
85:57 | Professor | Exactly. Very good. Out of these for now. So this is good. We just need to add a couple of things. This is a big, this is a very good start. Out of these. We know this one. This is the only thing. This is the only piece of evidence that is given to us. The nori. Do you remember what that one is? Probability of D and the question was given as what.
86:21 | Noriaki Kishida | I should say that. One over two. One over two.
86:24 | Professor | Exactly. So we have this is one over two. You know, this is one or two. And how many other things that we need to calculate? Basically two things because these two are. The same. And then this one. We need to calculate this one. Oh, and then by the way, what is this one?
86:41 | Nhi Pham Le Tinh | The green. Which one?
86:47 | Professor | Probability of. Not getting, not having D. For the compliment.
87:10 | Maya Naizabayeva | And Maya.
87:11 | Professor | One over two. Exactly. Which is basically what you did in your mind was that one minus one over two, which is one over two. Because this is a compliment of this one. So then we need to calculate two things. We need to calculate probability of seven head given D. And probability of seven head. Given. Not D. So how do we calculate this? Any ideas? I need volunteers. This is getting, this is the little harder part. But Maria, what do you say?
87:46 | Maria Dumitrescu | Well, the first one intuitively is one because like if we have a double-sided coin, there's no way we would get anything but that.
87:54 | Professor | Oh, I see. So your confusion is this. You're thinking that this, you're answering this one.
88:01 | Maria Dumitrescu | Oh, I see, I see, I see.
88:03 | Professor | Yeah. So we need to do a little bit, some steps in between. And Ransit, do you want to tell me the first one, like at least breaking it down?
88:14 | Ransith Weerasinghe | Yes. So we have to consider two possibilities. First possibility is like we get the fair coin and then the probability of getting seven heads. Yeah. So what's the first one? I'd write it as probability of seven head given what? Given fair coin. Okay. And then plus something else. Probability of, oh wait, that timeshown is a fair. Times probability of fair given D.
88:50 | Professor | And then plus probability of seven head given unfair or fair compliment times probability of unfair given D.
89:10 | Professor | This is just breaking down this probability with an additional information, which is that fair or unfair. So basically, you know how like in the Bayesian probability you have two branches, you have fair and unfair here. And so you basically calculate, multiply this probability by this probability and then this probability by this probability. This is what basically we're doing. And then this one is very simple, basically like similar to that. So I'm going to ask any volunteer to tell me what this one is, similar to this.
89:42 | Professor | Raise your hand. Good. Carolina.
89:50 | Karolina K dzia | It would be one over two to the power of seven.
89:54 | Professor | Can you just break down this component similar to this?
90:01 | Karolina K dzia | Now we're talking about this.
90:07 | Karolina K dzia | So B from seven H.
90:12 | Professor | Given as fair and then probability of fair given that now it just we replace D with D compliment. So I'm going to just write down the entire thing. Every time I see an D, I just write a D compliment. So this and we're kind of at time, but I'll spend like two minutes. If you can stay, I'll spend some time quickly. We have now everything we need. So I'm just going to bring in a new caller. So I'm going to now ask you, what is this one? Back to back to Maria. Maria, what is this one? I think you were kind of answering this one.
90:55 | Maria Dumitrescu | That's one.
(cont.) | Professor | That's one. Therefore, what is that this one? Zero. Zero. If the if the coin is not. No, wait, it's not zero. Right. If the coin is not fair, it's going to be one over two to the power of seven. Oh, yeah. Right. OK. Maya, what is this one?
91:22 | Maya Naizabayeva | Which one? The promoter F given D.
91:30 | Maya Naizabayeva | I think it's we're picking a fair coin, given that there was that little coin that has doubled it.
91:42 | Maya Naizabayeva | Maybe that's Maria. One over.
91:45 | Professor | Yeah, exactly. Exactly. And then this one, Marina.
91:53 | Marina Levay | I was just I was going to point out something in the first time, because if we're giving a fair coin, isn't it flipped for the probability of seven has given a fair coin? We have one over. Oh, yeah. Oh, sorry.
92:04 | Professor | This is fair. And so this is one to this one. Right.
92:10 | Professor | Yes. Then this one would be. If the coin is not fair, then this one's going to be one. Right. Yeah. Thanks for pointing out. So then who wants to tell me what is this one?
92:30 | Professor | Yeah, Pedro.
92:32 | Pedro Goncalves de Paiva | One divided by 100.
92:34 | Professor | One divided by 100.
92:38 | Professor | And yeah, anybody who has to leave, please go ahead and leave. You can watch the video. So let's just go over this one. What is this one? Hands.
92:53 | Professor | Probability of having seven heads, given that the coin is fair. We actually calculated it. So this one is basically one to seven. And then we already have this one, too, is one. So basically, we only have to answer this two. So two volunteers tell me what these are. So this one is a zero. Probability of having a fair coin, given that there wasn't any. Double headed coin in there.
93:21 | Artem Zhuravel | One.
93:22 | Professor | One. Exactly. Because basically they're saying that there's no unfair coin in there. And therefore this would be what? Probability of not have. Not having a fair coin, given that there was. Not any. Unfair coin. And then, Ruliana?
93:37 | Uliana Zavalova | Zero.
(cont.) | Professor | Exactly. Zero. So then you plug in all these numbers. Basically, you're going to have like one over two to the power of seven times 99 divided by 100 plus one times one over 100. And then you add the this term. So you multiply this whole thing by PD. One over two. And then you multiply it 1.02 by this whole thing. Then it's going to be one over two to the power of seven times one plus one times zero. And this is going to give you the denominator and the numerator. We can calculate that. So it's a little complicated, but when you break it down, it's actually just a bunch of information that's given to you in the question. So I think the trick here is to understand how we can go from this and break it down to these two terms. All right. I'm going to stay here in the class for maybe another 10, 15 minutes. If you have questions, otherwise, I'll see you next week. Take care. Thank you. Thank you. Thanks. Thank you, Professor. Bye bye. Thanks, Prof. Bye bye. Thank you. Bye bye.
`;
