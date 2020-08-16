---
layout: page
title:  "Misconceptions on error correction in coding theory - Part 1"
date:   2020-08-16 20:43:00 +0800
published: true
---

_This is an unfinished series_ 

In this series, we are going to discuss some of the stuff I wish I had known when  I started learning coding theory. I think it's very easy in mathematics to get lost in the notations and definitions early on, and end up forming some major misconceptions. In Part 1, we will use a simple example.

I recommend you to read this post after you've finished your first chapter in coding theory. I've stripped down most of the jargon (i.e. Hamming distance) in order to express my points as concisely as possible, whilst keeping the content logically self-contained.

## The triple repetition code

Let $$M$$ be the set of all possible messages you would like to send through a digital channel. For example, let's assume you'd like to send 0 or 1 (a bit) through the channel. Then $$M = \{0, 1\} = Z_2$$ [^Z_2]

Sadly, the channel is noisy and could sometimes flip the bits that you are sending. To remedy this, you decide to repeat every bit by 3 times. In essence, you are creating an injective projection $$C$$, 

$$ C : M \rightarrow Z_2^3 $$

where

$$ 
\begin{aligned} 
C : &\{0\} \rightarrow \{0, 0, 0\} \\ 
&\{1\} \rightarrow \{1, 1, 1\} 
\end{aligned}
$$

$$C$$ is called the **encoding function** . 

Let's say some $$m$$ in $$M$$ went through the channel, and the reciever recieved $$C(m) + e$$ where e is some error. Now we need a surjective **decoding function** $$D$$ where 

$$ D : Z_2^3 \rightarrow M$$

Obviously, it would be nice if $$D$$ could project all $$C(m) + e$$ to $$m$$ accurately. However in reality things are not so nice. For this case, the best decoding function is the one which decodes to a bit if that bit appears more often in $$C(m) + e$$, i.e.

$$ 
\begin{aligned} 
D : &\{0, 0, 0\}, \{1, 0, 0\}, \{0, 1, 0\}, \{0, 1, 1\} \rightarrow \{0\} \\ 
&\{1, 1, 1\}, \{1, 1, 0\}, \{0, 1, 1\}, \{1, 0, 1\} \rightarrow \{1\}  
\end{aligned}
$$

It could be seen that $$ D(C(m)+e)) = m$$ if and only if the number of non-zero bits in $$e$$ is smaller or equal to 1. Hence we call this code to be 1-error correcting.

Also note that some **errors can go undetected**. As if $$e = \{1, 1, 1\} $$, $$C(m) + e$$ will be equal to either $$\{0, 0, 0\}$$ or $$\{1, 1, 1\}$$ and no errors will be detected. Hence, $$e$$ could only have a maximum of 2 non-zero bits. As such, we call this code 2-error detecting.

After this rundown, there are a few details that needs to be stressed.

# The decoding function is surjective

In essence, no matter how error-prone the received code might seem to be, the decoding function will still try to find the most probable code that could've possibly generataed the received code. You may wonder that in more complicated codes, it's very likely the decoded message is wrong, why do we still bother decoding it even though the chances are so low? The reason is that it might not be possible to ask for any form of external verification. Say that you are trying to play a DVD or read a QR code offline. At that moment, you wouldn't be able to immediatedly ask the original author for verification, all you could do is to decode it to the best of your abilities and take the chance.

# You can correct an error wrongly

This is a consequence of the decoding function being surjective. For example, if $$\{1, 0, 1\}$$ is received, while the decoding function would think that $$C(m) = \{1, 1, 1\}, m = \{1\},  e = \{0, 1, 0\}$$, it's entirely possible that $$C(m) = \{0, 0, 0\}, m = \{0\},  e = \{1, 0, 1\} $$. It's just less likely that that is the case.

You could also observe this phenonmon when $$e = \{1, 1, 1\}$$ as mentioned earlier.


[^Z_2]: It could also be written as $$Z/2$$ or $$GF(2)$$. Remember that $$1 + 1 = 0$$. Here's the wikipedia page about this [field](https://en.wikipedia.org/wiki/GF(2)).

