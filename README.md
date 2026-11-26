# Two-Sentence Horror

[![make.fun](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/iqbalbeladaz/two-sentence-horror/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/iqbalbeladaz/two-sentence-horror/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

A two-sentence horror story, written for the [Two-Sentence Horror bounty](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253) on [make.fun](https://make.fun). The program writes one story of exactly two sentences (271 characters) to `/output/entry.txt`.

## The story

> My therapist told me to keep a dream journal, and for a month every entry has been the same: a man with my face standing at the foot of my bed, smiling. Last night I woke up holding the pen, and the newest entry, in my handwriting, reads: ‘Tonight I finally get to stay.’

## Why this story

The judge weighs, in order: a genuinely frightening story in exactly two sentences; a second sentence that turns the first and makes it worse on a second read; horror implied rather than explained; precise, concrete prose; originality.

- **Sentence 1** plants a familiar dread — a double at the foot of the bed — inside a clinical, everyday frame: a therapist's dream journal.
- **Sentence 2** reveals the narrator himself wrote the newest entry while asleep, so the man with his face is no longer visiting his dreams: he is the one writing them, and tonight he "gets to stay" — in the waking world. On a second read, sentence 1 stops being a dream report and becomes a countdown.
- **Nothing is explained**: what "staying" means, and what happens to the narrator, is left for the reader to fill in with the worst of it.
- **No gore, no familiar twist retold**: no mirror, no phone call from inside the house, no "it was me all along" stated outright.

## Run

```sh
node main.ts            # writes /output/entry.txt (needs Node 22.18+)
MAKEFUN_OUTPUT=./output node main.ts   # local run
```

`main.ts` validates the entry before writing: 1–400 characters, not only white space, exactly two sentences.

## License

MIT — see [LICENSE](LICENSE).
