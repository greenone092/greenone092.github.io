---
layout: page
title:  "Misconceptions on error correction in coding theory"
date:   2020-08-16 20:43:00 +0800
---

In this post, I want to talk about some of the stuff I wish I had known about error corerection when I first began learning it in coding theory. I'm going to talk about error correction with linear or cyclic codes in mind. (The codes that are used in QR codes, DVDs, etc)


# Premise of this disucussion.

It's very important that we are discussing about coding theory with QR codes, DVDs or other forms of static information in mind. In these cases, it's impossible to ask the author to verify the message. It's unlike sending messages over the internet, where you could ask the sender to resend their messages should any errors be deteced. As such, even if we detect an error, we still have to figure out a way to correct it to the best of our abilities. 

Hence, during error correction, every possible encoded messages that we recieve, no matter how "error-prone" they may seem on inspection, will be "decoded" to some original message which has the highest probability of giving the encoded message. It's pointless for the algorithm to be able to detect errors but not correct it. 

# You can correct errors on everything using coding theory

You can't. Coding theory isn't about getting something totally unexpected, then trying to figure out it's pattern and then by using various methods and somehow recover the lost information. To put it simply, Coding theorists aren't really like data recovery shops, where you could present anything to them and they could recover it. Coding theorists mainly deal with small and expected losses in data. Coding theorists design around these predictable constraints and creates a time-efficient / automated way of dealing with them.

# There's no cost to error correction

If you want to correct something, you need to add something more, called parity bits, to the message you are sending (i.e. enlarging the message). In fact, there are a bunch of constraints on how efficient / costly your error correcting algorithm could be, so there's pratically always a lower / upper bound of "cost" for any error-correcting code that you are evisioning.

# What makes a good error correcting code?

It's very important to remember that the ultimate goal is to deal with small and expected losses in data. Even if your code could correct errors of all sizes 90% of the time, it's still a bad algorithm in coding theorists' eyes due to its inconsistency. What coding theory is trying to achieve is to eliminate ALL tiny errors under a specific size. What the algorithm does to encoded messages with errors larger than the specified limit is completely ignored. 

There's a bunch more stuff I wish I could've mentioned, however to have any further discussion I will basically have to talk about coding theory mathematically, and I believe that is best left for actual books.
