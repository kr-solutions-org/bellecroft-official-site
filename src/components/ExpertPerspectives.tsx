import React, { useEffect, useState } from 'react';

type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

type Article = {
  id: number;
  title: string;
  image: string;
  meta: string;
  category: string;
  excerpt: string;
  author: string;
  content: ArticleSection[];
};

const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Attending the AI Awareness Session for Businesses',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200',
    meta: 'ARTICLE • 5 MIN READ',
    category: 'AI & Strategy',
    excerpt: 'The session opened with the basics: what AI actually is, in plain terms, software that can perform tasks we would normally think need a human.',
    author: 'Bellecroft',
    content: [
      {
        heading: 'A practical introduction to AI',
        paragraphs: [
          'On 18 July 2026, I attended the AI Awareness Session for Businesses, hosted by the Maldives Business Chamber at Mookai Hotel. The three-hour session brought together Maldivian business owners and staff to explore what AI can realistically do for a business today, without the hype that so often surrounds the topic.',
          'The session opened with the basics: what AI actually is, in plain terms, software that can perform tasks we would normally think need a human, such as understanding, learning, and reasoning. From there, it moved into busting some of the more persistent myths, the biggest being the fear that AI is coming for people’s jobs. The reality offered was far more useful: AI replaces tasks, not people, a distinction that matters a great deal when deciding where AI actually fits into day-to-day work.'
        ]
      },
      {
        heading: 'Tools, frameworks and realistic adoption',
        paragraphs: [
          'A large part of the session focused on practical tools rather than abstract ideas. We were introduced to the PTCF prompting framework, a simple structure built around Persona, Task, Context, and Format, designed to get better, more usable results out of any AI tool. Alongside it came the Crawl, Walk, Run approach to adoption: get familiar first, build confidence next, and only then scale up. It is a sensible, unhurried way to think about a technology that is so often sold as an instant fix.',
          'The session also walked through a curated toolkit organised by everyday business needs, covering research, data analysis, transcription, note-taking, and mind mapping, along with a reminder to cross-check answers across a few tools before trusting them fully, and never to lean on AI alone for something you do not already understand yourself.'
        ]
      },
      {
        heading: 'Why this matters',
        paragraphs: [
          'It was a genuinely useful, well-grounded session, and a good reminder that AI works best when it supports good judgement rather than replacing it. Glad to have been part of the room, and grateful to the Maldives Business Chamber for putting together such a practical, no-nonsense introduction to a topic that affects every business, regardless of size or sector.'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'The Journey to Bellecroft: Twenty-One Years in the Making',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200',
    meta: 'ARTICLE • 7 MIN READ',
    category: 'Leadership',
    excerpt: 'Some people plan their careers on a whiteboard. I built mine by saying yes to almost everything and figuring out the rest later.',
    author: 'Bellecroft',
    content: [
      {
        heading: 'Where It All Started',
        paragraphs: [
          'Some people plan their careers on a whiteboard. I built mine by saying yes to almost everything and figuring out the rest later. Twenty-one years, a handful of very different industries, and one very stubborn belief that I could do the boardroom and the ballroom in the same week. Turns out, I could. And it made me exactly the right person to build Bellecroft.',
          'I began my career in aviation, in an industry with zero tolerance for error. Precision and attention to detail have always been part of who I am. I was simply born that way. But those early years sharpened that instinct into something far more deliberate, and taught me a lesson I have never forgotten: in high-stakes environments, the smallest details are rarely small.',
          'I was never content to only do the technical side well, though. I found my way into organising staff events and keeping people connected outside of the day-to-day. Somewhere in there, I learned that even the most regulation-heavy environments need a bit of joy built into them. People do not run on compliance alone.',
          'Looking back, that was probably the first sign that I was never going to be the kind of professional who stays neatly in one lane.'
        ]
      },
      {
        heading: 'Where Governance Got Serious, and So Did I',
        paragraphs: [
          'From there, I moved into telecommunications, into a role that put me close to boardroom decisions, shareholders, and the kind of transparency that comes with real accountability. Nothing teaches you the weight of good governance quite like standing behind decisions that affect people who have placed real trust in an organisation.',
          'What I am genuinely proud of from that chapter is a little less official. I found myself regularly pulled into creative conversations that were not technically part of my role, simply because people valued what I brought to the table. That experience taught me something I still believe: being taken seriously and being creative are not opposites.'
        ]
      },
      {
        heading: 'The Freelance Years',
        paragraphs: [
          'Then, for four and a half years, I stepped off the corporate ladder entirely and went freelance. It was the most unpredictable, most educational stretch of my career, and I would not trade it for anything.',
          'I wrote content for hospitality and lifestyle brands, coached teams on communication and confidence, designed strategic plans and brand materials, and said yes to almost anything creative that came my way. Every brand has its own voice, every industry has its own language, and every reader deserves to feel spoken to rather than spoken at. That lesson changed how I communicate to this day, whether I am drafting a training module, a board paper, or an article like this one.',
          'Freelancing forces a kind of honesty about your own value. Nobody hires you out of loyalty. They hire you because the work is good. That lesson never left me.'
        ]
      },
      {
        heading: 'Back Into the Fold, Wiser This Time',
        paragraphs: [
          'Eventually, I returned to more structured work in governance and public service, while continuing to study, teach, and take on more than most people would consider sensible at once. It was a season of advising, governing, teaching, and still somehow finding time to write. Today, I continue to shape training and professional development for others, work that feels like the natural continuation of everything before it.'
        ]
      },
      {
        heading: 'A Parallel Life, Built by Hand',
        paragraphs: [
          'While all of this corporate and professional ambition was unfolding, there was always another version of me at work. The one with glue on her fingers, ribbon between her teeth, and a sketch of an idea she simply had to bring to life.',
          'That side of me first found a name when I started a small venture hand-making party and wedding décor, each piece built around a unique concept rather than pulled off a shelf. For over a decade, alongside every corporate role I held, I kept creating. In between, I also ran a small boutique selling fashion jewellery and accessories, because clearly one side hustle was never going to be enough for me.',
          'Then came the lockdown years. Like most of the world, I found myself with far too much energy and nowhere to put it. That restlessness became a bigger, bolder evolution of what I had started years earlier, this time focused entirely on full event and celebration design.',
          'None of these ventures were a distraction from my career. They were the part of me that refused to sit still, showing up in a different outfit each time.'
        ]
      },
      {
        heading: 'The Thread That Connects It All',
        paragraphs: [
          'Across every industry, every boardroom, every classroom, and yes, more than one beautifully decorated event, one thing has stayed constant. Organisations only thrive when the people inside them are equipped, empowered, and genuinely brought along for the journey.',
          'I have watched brilliant strategies collapse because nobody trained the people meant to carry them out. I have watched strong structures crumble, not from bad intentions, but from a lack of capability-building. And I have watched a single well-timed piece of coaching completely shift the direction of a team.',
          'That conviction, equal parts discipline and heart, is what became Bellecroft.'
        ]
      },
      {
        heading: 'A Personal Mission',
        paragraphs: [
          'Beyond the credentials and the career milestones, Bellecroft is personal to me. I believe in lifelong learning, in ethical leadership, and in the idea that helping someone build capability is one of the most generous things a professional can do for another. That same instinct has always carried me well beyond any single job title.',
          'Twenty-one years of varied, occasionally chaotic, always interesting experience taught me that the most meaningful work rarely follows a straight line. It is a body of experience, quietly gathering purpose, until the moment it is ready to become something of its own.',
          'That moment, for me, was Bellecroft.'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'The Story Behind Bellecroft: Building Capability with Purpose',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200',
    meta: 'ARTICLE • 6 MIN READ',
    category: 'Purpose',
    excerpt: 'Strategy is easy to talk about and genuinely hard to live out. Bellecroft exists because that gap frustrated me for years.',
    author: 'Bellecroft',
    content: [
      {
        heading: 'The gap Bellecroft exists to close',
        paragraphs: [
          'Here is a truth nobody puts on a motivational poster: strategy is easy to talk about and genuinely hard to live out. Plenty of organisations have a beautiful five-year plan sitting in a drawer somewhere, gathering dust, while the people meant to execute it were never actually equipped to do so. Bellecroft exists because that gap frustrated me for years, and I finally decided to do something about it.',
          'Organisations thrive when people, strategy, and purpose actually work together, not just sit next to each other in a mission statement. That is the belief Bellecroft was built on.',
          'In today’s fast-moving environment, organisations do not just need advice. They need a partner who understands both the boardroom conversation and the reality of Monday morning, when someone still has to actually implement the plan. Too often, businesses receive strategic guidance with no practical tools to carry it out, or training that never quite connects back to the bigger picture. Bellecroft was founded to close that gap, properly, not with another glossy framework nobody uses.'
        ]
      },
      {
        heading: 'Capability is built through people',
        paragraphs: [
          'Behind Bellecroft is over twenty-one years of cross-sector experience across aviation, telecommunications, public service, the legal profession, and higher education, plus a few years of freelance hustle thrown in for good measure. That mix taught me something I now build every part of Bellecroft around: real capability is not built through good strategy alone. It is built through the people who are trusted, trained, and genuinely brought along to carry it out.',
          'A well-run board, a well-trained team, and a well-guided leader can change the entire trajectory of an organisation, and I have seen it happen enough times to bet a company on it.'
        ]
      },
      {
        heading: 'Why Bellecroft was founded',
        paragraphs: [
          'Through strategic advisory, corporate training, executive development, and organisational development, Bellecroft helps organisations strengthen capability, sharpen performance, and build growth that actually holds up under pressure. Rooted in the Maldives and shaped by international best practice, we work across legal and professional services, financial institutions, educational bodies, the public sector, and the hospitality and tourism industry that carries so much of our nation’s story on its back.',
          'Every service we offer traces back to something lived, not just studied. Governance expertise built inside real boardrooms. Legal precision earned the hard way. A genuine, slightly relentless passion for coaching and mentoring that has followed me from one industry to the next.',
          'In strategic partnership with StrEdge Advisory, and supported by a trusted network of consultants and subject-matter experts, Bellecroft is built to walk alongside organisations at every stage of their growth, turning complexity into clarity and ambition into something that actually happens.',
          'This is where strategic thinking meets practical implementation. This is where service meets sophistication. This is Bellecroft.'
        ]
      }
    ]
  }
];

const ArticleCard = ({ item, onOpen }: { item: Article; onOpen: (article: Article) => void }) => (
  <button
    type="button"
    onClick={() => onOpen(item)}
    className="group relative w-full overflow-hidden rounded-[28px] min-h-[420px] text-left shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,0,0,0.14)]"
  >
    <img
      src={item.image}
      alt={item.title}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
      <span className="mb-3 inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
        {item.meta}
      </span>
      <h3 className="text-2xl font-bold leading-tight text-white md:text-[2rem]">
        {item.title}
      </h3>
    </div>
  </button>
);

const ExpertPerspectives: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (!selectedArticle) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedArticle(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedArticle]);

  return (
    <section className="relative w-full bg-[#F9FAFB] py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#E6A2A9]">
              Insights
            </p>
            <h2 className="text-3xl font-black tracking-tight text-[#333333] md:text-4xl lg:text-5xl">
              Expert Perspectives
            </h2>
          </div>
          <p className="max-w-xl text-sm text-gray-600 md:text-base">
            Strategic wisdom and operational guidance from our senior partners.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.id} item={article} onOpen={setSelectedArticle} />
          ))}
        </div>
      </div>

      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[28px] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close article"
              onClick={() => setSelectedArticle(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-[#333333] shadow-lg transition-opacity hover:opacity-80"
            >
              ×
            </button>

            <div className="max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 w-full overflow-hidden md:h-80">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">
                  <span className="rounded-full bg-[#F4C8CC] px-3 py-1 text-[#333333]">{selectedArticle.category}</span>
                  <span>{selectedArticle.meta}</span>
                </div>

                <h3 className="mb-3 text-2xl font-black leading-tight text-[#333333] md:text-4xl">
                  {selectedArticle.title}
                </h3>

                <p className="mb-6 text-base font-medium text-[#555555] md:text-lg">
                  {selectedArticle.excerpt}
                </p>

                <div className="mb-6 flex items-center gap-3 text-sm text-[#666666]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E6A2A9] font-bold text-white">
                    {selectedArticle.author.charAt(0)}
                  </span>
                  <span>By {selectedArticle.author}</span>
                </div>

                <div className="space-y-6 text-base leading-7 text-[#444444]">
                  {selectedArticle.content.map((section, index) => (
                    <div key={`${selectedArticle.id}-${section.heading ?? index}`} className="space-y-3">
                      {section.heading && (
                        <h4 className="text-xl font-black text-[#333333] md:text-2xl">
                          {section.heading}
                        </h4>
                      )}

                      {section.paragraphs.map((paragraph) => (
                        <p key={`${selectedArticle.id}-${paragraph}`} className="text-base leading-8 text-[#444444]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExpertPerspectives;
